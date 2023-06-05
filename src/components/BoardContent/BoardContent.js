import React, { useState } from "react";
import "./BoardContent.scss";
import { Column } from "../Column/Column";

// import { initData } from "../../actions/initData";
import _ from "lodash";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from "uuid";

export const BoardContent = () => {
  const [text, setText] = useState("");
  // const [board, setBoard] = useState({});
  const [columndata, setColumnData] = useState({
    wantToApply: {
      title: "Want to Apply",
      items: [
        {
          id: v4(),
          name: "Software Developer",
        },
        {
          id: v4(),
          name: "Junoir React Developer",
        },
      ],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    interview: {
      title: "Interview",
      items: [],
    },
    applied: {
      title: "Applied",
      items: [],
    },
    rejected: {
      title: "Rejected",
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

  const addItem = () => {
    setColumnData((prev) => {
      return {
        ...prev,
        wantToApply: {
          title: "Want To Apply",
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.wantToApply.items,
          ],
        },
      };
    });

    setText("");
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addItem}>Add</button>
        </div>
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
