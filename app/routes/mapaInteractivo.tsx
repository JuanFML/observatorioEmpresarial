import { Mapa } from "~/mapa/mapa";
import type { Route } from "./+types/mapaInteractivo";
import { getDenue } from "~/server/denue.server";

export function loader({ params }: Route.LoaderArgs) {
  return { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY };
}

export async function action({ request }: Route.ActionArgs) {
  const body = await request.formData();
  const condicion = body.get("condicion") as string;
  const latitud = body.get("latitud") as string;
  const longitud = body.get("longitud") as string;
  const metros = body.get("metros") as string;
  const data = { condicion, latitud, longitud, metros };
  const response = await getDenue(data);
  return response;
}

export default function MapaInteractivo({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { GOOGLE_MAPS_API_KEY } = loaderData;
  return (
    <Mapa API_KEY={GOOGLE_MAPS_API_KEY as string} actionData={actionData} />
  );
}
