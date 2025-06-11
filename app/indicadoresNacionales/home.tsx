import { Outlet } from "react-router";
import { NavBar } from "~/components/NavBar";
import { SideBar } from "~/components/SideBar";
const tabs = [
  {
    title: "Actividad Económica",
    link: "/indicadores-nacionales/actividad-economica",
  },
  {
    title: "Confianza Empresarial",
    link: "/indicadores-nacionales/confianza-empresarial",
  },
  {
    title: "Confianza del Consumidor",
    link: "/indicadores-nacionales/confianza-del-consumidor",
  },
];
export default function IndicadoresLocalesHome() {
  return (
    <>
      <NavBar />
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-1 ">
            <SideBar tabs={tabs} />
          </div>
        </div>
      </div>
    </>
  );
}
