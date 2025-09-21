import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";
import { Card, CardContent, Typography, Box, Grid, CardMedia, IconButton } from "@mui/material";
import theme from "../Theme";

export default function Nutritionist() {
  return (

    <Grid container bgcolor={'white'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} size={12} pb={3}>
      <Grid size={12} justifyContent={'center'} alignContent={'center'} alignItems={'center'} >
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 300, color: "#333", mb: 1 }}>
            Our Nutritionist
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18, color: "#777", mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </Typography>
        </Box>
        <Box component="img" src="https://foodbooz.com/html/organic_food/multipage/assets/images/bottom_divider.png"
          alt=""
          sx={{ mb: 5, display: 'block', mx: 'auto' }} />
      </Grid>

      <Box
        sx={{
          position: "relative",
          width: 300,
          height: 350,
          marginX: 1,
          "&:hover .front": { opacity: 0 },
          "&:hover .back": { opacity: 1 },
        }}
      >
        <Card
          className="front"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 1,
            boxShadow: "none",
            border: "none",
          }}
        >
          <CardMedia component="img"
            image="https://foodbooz.com/html/organic_food/multipage/assets/images/nutritionist_img01.png"
            alt="Organic Grapefruit"
            sx={{
              width: "auto",
              mx: "auto",
              borderRadius: 2,
              backgroundColor: "white",
            }}
          />
          <CardContent>
            <Typography variant="h6" align="center" color="primary">Aalis Dani</Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Nutritionist
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="back"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 0,
            bgcolor: theme.palette.secondary.main
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 400 }}>
              Samideman
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Nutritionist
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 14, mb: 2, lineHeight: "22px" }}
            >
              Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei
              oblique tacimates iudicabit no, id ius omnis veniam
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: 300,
          height: 350,
          marginX: 1,
          "&:hover .front": { opacity: 0 },
          "&:hover .back": { opacity: 1 },
        }}
      >
        <Card
          className="front"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 1,
            boxShadow: "none",
            border: "none",
          }}
        >
          <CardMedia component="img"
            image="https://foodbooz.com/html/organic_food/multipage/assets/images/nutritionist_img02.png"
            alt="Organic Grapefruit"
            sx={{
              width: "auto",
              mx: "auto",
              borderRadius: 2,
              backgroundColor: "white",
            }}
          />
          <CardContent>
            <Typography variant="h6" align="center" color="primary">Haiery Jon</Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Nutritionist
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="back"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 0,
            bgcolor: theme.palette.secondary.main
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 400 }}>
              Samideman
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Nutritionist
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 14, mb: 2, lineHeight: "22px" }}
            >
              Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei
              oblique tacimates iudicabit no, id ius omnis veniam
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: 300,
          height: 350,
          marginX: 1,
          "&:hover .front": { opacity: 0 },
          "&:hover .back": { opacity: 1 },
        }}
      >
        <Card
          className="front"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 1,
            boxShadow: "none",
            border: "none",
          }}
        >
          <CardMedia component="img"
            image="https://foodbooz.com/html/organic_food/multipage/assets/images/nutritionist_img03.png"
            alt="Organic Grapefruit"
            sx={{
              width: "auto",
              mx: "auto",
              borderRadius: 2,
              backgroundColor: "white",
            }}
          />
          <CardContent>
            <Typography variant="h6" align="center" color="primary">Samideman</Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Nutritionist
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="back"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 0,
            bgcolor: theme.palette.secondary.main
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 400 }}>
              Samideman
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Nutritionist
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 14, mb: 2, lineHeight: "22px" }}
            >
              Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei
              oblique tacimates iudicabit no, id ius omnis veniam
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: 300,
          height: 350,
          marginX: 1,
          "&:hover .front": { opacity: 0 },
          "&:hover .back": { opacity: 1 },
        }}
      >
        <Card
          className="front"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 1,
            boxShadow: "none",
            border: "none",
          }}
        >
          <CardMedia component="img"
            image="https://foodbooz.com/html/organic_food/multipage/assets/images/nutritionist_img04.png"
            alt="Organic Grapefruit"
            sx={{
              width: "auto",
              mx: "auto",
              borderRadius: 2,
              backgroundColor: "white",
            }}
          />
          <CardContent>
            <Typography variant="h6" align="center" color="primary">Jaseka</Typography>
            <Typography variant="body2" align="center" color="text.secondary">
              Nutritionist
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="back"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "opacity 0.5s ease",
            opacity: 0,
            bgcolor: theme.palette.secondary.main
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 400 }}>
              Samideman
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
              Nutritionist
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: 14, mb: 2, lineHeight: "22px" }}
            >
              Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei
              oblique tacimates iudicabit no, id ius omnis veniam
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
