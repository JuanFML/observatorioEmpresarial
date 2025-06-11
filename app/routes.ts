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
  route("mercado-financiero", "routes/mercadoFinanciero.tsx"),

  ...prefix("indicadores-nacionales", [
    index("./indicadoresNacionales/home.tsx"),
    layout("./indicadoresNacionales/layout.tsx", [
      route("actividad-economica", "routes/indNacActividadEconomica.tsx"),
      route("confianza-empresarial", "routes/indNacConfianzaEmpresarial.tsx"),
      route("confianza-del-consumidor", "routes/indNacConfianzaConsumidor.tsx"),
    ]),
  ]),

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
