import { Box, Grid, Typography } from "@mui/material";
import OrganicFoodMenu from "../Sections/Organic Food Menu";
import DealOfTheDay from "../Sections/Deal Of The Day";
import FoodList from "../Sections/Organic Food List";
import Nutritionist from "../Sections/Nutritionist";

function MenuPage() {
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
                   Organic Menu
                </Typography>
            </Box>
            <OrganicFoodMenu />
            <FoodList />
            <DealOfTheDay />
            <Nutritionist />
        </Grid>
    )
}

export default MenuPage;