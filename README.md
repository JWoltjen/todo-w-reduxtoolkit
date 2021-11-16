# Basic Todo Application with Redux Toolkit

This is a basic todo application that lets the user create new todos, delete todos, and toggle whether the todos have been completed. It keeps track of the total completed todos. State is persisted on reload with a backend api created with node and express. State is managed on the frontend with React-Redux and Redux Toolkit. 

### How is Redux Toolkit different from Redux? 

With the createSlice function you can focus on changing a single piece of the state tree in your application at a time. With createSlice, actions are created for you, so you don't have to write switch statements. You can mutate state directly, so you don't have to worry about Ojbect.assign() or splice with the spread operator.  

### What are Thunks and how does this application use them? 

Thunks are a piece of middleware that makes asynchronous calls to an api. For redux, thunks are a pattern of writing functions with logic inside that can interact with Redux store's dispatch method. This application uses them to make asynchronous calls to the API which is storing a list of todos. 

### How does todoSlice work? 

In the todoSlice, a thunk is created. 
The thunk gets called by the components. 
The component dispatches the getTodosAsync action that is created by the thunk. 
If the response to the server is ok, the thunk will convert the response into JSON,
store it in a variable, 
and return the todos object. 

Since an action was created, todoSlice will find the appropriate reducer for the action. 
It will then take the current state, the action, and return a payload, for example with the todos fetched from the API. 
The components that depend on the redux store for state management (which is itself importing the reducers from todoSlice)
will then be updated with the current state of the todos. Once the state of the todos has been updated in the components, the JSX rerenders and updates the page. All of this is possible because the getTodosAsync method is dispatched in a useEffect when the component first mounts. 
