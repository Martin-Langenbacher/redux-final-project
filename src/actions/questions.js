import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER'

// 1) Start...
function addPollAnswer(id, authedUser, user, optionTextAnswer){
  return {
    type: ADD_POLL_ANSWER,
    id,
    authedUser,
    user,
    optionTextAnswer
  }
}


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionText1, optionText2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: optionText1,
      optionTwoText: optionText2,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// 2) async-Function
export function handleVote(answer, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser, 
      questionId, 
      answer
    })
      .then((answer) => dispatch(addPollAnswer(authedUser, questionId, answer)))
      .then(() => dispatch(hideLoading));
  };
}

/*
export function _saveQuestionAnswer({ authedUser, qid, answer }) 


zoshikanlu: {
    id: "zoshikanlu",
    password: "pass246",
    name: "Zenobia Oshikanlu",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: [],
  },


*/
