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
export default function IndicadoresLocalesLayout() {
  return (
    <>
      <NavBar />
      <div>
        <div className="grid xl:grid-cols-10 grid-cols-1">
          <div className="xl:col-span-1 ">
            <SideBar tabs={tabs} />
          </div>
          <main className="xl:col-span-9 ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
