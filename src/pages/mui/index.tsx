import { Container, ThemeProvider, createTheme } from "@mui/material";
import { AppWrap } from "./ui";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";

const theme = createTheme({
  typography: {
    fontFamily: "Yandex Sans Text",
  },
});

export const MUIPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrap>
        <PageHeader />
        <Container maxWidth="lg">
          <ItemsTable />
        </Container>
      </AppWrap>
    </ThemeProvider>
  );
};
