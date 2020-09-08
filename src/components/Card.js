import React from "react";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
import CardInfo from "./CardInfo";
function Card(props) {
  return (
    <div
      className="d-inline-block s-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className={props.className}
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}
export default Card;
