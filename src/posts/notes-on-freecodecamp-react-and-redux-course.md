---
title: "Notes on: FreeCodeCamp React and Redux Course"
date: "2018-10-07"
indexImage: ""
---

Just a long string of notes on this course https://learn.freecodecamp.org/front-end-libraries/react-and-redux/

## Store in a nutshell

Redux being a state management library means that most of its functions revolve around the store. With actions flying around and reducers consuming a previous state and an action to reveal a new state, the store sits in the middle and is the 'single source of truth' (quoted as this was one of the [key motivations](https://redux.js.org/introduction/threeprinciples) behind Redux).

Lin Clark's [cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6) has to be one of my favourite explanations for Redux. She explains the store as the 'controlling and bureaucratic' one. Its two key responsibilities are:
1. Holding onto the state tree - allowing access to it through `getState()`
2. Delegating the work to work out which reducers -- or, in Redux's words dispatching actions

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

## Connecting to the store with the Provider Component with React Redux

When you want to implement Redux into your React app, the documentation and other tutorials will tell you to install two packages: `redux` and `react-redux`.

While the purpose of `redux` is to handle the store, actions and reducers, it still needs an extra step to connect all these functions to your React app. This is where `react-redux` comes in. It provides two key features.

1. The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper allows the child component (normally <App/>) to access the Redux `store` and `dispatch` functions anywhere within the component tree.

```javascript
<Provider store={store}>
  <App/>
</Provider>
```

2. `Connect` gives a component access to two functions that you will defined in your app: `mapStateToProps()` and `mapDispatchToProps()`


The Provider component provides `state` and the `dispatch` function to your React components. But, to make sure that each component only has access to the state it needs, you must specify exactly what state and actions you want. You accomplish with two functions: `mapStateToProps()` and `mapDispatchToProps()`.

Here, `mapStateToProps()` exposes a very specific part of the state to the specified

```javascript
const state = [];

const mapStateToProps = (state) => {
    return {
        messages: state
    }
}
```

`mapDispatchToProps()` exposes specific action creators to your React components so they can dispatch actions against the Redux store. The function returns an object that maps dispatch actions to property names, which become component props. However, instead of returning a piece of state, each property returns a function that calls `dispatch` with an action creator and any relevant action data. You have access to this `dispatch` because it's passed in to `mapDispatchToProps()` as a parameter when you define the function, just like when passing state to `mapStateToProps()`. Behind the scenes, React Redux is using Redux's `store.dispatch()` to conduct these dispatches with `mapDispatchToProps()`.

```javascript
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => { dispatch(addMessage(message)) }
  }
}
```

## Bringing it all together

These steps can happen in a different order - but this is just how I think of it.

1. First, use `Redux.createStore()` to define the Store's reducers, actions and initial state (if needed)
2. Use React Redux's `Provider` to wrap the main App component (which will be defined in step 3). Pass in the Redux store created in step 1 as a prop called store. This will expose the `dispatch` function and the `state` to the child components for use in steps 4 and 5.
3. Define the Presentational component - the UI presented to the user, how it looks with regards to the props it receives and how it reacts to the user
4. `mapStateToProps()` to expose only the necessary state to each component.
5. `mapDispatchToProps()` to define what action and information should be dispatched to the store when the state needs to be updated. Has 
6. Expose `mapStateToProps()` and `mapDispatchToProps()` to the component with React Redux's `Connect` 