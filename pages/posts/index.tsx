import { useTable } from "@refinedev/antd";
import { List, Table } from "antd";

const PostsList = () => {
  const { tableProps } = useTable();
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Post title" />
        <Table.Column dataIndex="status" title="Status" />
      </Table>
    </List>
  );
};

export default PostsList;
