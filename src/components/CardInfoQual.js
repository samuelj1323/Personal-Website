import React from "react";
import { useSpring, animated } from "react-spring";
function CardInfoQual(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="s-card-info1" style={style}>
      <p className="s-card-title1">{props.title}</p>
      <p className="s-card-sub-title1">{props.subTitle}</p>
    </animated.div>
  );
}
export default CardInfoQual;
