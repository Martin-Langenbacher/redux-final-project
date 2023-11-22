// INFORMATION
// press 'u', if the view really changed ! --> You get a new snapshot!

// is present:  ==> getBy
// not present: ==> queryBy

import * as React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import PollResults from "./PollResults";

var { calculatePercentage } = require("./PollResults");

const mockStore = configureStore();

describe("PollResults", () => {
  it("10a) shows, that the polls fit on percentage of people and display it corecctly (Snapshot)", () => {
    const optionOneAmount = 2;
    const optionTwoAmount = 1;
    const store = mockStore({});
    var view = render(
      <Provider store={store}>
        <Router>
          <PollResults
            optionOneAmount={optionOneAmount}
            optionTwoAmount={optionTwoAmount}
          />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  it("10b) shows, that the polls fit on percentage of people (%-numbers correct)", () => {
    const optionOneAmount = 7;
    const optionTwoAmount = 9;
    const store = mockStore({});
    var view = render(
      <Provider store={store}>
        <Router>
          <PollResults
            optionOneAmount={optionOneAmount}
            optionTwoAmount={optionTwoAmount}
          />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  it("10c) will return the product of both numbers passed", () => {
    const optionOneAmount = 1;
    const optionTwoAmount = 2;
    const totalAmount = optionOneAmount + optionTwoAmount;
    expect(calculatePercentage(optionOneAmount, totalAmount)).toEqual(33.3);
    expect(calculatePercentage(optionTwoAmount, totalAmount)).toEqual(66.7);
  });
});
