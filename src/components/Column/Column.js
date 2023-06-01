import React from "react";
import "./Column.scss";
import { Card } from "../Card/Card";
import { Droppable } from "react-beautiful-dnd";
export const Column = (props) => {
  const { column } = props;
  const cards = column.cards;
  return (
    <>
      <Droppable droppableId={column.id}>
        {/* dropable id must be in strings */}
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="column">
                <header>{column.title}</header>

                <ul className="card-list">
                  {cards &&
                    cards.length > 0 &&
                    cards.map((card, index) => {
                      return <Card key={card.id} card={card} index={index} />;
                    })}
                </ul>
                <footer>Add new job</footer>
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
};
