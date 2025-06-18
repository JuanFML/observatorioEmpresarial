import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, useNavigation, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useLocation, Link, Form } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect } from "react";
import { AppBar, Container, Toolbar, Box, Button, Typography, Menu, MenuItem, Divider, LinearProgress, TextField, FormControl, InputLabel, Select } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AreaChartOutlinedIcon from "@mui/icons-material/AreaChartOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import { LineChart, ChartsReferenceLine, BarChart } from "@mui/x-charts";
import * as XLSX from "xlsx";
import path from "path";
import * as fs from "fs";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
function Layout({
  children
}) {
  const navigation = useNavigation();
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [navigation.state === "loading" && /* @__PURE__ */ jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-white opacity-70 z-50",
        children: /* @__PURE__ */ jsx("div", {
          className: "w-10 h-10 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"
        })
      }), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `Error: ${JSON.stringify(error)}`;
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const cidesieLogo = "/assets/Logo_CIDESIE-Bkk8Pv19.png";
const inegiLogo = "/assets/inegi_logo-C15FSSi1.jpg";
const banxicoLogo = "/assets/banxico-Cw85VxAI.png";
const indicadores = [
  ["Nacionales", "indicadores-nacionales"],
  ["Locales", "indicadores-locales"],
  ["Mercado Financiero", "mercado-financiero"]
];
const NavBar = () => {
  const [anchorIndicadores, setAnchorIndicadores] = useState(null);
  const handleOpenIndicadorMenu = (event) => {
    setAnchorIndicadores(event.currentTarget);
  };
  const handleCloseIndicadorMenu = () => {
    setAnchorIndicadores(null);
  };
  const location = useLocation();
  console.log();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      AppBar,
      {
        position: "static",
        sx: {
          bgcolor: "white"
        },
        children: /* @__PURE__ */ jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxs(Toolbar, { disableGutters: true, children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: { flexGrow: 1, display: { xs: "flex", md: "flex" }, gap: 10 },
              children: [
                /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(
                  Box,
                  {
                    component: "img",
                    src: cidesieLogo,
                    sx: { width: 60, height: 90 }
                  }
                ) }) }),
                /* @__PURE__ */ jsx(Box, { alignContent: "center", children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "text",
                    sx: {},
                    size: "large",
                    onClick: handleOpenIndicadorMenu,
                    children: /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: "Indicadores" })
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  Menu,
                  {
                    id: "menu-appbar",
                    anchorEl: anchorIndicadores,
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "center"
                    },
                    keepMounted: true,
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "center"
                    },
                    open: Boolean(anchorIndicadores),
                    onClose: handleCloseIndicadorMenu,
                    children: indicadores.map((indicador, index2) => /* @__PURE__ */ jsx(Link, { to: `/${indicador[1]}`, children: /* @__PURE__ */ jsx(
                      MenuItem,
                      {
                        onClick: handleCloseIndicadorMenu,
                        children: /* @__PURE__ */ jsx(Typography, { sx: { textAlign: "center" }, children: indicador[0] })
                      },
                      indicador[0]
                    ) }, index2))
                  }
                ),
                /* @__PURE__ */ jsx(Box, { alignContent: "center", children: /* @__PURE__ */ jsx(Button, { variant: "text", size: "large", children: /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: "Oportunidades de Inversión" }) }) }),
                /* @__PURE__ */ jsx(Box, { alignContent: "center", children: /* @__PURE__ */ jsx("a", { href: "Noticias.html", children: /* @__PURE__ */ jsx(Button, { variant: "text", size: "large", children: /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: "Noticias" }) }) }) }),
                /* @__PURE__ */ jsx(Box, { alignContent: "center", children: /* @__PURE__ */ jsx(Button, { variant: "text", size: "large", children: /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: "Acerca de" }) }) }),
                /* @__PURE__ */ jsx(Box, { alignContent: "center", children: /* @__PURE__ */ jsx(Button, { variant: "text", size: "large", children: /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: "Contacto" }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end", children: [
            location.pathname.includes("indicadores") && /* @__PURE__ */ jsx(
              Box,
              {
                component: "img",
                src: inegiLogo,
                sx: { width: 90, height: 60 }
              }
            ),
            location.pathname.includes("mercado") && /* @__PURE__ */ jsx(
              Box,
              {
                component: "img",
                src: banxicoLogo,
                sx: { width: 100, height: 70 }
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(Divider, {})
  ] });
};
const fondoObservatorio = "/assets/fondo_observatorio-Y5cdY0zO.png";
function LandingPage(props) {
  const { datosPrecioDolar } = props;
  const text = [
    "Actualización del mercado empresarial.",
    "Nuevas oportunidades de inversión.",
    "Resultados del último estudio económico."
  ];
  const [index2, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % text.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex-col content-center",
        style: {
          backgroundImage: `url(${fondoObservatorio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "fit",
          height: "400px"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "h-fit rounded-r-xl  p-6 w-fit",
              style: { backgroundColor: "rgba(0, 0, 128, 0.8)" },
              children: [
                /* @__PURE__ */ jsx("h1", { className: "text-3xl text-white font-semibold", children: "Bienvenido(a) al Observatorio Empresarial" }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-[0.8rem]", children: "del Centro de Investigación para el Desarrollo Sostenible e Innovación Empresarial" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "py-4 pl-10", children: /* @__PURE__ */ jsx(Link, { to: "camino", children: /* @__PURE__ */ jsx(Button, { variant: "contained", children: "Inicia tu experiencia" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-10 py-5 text-[#0056b3]", children: [
      /* @__PURE__ */ jsxs("p", { className: "w-3/4", children: [
        "Creado por el ",
        /* @__PURE__ */ jsx("b", { children: "CIDESIE" }),
        ", el Observatorio Empresarial tiene como objetivo ofrecer análisis detallados sobre el entorno económico y empresarial del noreste de México mediante un enfoque basado en datos, fomentando el desarrollo empresarial estratégico e informado."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "w-3/4", children: "A través de estudios de mercado exhaustivos en diferentes sectores, ofrecemos análisis respaldados por evidencia que pueden ayudarte a mejorar tus estrategias empresariales actuales o a crear nuevas." }),
      /* @__PURE__ */ jsx("p", { className: "w-3/4", children: "Desde el desarrollo de talento y habilidades hasta el análisis financiero, contamos con numerosos estudios relevantes, y si no encuentras lo que necesitas, podemos ayudarte a desarrollarlo." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-[150px] bg-linear-to-r from-indigo-800 to-[#007BFF] flex items-center overflow-hidden justify-center", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex transition-transform duration-700 ease-in-out",
        style: { transform: `translateX(-${index2 * 100}%)` },
        children: text.map((text2, i) => /* @__PURE__ */ jsxs("div", { className: "min-w-full text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-white", children: text2 }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "border-b-2 border-white w-1/2 h-1 mt-3 bg-white" }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "text-blue-600 font-semibold rounded-b-md bg-white px-2 py-1 cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300",
              children: "Información"
            }
          )
        ] }, i))
      }
    ) })
  ] });
}
function meta({}) {
  return [{
    title: "UAdeC Observatorio"
  }, {
    name: "Observatorio empresarial",
    content: "Bienvenido al observatorio empresarial"
  }];
}
async function loader$b({
  params
}) {
  const datosPrecioDolar = {
    fecha: "",
    dato: ""
  };
  return {
    datosPrecioDolar
  };
}
const index = withComponentProps(function Index({
  loaderData
}) {
  return /* @__PURE__ */ jsx(LandingPage, {
    datosPrecioDolar: loaderData.datosPrecioDolar
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  loader: loader$b,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const Tarjeta = (props) => {
  const { children, text, textToConcat, setTexto } = props;
  const handleClick = () => {
    setTexto && setTexto((prev) => prev + textToConcat);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: handleClick,
      className: "p-2 xl:w-[200px] xl:h-[230px] w-[110px] h-[125px] rounded-2xl shadow-[0px_4px_15px_rgba(0,0,0,0.25)] hover:bg-blue-950 hover:cursor-pointer grid grid-cols-1 hover:text-gray-100",
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-end justify-center", children }),
        /* @__PURE__ */ jsx("div", { className: "text-center xl:text-xl text-sm", children: text })
      ]
    }
  ) });
};
function PrimerPaso(props) {
  const { setTexto } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center flex-col  pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "1. Cuéntenos sobre ti" }),
      /* @__PURE__ */ jsx("div", { className: "text-xl pt-2", children: "Selecciona la opción con la que más te identifiques" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Soy creador/a de empresa",
          setTexto,
          textToConcat: "creador/a de empresa",
          children: /* @__PURE__ */ jsx(AccountCircleOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Informal",
          setTexto,
          textToConcat: "informal",
          children: /* @__PURE__ */ jsx(OutdoorGrillOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Tengo Micrompresa",
          setTexto,
          textToConcat: "creador/a de microempresa",
          children: /* @__PURE__ */ jsx(StorefrontOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Tengo Pyme",
          setTexto,
          textToConcat: "creador/a de Pyme ",
          children: /* @__PURE__ */ jsx(StoreOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Soy gran empresario/o",
          setTexto,
          textToConcat: "gran empresario/o",
          children: /* @__PURE__ */ jsx(CorporateFareOutlinedIcon, { sx: { fontSize: 60 } })
        }
      )
    ] }) })
  ] });
}
function SegundoPaso(props) {
  const { setTexto } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center flex-col  pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "2. ¿En que momento te encuentras?" }),
      /* @__PURE__ */ jsx("div", { className: "text-xl pt-2", children: "Selecciona la opción con la que más te identifiques" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Tengo una idea de negocio",
          setTexto,
          textToConcat: "tengo una idea de negocio",
          children: /* @__PURE__ */ jsx(LightbulbOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Hace poco cree mi empresa",
          setTexto,
          textToConcat: "recien cree mi empresa ",
          children: /* @__PURE__ */ jsx(StorefrontOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Tengo una empresa de menos de 10 personas",
          setTexto,
          textToConcat: "tengo una empresa de menos de 10 personas",
          children: /* @__PURE__ */ jsx(GroupAddOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Soy empresario/a hace mas de 4 años",
          setTexto,
          textToConcat: "hace mas de 4 años",
          children: /* @__PURE__ */ jsx(BusinessCenterOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Estoy en expansión de mi empresa",
          setTexto,
          textToConcat: "estoy en expansión de mi empresa",
          children: /* @__PURE__ */ jsx(AutoGraphOutlinedIcon, { sx: { fontSize: 60 } })
        }
      ),
      /* @__PURE__ */ jsx(
        Tarjeta,
        {
          text: "Pienso cerrar mi empresa",
          setTexto,
          textToConcat: "pienso cerrar mi empresa",
          children: /* @__PURE__ */ jsx(SentimentDissatisfiedOutlinedIcon, { sx: { fontSize: 60 } })
        }
      )
    ] }) })
  ] });
}
function TercerPaso(props) {
  const { setTexto, setStep, setProgress } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center flex-col  pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "3. ¿En qué necesitas apoyo?" }),
      /* @__PURE__ */ jsx("div", { className: "text-xl pt-2", children: "Selecciona la opción con la que más te identifiques" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => {
            setStep(4);
            setProgress(75);
          },
          children: /* @__PURE__ */ jsx(
            Tarjeta,
            {
              text: "Capacitación/ Formación",
              setTexto,
              textToConcat: "capacitación en...",
              children: /* @__PURE__ */ jsx(SchoolOutlinedIcon, { sx: { fontSize: 60 } })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Programas para fortalecer mi empresa", children: /* @__PURE__ */ jsx(QueryStatsOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => {
            setStep(6);
            setProgress(75);
          },
          children: /* @__PURE__ */ jsx(
            Tarjeta,
            {
              text: "Servicios para mi sector",
              setTexto,
              textToConcat: "servicios para el sector...",
              children: /* @__PURE__ */ jsx(DomainAddOutlinedIcon, { sx: { fontSize: 60 } })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => {
            setStep(5);
            setProgress(75);
          },
          children: /* @__PURE__ */ jsx(
            Tarjeta,
            {
              text: "Tramites legales para mi empresa",
              setTexto,
              textToConcat: "tramites legales para...",
              children: /* @__PURE__ */ jsx(GavelOutlinedIcon, { sx: { fontSize: 60 } })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Información empresarial y estadisticas", children: /* @__PURE__ */ jsx(PollOutlinedIcon, { sx: { fontSize: 60 } }) })
    ] }) })
  ] });
}
const handleStep1 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
const handleStep2 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none  -translate-x-50";
    }
  }
};
const handleStep3 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
const handleStep4 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 4: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
const handleStep5 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 5: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
const handleStep6 = (step) => {
  switch (step) {
    case 1: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 2: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 3: {
      return "opacity-0 duration-300 pointer-events-none  translate-x-0";
    }
    case 6: {
      return "opacity-100 duration-1000 pointer-events-auto translate-x-0";
    }
    default: {
      return "opacity-0 duration-300 pointer-events-none -translate-x-50";
    }
  }
};
function CuartoPasoCapacitacion(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "text-center flex-col  pt-2", children: /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "4. Selecciona el tema de tu interés" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(Tarjeta, { text: "Mercadeo y ventas", children: /* @__PURE__ */ jsx(AssessmentOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Estrategia", children: /* @__PURE__ */ jsx(AreaChartOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Producción y calidad", children: /* @__PURE__ */ jsx(ThumbUpOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Financiero", children: /* @__PURE__ */ jsx(MonetizationOnOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Legal y normativo", children: /* @__PURE__ */ jsx(GavelOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Gestión humana", children: /* @__PURE__ */ jsx(HandshakeOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Innovación", children: /* @__PURE__ */ jsx(TipsAndUpdatesOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Solución de controversias", children: /* @__PURE__ */ jsx(HelpOutlineOutlinedIcon, { sx: { fontSize: 60 } }) })
    ] }) })
  ] });
}
function QuintoPasoLegal(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "text-center flex-col  pt-2", children: /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "4. Selecciona el tema de tu interés" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(Tarjeta, { text: "Crear una empresa", children: /* @__PURE__ */ jsx(CorporateFareOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Servicios registrales", children: /* @__PURE__ */ jsx(ArticleOutlinedIcon, { sx: { fontSize: 60 } }) })
    ] }) })
  ] });
}
function SextoPasoServicios(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "text-center flex-col  pt-2", children: /* @__PURE__ */ jsx("div", { className: "text-4xl", children: "4. Selecciona el sector económico de tu empresa" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 w-2/3 gap-10", children: [
      /* @__PURE__ */ jsx(Tarjeta, { text: "Salud y químicos", children: /* @__PURE__ */ jsx(BiotechOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Industrias creativas", children: /* @__PURE__ */ jsx(ExtensionOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "TIC", children: /* @__PURE__ */ jsx(LanguageOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Turismo", children: /* @__PURE__ */ jsx(WineBarOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Gastronomia", children: /* @__PURE__ */ jsx(RestaurantOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Moda", children: /* @__PURE__ */ jsx(CheckroomOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Sevicios empresariales", children: /* @__PURE__ */ jsx(TroubleshootOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Construcción y energíá", children: /* @__PURE__ */ jsx(BoltOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Agropecuario y agroindustrial", children: /* @__PURE__ */ jsx(GrassOutlinedIcon, { sx: { fontSize: 60 } }) }),
      /* @__PURE__ */ jsx(Tarjeta, { text: "Otros sectores", children: /* @__PURE__ */ jsx(CorporateFareOutlinedIcon, { sx: { fontSize: 60 } }) })
    ] }) })
  ] });
}
function Caminito() {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");
  const [texto3, setTexto3] = useState("");
  const handleBackwardsClick = () => {
    switch (step) {
      case 2: {
        setStep(1);
        setProgress(0);
        setTexto1("");
        return;
      }
      case 3: {
        setStep(2);
        setProgress(25);
        setTexto2("");
        return;
      }
      case 4: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      case 5: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      case 6: {
        setStep(3);
        setProgress(50);
        setTexto3("");
        return;
      }
      default: {
        setStep(1);
        setProgress(0);
        setTexto1("");
        setTexto2("");
        setTexto3("");
        return;
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 h-[100vh] font-serif", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white flex items-center ", children: /* @__PURE__ */ jsxs("div", { className: "flex-col justify-center p-10  rounded-2xl m-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-left text-7xl font-bold", children: "¡Hola!" }),
        /* @__PURE__ */ jsx("p", { className: "pt-6 text-xl", children: step === 1 ? `Con estas preguntas rápidas identificaremos tus intereses, para
              brindarte contenido que responda a tus necesidades.` : /* @__PURE__ */ jsxs("p", { className: "text-white font-bold", children: [
          /* @__PURE__ */ jsx("span", { className: "text-black pr-1", children: "Soy " }),
          /* @__PURE__ */ jsx("span", { className: "bg-red-600 px-1 ", children: texto1 }),
          texto2 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-black", children: ", " }),
            /* @__PURE__ */ jsx("span", { className: "bg-red-600 px-1 ", children: texto2 }),
            /* @__PURE__ */ jsx("span", { className: "text-black pl-1", children: "y busco " })
          ] }),
          texto3 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { className: "bg-red-600 px-1", children: texto3 }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: step !== 1 && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            onClick: () => handleBackwardsClick(),
            className: "flex flex-row items-center text-blue-600 rounded-md bg-white px-2 py-1 cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300",
            children: [
              /* @__PURE__ */ jsx(ArrowBackIcon, {}),
              /* @__PURE__ */ jsx("div", { className: "pl-3 text-lg", children: "Pregunta anterior" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: " bg-gray-200 col-span-2", children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "100%"
            },
            children: /* @__PURE__ */ jsx(LinearProgress, { variant: "determinate", value: progress })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              onClick: () => {
                setStep(2);
                setProgress(25);
              },
              className: `absolute w-full transition-all ${handleStep1(step)}`,
              children: /* @__PURE__ */ jsx(PrimerPaso, { setTexto: setTexto1 })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              onClick: () => {
                setStep(3);
                setProgress(50);
              },
              className: `absolute w-full transition-all ${handleStep2(step)}`,
              children: /* @__PURE__ */ jsx(SegundoPaso, { setTexto: setTexto2 })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute w-full transition-all ${handleStep3(step)}`,
              children: /* @__PURE__ */ jsx(
                TercerPaso,
                {
                  setTexto: setTexto3,
                  setStep,
                  setProgress
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute w-full transition-all ${handleStep4(step)}`,
              children: /* @__PURE__ */ jsx(CuartoPasoCapacitacion, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute w-full transition-all ${handleStep5(step)}`,
              children: /* @__PURE__ */ jsx(QuintoPasoLegal, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute w-full transition-all ${handleStep6(step)}`,
              children: /* @__PURE__ */ jsx(SextoPasoServicios, {})
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const camino = withComponentProps(function Camino() {
  return /* @__PURE__ */ jsx(Caminito, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: camino
}, Symbol.toStringTag, { value: "Module" }));
function Mapa({ API_KEY, actionData }) {
  const [showLat, setShowLat] = useState();
  const [showLng, setShowLng] = useState();
  const [lat, setLat] = useState(25.5445);
  const [lng, setLng] = useState(-103.4477);
  const centro = {
    lat: 23.8771,
    lng: -102.3788
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs("div", { children: [
      "Latitud: ",
      showLat
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Longitud: ",
      showLng
    ] }),
    /* @__PURE__ */ jsxs(Form, { method: "post", className: "flex items-center", children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "condicion",
          name: "condicion",
          label: "Condición",
          variant: "outlined",
          defaultValue: "restaurante"
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "latitud",
          name: "latitud",
          label: "Latitud",
          variant: "outlined",
          value: lat
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "longitud",
          name: "longitud",
          label: "Longitud",
          variant: "outlined",
          value: lng
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          id: "metros",
          name: "metros",
          label: "Metros",
          variant: "outlined",
          defaultValue: 300
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "py-3 px-2 text-blue-600 rounded-md bg-white  cursor-pointer hover:bg-blue-700 hover:transform hover:text-white hover:duration-300",
          children: /* @__PURE__ */ jsx("div", { className: " text-center text-lg", children: "Buscar" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(APIProvider, { apiKey: API_KEY, language: "es", children: /* @__PURE__ */ jsx(
      Map,
      {
        style: { width: "100vw", height: "85vh" },
        defaultZoom: 6,
        gestureHandling: "greedy",
        disableDefaultUI: true,
        defaultCenter: centro,
        mapId: "MAPA_OBERSVATORIO",
        onMousemove: (ev) => {
          var _a, _b;
          setShowLat((_a = ev.detail.latLng) == null ? void 0 : _a.lat);
          setShowLng((_b = ev.detail.latLng) == null ? void 0 : _b.lng);
        },
        onClick: (ev) => {
          var _a, _b;
          console.log(ev.detail.latLng);
          setLat((_a = ev.detail.latLng) == null ? void 0 : _a.lat);
          setLng((_b = ev.detail.latLng) == null ? void 0 : _b.lng);
        },
        children: actionData && actionData.map((lugar, index2) => {
          const location = {
            lat: Number(lugar.Latitud),
            lng: Number(lugar.Longitud)
          };
          return /* @__PURE__ */ jsx(
            AdvancedMarker,
            {
              position: location
            },
            lugar.Nombre + index2
          );
        })
      }
    ) })
  ] });
}
const getDenue = async (props) => {
  const { condicion, latitud, longitud, metros } = props;
  const url = `https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/${condicion}/${latitud},${longitud}/${metros}/${process.env.INEGI_API}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status
      });
    }
    return await response.json();
  } catch (e) {
    throw new Response(e);
  }
};
function loader$a({
  params
}) {
  return {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
  };
}
async function action({
  request
}) {
  const body = await request.formData();
  const condicion = body.get("condicion");
  const latitud = body.get("latitud");
  const longitud = body.get("longitud");
  const metros = body.get("metros");
  const data = {
    condicion,
    latitud,
    longitud,
    metros
  };
  const response = await getDenue(data);
  return response;
}
const mapaInteractivo = withComponentProps(function MapaInteractivo({
  loaderData,
  actionData
}) {
  const {
    GOOGLE_MAPS_API_KEY
  } = loaderData;
  return /* @__PURE__ */ jsx(Mapa, {
    API_KEY: GOOGLE_MAPS_API_KEY,
    actionData
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: mapaInteractivo,
  loader: loader$a
}, Symbol.toStringTag, { value: "Module" }));
const getSeriePorFecha = async (serie, fechaInicial, feachaFinal) => {
  const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${serie}/datos/${fechaInicial}/${feachaFinal}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bmx-Token": process.env.BANXICO_TOKEN
      }
    });
    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status
      });
    }
    return await response.json();
  } catch (e) {
    throw new Response(e);
  }
};
const getTodaLaSerie = async (serie) => {
  const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${serie}/datos`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Bmx-Token": process.env.BANXICO_TOKEN
      }
    });
    if (response.status > 299) {
      throw new Response(`Error: ${JSON.stringify(response)}`, {
        status: response.status
      });
    }
    return await response.json();
  } catch (e) {
    throw new Response(e);
  }
};
const LineChartComponent = (props) => {
  const { xData, dataGrafica, color } = props;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    LineChart,
    {
      xAxis: [
        {
          id: "Año",
          scaleType: "band",
          data: xData
        }
      ],
      series: [
        {
          data: dataGrafica,
          color
        }
      ],
      height: 500,
      children: /* @__PURE__ */ jsx(ChartsReferenceLine, { y: 0 })
    }
  ) });
};
const mesesStrings = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
const colors = [
  "#1f77b4",
  // Blue
  "#ff7f0e",
  // Orange
  "#2ca02c",
  // Green
  "#d62728",
  // Red
  "#9467bd",
  // Purple
  "#8c564b",
  // Brown
  "#e377c2",
  // Pink
  "#7f7f7f",
  // Gray
  "#bcbd22",
  // Olive
  "#17becf"
  // Teal
];
const IndicadoresBanxico = (props) => {
  const { datosPrecioDolar, datosTasaObjetivo, datosInflacion } = props;
  const dolarFechas = datosPrecioDolar.map((dato) => dato.fecha);
  const dolarDatos = datosPrecioDolar.map((dato) => Number(dato.dato));
  const tasaObjetivoFechas = datosTasaObjetivo.map((dato) => dato.fecha);
  const tasaObjetivoDatos = datosTasaObjetivo.map((dato) => Number(dato.dato));
  const inflacionFechas = datosInflacion.map((dato) => dato.fecha);
  const inflacionDatos = datosInflacion.map((dato) => Number(dato.dato));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 p-5 gap-7", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 text-2xl font-semibold ", children: "Indicadores del Mercado Financiero" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Tipo de cambio Pesos por dólar E.U.A." }),
        /* @__PURE__ */ jsx(
          LineChartComponent,
          {
            xData: dolarFechas,
            dataGrafica: dolarDatos,
            color: colors[0]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Tasa Objetivo" }),
        /* @__PURE__ */ jsx(
          LineChartComponent,
          {
            xData: tasaObjetivoFechas,
            dataGrafica: tasaObjetivoDatos,
            color: colors[1]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Índice Nacional de Precios al consumidor" }),
        /* @__PURE__ */ jsx(
          LineChartComponent,
          {
            xData: inflacionFechas,
            dataGrafica: inflacionDatos,
            color: colors[2]
          }
        )
      ] })
    ] })
  ] });
};
async function loader$9({
  params
}) {
  const idPrecioDolar = "SF43718";
  const idTasaObjetivo = "SF61745";
  const idInflacion = "SP30578";
  const unMesAntes = /* @__PURE__ */ new Date();
  unMesAntes.setMonth(unMesAntes.getMonth() - 1);
  const fechaInicial = unMesAntes.toISOString().split("T")[0];
  const fechaFinal = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const responseDolar = await getSeriePorFecha(idPrecioDolar, fechaInicial, fechaFinal);
  const responseTasa = await getSeriePorFecha(idTasaObjetivo, fechaInicial, fechaFinal);
  const responseInflacion = await getTodaLaSerie(idInflacion);
  const datosPrecioDolar = responseDolar.bmx.series[0].datos;
  const datosTasaObjetivo = responseTasa.bmx.series[0].datos;
  const datosInflacion = responseInflacion.bmx.series[0].datos.slice(-30);
  return {
    datosPrecioDolar,
    datosTasaObjetivo,
    datosInflacion
  };
}
const mercadoFinanciero = withComponentProps(function MercadoFinanciero({
  loaderData
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(IndicadoresBanxico, {
      datosPrecioDolar: loaderData.datosPrecioDolar,
      datosTasaObjetivo: loaderData.datosTasaObjetivo,
      datosInflacion: loaderData.datosInflacion
    })
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mercadoFinanciero,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
const noticias = withComponentProps(function noticias2({}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("iframe", {
      src: "/noticiasPage/Noticias.html",
      width: "100%",
      height: "600"
    })
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: noticias
}, Symbol.toStringTag, { value: "Module" }));
const SideBar = (props) => {
  const { tabs: tabs2 } = props;
  return /* @__PURE__ */ jsx("nav", { className: "border rounded-lg h-fit shadow-sm bg-slate-50 my-4 ml-2 mr-2 xl:mr-0 ", children: /* @__PURE__ */ jsx("ul", { className: "gap-3 ", children: tabs2.map((tab, index2) => /* @__PURE__ */ jsx(Link, { to: tab.link, className: "sidebar-link", children: /* @__PURE__ */ jsx("span", { className: "pl-4", children: tab.title }) }, index2)) }) });
};
const tabs$3 = [{
  title: "Actividad Económica",
  link: "/indicadores-nacionales/actividad-economica"
}, {
  title: "Confianza Empresarial",
  link: "/indicadores-nacionales/confianza-empresarial"
}, {
  title: "Confianza del Consumidor",
  link: "/indicadores-nacionales/confianza-del-consumidor"
}];
const home$1 = withComponentProps(function IndicadoresLocalesHome() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "grid grid-cols-10",
        children: /* @__PURE__ */ jsx("div", {
          className: "col-span-1 ",
          children: /* @__PURE__ */ jsx(SideBar, {
            tabs: tabs$3
          })
        })
      })
    })]
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home$1
}, Symbol.toStringTag, { value: "Module" }));
const tabs$2 = [{
  title: "Actividad Económica",
  link: "/indicadores-nacionales/actividad-economica"
}, {
  title: "Confianza Empresarial",
  link: "/indicadores-nacionales/confianza-empresarial"
}, {
  title: "Confianza del Consumidor",
  link: "/indicadores-nacionales/confianza-del-consumidor"
}];
const layout$1 = withComponentProps(function IndicadoresLocalesLayout() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid xl:grid-cols-10 grid-cols-1",
        children: [/* @__PURE__ */ jsx("div", {
          className: "xl:col-span-1 ",
          children: /* @__PURE__ */ jsx(SideBar, {
            tabs: tabs$2
          })
        }), /* @__PURE__ */ jsx("main", {
          className: "xl:col-span-9 ",
          children: /* @__PURE__ */ jsx(Outlet, {})
        })]
      })
    })]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout$1
}, Symbol.toStringTag, { value: "Module" }));
function ActividadEconomica(props) {
  const {
    rawIgaeAnual,
    xIgaeAnual,
    xIgaeMensual,
    rawIgaeMensual,
    largoDatos,
    largoDatosMensual,
    indicadoresIgae
  } = props;
  const inicioDeDatos = 5;
  const [indicadorGraficaUno, setIndicadorGraficaUno] = useState(0);
  const [dataGraficaUno, setDataGraficaUno] = useState(
    rawIgaeAnual[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );
  const [indicadorGraficaDos, setIndicadorGraficaDos] = useState(0);
  const [dataGraficaDos, setDataGraficaDos] = useState(
    rawIgaeMensual[inicioDeDatos + 0].slice(largoDatos - 12, largoDatos)
  );
  useEffect(() => {
    setDataGraficaUno(
      rawIgaeAnual[inicioDeDatos + indicadorGraficaUno].slice(
        largoDatos - 12,
        largoDatos
      )
    );
  }, [indicadorGraficaUno]);
  useEffect(() => {
    setDataGraficaDos(
      rawIgaeMensual[inicioDeDatos + indicadorGraficaDos].slice(
        largoDatosMensual - 12,
        largoDatosMensual
      )
    );
  }, [indicadorGraficaDos]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 p-5 gap-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-2xl font-semibold ", children: [
      "Indicador Global de la Actividad Economica (IGAE)",
      /* @__PURE__ */ jsx("div", { className: "text-lg font-normal", children: "Series desestacionalizadas. Indice Base 2018 = 100" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-normal", children: "Variación porcentual respecto al mes inmediato anterior." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
        /* @__PURE__ */ jsx(InputLabel, { id: "demo-simple-select-label", children: "Indicador" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            labelId: "demo-simple-select-label",
            id: "demo-simple-select",
            value: indicadorGraficaUno,
            label: "Indicador",
            onChange: (event) => {
              setIndicadorGraficaUno(event.target.value);
            },
            children: indicadoresIgae.map((indicador, index2) => /* @__PURE__ */ jsx(MenuItem, { value: index2, children: indicador }))
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: xIgaeAnual,
          dataGrafica: dataGraficaUno,
          color: "#2196f3"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
        /* @__PURE__ */ jsx(InputLabel, { id: "demo-simple-select-label", children: "Indicador" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            labelId: "demo-simple-select-label",
            id: "demo-simple-select",
            value: indicadorGraficaDos,
            label: "Indicador",
            onChange: (event) => {
              setIndicadorGraficaDos(event.target.value);
            },
            children: indicadoresIgae.map((indicador, index2) => /* @__PURE__ */ jsx(MenuItem, { value: index2, children: indicador }))
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: xIgaeMensual,
          dataGrafica: dataGraficaDos,
          color: "#f28e2c"
        }
      )
    ] })
  ] }) });
}
XLSX.set_fs(fs);
async function loader$8({
  params
}) {
  const igaeAnual = path.resolve("app/assets/docs/igae_indice.xlsx");
  const igaeBuffer = fs.readFileSync(igaeAnual);
  const {
    xData: xDataIgae,
    rawData: rawDataIgae,
    largoDatos,
    indicadores: indicadores2
  } = processIgaeData(igaeBuffer);
  const iageMensual = path.resolve("app/assets/docs/igae_var_mensual.xlsx");
  const igaeMensualBuffer = fs.readFileSync(iageMensual);
  const {
    xData: xDataMensual,
    rawData: rawDataMensual,
    largoDatos: largoDatosMensual
  } = processIgaeData(igaeMensualBuffer);
  return {
    xDataIgae,
    rawDataIgae,
    xDataMensual,
    rawDataMensual,
    largoDatos,
    indicadores: indicadores2,
    largoDatosMensual
  };
}
const indNacActividadEconomica = withComponentProps(function IndicadoresNacionalesActividadEconomica({
  loaderData
}) {
  return /* @__PURE__ */ jsx(ActividadEconomica, {
    xIgaeAnual: loaderData.xDataIgae,
    rawIgaeAnual: loaderData.rawDataIgae,
    xIgaeMensual: loaderData.xDataMensual,
    rawIgaeMensual: loaderData.rawDataMensual,
    largoDatos: loaderData.largoDatos,
    largoDatosMensual: loaderData.largoDatosMensual,
    indicadoresIgae: loaderData.indicadores
  });
});
const processIgaeData = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const indicadores2 = rawData.slice(5, -3).map((indi) => {
    var _a;
    return ((_a = indi[0]) == null ? void 0 : _a.length) > 0 ? indi[0] : indi[1];
  });
  const months = rawData[4];
  let currentYear = 0;
  const years = rawData[3].map((cell) => {
    if (cell) {
      currentYear = cell;
      return cell;
    } else {
      return currentYear;
    }
  });
  const largoDatos = months.length;
  const yearFromLast12 = years.slice(largoDatos - 12, largoDatos);
  const last12Months = months.slice(largoDatos - 12, largoDatos);
  const xData = yearFromLast12.map((year, index2) => `${year} ${last12Months[index2]}`);
  return {
    xData,
    rawData,
    largoDatos,
    indicadores: indicadores2
  };
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indNacActividadEconomica,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
function ConfianzaEmpresarial(props) {
  let {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData
  } = props;
  months = months.slice(-12);
  globalData = globalData.slice(-12);
  manufacturaData = manufacturaData.slice(-12);
  construccionData = construccionData.slice(-12);
  comercioData = comercioData.slice(-12);
  servicioData = servicioData.slice(-12);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 p-5 gap-7", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2 text-2xl font-semibold ", children: "Confianza Empresarial" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Indicador global de confianza empresarial" }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: months,
          dataGrafica: globalData,
          color: colors[0]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Sector manufacturero" }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: months,
          dataGrafica: manufacturaData,
          color: colors[1]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Sector construcción" }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: months,
          dataGrafica: construccionData,
          color: colors[2]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Sector comercio" }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: months,
          dataGrafica: comercioData,
          color: colors[3]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Sector servicios" }),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: months,
          dataGrafica: servicioData,
          color: colors[4]
        }
      )
    ] })
  ] }) });
}
XLSX.set_fs(fs);
async function loader$7({
  params
}) {
  const confianzaFile = path.resolve("app/assets/docs/confianza empresarial.xls");
  const confianzaFileBuffer = fs.readFileSync(confianzaFile);
  const {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData
  } = processData$6(confianzaFileBuffer);
  return {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData
  };
}
const indNacConfianzaEmpresarial = withComponentProps(function IndicadoresNacionalesActividadEconomica2({
  loaderData
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(ConfianzaEmpresarial, {
      months: loaderData.months,
      globalData: loaderData.globalData,
      manufacturaData: loaderData.manufacturaData,
      construccionData: loaderData.construccionData,
      comercioData: loaderData.comercioData,
      servicioData: loaderData.servicioData
    })
  });
});
const processData$6 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  let year = rawData[7][1];
  let months = [];
  rawData.slice(8, -1).map((row) => {
    if (isNaN(row[0])) {
      months.push(`${row[0]}-${year}`);
    } else {
      year = row[0];
    }
  });
  const globalData = rawData.slice(8, -1).map((row) => row[1]).filter((data) => data != null);
  const manufacturaData = rawData.slice(8, -1).map((row) => row[2]).filter((data) => data != null);
  const construccionData = rawData.slice(8, -1).map((row) => row[3]).filter((data) => data != null);
  const comercioData = rawData.slice(8, -1).map((row) => row[4]).filter((data) => data != null);
  const servicioData = rawData.slice(8, -1).map((row) => row[5]).filter((data) => data != null);
  return {
    months,
    globalData,
    manufacturaData,
    construccionData,
    comercioData,
    servicioData
  };
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indNacConfianzaEmpresarial,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
function ConfianzaConsumidor(props) {
  let { months, consumidorData } = props;
  months = months.slice(-12);
  consumidorData = consumidorData.slice(-12);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 p-5 gap-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-2xl font-semibold ", children: [
      "Indicador de Confianza del Consdumidor",
      /* @__PURE__ */ jsx("div", { className: "text-lg font-normal", children: "Series mensual de abril de 2001 a abril 2025" })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      LineChartComponent,
      {
        xData: months,
        dataGrafica: consumidorData,
        color: colors[0]
      }
    ) })
  ] }) });
}
XLSX.set_fs(fs);
async function loader$6({
  params
}) {
  const confianzaFile = path.resolve("app/assets/docs/ENCO_b_Indicador_de_confianza_del_consumidor.xlsx");
  const confianzaFileBuffer = fs.readFileSync(confianzaFile);
  const {
    months,
    consumidorData
  } = processData$5(confianzaFileBuffer);
  return {
    months,
    consumidorData
  };
}
const indNacConfianzaConsumidor = withComponentProps(function IndicadoresNacionalesActividadEconomica3({
  loaderData
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(ConfianzaConsumidor, {
      months: loaderData.months,
      consumidorData: loaderData.consumidorData
    })
  });
});
const processData$5 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  let year = "";
  let months = [];
  rawData.slice(11, -1).map((row) => {
    if (mesesStrings.some((v) => `${row[0]}`.includes(v))) {
      months.push(`${row[0]}-${year}`);
    } else if (!isNaN(row[0])) {
      year = row[0];
    }
  });
  const consumidorData = rawData.slice(11).map((row) => row[1]).filter((data) => data != null);
  return {
    months,
    consumidorData
  };
};
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indNacConfianzaConsumidor,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
const tabs$1 = [{
  title: "Actividad Industrial",
  link: "/indicadores-locales/actividad-industrial"
}, {
  title: "Seguridad y Derecho",
  link: "/indicadores-locales/seguridad-y-derecho"
}, {
  title: "Ambientales",
  link: "/indicadores-locales/ambientales"
}, {
  title: "Sociales",
  link: "/indicadores-locales/sociales"
}, {
  title: "Económicos",
  link: "/indicadores-locales/economicos"
}, {
  title: "Capacidad de Innovación",
  link: "/indicadores-locales/capacidad-de-innovacion"
}];
const home = withComponentProps(function IndicadoresLocalesHome2() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsx("div", {
        className: "grid grid-cols-10",
        children: /* @__PURE__ */ jsx("div", {
          className: "col-span-1 ",
          children: /* @__PURE__ */ jsx(SideBar, {
            tabs: tabs$1
          })
        })
      })
    })]
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const tabs = [{
  title: "Actividad Industrial",
  link: "/indicadores-locales/actividad-industrial"
}, {
  title: "Seguridad y Derecho",
  link: "/indicadores-locales/seguridad-y-derecho"
}, {
  title: "Ambientales",
  link: "/indicadores-locales/ambientales"
}, {
  title: "Sociales",
  link: "/indicadores-locales/sociales"
}, {
  title: "Económicos",
  link: "/indicadores-locales/economicos"
}, {
  title: "Capacidad de Innovación",
  link: "/indicadores-locales/capacidad-de-innovacion"
}];
const layout = withComponentProps(function IndicadoresLocalesLayout2() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx("div", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "grid xl:grid-cols-10 grid-cols-1",
        children: [/* @__PURE__ */ jsx("div", {
          className: "xl:col-span-1 ",
          children: /* @__PURE__ */ jsx(SideBar, {
            tabs
          })
        }), /* @__PURE__ */ jsx("main", {
          className: "xl:col-span-9 ",
          children: /* @__PURE__ */ jsx(Outlet, {})
        })]
      })
    })]
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
const SelectComponent = (props) => {
  const { indicadorGrafica, setIndicadorGrafica, indicadores: indicadores2 } = props;
  return /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsx(InputLabel, { id: "demo-simple-select-label", children: "Indicador" }),
    /* @__PURE__ */ jsx(
      Select,
      {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        value: indicadorGrafica,
        label: "Indicador",
        onChange: (event) => {
          setIndicadorGrafica(event.target.value);
        },
        children: indicadores2.map((indicador, index2) => /* @__PURE__ */ jsx(MenuItem, { value: index2, children: indicador }, index2))
      }
    )
  ] });
};
function ActividadIndustrial(props) {
  let {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief,
    xDataItaee,
    itaeeRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee
  } = props;
  const unwantedImaiefIndex = [1, 6];
  const inicioDeDatosImaief = 7;
  anualRawDataImaief = anualRawDataImaief.filter(
    (_, colIndex) => !unwantedImaiefIndex.includes(colIndex)
  );
  monthlyRawDataImaief = monthlyRawDataImaief.filter(
    (_, colIndex) => !unwantedImaiefIndex.includes(colIndex - inicioDeDatosImaief)
  );
  indicadoresImaief = indicadoresImaief.filter(
    (_, colIndex) => !unwantedImaiefIndex.includes(colIndex)
  );
  const unwantedItaeeIndex = [4, 5, 6, 7, 8];
  const inicioDeDatosItaee = 7;
  itaeeRawData = itaeeRawData.filter(
    (_, colIndex) => !unwantedItaeeIndex.includes(colIndex - inicioDeDatosItaee)
  );
  indicadoresItaee = indicadoresItaee.filter(
    (_, colIndex) => !unwantedItaeeIndex.includes(colIndex)
  );
  const [indicadorGraficaImaiefAnual, setIndicadorGraficaImaiefAnual] = useState(0);
  const [dataGraficaImaiefAnual, setDataGraficaImaiefAnual] = useState(anualRawDataImaief[0].slice(0, -1));
  useEffect(() => {
    setDataGraficaImaiefAnual(
      anualRawDataImaief[indicadorGraficaImaiefAnual].slice(0, -1)
    );
  }, [indicadorGraficaImaiefAnual]);
  const [indicadorGraficaImaiefMensual, setIndicadorGraficaImaiefMensual] = useState(0);
  const [dataGraficaImaiefMensual, setDataGraficaImaiefMensual] = useState(
    monthlyRawDataImaief[inicioDeDatosImaief].slice(
      largoDatosMonthlyImaief - 12,
      largoDatosMonthlyImaief
    )
  );
  useEffect(() => {
    setDataGraficaImaiefMensual(
      monthlyRawDataImaief[inicioDeDatosImaief + indicadorGraficaImaiefMensual].slice(largoDatosMonthlyImaief - 12, largoDatosMonthlyImaief)
    );
  }, [indicadorGraficaImaiefMensual]);
  const [indicadorGraficaItaee, setIndicadorGraficaItaee] = useState(0);
  const [dataGraficaItaee, setDataGraficaItaee] = useState(
    itaeeRawData[inicioDeDatosItaee].slice(
      largoDatosMonthlyItaee - 4,
      largoDatosMonthlyItaee
    )
  );
  useEffect(() => {
    setDataGraficaItaee(
      itaeeRawData[inicioDeDatosItaee + indicadorGraficaItaee].slice(
        largoDatosMonthlyItaee - 4,
        largoDatosMonthlyItaee
      )
    );
  }, [indicadorGraficaItaee]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 p-5 gap-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-2xl font-semibold ", children: [
      "Indicador Mensual de la Actividad Industrial por Entidad Federativa (IMAIEF)",
      /* @__PURE__ */ jsx("div", { className: "text-lg font-normal", children: "Coahuila de Zaragoza" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-normal", children: "Base 2018. Serie de enero 2003 a enero 2025" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Serie anual" }),
      /* @__PURE__ */ jsx(
        SelectComponent,
        {
          indicadorGrafica: indicadorGraficaImaiefAnual,
          setIndicadorGrafica: setIndicadorGraficaImaiefAnual,
          indicadores: indicadoresImaief
        }
      ),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: xDataAnualImaief,
          dataGrafica: dataGraficaImaiefAnual,
          color: "#2196f3"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: "Serie mensual" }),
      /* @__PURE__ */ jsx(
        SelectComponent,
        {
          indicadorGrafica: indicadorGraficaImaiefMensual,
          setIndicadorGrafica: setIndicadorGraficaImaiefMensual,
          indicadores: indicadoresImaief
        }
      ),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: xDataMonthlyImaief,
          dataGrafica: dataGraficaImaiefMensual,
          color: "#f28e2c"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-2xl font-semibold ", children: [
      "Indicador Trimestral de la Actividad Industrial por Economica Estatal (ITAEE)",
      /* @__PURE__ */ jsx("div", { className: "text-lg", children: "Coahuila de Zaragoza" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg", children: "Base 2018" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        SelectComponent,
        {
          indicadorGrafica: indicadorGraficaItaee,
          setIndicadorGrafica: setIndicadorGraficaItaee,
          indicadores: indicadoresItaee
        }
      ),
      /* @__PURE__ */ jsx(
        LineChartComponent,
        {
          xData: xDataItaee,
          dataGrafica: dataGraficaItaee,
          color: "#f44336"
        }
      )
    ] })
  ] }) });
}
XLSX.set_fs(fs);
async function loader$5({
  params
}) {
  const imaief = path.resolve("app/assets/docs/IMAIEF_19.xlsx");
  const imaiefBuffer = fs.readFileSync(imaief);
  const {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief
  } = processImaiefData(imaiefBuffer);
  const itaee = path.resolve("app/assets/docs/ITAEE_25.xlsx");
  const itaeeBuffer = fs.readFileSync(itaee);
  const {
    xDataItaee,
    itaeeRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee
  } = processItaeeData(itaeeBuffer);
  return {
    xDataAnualImaief,
    xDataMonthlyImaief,
    anualRawDataImaief,
    monthlyRawDataImaief,
    largoDatosMonthlyImaief,
    indicadoresImaief,
    xDataItaee,
    itaeeRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee
  };
}
const indLocActividadIndustrial = withComponentProps(function IndicadoresLocalesActividadIndustrial({
  loaderData
}) {
  return /* @__PURE__ */ jsx(ActividadIndustrial, {
    xDataAnualImaief: loaderData.xDataAnualImaief,
    xDataMonthlyImaief: loaderData.xDataMonthlyImaief,
    anualRawDataImaief: loaderData.anualRawDataImaief,
    monthlyRawDataImaief: loaderData.monthlyRawDataImaief,
    largoDatosMonthlyImaief: loaderData.largoDatosMonthlyImaief,
    indicadoresImaief: loaderData.indicadoresImaief,
    xDataItaee: loaderData.xDataItaee,
    itaeeRawData: loaderData.itaeeRawData,
    indicadoresItaee: loaderData.indicadoresItaee,
    largoDatosMonthlyItaee: loaderData.largoDatosMonthlyItaee
  });
});
const processImaiefData = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const indicadoresImaief = rawData.slice(7, 17).map((indi) => indi[0].trim());
  const anualDataIndex = rawData[5].map((cell, i) => cell === "Anual" ? i : false).filter((cell) => cell);
  const anualRawData = rawData.map((row) => row.filter((_, colIndex) => anualDataIndex.includes(colIndex))).slice(7, 17);
  const monthDataIndex = rawData[5].map((cell, i) => cell !== "Anual" ? i : false).filter((cell) => cell);
  const monthlyRawData = rawData.map((row) => row.filter((_, colIndex) => monthDataIndex.includes(colIndex)));
  let currentYear = 0;
  const years = rawData[4].map((cell) => {
    if (cell) {
      currentYear = Number(cell.trim().replace("P", "").replace("R", ""));
      return currentYear;
    } else {
      return currentYear;
    }
  });
  const yearsForAnualData = years.filter((_, colIndex) => anualDataIndex.includes(colIndex));
  const xDataAnualImaief = yearsForAnualData.map((year) => year.toString());
  const yearsForMonthlyData = years.filter((_, colIndex) => monthDataIndex.includes(colIndex));
  anualRawData[7].map((cell, i) => {
  });
  let ultimaCeldaConInfoMonthly = 0;
  monthlyRawData[7].map((cell, i) => {
    if (typeof cell === "number") {
      ultimaCeldaConInfoMonthly = i;
    }
  });
  ultimaCeldaConInfoMonthly += 1;
  const months = monthlyRawData[5].map((month) => month.replace("P", ""));
  const yearFromLast12 = yearsForMonthlyData.slice(ultimaCeldaConInfoMonthly - 12, ultimaCeldaConInfoMonthly);
  const last12Months = months.slice(ultimaCeldaConInfoMonthly - 12, ultimaCeldaConInfoMonthly);
  const xDataMonthly = yearFromLast12.map((year, index2) => `${year} ${last12Months[index2]}`);
  return {
    xDataAnualImaief,
    xDataMonthlyImaief: xDataMonthly,
    anualRawDataImaief: anualRawData,
    monthlyRawDataImaief: monthlyRawData,
    largoDatosMonthlyImaief: ultimaCeldaConInfoMonthly,
    indicadoresImaief
  };
};
const processItaeeData = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const indicadoresItaee = rawData.slice(7, 23).map((indi) => indi[0].trim());
  const triDataColumns = rawData[5].map((cell, i) => (cell == null ? void 0 : cell.includes("T")) ? i : false).filter((cell) => cell);
  const triRawData = rawData.map((row) => row.filter((_, colIndex) => triDataColumns.includes(colIndex))).slice(0, 23);
  let currentYear = 0;
  const years = rawData[4].map((cell) => {
    if (cell) {
      currentYear = Number(cell.trim().replace("P", "").replace("R", ""));
      return currentYear;
    } else {
      return currentYear;
    }
  });
  const yearsForTriData = years.filter((_, colIndex) => triDataColumns.includes(colIndex));
  let ultimaCeldaConInfoTri = 0;
  triRawData[7].map((cell, i) => {
    if (typeof cell === "number") {
      ultimaCeldaConInfoTri = i;
    }
  });
  ultimaCeldaConInfoTri += 1;
  const trimestres = triRawData[5].map((tri) => tri.replace("P", "").replace("R", ""));
  const yearFromLastTris = yearsForTriData.slice(ultimaCeldaConInfoTri - 4, ultimaCeldaConInfoTri);
  const last4Tris = trimestres.slice(ultimaCeldaConInfoTri - 4, ultimaCeldaConInfoTri);
  const xDataTris = yearFromLastTris.map((year, index2) => `${year} ${last4Tris[index2]}`);
  return {
    xDataItaee: xDataTris,
    itaeeRawData: triRawData,
    indicadoresItaee,
    largoDatosMonthlyItaee: ultimaCeldaConInfoTri
  };
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocActividadIndustrial,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
const BarChartComponent = (props) => {
  const { xData, dataGrafica, color } = props;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    BarChart,
    {
      xAxis: [{ data: xData }],
      series: [{ data: dataGrafica, color }],
      height: 500
    }
  ) });
};
function GraficasBarraICU(props) {
  const { ciudades, titulo, indicadoresData } = props;
  let data = [];
  for (let i = 0; i < indicadoresData[0].length; i++) {
    const flatData = indicadoresData.map((indicador) => indicador[i]).flat();
    data = [...data, flatData];
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 p-5 gap-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "xl:col-span-3 text-2xl font-semibold ", children: [
      "Indicadores en temas ",
      titulo
    ] }),
    data.map((indicador, index2) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: indicador[0] }),
      /* @__PURE__ */ jsx(
        BarChartComponent,
        {
          xData: ciudades,
          dataGrafica: indicador.slice(1),
          color: colors[index2]
        }
      )
    ] }, index2))
  ] }) });
}
XLSX.set_fs(fs);
async function loader$4({
  params
}) {
  const file = path.resolve("app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls");
  const fileBuffer = fs.readFileSync(file);
  const {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  } = processData$4(fileBuffer);
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
}
const indLocSeguridad = withComponentProps(function IndicadoresLocalesSeguridadDerecho({
  loaderData
}) {
  return /* @__PURE__ */ jsx(GraficasBarraICU, {
    ciudades: loaderData.ciudades,
    titulo: "de seguridad y derecho",
    indicadoresData: loaderData.indicadoresData
  });
});
const processData$4 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const ciudades = rawData.slice(1, 6).map((indi) => indi[0].trim());
  const indicadores2 = rawData[0].slice(1, 6);
  const indicadoresData = rawData.map((row) => row.slice(1, 6));
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
};
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocSeguridad,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
XLSX.set_fs(fs);
async function loader$3({
  params
}) {
  const file = path.resolve("app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls");
  const fileBuffer = fs.readFileSync(file);
  const {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  } = processData$3(fileBuffer);
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
}
const indLocAmbientales = withComponentProps(function IndicadoresLocalesAmbientales({
  loaderData
}) {
  return /* @__PURE__ */ jsx(GraficasBarraICU, {
    ciudades: loaderData.ciudades,
    titulo: "ambientales",
    indicadoresData: loaderData.indicadoresData
  });
});
const processData$3 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const ciudades = rawData.slice(1, 6).map((indi) => indi[0].trim());
  const indicadores2 = rawData[0].slice(6, 9);
  const indicadoresData = rawData.map((row) => row.slice(6, 9));
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
};
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocAmbientales,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
XLSX.set_fs(fs);
async function loader$2({
  params
}) {
  const file = path.resolve("app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls");
  const fileBuffer = fs.readFileSync(file);
  const {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  } = processData$2(fileBuffer);
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
}
const indLocEconomicos = withComponentProps(function IndicadoresLocalesEconomicos({
  loaderData
}) {
  return /* @__PURE__ */ jsx(GraficasBarraICU, {
    ciudades: loaderData.ciudades,
    titulo: "económicos",
    indicadoresData: loaderData.indicadoresData
  });
});
const processData$2 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const ciudades = rawData.slice(1, 6).map((indi) => indi[0].trim());
  const indicadores2 = rawData[0].slice(9, 16);
  const indicadoresData = rawData.map((row) => row.slice(9, 16));
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
};
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocEconomicos,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
XLSX.set_fs(fs);
async function loader$1({
  params
}) {
  const file = path.resolve("app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls");
  const fileBuffer = fs.readFileSync(file);
  const {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  } = processData$1(fileBuffer);
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
}
const indLocSociales = withComponentProps(function IndicadoresLocalesSociales({
  loaderData
}) {
  return /* @__PURE__ */ jsx(GraficasBarraICU, {
    ciudades: loaderData.ciudades,
    titulo: "sociales",
    indicadoresData: loaderData.indicadoresData
  });
});
const processData$1 = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const ciudades = rawData.slice(1, 6).map((indi) => indi[0].trim());
  const indicadores2 = rawData[0].slice(16, 26);
  const indicadoresData = rawData.map((row) => row.slice(16, 26));
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
};
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocSociales,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
XLSX.set_fs(fs);
async function loader({
  params
}) {
  const file = path.resolve("app/assets/docs/Tabla_Detallada_de_Indicadores_por_Ciudad.xls");
  const fileBuffer = fs.readFileSync(file);
  const {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  } = processData(fileBuffer);
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
}
const indLocCapacidadDeIn = withComponentProps(function IndicadoresLocalesCapacidadDeInnovacion({
  loaderData
}) {
  return /* @__PURE__ */ jsx(GraficasBarraICU, {
    ciudades: loaderData.ciudades,
    titulo: "de capacidad de innovación",
    indicadoresData: loaderData.indicadoresData
  });
});
const processData = (buffer) => {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames;
  const worksheet = workbook.Sheets[sheetName[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
    defval: null
  });
  const ciudades = rawData.slice(1, 6).map((indi) => indi[0].trim());
  const indicadores2 = rawData[0].slice(26);
  const indicadoresData = rawData.map((row) => row.slice(26));
  return {
    ciudades,
    indicadores: indicadores2,
    indicadoresData
  };
};
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: indLocCapacidadDeIn,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-N87_McYT.js", "imports": ["/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/index-BmAXdj_o.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DJBC_jou.js", "imports": ["/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/index-BmAXdj_o.js", "/assets/with-props-D6JVR6rt.js"], "css": ["/assets/root-DsMj9aVn.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/index-DrbOoP_o.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/camino": { "id": "routes/camino", "parentId": "root", "path": "camino", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/camino-IY3GoXZu.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/createSvgIcon-2CpfeZ1c.js", "/assets/Portal-DAHUK4v-.js", "/assets/MenuItem-DizM1Xn0.js", "/assets/index-BmAXdj_o.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/mapaInteractivo": { "id": "routes/mapaInteractivo", "parentId": "root", "path": "mapaInteractivo", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/mapaInteractivo-yOdpOEoE.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/index-BmAXdj_o.js", "/assets/NavBar-q7FAYSjc.js", "/assets/Portal-DAHUK4v-.js", "/assets/MenuItem-DizM1Xn0.js", "/assets/Select-DSR4TP5o.js", "/assets/createSvgIcon-2CpfeZ1c.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/mercadoFinanciero": { "id": "routes/mercadoFinanciero", "parentId": "root", "path": "mercado-financiero", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/mercadoFinanciero-CZY-TLQy.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/LineChartComponent-B3pzxnA8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/constants-CLcCBd1V.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/noticias": { "id": "routes/noticias", "parentId": "root", "path": "noticias", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/noticias-qw0LDbcZ.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "indicadoresNacionales/home": { "id": "indicadoresNacionales/home", "parentId": "root", "path": "indicadores-nacionales", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-Dup33k7W.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/SideBar-Cyx4q5Hc.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "indicadoresNacionales/layout": { "id": "indicadoresNacionales/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/layout-qA9YIQfm.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/SideBar-Cyx4q5Hc.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indNacActividadEconomica": { "id": "routes/indNacActividadEconomica", "parentId": "indicadoresNacionales/layout", "path": "indicadores-nacionales/actividad-economica", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indNacActividadEconomica-BAruOmUV.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/LineChartComponent-B3pzxnA8.js", "/assets/Select-DSR4TP5o.js", "/assets/MenuItem-DizM1Xn0.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/createSvgIcon-2CpfeZ1c.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indNacConfianzaEmpresarial": { "id": "routes/indNacConfianzaEmpresarial", "parentId": "indicadoresNacionales/layout", "path": "indicadores-nacionales/confianza-empresarial", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indNacConfianzaEmpresarial-Dn6szcqM.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/LineChartComponent-B3pzxnA8.js", "/assets/constants-CLcCBd1V.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indNacConfianzaConsumidor": { "id": "routes/indNacConfianzaConsumidor", "parentId": "indicadoresNacionales/layout", "path": "indicadores-nacionales/confianza-del-consumidor", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indNacConfianzaConsumidor-DYjZK_tE.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/LineChartComponent-B3pzxnA8.js", "/assets/constants-CLcCBd1V.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "indicadoresLocales/home": { "id": "indicadoresLocales/home", "parentId": "root", "path": "indicadores-locales", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-C_RRMr4-.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/SideBar-Cyx4q5Hc.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "indicadoresLocales/layout": { "id": "indicadoresLocales/layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/layout-CE44D12i.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/NavBar-q7FAYSjc.js", "/assets/SideBar-Cyx4q5Hc.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/MenuItem-DizM1Xn0.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocActividadIndustrial": { "id": "routes/indLocActividadIndustrial", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/actividad-industrial", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocActividadIndustrial-DNrC4OsI.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/LineChartComponent-B3pzxnA8.js", "/assets/Select-DSR4TP5o.js", "/assets/MenuItem-DizM1Xn0.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/createSvgIcon-2CpfeZ1c.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocSeguridad": { "id": "routes/indLocSeguridad", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/seguridad-y-derecho", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocSeguridad-BWHQcfUU.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/graficasBarraICU-BeNuZwCH.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/constants-CLcCBd1V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocAmbientales": { "id": "routes/indLocAmbientales", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/ambientales", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocAmbientales-BbHoBB1o.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/graficasBarraICU-BeNuZwCH.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/constants-CLcCBd1V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocEconomicos": { "id": "routes/indLocEconomicos", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/economicos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocEconomicos-Dm-EoN5I.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/graficasBarraICU-BeNuZwCH.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/constants-CLcCBd1V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocSociales": { "id": "routes/indLocSociales", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/sociales", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocSociales-DZ7FuvU1.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/graficasBarraICU-BeNuZwCH.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/constants-CLcCBd1V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/indLocCapacidadDeIn": { "id": "routes/indLocCapacidadDeIn", "parentId": "indicadoresLocales/layout", "path": "indicadores-locales/capacidad-de-innovacion", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/indLocCapacidadDeIn-DSkdsPOY.js", "imports": ["/assets/with-props-D6JVR6rt.js", "/assets/chunk-GNGMS2XR-CXDedMy8.js", "/assets/graficasBarraICU-BeNuZwCH.js", "/assets/Portal-DAHUK4v-.js", "/assets/index-BmAXdj_o.js", "/assets/ChartsWrapper-Clbu4njz.js", "/assets/constants-CLcCBd1V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-1a792373.js", "version": "1a792373" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/camino": {
    id: "routes/camino",
    parentId: "root",
    path: "camino",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/mapaInteractivo": {
    id: "routes/mapaInteractivo",
    parentId: "root",
    path: "mapaInteractivo",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/mercadoFinanciero": {
    id: "routes/mercadoFinanciero",
    parentId: "root",
    path: "mercado-financiero",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/noticias": {
    id: "routes/noticias",
    parentId: "root",
    path: "noticias",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "indicadoresNacionales/home": {
    id: "indicadoresNacionales/home",
    parentId: "root",
    path: "indicadores-nacionales",
    index: true,
    caseSensitive: void 0,
    module: route6
  },
  "indicadoresNacionales/layout": {
    id: "indicadoresNacionales/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/indNacActividadEconomica": {
    id: "routes/indNacActividadEconomica",
    parentId: "indicadoresNacionales/layout",
    path: "indicadores-nacionales/actividad-economica",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/indNacConfianzaEmpresarial": {
    id: "routes/indNacConfianzaEmpresarial",
    parentId: "indicadoresNacionales/layout",
    path: "indicadores-nacionales/confianza-empresarial",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/indNacConfianzaConsumidor": {
    id: "routes/indNacConfianzaConsumidor",
    parentId: "indicadoresNacionales/layout",
    path: "indicadores-nacionales/confianza-del-consumidor",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "indicadoresLocales/home": {
    id: "indicadoresLocales/home",
    parentId: "root",
    path: "indicadores-locales",
    index: true,
    caseSensitive: void 0,
    module: route11
  },
  "indicadoresLocales/layout": {
    id: "indicadoresLocales/layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/indLocActividadIndustrial": {
    id: "routes/indLocActividadIndustrial",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/actividad-industrial",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/indLocSeguridad": {
    id: "routes/indLocSeguridad",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/seguridad-y-derecho",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/indLocAmbientales": {
    id: "routes/indLocAmbientales",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/ambientales",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/indLocEconomicos": {
    id: "routes/indLocEconomicos",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/economicos",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/indLocSociales": {
    id: "routes/indLocSociales",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/sociales",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/indLocCapacidadDeIn": {
    id: "routes/indLocCapacidadDeIn",
    parentId: "indicadoresLocales/layout",
    path: "indicadores-locales/capacidad-de-innovacion",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
