import { Button, Grid, Typography } from "@mui/material"
import theme from "../Theme"

function HeroSection() {
    return(
        <Grid container flexDirection={'column'} minHeight={'70vh'} bgcolor={theme.palette.primary.main} 
        justifyContent={'center'} alignItems={'center'} gap={3} size={12}>
            <Grid container flexDirection={'column'} alignItems={'center'} gap={0}>
                <Grid>
                      <Typography variant="h4" textAlign={'center'}>live organic for live healthy</Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" textAlign={'center'}>ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR</Typography>
                </Grid>
               
            </Grid>
             <Grid>
                    <Button variant="contained" sx={{':hover':{
                        bgcolor: "secondary.main", 
                    }}}>Purchase Now</Button>
                </Grid>
        </Grid>
    )
}
export default HeroSection;