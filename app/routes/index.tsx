import type { Route } from "./+types/index";
import { LandingPage } from "../landingPage/landingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UAdeC Observatorio" },
    {
      name: "Observatorio empresarial",
      content: "Bienvenido al observatorio empresarial",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {}

export default function Index({ loaderData }: Route.ComponentProps) {
  return <LandingPage />;
}
