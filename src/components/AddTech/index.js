import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #F5F5F5",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function AddTech({ open, handleClose, apiGet }) {
  const [status, setStatus] = React.useState("Iniciante");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = ({ title }) => {
    const user = { title, status };
    const token = JSON.parse(localStorage.getItem("KenzieHub:token"));
    console.log(user);

    handleClose();
    api
      .post("/users/techs", user, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada com sucesso");
        apiGet();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit(handleSignIn)} sx={style}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Nome"
          name="title"
          autoComplete="title"
          autoFocus
          {...register("title")}
          helperText={errors.title?.message}
          error={!!errors.title?.message}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={status}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Iniciante"
              control={<Radio />}
              label="Iniciante"
            />
            <FormControlLabel
              value="Intermediário"
              control={<Radio />}
              label="Intermediário"
            />
            <FormControlLabel
              value="Avançado"
              control={<Radio />}
              label="Avançado"
            />
          </RadioGroup>
        </FormControl>

        <Button type="submit" fullWidth variant="button" sx={{ mt: 3, mb: 2 }}>
          Cadastrar
        </Button>
        {/* <Button
          //   onClick={() => history.push("/signup")}
          type="button"
          fullWidth
          variant="buttonGray"
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Excluir
        </Button> */}
      </Box>
    </Modal>
  );
}
