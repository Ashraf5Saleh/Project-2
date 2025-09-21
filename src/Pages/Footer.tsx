import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, LinkedIn, Google } from "@mui/icons-material";
function Footer() {
    return (
        <Grid container width={'100vw'} height={'auto'} bgcolor={'#303030'}
            paddingY={12.5} >
            <Container
                sx={{
                    px: '4',
                    position: 'center'
                }}>
                <Grid container size={12}>
                    <Grid container size={3}>
                        <Grid container size={12}>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/footer_logo.png"
                                alt="Footer Logo"
                                sx={{
                                    width: 'auto',
                                    height: "auto",
                                }}
                            />
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2">
                                © 2025 Sandwich Generator.
                            </Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2">All rights reserved.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container size={3}>
                        <Grid container size={12}>
                            <Typography variant="h6" pb={1}>More Info</Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                sx={{
                                    textSizeAdjust: 'body2',
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >
                                About Us
                            </Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                sx={{
                                    textSizeAdjust: 'body2',
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}>Food Market</Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                sx={{
                                    textSizeAdjust: 'body2',
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >Terms & Conditions</Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                sx={{
                                    textSizeAdjust: 'body2',
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            >Return Policy</Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography variant="body2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                sx={{
                                    textSizeAdjust: 'body2',
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                    },
                                }}
                            > Shipping Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container size={3}>
                        <Grid container size={12} pb={1}>
                            <Typography variant="h6" >Foodly Family</Typography>
                        </Grid>
                        <Grid container size={12}>

                            <Typography
                                component={Link}
                                to="/About"
                                sx={{
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                About </Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography
                                component={Link}
                                to="/Contact"
                                sx={{
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                Contact </Typography>
                        </Grid>
                        <Grid container size={12}>
                            <Typography
                                component={Link}
                                to="/Menu"
                                sx={{
                                    textDecoration: "none",
                                    color: "white",
                                    "&:hover": {
                                        color: "secondary.main",
                                        textDecoration: "underline",
                                    },
                                }}>
                                Menu
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container size={3}>
                        <Grid container size={12} pb={1}>
                            <Typography variant="h6" >Follow US</Typography>
                        </Grid>


                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "white",
                                },
                            }}
                        >
                            <Facebook />
                        </IconButton>

                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "white",
                                },
                            }}
                        >
                            <Twitter />
                        </IconButton>

                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "white",
                                },
                            }}
                        >
                            <LinkedIn />
                        </IconButton>

                        <IconButton
                            sx={{
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "yellow",
                                    color: "white",
                                },
                            }}
                        >
                            <Google />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container >
        </Grid >
    )
}

export default Footer;
