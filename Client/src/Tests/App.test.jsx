
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";


import React from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import { expect, it } from 'vitest';
import { BrowserRouter as Router,} from "react-router-dom"; 

import {createBrowserHistory } from "history"
import Mainpage from "../Components/Home-Main/Mainpage";
import DailyRecord from "../Components/RecordLink/DailyRecord";
import GraphRecord from "../Components/RecordLink/GraphRecord";
import CreateEvent from "../Components/EventLink/CreateEvent";


//1) redirect page check 
it("on the /mainpage if user clicked start button redirect to /dailyRecord page", async () => {
  const history = createBrowserHistory();
  render(
    <Router history={history}>
      <Mainpage />
    </Router>
  );

  await waitFor(() => {
    const button = screen.getByText("Start");
    button.click();

    expect(history.location.pathname).not.toBe("/dailyRecord");
  });
});


//2) show test on the page 
it(' Show "Welcome to Diet.Mate" /mainpage comment correctly', async () => {
  render(<Mainpage />);
  expect(await screen.getByText('Welcome to Diet.Mate')).toBeInTheDocument();
});



//3) textarea placeholder show
it('show testarea placeholder as "NOTE" correctly on the /dailyRecord page', async () => {
  render(
    <Router >
      <DailyRecord />
    </Router>
  );
  expect(await screen.getByPlaceholderText("NOTE")).toBeInTheDocument()
})


//4 Graph record has four buttons 
it('show four button  on the /toGraphRecord page', async () => {
  render(
    <Router >
      <GraphRecord />
    </Router>
  );
  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(4);
})



//5 daily record user click date input part show calender  r 
it('show  create event correctly', async () => {
  render(
    <Router >
      <CreateEvent />
    </Router>
  );

 expect( await screen.getByText('Create Event')).toBeInTheDocument();
})


//5) login part

// describe("UserLogin", () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//     it("shows error message 'Incorrect password' if user input wrong password and clicked Sing in" , async () => {

//     const mockResponse = [{
//       "email": 'user1@test.com',
//       "password": "12345678",
//     }];
//     fetch.mockResponse(JSON.stringify(mockResponse));
//     //console.log(fetch.mockResponse(JSON.stringify(mockResponse)))
//     vi.mock('axios')
//     axios.post.mockResolvedValue({ error: {response: { data: { message: "Incorrect password" } } } });
//     //fetch.mockResponse({ error :{ response: { data: { message: "Incorrect password" } } } });
//     render(
//     <Router >
//       <UserLogin />
//     </Router>
//     );
//     fireEvent.change(screen.getByLabelText("Email address"), {
//       target: { value: "user1@test.com" },
//     });
//     fireEvent.change(screen.getByLabelText("Password"), {
//       target: { value: "wrongpassword" },
//     });

//     await waitFor(() => {
//       // const button = screen.getByText("Sta");
//       // button.click();
//       fireEvent.click(screen.getByText("Sign in"));
//       //expect(screen.getByTextId("error-message")).toBeInTheDocument();
//       expect(screen.getByText('Incorrect password')).toBeInTheDocument();
//     });
//   });
// })








  
  
  
  