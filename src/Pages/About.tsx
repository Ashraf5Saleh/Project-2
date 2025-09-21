import { Box, Grid, Typography } from "@mui/material";
import FoodGuaruntees from "../Sections/Food Garuntees";
import Nutritionist from "../Sections/Nutritionist";
import Testimonials from "../Sections/Client Testimonials";
import NutritionistSection from "../Sections/NutritionistSection";

function About() {
  return (
    <Grid
      container
      bgcolor="white"
      flexDirection="column"
      minHeight="40vh"
      justifyContent="center"
      alignItems="center"
      gap={3}
      pb={10}
    >
      <Box textAlign="center" my={10}>
        <Typography variant="h3" color="black" fontWeight={500}>
          About FoodBooz
        </Typography>
      </Box>

      <Box textAlign="center" mt={3}>
        <Typography variant="h4" color="black" mb={3}>
          Company Overview
        </Typography>
        <Box position="relative" mb={3}>
          <img
            src="https://foodbooz.com/html/organic_food/multipage/assets/images/testimonial_divider_node.png"
            alt="divider"
            style={{ margin: "0 auto", display: "block" }}
          />
        </Box>
      </Box>

      <Box textAlign="center" maxWidth="800px" px={2}>
        <Typography variant="h6" color="black" mt={5}>
          Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei oblique
          tacimates iudicabit no, id ius omnis veniam interpretaris. Suas quodsi
          timeam no mei. Ex docendi antiopam indoctum mei, eam ad velit mucius
          graeco. Ridens quidam at eos, modus oblique euismod no. Mei errem
          suscipit eu, ut eos facilisi platonem oportere. Ius fugit lucilius
          suavitate ea. Integre accumsan consectetuer usu et. Dico omnis
          adversarium ut per.
        </Typography>
      </Box>
      <FoodGuaruntees />
      <Nutritionist />
      <Testimonials />
      <NutritionistSection />
    </Grid>
  );
}

export default About;
