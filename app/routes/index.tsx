import type { Route } from "./+types/index";
import { LandingPage } from "../landingPage/landingPage";
import { postToSheet } from "~/server/google.server";

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

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const body = {
    respuesta1: data.respuesta1 as string,
    respuesta2: data.respuesta2 as string,
  };
  postToSheet(body);
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return <LandingPage />;
}
