import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //acá se podria procesar formulario con backend//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
      
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Datos enviados con exito"/>
                        <h1> Gracias por su registro !</h1>
                        <p> En breve estaremos respondiendo</p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}



export default Success 
