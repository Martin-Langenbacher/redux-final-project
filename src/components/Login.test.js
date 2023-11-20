import { getByPlaceholderText, render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";

import Login from "./Login";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";

describe("Login", () => {
  it("will have all expected fields", () => {
    // // eslint-disable-next-line testing-library/render-result-naming-convention

    //const store = createStore(rootReducer)
    const store = createStore(reducer, middleware);
    // eslint-disable-next-line testing-library/render-result-naming-convention
    var componentML = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var usernameInput = componentML.getByTestId("username-input-field");
    var value = usernameInput
    //console.log('*********************:', value)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    var passwordInput = componentML.getByTestId("password-input-field");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var loginButton = componentML.getByTestId("login-button-exists");
    expect(loginButton).toBeInTheDocument();

    //expect(loginComponent).toMatchSnapshot();
  });
});
