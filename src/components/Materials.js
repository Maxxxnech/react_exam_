import React, { PureComponent } from "react";
import themes from "../data/themes";

export default class Materials extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h1>Материалы курса</h1>
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
