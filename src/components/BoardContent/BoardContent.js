import React, { useState } from "react";
import "./BoardContent.scss";
import { Column } from "../Column/Column";

// import { initData } from "../../actions/initData";
import _ from "lodash";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from "uuid";
const item = {
  id: v4(),
  name: "Clean the house",
};

const item2 = {
  id: v4(),
  name: "Wash the car",
};
export const BoardContent = () => {
  // const [board, setBoard] = useState({});
  const [columndata, setColumnData] = useState({
    todo: {
      title: "Todo",
      items: [item, item2],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  });

  //   we check whether the board is empty or not and return the board not found
  // if (_.isEmpty(board)) {
  //   return (
  //     <>
  //       <div className="not-found">Board Not Found</div>
  //     </>
  //   );
  // }

  const handleDragEnd = ({ destination, source }) => {
    console.log(source);
    console.log(destination);
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // console.log(columndata);
    const itemCopy = { ...columndata[source.droppableId].items[source.index] };
    console.log(itemCopy);
    setColumnData((prev) => {
      prev = { ...prev };

      prev[source.droppableId].items.splice(source.index, 1);

      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board-columns">
          {_.map(columndata, (data, id) => {
            // console.log(data);
            return (
              <>
                <Column key={id} column={data} index={id} />;
              </>
            );
          })}
        </div>
      </DragDropContext>
    </>
  );
};
