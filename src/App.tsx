import "./App.css";
import TourCard from "./components/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const App: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
};

export default App;
