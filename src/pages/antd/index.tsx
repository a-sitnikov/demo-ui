import { ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";
import { ContentStyled, LayoutStyled } from "./ui";

export const AntdPage = () => {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          fontFamily: "Yandex Sans Text",
        },
      }}
    >
      <LayoutStyled>
        <PageHeader />
        <ContentStyled>
          <ItemsTable />
        </ContentStyled>
      </LayoutStyled>
    </ConfigProvider>
  );
};
