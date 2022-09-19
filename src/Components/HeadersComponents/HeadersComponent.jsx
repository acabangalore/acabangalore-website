import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About Us", Id: "About" },
    { label: "How we serve", Id: "Portfolio" },
    { label: "What's new", Id: "What's new" },
    { label: "Connect with us", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id="Headder">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
        <Typography varinat="h3" component="h4" className={classes.headerTitle}>
          WELCOME TO <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={["ACA CHURCH BANGALORE"]}
            typeSpeed={80}
            backSpeed={90}
            loop
          />
        </Typography>
        <Typography
          varinat="subtitle2"
          component="h4"
          className={classes.headerDesc}
        >
          <Typed
            strings={["RENEWING MINDS", "RESTORING HOPE", "REBUILDING LIVES"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}

      </Box>
    </Box>
  );
}
