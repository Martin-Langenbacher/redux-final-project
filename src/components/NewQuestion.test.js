// INFORMATION
// press 'u', if the view really changed ! --> You get a new snapshot!

// is present:  ==> getBy
// not present: ==> queryBy

import * as React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import NewQuestion from "./NewQuestion";

const mockStore = configureStore();

describe("NewQuestion", () => {
  it("matches the snapshot, no data is transfered", () => {
    const store = mockStore({});
    var view = render(
      <Provider store={store}>
        <Router>
          <NewQuestion />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
