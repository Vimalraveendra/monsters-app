import { shallow } from "enzyme";
import React from "react";
import App from "./App";

import fetchMock from "fetch-mock";

// import fetchMock from "fetch-mock";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it("should render the App component without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

describe("handleChange", () => {
  it("should handle the change and setstate after recieving the input", () => {
    const mockProps = {
      target: {
        value: "hel",
      },
    };

    const expectedAction = {
      monsters: [],
      searchField: "hel",
    };
    wrapper.instance().handleChange(mockProps);
    expect(wrapper.state()).toEqual(expectedAction);
  });
});

describe("fetchAPI", () => {
  it("should call fetchApi to get the monsters", async () => {
    fetch = jest.fn().mockReturnValue(
      Promise.resolve({
        data:[{monsters: [
          {
            id: 123,
            name: "hello",
            email: "hello@gmail.com",
          },
        ],
      }]
      })
    )
    const mockResult= {
      monsters: [
        {
          id: 123,
          name: "hello",
          email: "hello@gmail.com",
        },
      ],
    };

  //   fetchMock
  //     .getOnce("https://jsonplaceholder.typicode.com/users",{ body:mockProps,status:200})
  //     .then(() => {
  //       expect(wrapper.state()).toEqual("hello");
  //     });
  // });
});

// describe("fetchAPI", () => {
//   it("should call fetchApi to get the monsters", async () => {
//     const mockProps = {
//       monsters: [
//         {
//           id: 123,
//           name: "hello",
//           email: "hello@gmail.com"
//         }
//       ]
//     };

//     fetchMock
//       .getOnce("https://jsonplaceholder.typicode.com/users", mockProps)
//       .then(() => {
//         expect(wrapper.state()).toEqual("hello");
//       });
//   });
// });
