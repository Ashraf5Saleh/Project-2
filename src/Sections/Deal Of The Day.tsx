// DealOfTheDay.tsx
import { Typography, Button, Container, Grid, Card, CardContent, CardMedia, } from "@mui/material";
import theme from "../Theme";

function DealOfTheDay() {
  return (
    <Grid container size={12} sx={{ py: 10, backgroundColor: "white", textAlign: "center" }}>
      <Container>
        <Typography
          variant="h3"
          color="black"
          sx={{ fontWeight: 300, mb: 5 }}
        >
          Deal of the Day
        </Typography>


        <Grid container size={12} spacing={4}>

          <Grid size={6} >
            <Card
              sx={{
                display: "flex",
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >

              <CardContent
                sx={{
                  flex: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                  textAlign: 'left'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 300, mb: 1, lineHeight: 1.2 }}
                >
                  Fresh Peach
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  $65.00
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Get this Offer
                </Button>
              </CardContent>

              <CardMedia component="img"
                image="https://foodbooz.com/html/organic_food/multipage/assets/images/fresh_peech.png"
                alt="Organic Grapefruit"
                sx={{
                  width: "auto",
                  mx: "auto",
                  borderRadius: 2,
                  backgroundColor: "white",
                }}
              />
            </Card>
          </Grid>

          <Grid size={6}>
            <Card
              sx={{
                display: "flex",
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  backgroundColor: "#fbb942",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                  textAlign: 'left'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 300, mb: 1, lineHeight: 1.2 }}
                >
                  Fresh Rasberry
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, }}>
                  $65.00
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "#fbb942",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Get this Offer
                </Button>
              </CardContent>

              <CardMedia component="img"
                image="https://foodbooz.com/html/organic_food/multipage/assets/images/fresh_resberry.png"
                alt="Organic Grapefruit"
                sx={{
                  width: "auto",
                  mx: "auto",
                  borderRadius: 2,
                  backgroundColor: "white",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default DealOfTheDay;
