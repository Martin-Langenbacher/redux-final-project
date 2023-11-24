import * as React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Leaderboard from "./Leaderboard";
//import Nav from "./Nav";
import reducer from "../reducers";
import middleware from "../middleware";

describe("Leaderboard", () => {
  it("9a) Leaderboard will display username, number of questions and number of questions answered", () => {
    const store = createStore(reducer, middleware);

    var view = render(
      <Provider store={store}>
        <Router>
          <Leaderboard />
        </Router>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries, no-undef
    const username = view.getByTestId("username-leaderboard");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const numberOfQuestions = view.getByTestId("answered-question-leaderboard");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const numberOfQuestionsAnswered = view.getByTestId(
      "question-created-leaderboard"
    );

    expect(username).toBeDefined();
    expect(numberOfQuestions).toBeDefined();
    expect(numberOfQuestionsAnswered).toBeDefined();
  });

  it("9b) Leaderboard will display the correct line with user and numbers", () => {
    const mockUsers = users;

    const mockQuestions = questions;

    // Create the Redux store with mock users and questions
    const store = createStore(
      reducer,
      { users: mockUsers, questions: mockQuestions },
      middleware
    );

    var view = render(
      <Provider store={store}>
        <Router>
          <Leaderboard />
        </Router>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries, no-undef
    const usernameValue = view.getAllByTestId("username-value")[0];
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const numberOfQuestionsValue = view.getAllByTestId(
      "answered-question-leaderboard-value"
    )[0];
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const numberOfQuestionsAnsweredValue = view.getAllByTestId(
      "question-created-leaderboard-value"
    )[0];

    expect(usernameValue.textContent).toEqual("sarahedo");
    //expect(usernameValue).toHaveTextContent("sarahedo");
    expect(numberOfQuestionsValue.textContent).toEqual("4");
    //expect(numberOfQuestionsValue).toHaveTextContent("4");
    expect(numberOfQuestionsAnsweredValue.textContent).toEqual("2");
  });
});

let users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    password: "abc321",
    name: "Tyler McGinnis",
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mtsamis: {
    id: "mtsamis",
    password: "xyz123",
    name: "Mike Tsamis",
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
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
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mtsamis",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "hire more frontend developers",
    },
    optionTwo: {
      votes: ["mtsamis", "sarahedo"],
      text: "hire more backend developers",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "conduct a release retrospective 1 week after a release",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "conduct release retrospectives quarterly",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "have code reviews conducted by peers",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "have code reviews conducted by managers",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "take a course on ReactJS",
    },
    optionTwo: {
      votes: ["mtsamis"],
      text: "take a course on unit testing with Jest",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "mtsamis",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["mtsamis", "zoshikanlu"],
      text: "deploy to production once every two weeks",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "deploy to production once every month",
    },
  },
};
