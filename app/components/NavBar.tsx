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
import inegiLogo from "../assets/images/inegi_logo.jpg";
import banxicoLogo from "../assets/images/banxico.png";

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
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" }, gap: 10 }}
            >
              <Link to={"/"}>
                <Button>
                  <Box
                    component="img"
                    src={cidesieLogo}
                    sx={{ width: 60, height: 90 }}
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
                <Button variant="text" size="large">
                  <Typography fontWeight={600}>Acerca de</Typography>
                </Button>
              </Box>
              <Box alignContent={"center"}>
                <Button variant="text" size="large">
                  <Typography fontWeight={600}>Contacto</Typography>
                </Button>
              </Box>
            </Box>
            <div className="flex justify-end">
              {location.pathname.includes("indicadores") && (
                <Box
                  component="img"
                  src={inegiLogo}
                  sx={{ width: 90, height: 60 }}
                />
              )}
              {location.pathname.includes("mercado") && (
                <Box
                  component="img"
                  src={banxicoLogo}
                  sx={{ width: 100, height: 70 }}
                />
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </>
  );
};
