import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION,
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
      case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;
      console.log('-------------------------------->', action, authUser, qid, answer)

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser)
          }
        }
      };

      /*
    // TODO: Check if correct !!!       <==================================
    case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;
      //const { question } = action;
      //const { user } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authUser),
          },
        },
      };
      */
    default:
      return state;
  }
}
