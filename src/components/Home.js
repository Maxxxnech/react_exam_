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
                <p> Очень насыщенный информацией курс, в котором мы познакомились со всеми сторонами мира Реакт!
                    Большую часть полученной информации я бы вряд ли нашел при самостоятельном изучении.

                    Большое спасибо за работу!</p>                
            </section>
        )
    }
}