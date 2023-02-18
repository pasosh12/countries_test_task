import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/BodyContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";


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
