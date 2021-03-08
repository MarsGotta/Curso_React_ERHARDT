import './AmazonSidebar.css';
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function AmazonSidebar({ generos }) {

  if (generos != undefined) {
    return (
      <div className="sidebar">
        <List>
          {
            generos.map(({ id, nombre, ...rest }) => (
              <ListItem key={id} button {...rest}>
                <ListItemText>{nombre}</ListItemText>
              </ListItem>
            ))}
        </List>
      </div>
    );
  }
  else {
    return (<div></div>)
  }
}

export default AmazonSidebar;
