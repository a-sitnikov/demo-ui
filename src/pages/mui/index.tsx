import { Container } from "@mui/material";
import { AppWrap, ContentStyled } from "./ui";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";

export const MUIPage = () => {
  return (
    <AppWrap>
      <div>копия joy ui</div>
      <PageHeader />
      <Container maxWidth="lg">
        <ItemsTable />
      </Container>
    </AppWrap>
  );
};
