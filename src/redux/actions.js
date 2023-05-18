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
import axios from "axios";

export const getAllTaskRequest = (payload) => ({
  type: GET_ALL_TASKS_REQUEST,
  payload,
});

export const getAllTasksSuccess = (payload) => ({
  type: GET_ALL_TASKS_SUCCESS,
  payload,
});

export const getAllTasksFailure = (payload) => ({
  type: GET_ALL_TASKS_FAILURE,
  payload,
});

export const getAllTasks = () => (dispatch) => {
  console.log("Here")
  dispatch(getAllTaskRequest());
  axios
    .get("http://localhost:8000/todo")
    .then((res) => dispatch(getAllTasksSuccess(res)))
    .catch((err) => dispatch(getAllTasksFailure(err)));
};

export const addTaskRequest = (payload) => ({
  type: ADD_TASK_REQUEST,
  payload,
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskFailure = (payload) => ({
  type: ADD_TASK_FAILURE,
  payload,
});

export const addTask = (payload) => (dispatch) => {
  dispatch(addTaskRequest());
  axios
    .post("http://localhost:8000/todo", payload)
    .then((res) => dispatch(addTaskSuccess(res)))
    .catch((err) => dispatch(addTaskFailure(err)));
};

export const updateTaskRequest = (payload) => ({
  type: UPDATE_TASK_REQUEST,
  payload,
});

export const updateTaskSuccess = (payload) => ({
  type: UPDATE_TASK_SUCCESS,
  payload,
});

export const updateTaskFailure = (payload) => ({
  type: UPDATE_TASK_FAILURE,
  payload,
});

export const updateTask = (payload) => (dispatch) => {
  dispatch(updateTaskRequest());
  axios
    .patch(`http://localhost:8000/todo/${payload.taskId}`, payload)
    .then((res) => dispatch(updateTaskSuccess(res)))
    .catch((err) => dispatch(updateTaskFailure(err)));
};

export const deleteTaskRequest = (payload) => ({
  type: DELETE_TASK_REQUEST,
  payload,
});

export const deleteTaskSuccess = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});

export const deleteTaskFailure = (payload) => ({
  type: DELETE_TASK_FAILURE,
  payload,
});

export const deleteTask = (payload) => (dispatch) => {
  dispatch(deleteTaskRequest());
  axios
    .delete(`http://localhost:8000/todo/${payload}`)
    .then((res) => dispatch(deleteTaskSuccess(res)))
    .catch((err) => dispatch(deleteTaskFailure(err)));
};
