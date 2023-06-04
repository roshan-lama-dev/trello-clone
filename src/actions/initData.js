import { v4 } from "uuid";

export const initData = {
  todo: {
    id: v4(),
    boardId: v4(),
    title: "Want to Apply",

    cards: [
      {
        id: "12",
        boardId: "board-1",
        columnId: "column-1",
        title: "Title of card 1",
      },
      {
        id: v4(),
        boardId: "board-1",
        columnId: "column-1",
        title: "Title of card 2",
      },
      {
        id: v4(),
        boardId: "board-1",
        columnId: "column-1",
        title: "Title of card 3",
      },
      {
        id: v4(),
        boardId: "board-1",
        columnId: "column-1",
        title: "Title of card 3",
      },
    ],
  },
  do: {
    id: v4(),
    boardId: "board-1",
    title: "Interview",
    cardOrder: ["card-1", "card-2", "card-3"],
    cards: [
      {
        id: v4(),
        boardId: "board-1",
        columnId: "column-3",
        title: "Title of card 1",
      },
      {
        id: v4(),
        boardId: "board-1",
        columnId: "column-3",
        title: "Title of card 2",
      },
    ],
  },
};
