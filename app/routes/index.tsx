import type { Route } from "./+types/index";
import { LandingPage } from "../landingPage/landingPage";
// import { getSerieUltimoCierre } from "~/server/banxico.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UAdeC Observatorio" },
    {
      name: "Observatorio empresarial",
      content: "Bienvenido al observatorio empresarial",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // const idPesosPorDolar = "SF43718";
  // const response = await getSerieUltimoCierre(idPesosPorDolar);
  // const datosPrecioDolar = response.bmx.series[0].datos[0];
  const datosPrecioDolar = { fecha: "", dato: "" };
  return { datosPrecioDolar };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return <LandingPage datosPrecioDolar={loaderData.datosPrecioDolar} />;
}
