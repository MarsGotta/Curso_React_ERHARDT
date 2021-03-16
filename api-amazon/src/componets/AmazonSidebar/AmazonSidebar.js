import "./AmazonSidebar.css";
import React, { useCallback } from "react";
import { List, ListItem, ListItemText, Collapse, Button, Drawer } from "@material-ui/core";
import { useLocation } from "wouter";

function AmazonSidebar({ generos }) {
  const [path, pushLocation] = useLocation();

  const handleClickGenero = (evt) => {
    pushLocation(
      `/gender/${evt.currentTarget.innerText
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`
    );
  };

  if (generos != undefined) {
    return (
      <Drawer anchor="left" open={true} variant="persistent">
        <List>
          {generos.map(({ id, nombre, ...rest }) => (
            <ListItem onClick={handleClickGenero} key={id} button {...rest}>
              <ListItemText>{nombre}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  } else {
    return <div></div>;
  }
}

export default AmazonSidebar;
