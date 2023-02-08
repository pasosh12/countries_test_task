import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/BodyContainer";
import {connect} from "react-redux";
import {Navbar} from "react-bootstrap";

// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

let  App = (props) => {
    if (props.dataIsFetched) {
        return (
            <div className="App">\
                <Navbar>
                    <Header/>
                </Navbar>
                <Body/>
            </div>
        );
    }
    // else return <></>
    else console.log('clown')
}

const mapStateToProps = (state) => ({
    dataIsFetched: state.app.dataIsFetched
})

export default connect(mapStateToProps,null)(App);
