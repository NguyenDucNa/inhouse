import { Banner } from '@client/graphql/types/graphql';
import { Link } from 'react-router-dom';
import Table from 'ui/src/table/table';
import TableRow from 'ui/src/table/table-row';
import TableRowColumn from 'ui/src/table/table-row-cell';
import TableHeaderColumn from 'ui/src/table/table-header-column';
import useBanners from '../logic/use-banners';

export default function BannerTable(props : {enable: boolean}) {
  const { data, error, loading } = useBanners(0, 50, props.enable);

  if (!data) {
    return <div>Data is empty!</div>;
  }

  return (
    <Table
      loading={loading}
      error={error?.message}
      data={data.banners}
      build={(banner) => <BannerRow key={banner.bannerId} banner={banner} />}
    >
      <TableHeaderColumn>Title</TableHeaderColumn>
      <TableHeaderColumn>Content type</TableHeaderColumn>
      <TableHeaderColumn>Time rule type</TableHeaderColumn>
    </Table>
  );
}

function BannerRow(props: { banner: Banner }) {
  const { banner } = props;

  return (
    <>
      <TableRow key={banner.bannerId}>
        <TableRowColumn>
          <Link to={banner.bannerId + "/" + banner.content.type?.toLowerCase()}>
            <p className="font-medium">{banner.title}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={banner.bannerId + "/" + banner.content.type?.toLowerCase()}>{banner.content.type?.toLowerCase()}</Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={banner.bannerId + "/" + banner.content.type?.toLowerCase()}>{banner.timeRule.type?.toLowerCase().split("_").join(" ")}</Link>
        </TableRowColumn>
      </TableRow>
    </>
  );
}
