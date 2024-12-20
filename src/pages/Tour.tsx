import { Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import AccordionUsage from "../components/AccordionUsage";
import BottomNav from "../components/BottomNav";

const Tour: React.FC = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ mt: 3 }}>
          Explore the World in Vegas
        </Typography>

        <Box sx={{ display: "flex", mt: 3 }}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            height={325}
          />
          <ImageCollage />
        </Box>

        <Box>
          <Typography variant="h6" component="h4" sx={{ marginTop: 3 }}>
            About This ticket
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginY: 3 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            voluptates rem quos delectus debitis earum modi, ipsum veritatis.
            Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
            omnis reprehenderit blanditiis quis incidunt minima voluptatibus
            illum quam corporis libero fugiat doloremque. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Exercitationem officiis commodi
            beatae animi incidunt necessitatibus aut provident ad ex. Saepe!
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 10 }}>
          <Typography variant="h6" component="h4" sx={{ marginY: 3 }}>
            Frequently Asked Question
          </Typography>
          <AccordionUsage />
        </Box>
      </Container>

      <BottomNav />
    </>
  );
};

export default Tour;
