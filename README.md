# Basic Todo Application with Redux Toolkit


### How does todoSlice work? 

In the todoSlice, a thunk is created. 
The thunk gets called by the components. 
The component dispatches the getTodosAsync action that is created by the thunk. 
If the response to the server is ok, the thunk will convert the response into JSON,
store it in a variable, 
and return the todos object. 

Since an action was created, todoSlice will find the appropriate reducer for the action. 
It will then take the current state, the action, and return a payload, in this case with the todos fetched from the API. 
The components that depend on the redux store for state management (which is itself importing the reducers from todoSlice)
will then be updated with the current state of the todos. 
