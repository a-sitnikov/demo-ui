import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";

export const AntdPage = () => {
  return (
    <Layout>
      <PageHeader />
      <Content>
        <ItemsTable />
      </Content>
    </Layout>
  );
};
