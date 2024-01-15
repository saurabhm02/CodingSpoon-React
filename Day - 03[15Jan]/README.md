# React Component Examples

This repository contains examples of React components, showcasing various concepts and techniques in React development.

## Topics Covered

### 1. Class-Based Component

- **File:** `AppClass.js`
- A class-based React component (`App`) using the `Component` class from React.
- State management using the `constructor` and `setState` method.
- Conditional rendering based on the state (`show` variable).

### 2. Function-Based Components

#### App Component

- **File:** `App.js`
- Function-based React component (`App`) using the `useState` hook.
- Conditional rendering based on the state (`show` variable).
- Handling events (`onClick` event on buttons).
- Managing state with the `useState` hook for both boolean (`show`) and numeric (`count`) values.
- Rendering a list using `map` on an array (`data` array).

#### Home Component

- **File:** `Home.js`
- Function-based React component (`Home`) receiving and passing down props.

#### Child Component

- **File:** `Child.js`
- Function-based React component (`Child`) receiving and passing down props.

#### GrandChild Component

- **File:** `GrandChild.js`
- Function-based React component (`GrandChild`) receiving and displaying props.

### 3. Component Communication

- Passing props between components (`App` -> `Home` -> `Child` -> `GrandChild`).
- Hierarchical component structure.

### 4. Event Handling

- Handling click events on buttons to toggle visibility (`onClick` event).

### 5. State Management with Hooks

- Using the `useState` hook for managing component state (`show` and `count` variables).

