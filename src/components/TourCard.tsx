import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Box, Rating, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: "body3" },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

interface TourCardProps {
  tour: {
    id: number;
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt={tour.name} className="img-card" />
          <Box sx={{ paddingX: 1 }}>
            <Box>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ fontSize: "small" }} />
              <Typography
                variant="body2"
                component="p"
                sx={{ marginLeft: 0.5 }}
              >
                {tour.duration} hours
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography
                variant="body2"
                component="p"
                sx={{ marginLeft: 0.5 }}
              >
                {tour.rating}
              </Typography>
              <Typography
                variant="body3"
                component="p"
                sx={{ marginLeft: 1.5 }}
              >
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="h3">
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
