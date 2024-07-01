import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";
import { ContentStyled } from "./ui";

export const AntdPage = () => {
  return (
    <div>
      <PageHeader />
      <ContentStyled>
        <ItemsTable />
      </ContentStyled>
    </div>
  );
};
