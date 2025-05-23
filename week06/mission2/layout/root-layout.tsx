import { Outlet } from "react-router-dom";
import Header from "../src/components/header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
