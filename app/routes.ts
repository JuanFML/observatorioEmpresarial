import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("camino", "routes/camino.tsx"),
  route("mapaInteractivo", "routes/mapaInteractivo.tsx"),
] satisfies RouteConfig;
