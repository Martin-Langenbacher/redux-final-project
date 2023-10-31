import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function addAnswerToUser(authUser, qid, answer) {
  console.log("addAnswerToUser: ############## 1", authUser);
  console.log("addAnswerToUser: ############## 2", qid);
  console.log("addAnswerToUser: ############## 3", answer);
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
  console.log("handleSaveQuestionAnswer: ############## 1", authUser);
  console.log("handleSaveQuestionAnswer: ############## 2", qid);
  console.log("handleSaveQuestionAnswer: ############## 3", answer);

  // TODO: This does not work !!!
  return (dispatch) => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
      console.log("Error in handleSaveQuestionAnswer: ", e);
    });
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}
