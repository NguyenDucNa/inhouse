import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { TimeRuleType, ContentType } from '@client/graphql/types/graphql';
import useFormData from '@client/module/utils/use-form-data';
import MenuSelectionInput from 'ui/src/form/input/menu-selection-input';
import {
  formatGraphQlError,
  validationErrors,
} from '@client/module/error/error';
import useBannerCreate from './logic/use-banner-create';
import BannerImagesEdit from './component/banner-images-edit';

interface OverlayBannerForm {
  title: string;
  enabled: boolean;
  contentType: ContentType;
  image: string;
  timeRuleType: TimeRuleType;
  start: string;
  end: string;
}

export default function OverlayBannerCreate() {
  const navigate = useNavigate();
  const [create, { loading, error }] = useBannerCreate();
  const [timeRuleInp, setTimeRuleInp] = useState<TimeRuleType>(
    TimeRuleType.Always
  );

  const applicationErrors = formatGraphQlError(error?.graphQLErrors);
  const validationError = validationErrors(applicationErrors);

  const {
    data: form,
    handle,
    manualHandle,
  } = useFormData<OverlayBannerForm>({
    title: '',
    enabled: false,
    contentType: ContentType.Overlay,
    image: '',
    timeRuleType: TimeRuleType.Always,
    start: '',
    end: '',
  });

  const onSubmit = async () => {
    if (form.timeRuleType == TimeRuleType.RangeTime) {
      if (form.start > form.end) {
        return;
      }
      await create({
        variables: {
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
            image: form.image,
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
      await create({
        variables: {
          input: {
            title: form.title,
            enabled: form.enabled,
          },
          timeRuleInput: {
            type: form.timeRuleType,
          },
          contentInput: {
            type: form.contentType,
            image: form.image,
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
      <CardHeader title={'Create banner'} />

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

          <FormItem title={''} className="max-w-md">
            <BannerImagesEdit
              image={form.image}
              onChange={(newValue) => {
                manualHandle('image', newValue);
              }}
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
                <div className="">
                  <div className="max-w-full flex gap-2">
                    <input
                      className="rounded-md max-w-full border-gray-300"
                      aria-label="Start Date"
                      id="start"
                      name="start"
                      type="datetime-local"
                      onChange={handle}
                    />

                    <input
                      className="rounded-md max-w-full border-gray-300"
                      aria-label="End Date"
                      id="end"
                      name="end"
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
            Create
          </PrimaryButton>
        </div>
      </CardFooter>
    </Card>
  );
}
