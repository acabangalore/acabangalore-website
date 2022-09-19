import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/IMG_6827.JPG";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
// import AcUnitIcon from "@material-ui/icons/AcUnit";
// import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
// import ToysIcon from "@material-ui/icons/Toys";
// import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Facebook",
      description: "https://www.youtube.com/user/michaelthomasraj",
      icon: <FacebookIcon />,
    },
    {
      title: "Youtube",
      description: "https://www.youtube.com/user/michaelthomasraj",
      icon: <YouTubeIcon />,
    },
    {
      title: "Twitter",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <TwitterIcon />,
    },
    {
      title: "Telegram",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <TelegramIcon />,
    },
  ];
  return (
    <Box className={classes.section} id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=" about us"
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} className={classes.section}>
              {RenderSectionHeading({
                smallText: "ABOUT US",
                heading: "MICHAEL THOMASRAJ",
                description:
                  "Pastor Michael Thomasraj is the second son of Pastor Thomasraj, the senior pastor of ACA Avadi. For 17 years he has been the pastor of ACA Church, Bangalore. His other passion had been teaching New Testament Greek to theological students for 13 years. He has been developing Bible teachers for the church through his initiative, Renewal Bible College. He likes expository preaching and trains preachers in partnership with Langham Preaching, a world wide ministry focused on training preachers in Biblical preaching. He believes that the Bible can transform lives when it is faithfully preached and presented in a relevant manner to the real lives of God’s people. He lives and serves in Bangalore, with his wife Dr. Keren and two daughters, Jemima and Jessica.",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
