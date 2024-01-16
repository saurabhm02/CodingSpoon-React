# React Learning Journey - Day 4

Welcome to Day 4 of your React learning journey with Coding Spoon! In today's session, we covered various advanced React concepts and implemented a simple React application. Below is a summary of the key topics and the code you've worked on:

## Topics Covered:

### 1. Component Lifecycle Methods:

We delved into React's component lifecycle methods, gaining a deeper understanding of how components mount, update, and unmount. The following methods were discussed and implemented in the class component:

- `constructor`: Initializing component state.
- `getDerivedStateFromProps`: Updating state based on props changes.
- `shouldComponentUpdate`: Deciding whether a component should re-render.
- `getSnapshotBeforeUpdate`: Capturing information before a component updates.
- `componentDidUpdate`: Executing actions after a component updates.
- `componentDidMount`: Performing actions after the component has been mounted.
- `componentWillUnmount`: Cleaning up before a component is unmounted.
- `componentDidCatch`: Handling errors within the component tree.

### 2. React Router:

We explored React Router to enable navigation and routing within our application. Key components from React Router were implemented, including:

- `BrowserRouter`: Setting up the router for navigation.
- `Routes` and `Route`: Defining routes for different components.
- `Link`: Creating navigation links.
- Nested routing for modularizing our application.

### 3. Building a Multi-Page Application:

We applied our knowledge of React Router to build a multi-page application with the following components:

- `NavBar`: A navigation bar component for easy navigation.
- `Home`: The main home page component.
- `Child`: A child component accessible via the "/child" route.
- `GrandChild`: A grandchild component accessible via the "/grandchild" route.
