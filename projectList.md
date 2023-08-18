Project 4: Lose weight gain friends

Idea: daily dietary record + workout group/couple/etc

Requirement:

- [ ] Database
  - [ ] User account
    - [ ] User details
      - [ ] Name
      - [ ] Email
      - [ ] Password/hashed password
      - [ ] Date of birth
      - [ ] Location
  - [ ] Weight lose program
    - [ ] User expectation
      - [ ] Weight
      - [ ] Age
      - [ ] Target weight
      - [ ] Timeframe
  - [ ] WIP
    - [ ] Daily dietary record
      - [ ] Breakfast + cal
      - [ ] Lunch + cal
      - [ ] Dinner + cal
      - [ ] Cal per day (in total)
    - [ ] Weight measurement
      - [ ] Daily Weight check
        - [ ] Date
        - [ ] Graph
      - [ ] Daily track for activities (toilet/drink/eat)
  - [ ] Activity planner
    - [ ] Activity
      - [ ] User (create)
      - [ ] Invitation
      - [ ] Date
      - [ ] Time
      - [ ] Location
        - [ ] Google map
      - [ ] Activity detail
        - [ ] Type of activity
        - [ ] Requirement (material)
        - [ ] Comment
    - [ ] Activity nearby (google map)

What we need to do?:

- [ ] Database
- [ ] Backend with React
- [ ] APIs to fetch
  - [ ] Google map
- [ ] Frontend with react
  - [ ] CSS/bootstrap
- [x] Visual idea draft

https://github.com/garnie39/Project4.git

\*\*Any changes for the project need to do npm run build from Server

### client

npm install react-bootstrap bootstrap
npm install @mui/material @emotion/react @emotion/styled
npm i react-router-dom

#### scroll calendar

npm install react-scroll-calendar --save
npm install moment --save
npm install --save moment
npm install react-datepicker

### server

npm install axios
npm install mongoose
npm install react-router-dom@6
npm install nodemon dotenv --save-dev

npm install express mongoose

import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, setOptions } from '@mobiscroll/react';
