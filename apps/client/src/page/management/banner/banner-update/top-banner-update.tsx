import Card from 'ui/src/card/card';
import CardContent from 'ui/src/card/card-content';
import FormItem from 'ui/src/form/form-item';
import FormLayout from 'ui/src/form/form-layout';
import TextInput from 'ui/src/form/input/text-input';
import ToggleInput from 'ui/src/form/input/toggle-input';
import CardFooter from 'ui/src/card/card-footer';
import SecondaryButton from 'ui/src/button/secondary-button';
import PrimaryButton from 'ui/src/button/primary-button';
import CardHeader from 'ui/src/card/card-header';
import { useNavigate, useParams } from 'react-router-dom';
import { TimeRuleType, ContentType } from '@client/graphql/types/graphql';
import useFormData from '@client/module/utils/use-form-data';
import MenuSelectionInput from 'ui/src/form/input/menu-selection-input';
import { useEffect, useState } from 'react';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error';

import useBannerUpdate from './logic/use-banner-update';
import useBanner from './logic/use-banner';

interface TopBannerForm {
  title: string;
  enabled: boolean;
  contentType: ContentType;
  text: string;
  timeRuleType: TimeRuleType;
  start: string;
  end: string;
}

export default function TopBannerUpdate() {
  const navigate = useNavigate();
  const bannerId = useParams().bannerId ?? '';
  const [update, { loading, error: updateError }] = useBannerUpdate();
  const { data, error: loadingError } = useBanner(bannerId);
  const [timeRuleInp, setTimeRuleInp] = useState<TimeRuleType>(
    TimeRuleType.Always
  );

  const {
    data: form,
    handle,
    manualHandle,
    setData,
  } = useFormData<TopBannerForm>({
    title: '',
    enabled: false,
    contentType: ContentType.Top,
    text: '',
    timeRuleType: TimeRuleType.RangeTime,
    start: '',
    end: '',
  });

  const error = loadingError ?? updateError;
  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  useEffect(() => {
    setData({
      title: data?.banner.title ?? '',
      enabled: data?.banner.enabled ?? true,
      contentType: ContentType.Top,
      text:
        (data?.banner.content.__typename == 'TopContent'
          ? data.banner.content.text
          : '') ?? '',
      timeRuleType: data?.banner.timeRule.type ?? TimeRuleType.Always,
      start:
        (data?.banner.timeRule.__typename == 'RangeTimeRule'
          ? data.banner.timeRule.start
          : '') ?? '',
      end:
        (data?.banner.timeRule.__typename == 'RangeTimeRule'
          ? data.banner.timeRule.end
          : '') ?? '',
    });
    setTimeRuleInp(data?.banner.timeRule.type ?? TimeRuleType.Always);
  }, [data, setData]);

  const onSubmit = async () => {
    if (form.timeRuleType == TimeRuleType.RangeTime) {
      if (form.start > form.end) {
        return;
      }
      await update({
        variables: {
          bannerId: bannerId,
          input: {
            title: form.title,
            enabled: form.enabled,
          },
          timeRuleInput: {
            type: form.timeRuleType,
            start: form.start,
            end: form.end,
          },
          contentInput: {
            type: form.contentType,
            text: form.text,
          },
        },
      })
        .then(() => {
          navigate('../..');
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (form.timeRuleType == TimeRuleType.Always) {
      await update({
        variables: {
          bannerId: bannerId,
          input: {
            title: form.title,
            enabled: form.enabled,
          },
          timeRuleInput: {
            type: form.timeRuleType,
          },
          contentInput: {
            type: form.contentType,
            text: form.text,
          },
        },
      })
        .then(() => {
          navigate('../..');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Card>
      <CardHeader title={'Update banner'} />

      <CardContent>
        <FormLayout>
          <FormItem title={'Title'} className="max-w-md">
            <TextInput
              data-testid="title-input"
              type="text"
              label="title"
              name="title"
              placeholder="Title"
              value={form.title}
              error={validationError.title}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          <FormItem title={'Text'} className="max-w-md">
            <TextInput
              data-testid="text-input"
              type="text"
              label="text"
              name="text"
              placeholder="Text"
              value={form.text}
              error={validationError.text}
              autoComplete={'off'}
              onChange={handle}
            />
          </FormItem>

          <FormItem title={'Time rule type'} className="max-w-md">
            <div className="flex flex-col gap-4">
              <div className="">
                <MenuSelectionInput
                  title=""
                  data={Object.values(TimeRuleType)}
                  value={form.timeRuleType}
                  onChange={(newValue) => {
                    manualHandle('timeRuleType', newValue),
                      setTimeRuleInp(newValue);
                  }}
                  build={(item) => {
                    return {
                      id: item,
                      name: item,
                    };
                  }}
                  className="-my-2 w-full"
                />
              </div>
              {timeRuleInp == TimeRuleType.RangeTime && (
                <div>
                  <div className="max-w-full flex gap-2">
                    <input
                      className="rounded-md max-w-full border-gray-300"
                      aria-label="Start Date"
                      id="start"
                      name="start"
                      value={form.start}
                      type="datetime-local"
                      onChange={handle}
                    />

                    <input
                      className="rounded-md max-w-full border-gray-300"
                      aria-label="End Date"
                      id="end"
                      name="end"
                      value={form.end}
                      type="datetime-local"
                      onChange={handle}
                    />
                  </div>

                  <div>
                    {form.start >= form.end && (
                      <p
                        className="mt-2 text-xs italic text-red-600"
                        id="email-error"
                      >
                        {
                          'Choose startDate and endDate, startDate must be smaller than endDate'
                        }
                      </p>
                    )}
                  </div>
                </div>
              )}

              {timeRuleInp == TimeRuleType.Always && <div></div>}
            </div>
          </FormItem>

          <FormItem title="Active" className="w-32">
            <ToggleInput
              value={form.enabled}
              onChange={(newValue) => {
                manualHandle('enabled', newValue);
              }}
            />
          </FormItem>
        </FormLayout>
      </CardContent>

      <CardFooter>
        <div className="flex justify-center space-x-4 w-96">
          <SecondaryButton
            className="flex-1"
            onClick={() => {
              navigate('../..');
            }}
          >
            Back
          </SecondaryButton>
          <PrimaryButton
            id="create-button"
            data-testid="create-button"
            className="w-32 flex-1"
            onClick={async () => {
              await onSubmit();
            }}
            loading={loading}
          >
            Update
          </PrimaryButton>
        </div>
      </CardFooter>
    </Card>
  );
}
