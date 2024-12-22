import {
  TODO_ADD_ITEM,
  TODO_HANDLE_CHANGE,
  TODO_DELETE_ITEM,
} from "./todoType";

export const todoHandleChange = (value) => {
  return {
    type: TODO_HANDLE_CHANGE,
    payload: value,
  };
};
export const todoAddItem = (item) => {
  return {
    type: TODO_ADD_ITEM,
    payload: {
      id: new Date().getTime().toString(),
      data: item,
    },
  };
};

export const todoDeleteItem = (id) => {
  return {
    type: TODO_DELETE_ITEM,
    payload: id,
  };
};
