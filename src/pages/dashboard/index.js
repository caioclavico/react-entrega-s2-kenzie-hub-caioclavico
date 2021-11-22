import {
  Container,
  CssBaseline,
  Avatar,
  Toolbar,
  AppBar,
  Box,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Logo from "../../components/Logo";
import MyTech from "../../components/Mytech";
import MyTechCards from "../../components/MyTechCards";
import MyWork from "../../components/MyWork";
import MyWorkCards from "../../components/MyWorkCards";
import themeDb from "../../styles/themeDb";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Dashboard({ auth }) {
  //   const [profile, setProfile] = useState([]);
  const [techs, setTechs] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setTechs(JSON.parse(localStorage.getItem("KenzieHub:user")).techs);
  }, []);

  useEffect(() => {
    setWorks(JSON.parse(localStorage.getItem("KenzieHub:user")).works);
  }, []);
  if (!auth) {
    return <Redirect to="/" />;
  }
  function apiGet() {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("KenzieHub:user")).id}`)
      .then((response) => {
        localStorage.setItem("Kenzie-Hub:user", JSON.stringify(response.data));
        setWorks(response.data.works);
        setTechs(response.data.techs);
      });
  }

  return (
    <ThemeProvider theme={themeDb}>
      <CssBaseline />
      <Container
        sx={{
          p: 0,
          "@media (min-width:780px)": {
            p: "0px 115px",
          },
        }}
      >
        <AppBar position="relative" sx={{ borderRadius: 2 }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#fff",
              borderRadius: 2,
            }}
          >
            <Logo />
            <Avatar />
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "@media (min-width:1200px)": {
              flexWrap: "nowrap",
            },
          }}
        >
          <Container>
            <MyTech apiGet={apiGet} />
            <MyTechCards techs={techs} />
          </Container>
          <Container>
            <MyWork apiGet={apiGet} />
            <MyWorkCards works={works} />
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
