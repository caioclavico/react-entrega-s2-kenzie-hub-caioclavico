import {
  Container,
  CssBaseline,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Redirect } from "react-router-dom";
import Logo from "../../components/Logo";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import themeDefault from "../../styles/theme";

function Login({ auth, setAuth }) {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data.user);
        const { token, user } = response.data;
        localStorage.clear();
        localStorage.setItem("KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("KenzieHub:user", JSON.stringify(user));
        setAuth(true);
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Usuário não encontrado"));
    // johndoe@email.com
  };
  return (
    <ThemeProvider theme={themeDefault}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          maxWidth="500px"
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <Logo />
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
            sx={{
              mt: 4,
              p: "24px",
              pt: "40px",
              pb: "26px",
              border: "2px solid #f5f5f5",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="button"
              sx={{ mt: 3, mb: 2 }}
            >
              Logar
            </Button>
            <Typography
              component="p"
              sx={{
                fontSize: "14px",
                color: "#999999",
              }}
            >
              Criar um pagina para mostrar suas{" "}
              <span style={{ color: "#333333", fontSize: "14px" }}>
                habilidades metas e progresso
              </span>
            </Typography>
            <Button
              onClick={() => history.push("/signup")}
              type="button"
              fullWidth
              variant="buttonGray"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
