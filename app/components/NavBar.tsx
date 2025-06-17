import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import cidesieLogo from "../assets/images/Logo_CIDESIE.png";
import ctcLogo from "../assets/images/ctc_logo.jpeg";
import inegiLogo from "../assets/images/inegi_logo.jpg";
import banxicoLogo from "../assets/images/banxico.png";
import imcoLogo from "../assets/images/IMCO_logo.png";
import denueLogo from "../assets/images/denue.jpg";

const indicadores = [
  ["Nacionales", "indicadores-nacionales"],
  ["Locales", "indicadores-locales"],
  ["Mercado Financiero", "mercado-financiero"],
];

export const NavBar = () => {
  const [anchorIndicadores, setAnchorIndicadores] =
    useState<null | HTMLElement>(null);

  const handleOpenIndicadorMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorIndicadores(event.currentTarget);
  };

  const handleCloseIndicadorMenu = () => {
    setAnchorIndicadores(null);
  };
  const location = useLocation();
  console.log();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                gap: { lg: 5, xl: 10 },
              }}
            >
              <Link to={"/"}>
                <Button>
                  <Box
                    component="img"
                    src={ctcLogo}
                    sx={{ width: 130, height: 90 }}
                  />
                </Button>
              </Link>

              <Box alignContent={"center"}>
                <Button
                  variant="text"
                  sx={{}}
                  size="large"
                  onClick={handleOpenIndicadorMenu}
                >
                  <Typography fontWeight={600}>Indicadores</Typography>
                </Button>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorIndicadores}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorIndicadores)}
                onClose={handleCloseIndicadorMenu}
              >
                {indicadores.map((indicador, index) => (
                  <Link to={`/${indicador[1]}`} key={index}>
                    <MenuItem
                      key={indicador[0]}
                      onClick={handleCloseIndicadorMenu}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {indicador[0]}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box alignContent={"center"}>
                <Button variant="text" size="large">
                  <Typography fontWeight={600}>
                    Oportunidades de Inversión
                  </Typography>
                </Button>
              </Box>
              <Box alignContent={"center"}>
                <Link to={"/mapaInteractivo"}>
                  <Button variant="text" size="large">
                    <Typography fontWeight={600}>Mapa Interactivo</Typography>
                  </Button>
                </Link>
              </Box>
              <Box alignContent={"center"}>
                <a
                  href={"Noticias.html"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="text" size="large">
                    <Typography fontWeight={600}>Noticias</Typography>
                  </Button>
                </a>
              </Box>
              <Box alignContent={"center"}>
                <Link to={"/acercaDeNosotros"}>
                  <Button variant="text" size="large">
                    <Typography fontWeight={600}>Acerca de</Typography>
                  </Button>
                </Link>
              </Box>
              <Box alignContent={"center"}>
                <Button variant="text" size="large">
                  <Typography fontWeight={600}>Contacto</Typography>
                </Button>
              </Box>
              <div className="flex justify-end items-center gap-2">
                {location.pathname.includes("indicadores") && (
                  <Link to={"https://www.inegi.org.mx/default.html"}>
                    <Box
                      component="img"
                      src={inegiLogo}
                      sx={{ width: 90, height: 60 }}
                    />
                  </Link>
                )}
                {location.pathname.includes("mercado") && (
                  <Link to={"https://www.banxico.org.mx/"}>
                    <Box
                      component="img"
                      src={banxicoLogo}
                      sx={{ width: 100, height: 70 }}
                    />
                  </Link>
                )}
                {location.pathname.includes("indicadores-locales") && (
                  <Link to={"https://imco.org.mx/"}>
                    <Box
                      component="img"
                      src={imcoLogo}
                      sx={{ width: 100, height: 70 }}
                    />
                  </Link>
                )}
                {location.pathname.includes("mapa") && (
                  <Link to={"https://www.inegi.org.mx/app/mapa/denue/"}>
                    <Box
                      component="img"
                      src={denueLogo}
                      sx={{ width: 100, height: 70 }}
                    />
                  </Link>
                )}
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </>
  );
};
