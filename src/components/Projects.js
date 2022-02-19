import React, { PureComponent } from "react";
import themes from "../data/themes";

export default class Projects extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(Object.values(themes));
    return (
      <section>
        <h1>Мои задачи на курсе</h1>
        <ul>
          {Object.values(themes).map((el) => {
            return (
              <li key={el.themeName}>
                <a target="blank" href={el.url}>
                  {el.themeName}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
