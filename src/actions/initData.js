import { v4 } from "uuid";

export const initData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],

      columns: [
        {
          id: v4(),
          boardId: "board-1",
          title: "Want to Apply",
          cardOrder: ["card-1", "card-2", "card-3"],
          cards: [
            {
              id: v4(),
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
        {
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
        // {
        //   id: "2",
        //   boardId: "board-1",
        //   title: "Applied",
        //   cardOrder: ["card-1", "card-2", "card-3"],
        //   cards: [
        //     {
        //       id: "7",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 1",
        //     },
        //     {
        //       id: "8",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 2",
        //     },
        //     {
        //       id: "9",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 3",
        //     },
        //   ],
        // },
        // {
        //   id: "6",
        //   boardId: "board-1",
        //   title: "Applied",
        //   cardOrder: ["card-1", "card-2", "card-3"],
        //   cards: [
        //     {
        //       id: "10",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 1",
        //     },
        //     {
        //       id: "11",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 2",
        //     },
        //     {
        //       id: "22",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 3",
        //     },
        //     {
        //       id: "13",
        //       boardId: "board-1",
        //       columnId: "column-2",
        //       title: "Title of card 4",
        //     },
        //   ],
        // },
      ],
    },
  ],
};
