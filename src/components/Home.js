import React, {PureComponent} from "react";
import {Typography} from "@mui/material";
export default class Home extends PureComponent {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section>
                <Typography align="center" variant="h4">Главная</Typography>
                <p>Всеобъемлющий курс Реакт!</p>
                <p> Очень насыщенный информацией курс, в котором мы познакомились со всеми сторонами мира Реакт!
                    Большую часть полученной информации я бы вряд ли нашел при самостоятельном изучении.</p>                
            </section>
        )
    }
}