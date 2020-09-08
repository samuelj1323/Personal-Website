//React stuff
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//images
import aboutMe from "../assets/mountain.jfif";
import me from "../assets/Sam_mahan_image.jpg";
import mountain from "../assets/AboutMe.jfif";
//components
import Card from "./Card";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Git hub",
          subTitle: "my code, is a link away",
          imgSrc: aboutMe,
          link: "https://github.com/samuelj1323",
          selected: false,
        },
        {
          id: 1,
          title: "Samuel Mahan",
          subTitle: "Let me introduce myself...",
          imgSrc: me,
          link: "https://www.linkedin.com/in/sam-m-59b9b9145/",
          selected: false,
        },
        {
          id: 2,
          title: "Resume",
          subTitle: "Please take a look!",
          imgSrc: mountain, // change the image for this thing, make it React symbol
          link: "https://codecademy.com/profiles/Samuel.Mahan",
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
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
          className='s-card-image'
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
export default Carousel;
