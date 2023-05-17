import {
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  todosList: [],
  errorMessage: null,
  response: null,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todosList: payload,
      };
    case GET_ALL_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: payload,
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: payload,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: payload,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default reducer;
