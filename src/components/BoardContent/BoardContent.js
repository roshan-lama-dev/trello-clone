import React, { useState, useEffect } from "react";
import "./BoardContent.scss";
import { Column } from "../Column/Column";

import { initData } from "../../actions/initData";
import _ from "lodash";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // call the api on loading and then select the board id
    const boardInitData = initData.boards.find((item) => item.id === "board-1");
    if (boardInitData) {
      // we set the board
      setBoard(boardInitData);

      //   we als get the columns
      setColumns(boardInitData.columns);
    }
  }, []);

  //   we check whether the board is empty or not and return the board not found
  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board Not Found</div>
      </>
    );
  }

  const handleDragEnd = ({ destination, source }) => {
    console.log("from", source);
    console.log("to", destination);

    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board-columns">
          {columns &&
            columns.length > 0 &&
            columns.map((column, index) => {
              return <Column key={column.id} column={column} />;
            })}
        </div>
      </DragDropContext>
    </>
  );
};
