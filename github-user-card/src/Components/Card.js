import React from "react";

const Card = props => {
  for (const prop in props.user.state) {
    console.log(`${prop}:${props.user.state[prop]}`)
  }
  return (
    <div className="user-card">      
    </div>
  )
}
export default Card;