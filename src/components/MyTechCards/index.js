import { Box, Card, Container, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";

function MyTechCards({ techs }) {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ p: "30px", backgroundColor: "#fff" }}
    >
      {techs.map((item) => (
        <Card variant="boxCard" color="secondary" key={item.id}>
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
