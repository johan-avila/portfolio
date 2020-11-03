//Dependencies
import { HashRouter, Route, Switch } from "react-router-dom"
//CSS
import './App.css';
//Pages
import  Home from "./pages/Home"


function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}/>
    </HashRouter>
  );
}

export default App;
