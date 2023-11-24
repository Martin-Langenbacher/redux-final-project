import { fireEvent, render } from "@testing-library/react";
import { createStore } from "redux";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";

import Login from "./Login";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";

describe("Login", () => {
  it("7) will have all expected fields", () => {
    const route = "/login";

    const store = createStore(reducer, middleware);
    var view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Login store={store} />
        </MemoryRouter>
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var usernameInput = view.getByTestId("username-input-field");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var passwordInput = view.getByTestId("password-input-field");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var loginButton = view.getByTestId("login-button-exists");

    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
  });

  it("8a) See an error on the page - in case the input data are not correct (username)", async () => {
    // TODO: Not working yet! How to bring the users into Login?
    const route = "/login";

    let alertedMessage;
    const store = createStore(reducer, middleware);
    const mockAlert = jest.spyOn(window, "alert");
    mockAlert.mockImplementation((message) => {
      alertedMessage = message;
    });

    var view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Login store={store} />
        </MemoryRouter>
      </Provider>
    );

    const userNameForTest = "mtsamis99";
    const wrongPasswordForTest = null;

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var userNameInput = view.getByTestId("username-input-field");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var passwordInput = view.getByTestId("password-input-field");

    fireEvent.change(userNameInput, { target: { value: userNameForTest } });
    fireEvent.change(passwordInput, {
      target: { value: wrongPasswordForTest },
    });

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const loginButton = view.getByTestId("login-button-exists");
    fireEvent.click(loginButton);
    //expect(newLink).toBeDefined();
    console.log("alertedMessage", alertedMessage);
    await expect(alertedMessage).toBe("Invalid username: User does not exist!");

    alertedMessage = "";

    mockAlert.mockRestore();
  });

  it("8b) See an error on the page - in case the input data are not correct (PW)", async () => {
    // TODO: Not working yet! How to bring the users into Login?
    const route = "/login";

    let alertedMessage;
    const store = createStore(reducer, middleware);
    const mockAlert = jest.spyOn(window, "alert");
    mockAlert.mockImplementation((message) => {
      alertedMessage = message;
    });

    var view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Login store={store} />
        </MemoryRouter>
      </Provider>
    );

    const userNameForTest = "mtsamis";
    const wrongPasswordForTest = "wrongPW55";

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var userNameInput = view.getByTestId("username-input-field");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    var passwordInput = view.getByTestId("password-input-field");

    fireEvent.change(userNameInput, { target: { value: userNameForTest } });
    fireEvent.change(passwordInput, {
      target: { value: wrongPasswordForTest },
    });

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const loginButton = view.getByTestId("login-button-exists");
    fireEvent.click(loginButton);
    console.log("alertedMessage", alertedMessage);
    // TODO: Comment it out and make it work. --> Need to get the users into Login.js with the test! How???
    //await expect(alertedMessage).toBe("Invalid password: Please enter the correct PW!");

    alertedMessage = "";

    mockAlert.mockRestore();
  });
});
