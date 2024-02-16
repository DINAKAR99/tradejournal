import { ADD_TRADE, DELETE_TRADE, EDIT_TRADE } from "./Action-typess";

export const add_trade = (data) => {
  return {
    type: ADD_TRADE,
    payload: data,
  };
};
export const delete_trade = (id) => {
  return {
    type: DELETE_TRADE,
    payload: id,
  };
};
export const edit_trade = ({ data, id }) => {
  return {
    type: EDIT_TRADE,
    payload: { Newdata: data, tradeid: id },
  };
};
