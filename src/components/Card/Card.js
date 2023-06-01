import React from "react";
import "./Card.scss";
import { Draggable } from "react-beautiful-dnd";
export const Card = (props, index) => {
  const { card } = props;

  return (
    <>
      <Draggable key={card.id} index={index} draggableId={card.id.toString()}>
        {(provided) => {
          return (
            <li
              className="card-item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {" "}
              {card.title}
            </li>
          );
        }}
      </Draggable>
    </>
  );
};
