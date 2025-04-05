import { Mapa } from "~/mapa/mapa";
import type { Route } from "./+types/mapaInteractivo";

export function loader({ params }: Route.LoaderArgs) {
  return { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY };
}

export default function MapaInteractivo({ loaderData }: Route.ComponentProps) {
  const { GOOGLE_MAPS_API_KEY } = loaderData;
  return <Mapa API_KEY={GOOGLE_MAPS_API_KEY as string} />;
}
