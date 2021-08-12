import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Ingrese sus datos"/>
                    < TextField 
                    hintText="Ingrese su nombre" 
                    floatingLabelText="Nombre" 
                    onChange={handleChange('firstName')} 
                    defaultValue={values.firstName}
                    />
                <br/>
                    < TextField 
                    hintText="Ingrese su apellido" 
                    floatingLabelText="Apellido" 
                    onChange={handleChange('lastName')} 
                    defaultValue={values.lastName}
                    />
                <br/>
                    < TextField 
                    hintText="Ingrese su email" 
                    floatingLabelText="Email" 
                    onChange={handleChange('email')} 
                    defaultValue={values.email}
                    />
                <br/>
                <RaisedButton
                label="Continuar"
                primary={true}
                style={style.button}
                onClick={this.continue}
                />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style ={
    button:{
        margin:15
    }
}

export default FormUserDetails
