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

const TourCard: React.FC = () => {
  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src="https://www.pelago.com/img/products/ID-Indonesia/bali-iconic-instagram-tour/1115-0741_bali-iconic-instagram-tour-indonesia-pelago0.jpg"
            alt="bali"
            className="img-card"
          />
          <Box sx={{ paddingX: 1 }}>
            <Box>
              <Typography variant="subtitle1" component="h2">
                Immerse into the falls
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
                5 hours
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
                value={2.5}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography
                variant="body2"
                component="p"
                sx={{ marginLeft: 0.5 }}
              >
                2.5
              </Typography>
              <Typography
                variant="body3"
                component="p"
                sx={{ marginLeft: 1.5 }}
              >
                (465 reviews)
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="h3">
                From C $280
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
