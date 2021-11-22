import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useHistory, Redirect } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import api from "../../services/api";
import Logo from "../../components/Logo";
import themeDefault from "../../styles/theme";
import { useState } from "react";

function Signup({ setAuth, auth }) {
  const history = useHistory();
  const [course_module, setCourse_module] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleChange = (event) => {
    setCourse_module(event.target.value);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    bio: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
    contact: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 6 digítos"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const handleSignIn = ({ name, email, password, bio, contact }) => {
    const user = {
      name,
      email,
      password,
      bio,
      contact,
      course_module,
    };
    // adicionar o course_module
    api
      .post("/users", user)
      .then((response) => {
        console.log(response.data);
        return history.push("/");
      })
      .catch((err) => toast.error("Usuário já cadastrado"));
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
            onSubmit={handleSubmit(handleSignIn)}
            noValidate
            sx={{
              mt: 4,
              mb: 8,
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
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("name")}
              helperText={errors.name?.message}
              error={!!errors.name?.message}
            />
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
              id="bio"
              label="Bio"
              name="bio"
              autoComplete="bio"
              autoFocus
              {...register("bio")}
              helperText={errors.bio?.message}
              error={!!errors.bio?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contato"
              name="contact"
              autoComplete="contact"
              autoFocus
              {...register("contact")}
              helperText={errors.contact?.message}
              error={!!errors.contact?.message}
            />
            {/* colocar botoes de seleção */}

            <FormControl component="fieldset">
              <FormLabel component="legend">Selecionar Módulo</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={course_module}
                onChange={handleChange}
                sx={{
                  justifyContent: "center",
                }}
              >
                <FormControlLabel
                  value="Primeiro módulo (Introdução ao Frontend)"
                  control={<Radio />}
                  label="Modulo 1"
                />
                <FormControlLabel
                  value="Segundo módulo (Frontend Avançado)"
                  control={<Radio />}
                  label="Modulo 2"
                />
                <FormControlLabel
                  value="Terceiro módulo (Introdução ao Backend)"
                  control={<Radio />}
                  label="Modulo 3"
                />
                <FormControlLabel
                  value="Quarto módulo (Backend Avançado)"
                  control={<Radio />}
                  label="Modulo 4"
                />
              </RadioGroup>
            </FormControl>

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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirmar Senha"
              type="password"
              id="confirm_password"
              autoComplete="confirm-password"
              {...register("confirm_password")}
              helperText={errors.confirm_password?.message}
              error={!!errors.confirm_password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="button"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
