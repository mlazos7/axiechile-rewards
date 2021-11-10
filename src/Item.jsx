import React from "react";

export const Item = ({ index, name, pvpElo, rewards }) => {
  return (
    <div className="item">
      <p>{index + 1}</p>
      <p className="item--name">{name.substring(0, 20) + "..." || name}</p>
      <p>{pvpElo}</p>
      <p>{rewards}</p>
    </div>
  );
};
