import { Outlet } from "react-router";
import Header from "./Header";
import Footers from "./Footers";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        
        <Outlet />
      </main>
      <Footers/>
    </>
  );
}