import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/IMG_6952.JPG";
import image2 from "../../images/IMG_7410.JPG";
import image3 from "../../images/IMG_7413.JPG";
import image4 from "../../images/IMG_7429.JPG";
import image5 from "../../images/IMG_9746.JPG";
import image6 from "../../images/IMG_9761.JPG";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "Women's Fellowship", link: "#Womensministry",about:"To equip women to fulfill their Godly roles in fellowship and service in the Lord Jesus Christ, according to the Word of God by the power of the Holy Spirit." , contact:"Want to know more about this contact Dr. Keren Michael ",contact_no:"8147575456 " },
    { url: image2, title: "Men's Fellowship ", link: "#Mensministry" },
    { url: image3, title: "Youth", link: "" },
    { url: image4, title: "Teens", link: "" },
    { url: image5, title: "Kids", link: "" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Contents",
              heading: "How we serve",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>
                    <Typography className={classes.overlaybody}>
                      {item.about}
                    </Typography>
                    <Typography className={classes.overlaybody}>
                      {item.contact}
                    </Typography>
                    <Typography className={classes.overlaybody}>
                      {item.contact_no}
                    </Typography>

                    <Button href={item.link} variant="contained">Link</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
