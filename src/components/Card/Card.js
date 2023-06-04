import React from "react";
import "./Card.scss";
import { Draggable } from "react-beautiful-dnd";
export const Card = ({ card, index, did }) => {
  // console.log(card.id, index);
  // console.log(card);
  return (
    <>
      <Draggable key={card.id} index={index} draggableId={did}>
        {(provided, snapshot) => {
          // console.log(snapshot);
          return (
            <div
              className={`item ${snapshot.isDragging && "dragging"}`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {" "}
              {card.name}
            </div>
          );
        }}
      </Draggable>
    </>
  );
};
