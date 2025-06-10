import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("camino", "routes/camino.tsx"),
  route("mapaInteractivo", "routes/mapaInteractivo.tsx"),
  route("indicadores-nacionales", "routes/indicesNacionales.tsx"),

  ...prefix("indicadores-locales", [
    index("./indicadoresLocales/home.tsx"),
    layout("./indicadoresLocales/layout.tsx", [
      route("actividad-industrial", "routes/indLocActividadIndustrial.tsx"),
      route("seguridad-y-derecho", "routes/indLocSeguridad.tsx"),
      route("ambientales", "routes/indLocAmbientales.tsx"),
      route("economicos", "routes/indLocEconomicos.tsx"),
      route("sociales", "routes/indLocSociales.tsx"),
      route("capacidad-de-innovacion", "routes/indLocCapacidadDeIn.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
