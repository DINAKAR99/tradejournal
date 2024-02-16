import React from "react";
import { ADD_TRADE, DELETE_TRADE, EDIT_TRADE } from "../actions/Action-typess";
const initialstate = [];
export default (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TRADE:
      return [...state, action.payload];

    case DELETE_TRADE:
      const newState = state.filter((e) => e.id !== action.payload);
      return newState;

    case EDIT_TRADE:
      const newStates = state.map((e) =>
        e.id == action.payload.tradeid
          ? {
              coinName: action.payload.Newdata.coinName,
              TakeProfit: action.payload.Newdata.TakeProfit,
              StopLoss: action.payload.Newdata.StopLoss,
              Notes: action.payload.Newdata.Notes,
            }
          : e
      );
      return newStates;

    default:
      return state;
  }
};
