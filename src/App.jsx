import React, {useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/BodyContainer";
import {connect} from "react-redux";
import {Navbar} from "react-bootstrap";
import {initializeApp} from "./redux/appReducer";

// import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.dataIsFetched) {
            return (
                <div className="App">
                    <Header/>
                    <Body/>
                </div>
            );
        } else return <></>
    }
}

const mapStateToProps = (state) => ({
    dataIsFetched: state.app.dataIsFetched
})

export default connect(mapStateToProps, {initializeApp})(App);
