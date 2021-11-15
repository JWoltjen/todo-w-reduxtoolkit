# Basic Todo Application with Redux Toolkit


### How does todoSlice work? 

In the todoSlice, a thunk is created. 
The thunk gets called by the components
The component dispatches the getTodosAsync action that is created by the thunk
If the response to the server is ok, the thunk will convert the response into JSON,
Store it in a variable, 
and return the todos object. 

Since an action was dispatched in todoSlice it will find the appropriate reducer. 
Once the reducer is found to handle the action, it will take the current state and action as arguments and return the payload with the todos
(action.payload.todos)


