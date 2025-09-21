import { Box, Grid, Typography } from "@mui/material";
import ContactSection from "../Sections/Contact Section";

function Contact() {
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
                    Contact FoodBooz
                </Typography>
            </Box >
            <ContactSection />
            <Grid container  size={12}>
                <Box sx={{ width: "100%", height: '700px', display: "flex", justifyContent: "center" }}>
                    <iframe
                        width="100%"
                        height="100%    "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185838!2d144.95373631537512!3d-37.81720974201369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1536566151733"
                        title="YouTube video player"
                        style={{ border: "0", borderRadius: "8px" }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Contact;