import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
