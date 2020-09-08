import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

//my components:
import Footer from "./components/Footer.js";
import HomePage from "./pages/Homepage.js";
import ResumePage from "./pages/ResumePage.js";
import AboutPage from "./pages/AboutPage.js";
import QualPage from './pages/QualPage';
import ServicePage from './pages/Service';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Samuel Mahan",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "about", path: "/about" },
        { title: "portfolio", path: "/portfolio" },
        { title: 'qualifications', path:'/qualifications' },
        { title: 'service', path:'/service' }
      ],
      home: {
        title: "Howdy,",
        subTitle: "Welcome to my website",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      resume: {
        title: "My Experience",
      },
      Qual:{
        title:'My Qualifications'
      },
      Service:{
        title:'Ready To Serve'
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Samuel Mahan</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
                <Link className='nav-link' to='/qualifications'>
                  Qualifications
                </Link>
                <Link className='nav-link' to='/service'>
                  Service
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/portfolio"
            exact
            render={() => <ResumePage title={this.state.resume.title} />}
          />
          <Route
          path='/qualifications'
          exact
          render={() => <QualPage title={this.state.Qual.title} />}
          />
          <Route
          path='/service'
          exact
          render={() => <ServicePage title={this.state.Service.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
