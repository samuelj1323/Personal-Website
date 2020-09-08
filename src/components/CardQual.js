import React from "react";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
import CardInfoQual from "./CardInfoQual";
function CardQual(props) {
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
        <CardInfoQual
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}
export default CardQual;
