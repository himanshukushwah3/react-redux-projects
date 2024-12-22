import {
  TODO_ADD_ITEM,
  TODO_DELETE_ITEM,
  TODO_HANDLE_CHANGE,
} from "./todoType";

const intialState = {
  inputValue: "",
  todoEntry: [],
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case TODO_HANDLE_CHANGE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case TODO_ADD_ITEM:
      const { id } = action.payload;
      return {
        todoEntry: [
          ...state.todoEntry,
          {
            id: id,
            data: state.inputValue,
          },
        ],
        inputValue: "",
      };
    case TODO_DELETE_ITEM:
      const result = state.todoEntry.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todoEntry: result,
      };
    default:
      return state;
  }
};

export default todoReducer;
