import './App.css';
import Music from './Music';
import Welcome from './Welcome';
import Web from './Web';
import Ad from './Ad';

const App = ()=> {
  return (
    <div className="App">
      <Welcome/>
      <Music/>
      <Web/>
      <Ad/>
    </div>
  );
}

export default App;
