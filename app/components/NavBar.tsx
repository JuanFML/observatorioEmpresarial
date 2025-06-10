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
import { Link } from "react-router";
import cidesieLogo from "../assets/images/Logo_CIDESIE.png";
const pages = ["Products", "Pricing", "Blog"];
const settings = [
  "Manufactura",
  "Comercio",
  "Servicios",
  "Finanzas",
  "Digital",
  "Ambiente y sostenibilidad",
];

const indicadores = [
  ["Nacionales", "indicadores-nacionales"],
  ["Locales", "indicadores-locales"],
  ["Mercado Financiero", "mercado-financiero"],
];

export const NavBar = () => {
  const [anchorSectores, setAnchorSectores] = useState<null | HTMLElement>(
    null
  );
  const [anchorIndicadores, setAnchorIndicadores] =
    useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorSectores(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorSectores(null);
  };

  const handleOpenIndicadorMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorIndicadores(event.currentTarget);
  };

  const handleCloseIndicadorMenu = () => {
    setAnchorIndicadores(null);
  };

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
                  onClick={handleOpenUserMenu}
                >
                  <Typography fontWeight={600}>Sectores</Typography>
                </Button>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorSectores}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorSectores)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
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
                {indicadores.map((indicador) => (
                  <Link to={`/${indicador[1]}`}>
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
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </>
  );
};
