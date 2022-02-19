import React, { PureComponent } from "react";
import themes from "../data/themes";
import {Typography, List, ListItem} from "@mui/material";
export default class Projects extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Typography align="center" variant="h4">Мои задачи на курсе</Typography>
        <List>
          {Object.values(themes).map((el) => {
            return (
              <ListItem key={el.themeName}>
                <a target="blank" href={el.url}>
                  {el.themeName}
                </a>
              </ListItem>
            );
          })}
        </List>
      </section>
    );
  }
}
