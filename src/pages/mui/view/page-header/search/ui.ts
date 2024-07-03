import { Button, TextField, styled } from "@mui/material";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: 600,
  "& .MuiInputBase-input": {
    paddingBottom: 10,
    paddingTop: 10,
  },

  "& .MuiInputBase-adornedEnd": {
    paddingRight: 0,
  },
}));

export const ButtonStyled = styled(Button)({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
});
