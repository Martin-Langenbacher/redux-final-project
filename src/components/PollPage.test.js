import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
//import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";

import { setAuthedUser } from "../actions/authedUser";

import reducer from "../reducers";
import middleware from "../middleware";
import PollPage from "./PollPage";
import { Provider } from "react-redux";

// Mock the useSelector and useDispatch hooks
/*
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
*/
describe("PollPage - DOM test", () => {
  it('6 --> will display "Your answer", after pressing the optionOne button', () => {

    /*
    console.log("TODO");

    const store = createStore(reducer, middleware);

    const userId = "sarahedo";
    const questionId = "8xf0y6ziyjabvozdd253nd";

    var view = render(
      <Provider store={store}>
        <Router initialEntries={[`/question/${questionId}`]}>
          
          <Routes>
            <Route path="/question/:id" />
            
          </Routes>
          <PollPage />
        </Router>
      </Provider>
    );
    // TODO: Take it out?
    //expect(view).toMatchSnapshot();

    // Simulate user authentication
    store.dispatch({ type: "SET_AUTHED_USER", id: userId });

    // Find the button and click it
    // eslint-disable-next-line testing-library/prefer-screen-queries, no-undef
    const optionOneButton = view.getByTestId("optionOne-button");
    fireEvent.click(optionOneButton);

    // Assert that the state has been updated
    const state = store.getState();
    const user = state.users[userId];
    const question = state.questions[questionId];

    // Todo: Hier weitermachen !!!!!
    console.log('Todo: Continue here !!!!! state:', state)
    console.log('Todo: Continue here !!!!! user:', user)

    expect(user.answers[questionId]).toBe("optionOne");

    */

  });
});

// TODO: Not working yet !!!!

/*
describe("PollPage - DOM test", () => {


  it('6 --> will display "Your answer", after pressing the optionOne button', () => {
    const store = createStore(reducer, middleware);

    const username = "zoshikanlu";

    store.dispatch(setAuthedUser(username));

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: jest.fn().mockReturnValue({ id: "8xf0y6ziyjabvozdd253nd" }),
    }));

    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/question/:id" element={<PollPage />} />
          </Routes>
        </Router>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const optionOneButton = getByTestId("optionOne-button");
    fireEvent.click(optionOneButton);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("success-header")).toBeInTheDocument();

/*


  });
  
});

*/
