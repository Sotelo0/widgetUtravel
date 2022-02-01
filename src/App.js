import React, { useState, Component } from "react";
import FormOne from "./pages/FormOne";
import DetalleDeProducto from "./pages/DetalleDeProducto";

const Pages = ({url}) => {
    //use states 
    const [steep, setSteep] = useState(1);




    return (
        <>
            {steep === -1 && (<FormOne url={url}  />)}
            {steep === 1 && (<DetalleDeProducto url={url} />)} 
        </>
    )
}



class App extends Component {
    static defaultProps = {
        url: "http://utravel.bilda.bar/widget"
      };
    render() {
        return (
            <>
                <Pages url={this.props.url}/>
            </>
        );
    }
}

export default App;

