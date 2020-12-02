//Dependencies
import { HashRouter, Route, Switch } from "react-router-dom"
//CSS
import './App.css';
import Layout from "./components/Layout";
//Pages
import  Home from "./pages/Home"
//Components
// import Layout fro

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
