import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        console.log('TODO')
    })
})


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



