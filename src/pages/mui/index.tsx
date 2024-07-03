import {
  Container,
  FormControlLabel,
  Switch,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppWrap } from "./ui";
import { PageHeader } from "./view/page-header";
import { ItemsTable } from "./view/table";
import { useState } from "react";

const customizedTheme = createTheme({
  typography: {
    fontFamily: "Yandex Sans Text",
  },
});

const defaultTheme = createTheme({});

export const MUIPage = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTheme(customizedTheme);
    } else {
      setTheme(defaultTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrap>
        <PageHeader />
        <Container maxWidth="lg">
          <ItemsTable />
        </Container>
      </AppWrap>
      <FormControlLabel
        control={
          <Switch checked={theme === customizedTheme} onChange={handleChange} />
        }
        label="Customized theme"
      />
    </ThemeProvider>
  );
};
