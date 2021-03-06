import * as React from "react";
import { Box, Button, Modal, TextField, Typography } from "@material-ui/core";
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

export default function AddWork({ open, handleClose, apiGet }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = ({ title, description }) => {
    const user = { title, description, deploy_url: "https://kenziehub.me" };
    const token = JSON.parse(localStorage.getItem("KenzieHub:token"));
    console.log(user);
    handleClose();
    api
      .post("/users/works", user, {
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
        <Typography component="h1" sx={{ fontSize: "18px", fontWeight: "700" }}>
          Cadastrar Trabalho
        </Typography>
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Descrição"
          name="description"
          autoComplete="description"
          autoFocus
          {...register("description")}
          helperText={errors.description?.message}
          error={!!errors.description?.message}
        />

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
