import { Box, Card, Container, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import ModifyWork from "../ModifyWork";

function MyWorkCards({ works, apiGet }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [workId, setWorkId] = useState("");

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: "30px", mb: "30px", backgroundColor: "#fff" }}
    >
      <ModifyWork
        handleClose={handleClose}
        open={open}
        apiGet={apiGet}
        workId={workId}
      />
      {works.map((item) => (
        <Card
          variant="boxCard"
          key={item.id}
          onClick={() => {
            handleOpen();
            setWorkId(item.id);
          }}
        >
          <Box display="flex">
            <Card variant="boxIcon" component="div">
              <Add />
            </Card>
            <Card variant="boxDetails" sx={{ justifyContent: "flex-start" }}>
              <Typography component="h3" variant="title">
                {item.title}
              </Typography>
              <Typography variant="description">{item.description}</Typography>
            </Card>
          </Box>
          <Card variant="lineEnd"></Card>
        </Card>
      ))}
    </Container>
  );
}

export default MyWorkCards;
