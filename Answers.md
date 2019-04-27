1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Three array methods that do not produce side-effects are .map, .filter, and .concat(or can use spread operator). These keep our code immutable. The spread operator or Object.assign creates a new object and extends the properties of another object




1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds the state tree meaning the data for our application. The state tree is given to UI. A component will receive the data and pass it down to other components. When an event occurs it will emit an action from action creators that will be sent to the reducers(pure functions). THe reducers will receive the action and create a new state tree and pass it to the store. The old state tree is replaced by the new and the new state is then passed along to the view and the cycle continues. Store is known as single source of truth because the state of our entire application is stored in an object tree within a single store. 




1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state holds the entire state for the entire application you are making. The component state is the state only for the specific component it resides in. Application state is more useful in projects that are much bigger and will scale. Component state is better to be used for smaller projects.




1.  What is middleware?

Middleware is an extension point for Redux that intercepts every action before it flows through the reducers. It can stop actions, forward an action untouched, dispatch a differnt action, or dispatch multiple actions, and handles asynchronous requests.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to change the reducer flow which is normally synchronous to asynchronous so we can make API calls from our action creators. This means we are changing up the action creators to perform async API calls.






1.  Which `react-redux` method links up our `components` with our `redux store`?

THe connect method links up our components with our redux store.