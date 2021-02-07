//Dependencies
import { HashRouter, Route, Switch } from "react-router-dom"
//CSS
import './App.css';
//Pages
import Home from "./pages/Home"
import Proyects from "./pages/Proyects_page"
import About from "./pages/About"
import ApiConsumer from "./pages/ApiConsumer"

//Components
import Layout from "./components/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/proyects" component={Proyects}/>
          <Route exact path="/consumer" component={ApiConsumer}/>
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
