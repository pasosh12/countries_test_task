import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/BodyContainer";

function App() {
  return (
    // <div className="App">
    <div className="App-wrapper">
      <Header/>

        <div className='app-wrapper-content'>
      <Body/>
    </div>
        t ,jj  q
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Learn React
         </a>
       </header>
    </div>
  );
}

export default App;
