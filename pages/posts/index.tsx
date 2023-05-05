import { FilterDropdown, SaveButton, useTable } from "@refinedev/antd";
import { Form, Input, List, Radio, Table } from "antd";
import { IPost } from "../../interfaces";
import { HttpError } from "@refinedev/core";

interface ISearch {
  title: string;
}

const PostsList = () => {
  const { tableProps, searchFormProps } = useTable<IPost, HttpError, ISearch>({
    sorters: {
      initial: [{ field: "id", order: "desc" }],
    },
    onSearch: (values) => {
      return [{ field: "title", operator: "contains", value: values.title }];
    },
  });
  return (
    <List>
      <Form {...searchFormProps} layout="inline">
        <Form.Item name="title">
          <Input placeholder="Search by title" />
        </Form.Item>
        <SaveButton onClick={searchFormProps.form?.submit} />
      </Form>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Post title" />
        <Table.Column
          dataIndex="status"
          title="Status"
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Radio.Group>
                <Radio value="published">Published</Radio>
                <Radio value="draft">Draft</Radio>
                <Radio value="rejected">Rejected</Radio>
              </Radio.Group>
            </FilterDropdown>
          )}
        />
      </Table>
    </List>
  );
};

export default PostsList;
