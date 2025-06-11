import { Link } from "react-router";

type SideBarProps = { tabs: { title: string; link: string }[] };

export const SideBar = (props: SideBarProps) => {
  const { tabs } = props;
  return (
    <nav className="border rounded-lg h-fit shadow-sm bg-slate-50 my-4 ml-2 mr-2 xl:mr-0 ">
      <ul className="gap-3 ">
        {tabs.map((tab, index) => (
          <Link to={tab.link} className="sidebar-link" key={index}>
            <span className="pl-4">{tab.title}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
