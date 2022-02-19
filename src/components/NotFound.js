import React, { PureComponent } from "react";
import themes from "../data/themes";

export default class NotFound extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h1>Ой, тут ничего нет!</h1>
        <p>404</p>
      </section>
    );
  }
}
