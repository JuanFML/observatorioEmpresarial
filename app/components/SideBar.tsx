import { Link } from "react-router";

type SideBarProps = {};

export const SideBar = (props: SideBarProps) => {
  return (
    <nav className="border rounded-lg h-full shadow-sm bg-slate-50 my-4 ml-2 mr-2 xl:mr-0 ">
      <ul className="gap-3 ">
        <Link
          to={"/indicadores-locales/actividad-industrial"}
          className="sidebar-link"
        >
          <span className="pl-4">Actividad Industrial</span>
        </Link>
        <Link
          to={"/indicadores-locales/seguridad-y-derecho"}
          className="sidebar-link"
        >
          <span className="pl-4">Seguridad y Derecho</span>
        </Link>
        <Link to={"/indicadores-locales/ambientales"} className="sidebar-link">
          <span className="pl-4">Ambientales</span>
        </Link>
        <Link to={"/indicadores-locales/sociales"} className="sidebar-link">
          <span className="pl-4">Sociales</span>
        </Link>
        <Link to={"/indicadores-locales/economicos"} className="sidebar-link">
          <span className="pl-4">Económicos</span>
        </Link>
        <Link
          to={"/indicadores-locales/capacidad-de-innovacion"}
          className="sidebar-link"
        >
          <span className="pl-4">Capacidad de Innovación</span>
        </Link>
      </ul>
    </nav>
  );
};
