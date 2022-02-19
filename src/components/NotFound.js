import React, { PureComponent } from "react";
import {Typography} from "@mui/material";
export default class NotFound extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Typography align="center" variant="h4">Ой, тут ничего нет!</Typography>
        <p>...404...</p>
      </section>
    );
  }
}
