import { Outlet } from "react-router";
import { NavBar } from "~/components/NavBar";
import { SideBar } from "~/components/SideBar";

export default function IndicadoresLocalesLayout() {
  return (
    <>
      <NavBar />
      <div>
        <div className="grid xl:grid-cols-10 grid-cols-1">
          <div className="xl:col-span-1 ">
            <SideBar />
          </div>
          <main className="xl:col-span-9 ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
