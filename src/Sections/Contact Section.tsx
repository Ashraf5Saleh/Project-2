import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import theme from "../Theme";

function ContactSection() {
  return (
    <Box sx={{ py: 10, textAlign: "center", bgcolor: "white", width: "100%" }}>
      <Container maxWidth={false}>
        <Typography variant="h3" sx={{ fontWeight: 300, color: "grey.800", mb: 1 }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, color: "grey", mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
        <Box mb={3}>
          <img
            src="https://foodbooz.com/html/organic_food/multipage/assets/images/bottom_divider.png"
            alt="divider"
            style={{ margin: "0 auto" }}
          />
        </Box>

        <Grid container marginX={25} spacing={6} justifyContent="center" sx={{ mt: 4 }}>
          <Grid size={6}>
            <Box component="form">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Comment"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                  mt: 2, borderRadius: 2, px: 4,
                  "&:hover": { bgcolor: theme.palette.primary.main, }
                }}


              >
                Yes, let's do it
              </Button>
            </Box>
          </Grid>

          <Grid size={6} sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ mb: 2, color: "grey" }}>
              Weekly Schedule
            </Typography>

            <Typography color="grey" mt={2}>
              Monday - Friday 09:00 - 23:00
            </Typography>
            <Typography color="grey" mt={2}>
              Saturday 10:00 - 01:00
            </Typography>
            <Typography color="grey" mt={2}>
              Sunday 12:00 - 23:00
            </Typography>


            <Typography variant="h6" textAlign='left' sx={{ mt: 4, mb: 2, color: "grey" }}>
              121 king street, melbourne
              victoria 3000 Australia.
            </Typography>
            <Typography variant="h6" textAlign='left' sx={{ mt: 4, mb: 2, color: "grey" }}>
              info@hostiko.com
            </Typography>
            <Typography variant="h6" textAlign='left' sx={{ mt: 4, mb: 2, color: "grey" }}>
              (+1)123 456 7890
            </Typography>



          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
