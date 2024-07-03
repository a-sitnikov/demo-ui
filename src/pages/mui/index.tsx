import { Container } from "@mui/material";
import { AppWrap } from "./ui";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";

export const MUIPage = () => {
  return (
    <AppWrap>
      <PageHeader />
      <Container maxWidth="lg">
        <ItemsTable />
      </Container>
    </AppWrap>
  );
};
