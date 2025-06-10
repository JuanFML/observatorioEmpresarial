import { Outlet } from "react-router";
import { NavBar } from "~/components/NavBar";
import { SideBar } from "~/components/SideBar";

export default function IndicadoresLocalesHome() {
  return (
    <>
      <NavBar />
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-1 ">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}
