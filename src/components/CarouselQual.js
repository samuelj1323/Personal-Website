//React stuff
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//images
import tree from "../assets/tree-dev.png";
import appDev from "../assets/app-dev.jpg";
import webDev from "../assets/web-dev.jpg";
import dataDev from '../assets/data-dev.png';
//components
import CardQual from "./CardQual";
class CarouselQual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Web Development",
          subTitle: "This page was made in react",
          imgSrc: webDev,
          selected: false,
        },
        {
          id: 1,
          title: "Mobile App Development",
          subTitle:'I will have an app in app stores soon',
          imgSrc: appDev,
          selected: false,
        },
        {
          id: 2,
          title: "Data Science",
          subTitle: "I compete in datascience competitions",
          imgSrc: dataDev,
          selected: false,
        },
        {
            id: 3,
            title: "Software Engineering",
            subTitle: "I love data structures and algorithms",
            imgSrc: tree,
            selected: false,
          },
      ],
    };
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <CardQual
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
          className='s-card-image1'
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
export default CarouselQual;
