import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import theme from "../Theme";

const posts = [
  {
    id: 1,
    date: "01 Dec, 2018",
    image: "https://foodbooz.com/html/organic_food/multipage/assets/images/blog_img01.png",
    title: "Do you offer internships or externships.",
    description: "Excepteur sint occaecat cupidatat non mollit anim id est laborum.",
  },
  {
    id: 2,
    date: "01 Dec, 2018",
    image: "https://foodbooz.com/html/organic_food/multipage/assets/images/blog_img02.png",
    title: "Do you offer internships or externships.",
    description: "Excepteur sint occaecat cupidatat non mollit anim id est laborum.",
  },
  {
    id: 3,
    date: "01 Dec, 2018",
    image: "https://foodbooz.com/html/organic_food/multipage/assets/images/blog_img03.png",
    title: "Do you offer internships or externships.",
    description: "Excepteur sint occaecat cupidatat non mollit anim id est laborum.",
  },
];

function NutritionistSection() {
  return (
    <Box sx={{ py: 10, textAlign: "center", bgcolor: "white", width: "100%" }}>
      <Container maxWidth={false}>
        <Typography variant="h3" sx={{ fontWeight: 300, color: "grey.800", mb: 1 }}>
          Our Nutritionist
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, color: "grey", mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
        <Box mb={3}>
          <img
            src="assets/images/bottom_divider.png"
            alt="divider"
            style={{ margin: "0 auto" }}
          />
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {posts.map((post) => (
            <Grid key={post.id}>
              <Card sx={{ textAlign: "left", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ px: 0, pt: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: theme.palette.secondary.main, mb: 2 }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "grey.800", mb: 2 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey", mb: 2 }}>
                    {post.description}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      p: 0,
                      fontWeight: 600,
                      textTransform: "none",
                      color: "primary.main",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default NutritionistSection;
