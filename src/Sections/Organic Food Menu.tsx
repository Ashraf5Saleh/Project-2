import { Star } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "../Theme";
import { Grid } from "@mui/material";

function OrganicFoodMenu() {
    return (
        <Grid container flexDirection={'column'} minHeight={'70vh'} bgcolor={'white'}
            justifyContent={'center'} alignItems={'center'} gap={3} size={12} >
            <Grid container size={12} flexDirection={'column'} alignItems={'center'} gap={1}>
                <Typography variant="h4" color="black" marginBottom={1}  >
                    Organic Food Menu
                </Typography>
                <Typography variant="h6" color="black" marginBottom={5}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Typography>
            </Grid>
            <Grid size={12}  >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src="https://foodbooz.com/html/organic_food/multipage/assets/images/bottom_divider.png"
                        alt="Logo"
                    />
                </Box>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid>
                    <Card
                        sx={{
                            maxWidth: 300,
                            textAlign: "center",
                            borderRadius: 3,
                            boxShadow: 3,
                            mx: "auto",
                            p: 2,
                            height: 380,
                            "&:hover": { backgroundColor: theme.palette.secondary.main }
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQzK_oXsxgrTHbt_sH9UIhzVVC783i0SvVruMgmWZaFSK-BNLUQHEO8DtkKxZnp0nr32YOLSe45bkiXItVTCRvCV3LP2xVw_Tya4su68Ea-g"
                            alt="Organic Grapefruit"
                            sx={{
                                width: "70%",
                                mx: "auto",
                                borderRadius: 2,
                                p: 2,
                                backgroundColor: "white",

                            }}
                        />

                        <CardContent>
                            <Box display="flex" justifyContent="center" mb={1}>
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, color: "#333", mb: 1 }}
                            >
                                Organic Grapefruit
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#8bc24a" }}>
                                $3.00{" "}
                                <Typography
                                    component="span"
                                    sx={{ fontSize: 14, color: "gray", textDecoration: "line-through" }}
                                >
                                    $1.50
                                </Typography>
                            </Typography>

                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                                gap={2}
                                flexWrap="wrap"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        "&:hover": { bgcolor: theme.palette.primary.dark },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    Shop Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                        "&:hover": { borderColor: theme.palette.primary.dark, color: theme.palette.primary.dark, },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    View Cart
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid >
                    <Card
                        sx={{
                            maxWidth: 300,
                            textAlign: "center",
                            borderRadius: 3,
                            boxShadow: 3,
                            mx: "auto",
                            p: 2,
                            height: 380,
                            "&:hover": { backgroundColor: theme.palette.secondary.main }
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="data:image/jpeg;base64,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"
                            alt="Organic Grapefruit"
                            sx={{
                                width: "70%",
                                mx: "auto",
                                borderRadius: 2,
                                p: 2,
                                backgroundColor: "#fff",
                            }}
                        />

                        <CardContent>
                            <Box display="flex" justifyContent="center" mb={1}>
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, color: "#333", mb: 1 }}
                            >
                                Organic Kiwi
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#8bc24a" }}>
                                $3.00{" "}
                                <Typography
                                    component="span"
                                    sx={{ fontSize: 14, color: "gray", textDecoration: "line-through" }}
                                >
                                    $1.50
                                </Typography>
                            </Typography>

                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                                gap={2}
                                flexWrap="wrap"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        "&:hover": { bgcolor: theme.palette.primary.dark },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    Shop Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                        "&:hover": { borderColor: theme.palette.primary.dark, color: theme.palette.primary.dark, },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    View Cart
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid >
                    <Card
                        sx={{
                            maxWidth: 300,
                            textAlign: "center",
                            borderRadius: 3,
                            boxShadow: 3,
                            mx: "auto",
                            p: 2,
                            height: 380,
                            "&:hover": { backgroundColor: theme.palette.secondary.main }
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="data:image/jpeg;base64,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"
                            alt="Organic Grapefruit"
                            sx={{
                                width: "70%",
                                mx: "auto",
                                borderRadius: 2,
                                p: 2,
                                backgroundColor: "#fff",

                            }}
                        />

                        <CardContent>
                            <Box display="flex" justifyContent="center" mb={1}>
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, color: "#333", mb: 1 }}
                            >
                                Organic Capsicum
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#8bc24a" }}>
                                $3.00{" "}
                                <Typography
                                    component="span"
                                    sx={{ fontSize: 14, color: "gray", textDecoration: "line-through" }}
                                >
                                    $1.50
                                </Typography>
                            </Typography>

                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                                gap={2}
                                flexWrap="wrap"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        "&:hover": { bgcolor: theme.palette.primary.dark },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    Shop Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                        "&:hover": { borderColor: theme.palette.primary.dark, color: theme.palette.primary.dark, },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    View Cart
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  >
                    <Card
                        sx={{
                            maxWidth: 300,
                            textAlign: "center",
                            borderRadius: 3,
                            boxShadow: 3,
                            mx: "auto",
                            p: 2,
                            height: 380,
                            "&:hover": { backgroundColor: theme.palette.secondary.main }
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="data:image/jpeg;base64,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"
                            alt="Organic Grapefruit"
                            sx={{
                                width: "70%",
                                mx: "auto",
                                borderRadius: 2,
                                p: 2,
                                backgroundColor: "#fff",

                            }}
                        />

                        <CardContent>
                            <Box display="flex" justifyContent="center" mb={1}>
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                                <Star sx={{ color: theme.palette.secondary.light }} />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, color: "#333", mb: 1 }}
                            >
                                Organic Tomato
                            </Typography>

                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#8bc24a" }}>
                                $3.00{" "}
                                <Typography
                                    component="span"
                                    sx={{ fontSize: 14, color: "gray", textDecoration: "line-through" }}
                                >
                                    $1.50
                                </Typography>
                            </Typography>

                            <Box
                                mt={2}
                                display="flex"
                                justifyContent="center"
                                gap={2}
                                flexWrap="wrap"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: theme.palette.primary.main,
                                        "&:hover": { bgcolor: theme.palette.primary.dark },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    Shop Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main,
                                        "&:hover": { borderColor: theme.palette.primary.dark, color: theme.palette.primary.dark, },
                                        borderRadius: "20px",
                                        textTransform: "none",
                                    }}
                                >
                                    View Cart
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    )
}
export default OrganicFoodMenu;