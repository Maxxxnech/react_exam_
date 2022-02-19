import React, { PureComponent } from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
export default class ModalWrapper extends PureComponent {
    constructor(props){
        super(props);
        this.rootDiv = document.createElement("div");
    }

    componentDidMount(){
        modalRoot.appendChild(this.rootDiv);
    }
    
    componentWillUnmount(){
        modalRoot.removeChild(this.rootDiv);    
    }
    render(){
        return(
            ReactDOM.createPortal(
           <div>
               {this.props.children}
           </div>, this.rootDiv)
        )
    }

}