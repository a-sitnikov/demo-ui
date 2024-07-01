import { Link } from "react-router-dom";
import { Wrap } from "./ui";

export const MainPage = () => {
  return (
    <Wrap>
      <Link to="antd">Antd</Link>
      <Link to="joyui">Joy UI</Link>
      <Link to="mui">MUI</Link>
    </Wrap>
  );
};
