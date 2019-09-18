import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "./Header/header";
import {Free} from "./Free/free";
import {Sidebar} from "./Sidebar/sidebar";
import {Preview} from "./Preview/preview";
import {Faq} from "./Faq/faq";
import {Home} from "./Home/home";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sidebarVisible: false};
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    });
  }

  render() {
    return (
      <Router>
        <Header toggleSidebar={this.toggleSidebar}></Header>
        <Sidebar sidebarVisible={this.state.sidebarVisible}
                 toggleSidebar={this.toggleSidebar}></Sidebar>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/preview" component={Preview}/>
          <Route path="/free" component={Free}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/" exact component={Free}/>
          <Route render={() => <Redirect to="/"/>}/>
        </Switch>
      </Router>
    );
  }
}
