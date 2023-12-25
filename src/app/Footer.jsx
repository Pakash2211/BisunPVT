"use client";
import React from "react";
import { Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Spa } from "@mui/icons-material";

const Links = ["Home", "Our Services", "About us", "Contact us"];

function Footer() {
  return (
    <Container maxWidth>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img
            src="https://www.bisunelectric.in/wp-content/uploads/2022/05/Bisun-Final-Logo_W2-2048x781.png"
            alt="LOGO"
            srcset=""
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack>
            <Typography variant="h3" gutterBottom>
              Links
            </Typography>
            {Links.map((link) => (
              <Link href="#" underline="none" color="inherit">
                {link}
              </Link>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" gutterBottom>
            Rajkot
          </Typography>
          <Typography variant="subtitle1">
            Plot No. 103, Ruda Transport Nagar, Nr. Sat Hanuman, Ahmedabad
            Highway, Navagam, Rajkot - 360001
          </Typography>
          <Typography variant="subtitle1">Co: +91-94094 21304</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" gutterBottom>
            Ahmedabad
          </Typography>
          <Typography variant="subtitle1">
            New Address: 305, Pehel Lake View, Vaishnodevi Circle, Ahmedabad -
            382421
          </Typography>
          <Typography variant="subtitle1">
            Old Address: G8, Sankalp Arcade, Motera Road, Motera, Ahmedabad,
            Gujarat, 380005
          </Typography>
          <Typography variant="subtitle1">M: info@bisunelectric.in</Typography>
          <Typography variant="subtitle1">
            Co: +91-9687 333 811 / +91-915 700 6100
          </Typography>
        </Grid>
        <Grid item justifyContent={"flex-end"} xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </Stack>
        </Grid>
        <Grid item xs={12} justifyContent={"space-between"} display={"flex"}>
          <Typography variant="body1" component={'span'}>Copyright © 2022 Bisun Pvt. Ltd.</Typography>
          <Typography variant="body1" component={'span'}>Crafted with Love by Medi</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
