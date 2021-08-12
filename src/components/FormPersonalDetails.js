import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Ingrese sus datos personales"/>
                    < TextField 
                    hintText="Ingrese su ocupación" 
                    floatingLabelText="Ocupacion" 
                    onChange={handleChange('occupation')} 
                    defaultValue={values.occupation}
                    />
                <br/>
                    < TextField 
                    hintText="Ciudad" 
                    floatingLabelText="Ciudad" 
                    onChange={handleChange('city')} 
                    defaultValue={values.city}
                    />
                <br/>
                    < TextField 
                    hintText="Ingrese su bio" 
                    floatingLabelText="Bio" 
                    onChange={handleChange('bio')} 
                    defaultValue={values.bio}
                    />
                <br/>
                <RaisedButton
                label="Continuar"
                primary={true}
                style={style.button}
                onClick={this.continue}
                />
                <RaisedButton
                label="Volver"
                primary={false}
                style={style.button}
                onClick={this.back}
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

export default FormPersonalDetails
