import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  MobileStepper,
  Button,
  Slide,
  Grid,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import theme from "../Theme";


 const testimonials = [
    {
      name: "Anthony Deosa",
      role: "Doctor",
      image: "https://foodbooz.com/html/organic_food/multipage/assets/images/testimonial_img.png",
      text: "Lorem ipsum dolor sit amet, no utinam tritani omittam qui, mei oblique tacimates iudicabit no, id ius omnis veniam interpretaris."
    },
    {
      name: "Sarah Johnson",
      role: "Nutritionist",
      image: "https://foodbooz.com/html/organic_food/multipage/assets/images/testimonial_img.png",
      text: "Ridens quidam at eosmodus oblique euismod no Mei errem suscipit eu, ut eos facilisi platonem oportere. Ius fugit lucilius suavitate ea."
    },
    {
      name: "Mark Williams",
      role: "Fitness Coach",
      image: "https://foodbooz.com/html/organic_food/multipage/assets/images/testimonial_img.png",
      text: "Ex docendi antiopam indoctum mei, eam ad velit mucius graeco. Ridens quidam at eosmodus oblique euismod."
    }
  ];
  
 


function Testimonials() {
 
 const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const maxSteps = testimonials.length;

  const handleNext = () => {
    setDirection("left");
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setDirection("right");
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  const testimonial = testimonials[activeStep];
  return (
    <Grid container size={12} justifyContent="center" alignItems="center">
      <Box sx={{ py: 10, textAlign: "center", backgroundColor: "white", width: "100%" }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 300, color: "#333", mb: 1 }}>
            Client Testimonials
          </Typography>
          <Box mb={3}>
            <img
              src="https://foodbooz.com/html/organic_food/multipage/assets/images/testimonial_divider_node.png"
              alt="divider"
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
            }}
          >
            <Slide
              in={true}
              direction={direction}
              key={activeStep}
              mountOnEnter
              unmountOnExit
            >
              <Card
                elevation={3}
                sx={{
                  p: 4,
                  maxWidth: 800,
                  width: "100%",
                  borderRadius: 3,
                  bgcolor: "white",
                  boxShadow: "none",
                  border: "none",
                  mx: "auto",
                }}
              >
                <CardContent>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                    {testimonial.name}{" "}
                    <Typography component="span" variant="body2" sx={{ color: "#777", fontWeight: 300 }}>
                      ({testimonial.role})
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555", mt: 2, px: { xs: 2, md: 8 } }}>
                    {testimonial.text}
                  </Typography>
                </CardContent>
              </Card>
            </Slide>
          </Box>

          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ justifyContent: "center", mt: 10, bgcolor: "transparent" }}
            nextButton={
              <Button size="small" onClick={handleNext}>
                Next <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack}>
                <KeyboardArrowLeft /> Back
              </Button>
            }
          />
        </Container>
      </Box>
    </Grid>
  );
}

export default Testimonials;
