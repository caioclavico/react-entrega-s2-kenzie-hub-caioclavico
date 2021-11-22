import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Fab,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import AddWork from "../AddWork";

function MyWork({ apiGet }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline />
      <AddWork handleClose={handleClose} open={open} apiGet={apiGet} />
      <Container
        component="main"
        maxWidth="xs"
        sx={{ p: "30px", pb: 0, mt: 8, backgroundColor: "#fff" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="h1"
            sx={{ fontSize: "22px", fontWeight: "700" }}
          >
            Meus Trabalhos
          </Typography>
          <Fab size="small" color="primary" onClick={handleOpen}>
            <Add />
          </Fab>
        </Box>
      </Container>
    </>
  );
}

export default MyWork;
