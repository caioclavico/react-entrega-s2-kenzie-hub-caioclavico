import { Box, Card, Container, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import ModifyTech from "../ModifyTech";

function MyTechCards({ techs, apiGet }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [techId, setTechId] = useState("");

  console.log(techId);
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: "30px", backgroundColor: "#fff" }}
    >
      <ModifyTech
        handleClose={handleClose}
        open={open}
        apiGet={apiGet}
        techId={techId}
      />
      {techs.map((item) => (
        <Card
          variant="boxCard"
          color="secondary"
          key={item.id}
          onClick={() => {
            handleOpen();
            setTechId(item.id);
          }}
        >
          <Box display="flex">
            <Card variant="boxIcon" component="div" color="secondary">
              <Add />
            </Card>
            <Card variant="boxDetails">
              <Typography component="h3" variant="title">
                {item.title}
              </Typography>
              <Typography variant="status" color="secondary">
                {item.status}
              </Typography>
            </Card>
          </Box>
          <Card variant="lineEnd"></Card>
        </Card>
      ))}
    </Container>
  );
}

export default MyTechCards;
