import logo from './sangre-logo.svg';
import arrow from './arrow.svg';
import './App.css';

function App() {
  return (
      <div className="app-container grid-bg">
        <a href="https://tx.company">
          <img src={logo} alt="Logo" className={"sangre-logo"}/>
        </a>
        <a href="https://tx.company" className="footer">
          <h1>Sangre is now <span>Tomorrow Explored</span></h1>
          <img src={arrow} alt="Arrow" className={"arrow"}/>
        </a>
      </div>
  );
}

export default App;
