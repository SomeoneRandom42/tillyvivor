import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <div className="header">
        <img src={logo} className="header-logo" alt="logo" />
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
    </div>
  );
}

export default App;
