import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      style={{ height: "85vh", backgroundColor: theme.palette.background.default }}
    >
      <Grid item>
        <Typography style={{ color: theme.palette.text.primary }}>Home</Typography>
      </Grid>
    </Grid>
  );
};

export default React.memo(Home);
