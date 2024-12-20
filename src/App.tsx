import "./App.css";
import TourCard from "./components/TourCard";
import NavBar from "./components/Navbar";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import cities from "./data/data.json";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />

      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              key={`${city.id}-${city.name}`}
              variant="h4"
              component="h2"
              sx={{ marginTop: 5, marginBottom: 3 }}
            >
              Top {city.name} tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard key={`${tour.id}-${tour.name}`} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default App;
