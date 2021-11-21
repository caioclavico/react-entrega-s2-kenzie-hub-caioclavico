import { Box, Card, Container, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";

function MyWorkCards({ works }) {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: "30px", backgroundColor: "#fff" }}
    >
      {works.map((item) => (
        <Card variant="boxCard" key={item.id}>
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
