---
title: "Notes on: FreeCodeCamp React and Redux Course"
date: "2018-10-02"
indexImage: ""
---

Just a long string of notes on this course https://learn.freecodecamp.org/front-end-libraries/react-and-redux/

## Store in a nutshell

Redux being a state management library means that most of its functions revolve around the store. With actions flying around and reducers consuming a previous state and an action to reveal a new state, the store sits in the middle and is the 'single source of truth' (quoted as this was one of the [key motivations](https://redux.js.org/introduction/threeprinciples) behind Redux).

Lin Clark's [cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6) has to be one of my favourite explanations for Redux. She explains the store as the 'controlling and bureaucratic' one. Its two key responsibilities are:
* Holding onto the state tree - allowing access to it through `getState()`
* Delegating the work to work out which reducers -- or, in Redux's words dispatching actions

A simple implementation of a Redux store, an action and a reducer, would look like this:

```javascript

// ActionType Constant
const ADD = 'ADD'

// Action - holds specific data which is sent to the store for processing
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

// Reducer - specifies how the state changes with a specific action
const messageReducer = (state, action) => {
  return [...state, action.message]
}

let store = {
  state: [],
  getState: () => store.state,

  // Delegates the action to the reducer
  dispatch: (action) => {
    if(action.type === ADD ){
      store.state = messageReducer(store.state, action)
    }
  }
}
```

## Connecting to the store with the Provider Component

When you want to implement Redux into your React app, the documentation and other tutorials will tell you to install two packages: `redux` and `react-redux`.

While the purpose of `redux` is to handle the store, actions and reducers, it still needs an extra step to connect all these functions to your React app. This is where `react-redux` comes in. It provides two key features.

1. The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper allows the child component (normally <App/>) to access the Redux `store` and `dispatch` functions anywhere within the component tree.

```javascript
<Provider store={store}>
  <App/>
</Provider>
```

2. `Connect`

To be continued...