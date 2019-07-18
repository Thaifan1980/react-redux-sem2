import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import AboutPage from "./components/About/AboutPage";

import HomePageContainer from "./containers/HomePageContainers";
import CatalogPageContainer from "./containers/CatalogPageContainer";
import ProductDetailsPageContainer from "./containers/ProductDetailsPageContainer";
import CartPageContainer from "./containers/CartPageContainer";

import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/about" component={AboutPage} />
            <Route path="/catalog" component={CatalogPageContainer} />
            <Route path="/cart" component={CartPageContainer} />
            <Route
              path="/product/:id"
              component={ProductDetailsPageContainer}
            />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
