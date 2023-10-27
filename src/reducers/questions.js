import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_POLL_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      //const { question } = action;

      return {
        ...state,
        [action.question.id]: action.question,
        // replyingTo
      };
    case ADD_POLL_ANSWER:
      const { question } = action;
      const { user } = action;

      // TODO: Take new tweet and add it as a property to

      return {};
    default:
      return state;
  }
}
