import Card from 'ui/src/card/card';
import CardContent from 'ui/src/card/card-content';
import CardHeader from 'ui/src/card/card-header';
import { useState } from 'react';
import MenuSelectionInput from 'ui/src/form/input/menu-selection-input';
import BannerTable from './component/banner-table';
import CreateBannerButton from './component/create-banner-button';

interface BannerStatus {
  name: string;
  enable: boolean;
}

const bannerStatusList: BannerStatus[] = [
  {
    name: 'ACTIVE',
    enable: true,
  },
  {
    name: 'NON_ACTIVE',
    enable: false,
  },
];

export default function BannerList() {
  const [bannerStatus, setBannerStatus] = useState<BannerStatus>({
    name: 'ACTIVE',
    enable: true,
  });

  return (
    <div className='flex flex-col gap-6'>
      <MenuSelectionInput
        title=""
        data={bannerStatusList}
        value={bannerStatus}
        onChange={setBannerStatus}
        build={(item) => {
          return {
            id: item.enable + "",
            name: item.name,
          };
        }}
        className="-my-2 max-w-64 min-w-32"
      />
      
      <Card>
        <CardHeader title={'Banner List'}>
          <CreateBannerButton />
        </CardHeader>
        <CardContent>
          <BannerTable enable={bannerStatus.enable}/>
        </CardContent>
      </Card>
    </div>
  );
}
