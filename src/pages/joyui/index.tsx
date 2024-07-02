import { Container } from "@mui/joy";
import { AppWrap } from "./ui";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";

export const JoyUIPage = () => {
  return (
    <AppWrap>
      <PageHeader />
      <Container maxWidth="lg">
        <ItemsTable />
      </Container>
    </AppWrap>
  );
};
