import "./App.css";
import { Typography } from "@mui/material";
import TourCard from "./components/TourCard";

const App: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Test MUI</Typography>
      <TourCard />
    </>
  );
};

export default App;
