import React, { PureComponent } from "react";
import {Typography} from "@mui/material";
export default class Materials extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Typography align="center" variant="h4">Материалы курса</Typography>
        {
          <img
            className="img_big"
            alt="Материалы курса"
            src={
              "https://trello.com/1/cards/61c4c7908c5824683ee1d216/attachments/61c4c7918c5824683ee1d242/download/image.png"
            }
          ></img>
        }
      </section>
    );
  }
}
