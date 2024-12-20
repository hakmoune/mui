import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import ModalBookNow from "./ModalBookNow";

const BottomNav: React.FC = () => {
  return (
    <Paper sx={{ position: "fixed", bottom: 0, right: 0, left: 0 }}>
      <BottomNavigation>
        <ModalBookNow />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
