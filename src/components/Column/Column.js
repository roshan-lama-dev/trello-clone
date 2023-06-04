import React from "react";
import "./Column.scss";
import { Card } from "../Card/Card";
import { Droppable } from "react-beautiful-dnd";
export const Column = ({ column, index }) => {
  console.log(index);
  return (
    <>
      <Droppable droppableId={index}>
        {/* dropable id must be in strings */}
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="column">
                <header>{column.title}</header>

                <ul className="card-list">
                  {column.items.map((el, index) => {
                    return (
                      <Card key={el.id} index={index} card={el} did={el.id} />
                    );
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
