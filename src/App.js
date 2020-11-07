//Dependencies
import { HashRouter, Route, Switch } from "react-router-dom"
//CSS
import './App.css';
//Pages
import  Home from "./pages/Home"


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>

      </Switch>
    </HashRouter>
  );
}

export default App;
