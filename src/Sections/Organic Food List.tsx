// FoodList.tsx
import { Box, Typography, Container, Grid, Card, CardContent, } from "@mui/material";
import theme from "../Theme";

function FoodList() {
    return (
        <Grid size={12} sx={{ py: 10, backgroundColor: "white", textAlign: "center" }}>
            <Container >
                <Typography
                    variant="h3"
                    sx={{ color: 'black', fontWeight: 300, mb: 1, }}
                >
                    Organic Food List
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "#777", fontSize: 18, lineHeight: "30px", mb: 3 }}
                >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
                <Box component="img" src="https://foodbooz.com/html/organic_food/multipage/assets/images/bottom_divider.png" alt="" sx={{ mb: 5 }} />

                <Grid container spacing={4} sx={{ mb: 5, mt: 5 }}>
                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>

                            <CardContent sx={{ textAlign: "right" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Fresh Raw Chioggia Beets
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$3.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/chioggia_beets.png"
                                alt="Chioggia Beets"
                                sx={{ width: 'auto', height: "auto", ml: "auto", mr: 3 }}
                            />
                        </Card>
                    </Grid>

                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/red_strawbarries.png"
                                alt="Red Strawberries"
                                sx={{ width: 'auto', height: "auto", mr: "auto", ml: 3 }}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Whole Red Strawberries
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$6.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={4} sx={{ mb: 5 }}>
                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>

                            <CardContent sx={{ textAlign: "right" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Fresh Vegetable Marrow
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$2.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/vegetable_marrow.png"
                                alt="Vegetable Marrow"
                                sx={{ width: 'auto', height: "auto", ml: "auto", mr: 3 }}
                            />
                        </Card>
                    </Grid>

                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/organic_chilli.png"
                                alt="Orange Chili Peppers"
                                sx={{ width: 'auto', height: "auto", mr: "auto", ml: 3 }}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Orange Chili Peppers and Slices
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$5.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>
                            <CardContent sx={{ textAlign: "right" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Whole and Half Fennel Bulb
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$7.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/fennel_bulb.png"
                                alt="Fennel Bulb"
                                sx={{ width: 'auto', height: "auto", ml: "auto", mr: 3 }}
                            />
                        </Card>
                    </Grid>

                    <Grid size={6}>
                        <Card sx={{
                            display: "flex",
                            p: 2,
                            boxShadow: "none",
                            border: "none",
                            background: "transparent"
                        }}>
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/tomato.png"
                                alt="Tomato"
                                sx={{ width: 'auto', height: "auto", mr: "auto", ml: 3 }}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                                <Typography variant="h6" sx={{ fontWeight: 500, color: "#333" }}>
                                    Organic Tomato
                                </Typography>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>$2.99</Typography>
                                <Typography sx={{ lineHeight: "24px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    <br /> sed do eiusmod tempor incididunt.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default FoodList;
