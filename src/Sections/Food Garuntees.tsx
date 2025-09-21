import { Box, Button, Grid, Typography } from "@mui/material";
import theme from "../Theme";

function FoodGuaruntees() {
    return (
        <Grid container justifyContent={'center'} size={12} paddingY={10} alignContent={'center'}
            alignItems={'center'} flexDirection={'column'} bgcolor={'white'}>
            <Typography variant="h4" color="black" gap={1}>Food Guaruntees</Typography>
            <Typography variant="h6" color="black" gap={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
            <Grid size={12} marginTop={5} >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src="https://foodbooz.com/html/organic_food/multipage/assets/images/bottom_divider.png"
                        alt="Logo"
                    />
                </Box>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid container size={3}  >
                    <Box
                        sx={{
                            p: 2,
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "auto",
                                height: "auto",
                                mx: "auto",
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/fresh_food.png"
                                alt="Fresh Food"
                                sx={{
                                    width: "auto", height: "auto", bgcolor: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.secondary.main }
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, color: "black", mb: 2 }}
                        >
                            Fresh Food
                        </Typography>

                        <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                "&:hover": { color: 'black', backgroundColor: theme.palette.secondary.main }
                            }}
                        >
                            Read More
                        </Button>
                    </Box>
                </Grid>
                <Grid container size={3}  >
                    <Box
                        sx={{
                            p: 2,
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "auto",
                                height: "auto",
                                mx: "auto",
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/organic_food.png"
                                alt="Fresh Food"
                                sx={{
                                    width: "auto", height: "auto", bgcolor: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.secondary.main }
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, color: "black", mb: 2 }}
                        >
                            100% Organic Food
                        </Typography>

                        <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                "&:hover": { color: 'black', backgroundColor: theme.palette.secondary.main }
                            }}
                        >
                            Read More
                        </Button>
                    </Box>
                </Grid>
                <Grid container size={3}  >
                    <Box
                        sx={{
                            p: 2,
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "auto",
                                height: "auto",
                                mx: "auto",
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/premium_quality.png"
                                alt="Fresh Food"
                                sx={{
                                    width: "auto", height: "auto", bgcolor: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.secondary.main }
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, color: "black", mb: 2 }}
                        >
                            Premium Quality
                        </Typography>

                        <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                "&:hover": { color: 'black', backgroundColor: theme.palette.secondary.main }
                            }}
                        >
                            Read More
                        </Button>
                    </Box>
                </Grid>
                <Grid container size={3} >
                    <Box
                        sx={{
                            p: 2,
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "auto",
                                height: "auto",
                                mx: "auto",
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src="https://foodbooz.com/html/organic_food/multipage/assets/images/fresh_food.png"
                                alt="Fresh Food"
                                sx={{
                                    width: "auto", height: "auto", bgcolor: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.secondary.main }
                                }}
                            />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 500, color: "black", mb: 2 }}
                        >
                            100% Natural
                        </Typography>

                        <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                "&:hover": { color: 'black', backgroundColor: theme.palette.secondary.main }
                            }}
                        >
                            Read More
                        </Button>
                    </Box>

                </Grid>
            </Grid>
        </Grid>
    )
}
export default FoodGuaruntees;