import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
        const { values:{firstName, lastName, email, occupation,city, bio}} =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirmar datos"/>
                    <List>
                        <ListItem
                        primaryText="Nombre"
                        secondaryText={ firstName }                        
                        />                       
                        <ListItem
                        primaryText="Apellido"
                        secondaryText={ lastName }                        
                        />                       
                        <ListItem
                        primaryText="Email"
                        secondaryText={ email }                        
                        />                       
                        <ListItem
                        primaryText="Ocupación"
                        secondaryText={ occupation }                        
                        />                       
                        <ListItem
                        primaryText="Ciudad"
                        secondaryText={ city }                        
                        />                       
                        <ListItem
                        primaryText="Bio"
                        secondaryText={ bio }                        
                        />                       
                    </List>
                <br/>

                <RaisedButton
                label="Confirmar"
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

export default Confirm
