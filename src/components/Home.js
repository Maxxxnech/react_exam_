import React, {PureComponent} from "react";
import themes from "../data/themes";

export default class Home extends PureComponent {
    constructor(props){
        super(props)
    }
    render(){
        console.log(Object.values(themes))
        return (
            <section>
                <h1>Главная</h1>
                <p>Всеобъемлющий курс Реакт!</p>                
            </section>
        )
    }
}