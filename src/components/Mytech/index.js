import {
  Box,
  Container,
  CssBaseline,
  Fab,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

function MyTech() {
  return (
    <>
      <CssBaseline />
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
            sx={{ fontSize: "24px", fontWeight: "700" }}
          >
            Minhas Tecnologias
          </Typography>
          <Fab size="small" color="secondary">
            <Add />
          </Fab>
        </Box>
      </Container>
    </>
  );
}

export default MyTech;
