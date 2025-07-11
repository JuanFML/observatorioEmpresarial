import { Outlet } from "react-router";
import { NavBar } from "~/components/NavBar";
import { SideBar } from "~/components/SideBar";
const tabs = [
  {
    title: "Actividad Industrial",
    link: "/indicadores-locales/actividad-industrial",
  },
  {
    title: "Seguridad y Derecho",
    link: "/indicadores-locales/seguridad-y-derecho",
  },
  { title: "Ambientales", link: "/indicadores-locales/ambientales" },
  { title: "Sociales", link: "/indicadores-locales/sociales" },
  { title: "Económicos", link: "/indicadores-locales/economicos" },
  {
    title: "Capacidad de Innovación",
    link: "/indicadores-locales/capacidad-de-innovacion",
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
