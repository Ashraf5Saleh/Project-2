import { Grid } from "@mui/material"
import HeroSection from "../Sections/HeroSection";
import OrganicFoodMenu from "../Sections/Organic Food Menu";
import FoodGuaruntees from "../Sections/Food Garuntees";
import DealOfTheDay from "../Sections/Deal Of The Day";
import FoodList from "../Sections/Organic Food List";
import NutritionistSection from "../Sections/NutritionistSection";
import Testimonials from "../Sections/Client Testimonials";
import ContactSection from "../Sections/Contact Section";
import Nutritionist from "../Sections/Nutritionist";

function Home() {
    return (
        <Grid container width={'100vw'} height={'auto'}  >
            <HeroSection />
            <OrganicFoodMenu />
            <FoodGuaruntees />
            <DealOfTheDay />
            <FoodList />
            <Nutritionist />
            <Testimonials />
            <NutritionistSection />
            <ContactSection />
        </Grid>
    )
}

export default Home;