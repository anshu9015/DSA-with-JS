// 1. React.js Core Questions
// What is React and why do we use it?
// What are the main features of React?
// What is JSX?
// How does JSX work internally?
// What is the Virtual DOM?
// How does React's Virtual DOM work?
// What is reconciliation in React?
// What is React Fiber?
// What is the difference between Virtual DOM and Real DOM?
// What are components in React?
// Functional component vs class component?
// What are props?
// What is state?
// Props vs state?
// Can we modify props?
// What happens when state changes?
// Why should we not directly modify state?
// What is one-way data binding?
// What is component composition?
// What is prop drilling?
// How can you avoid prop drilling?
// What is children prop?
// What are controlled and uncontrolled components?
// When would you use controlled vs uncontrolled components?
// What are keys in React?
// Why should we not use array index as a key?
// What happens if keys are incorrect?
// What is conditional rendering?
// What are fragments?
// What is React.StrictMode?
// 2. React Hooks Questions
// What is useState?
// How does useState work internally?
// Why does React state update asynchronously/batched?
// What is functional state updating?
// setCount(count + 1);
// setCount(count + 1);

// vs

// setCount(prev => prev + 1);
// setCount(prev => prev + 1);
// What is useEffect?
// What is the dependency array in useEffect?
// Difference between:
// useEffect(() => {})
// useEffect(() => {}, [])
// useEffect(() => {}, [value])
// What is the cleanup function of useEffect?
// When does cleanup execute?
// How do you prevent an API call from running repeatedly?
// What happens if you forget the dependency array?
// What is useRef?
// Difference between useRef and useState?
// Can useRef trigger a re-render?
// How do you access a DOM element using useRef?
// What is useMemo?
// What is useCallback?
// Difference between useMemo and useCallback?
// When should you NOT use useMemo?
// What is React.memo?
// Difference between React.memo, useMemo, and useCallback?
// What is useReducer?
// useState vs useReducer?
// What is useContext?
// What are custom hooks?
// Why do we create custom hooks?
// What are the Rules of Hooks?
// Why can't hooks be called inside loops or conditions?

//what is vite??
//what is npm and npx
//what is package.json and package.lock.json
//waht does npm run build do
//what does npm run dev

// Module 1 – How the Internet Works (Foundation)
// What happens when you type google.com?
// What is HTTP?
// What is HTTPS?
// What is SSL/TLS?
// What is an HTTP Request?
// What is an HTTP Response?
// What are Headers?
// Request Headers vs Response Headers
// Cookies
// Sessions
// JWT

// Module 2 – Browser Security
// What is a Browser?
// What is Origin?
// What is Same Origin Policy?
// Why did browsers create SOP?
// Cross-Origin Requests
// CORS

// Module 3 – Web Attacks
// XSS
// Stored XSS
// Reflected XSS
// DOM XSS
// CSRF
// Clickjacking
// MIME Sniffing
// Man in the Middle Attack

// Module 4 – Security Headers

// Every header

// Why it exists
// What problem it solves
// How browser uses it
// Real examples
// Interview questions
// Module 5 – React Security
// dangerouslySetInnerHTML
// React escaping
// localStorage vs Cookies
// Token Storage
// DOMPurify
// Dependency vulnerabilities
// npm audit
// VAPT
// 3. Scenario-Based React Questions

// These are very important for 3 YOE interviews.

// Scenario 1 — API called repeatedly
// You have an API call inside useEffect, but the API is being called multiple times. What could be the reason?
// How would you fix this?
// Scenario 2 — Infinite API calls
// You write:
// useEffect(() => {
//     fetchData();
// }, [data]);

// and fetchData() updates data.

// What will happen and how will you fix it?

// Scenario 3 — Search API
// You have a search box and need to call an API whenever the user searches.

// If the user types:

// r
// re
// rea
// reac
// react

// you don't want 5 API calls.

// How would you implement this?

// Scenario 4 — Large list
// Your API returns 50,000 records, and rendering the page freezes the browser.

// What could be the reason? How would you solve it?

// Expected areas:

// Pagination
// Virtualization
// Memoization
// Web Worker
// Lazy loading
// Avoid unnecessary rendering
// Scenario 5 — Slow component
// One component takes 2–3 seconds to render.

// How would you identify the problem?

// Which React/browser tools would you use?
// Scenario 6 — Child component re-rendering
// Parent component is re-rendering and a child component is also rendering even though its props haven't changed.

// How would you prevent unnecessary child rendering?

// Scenario 7 — useCallback
// You use React.memo on a child but it still re-renders.
// const Child = React.memo(({ handleClick }) => {
//    ...
// });

// Parent:

// const handleClick = () => {
//    console.log("clicked");
// };

// Why is the child still rendering?

// Scenario 8 — Form performance
// You have a form containing 50 fields and typing into one field makes the entire form slow.

// How would you optimize it?

// Scenario 9 — Multiple API calls
// Your dashboard has 10 APIs.

// Would you call them:

// await api1();
// await api2();
// await api3();

// or differently?

// How would you optimize it?

// Scenario 10 — API race condition
// User searches:
// React

// then quickly searches:

// React developer

// The first API responds after the second API.

// How can stale data appear and how would you prevent it?

// 4. React Performance Questions
// What causes a React component to re-render?
// How do you identify unnecessary re-renders?
// How do you optimize React performance?
// What is code splitting?
// What is lazy loading?
// What is React.lazy()?
// What is Suspense?
// What is bundle size?
// How can you reduce bundle size?
// What is tree shaking?
// What is virtualization?
// When would you use virtualization?
// How does pagination improve performance?
// What is memoization?
// When can memoization actually hurt performance?
// How would you optimize a large table?
// How would you optimize a dashboard containing many charts?
// How would you optimize images in a React application?
// 5. Redux / State Management Questions

// For 3 YOE, expect these if Redux is on your resume.

// What is Redux?
// Why do we need Redux?
// Redux vs Context API?
// Redux Toolkit vs traditional Redux?
// What is a store?
// What is an action?
// What is a reducer?
// What is dispatch?
// What is selector?
// What is middleware?
// What is Redux Thunk?
// How do you handle API calls using Redux Toolkit?
// What is createSlice?
// What is createAsyncThunk?
// What is RTK Query?
// Redux Toolkit vs RTK Query?
// How do you structure Redux state?
// How do you prevent unnecessary Redux re-renders?
// What data should be stored in Redux?
// What data should NOT be stored in Redux?
// Redux scenarios
// You have a user object needed by 15 different components. Where would you store it?
// Two unrelated components need to share data. How would you handle it?
// Redux state contains 10,000 records and updating one record causes the whole page to render again. How would you optimize it?
// You refresh the browser and Redux data disappears. How would you persist it?
// 6. JavaScript Questions — Very Important

// For a React developer with 3 years of experience, JavaScript can make or break the interview.

// What is the execution context?
// What is the call stack?
// What is the event loop?
// What is the callback queue?
// What is the microtask queue?
// Promise vs callback?
// async/await vs Promise?
// What is closure?
// What is lexical scope?
// What is hoisting?
// var, let, and const differences?
// What is temporal dead zone?
// What is this?
// Arrow function vs normal function?
// What is prototype?
// What is prototypal inheritance?
// What is event bubbling?
// What is event capturing?
// What is event delegation?
// Debouncing vs throttling?
// Shallow copy vs deep copy?
// == vs ===?
// Null vs undefined?
// What is destructuring?
// Spread vs rest operator?
// What are higher-order functions?
// What are pure functions?
// What is immutability?
// What is currying?
// What is memoization?
// What are modules?
// CommonJS vs ES modules?
// 7. JavaScript Scenario Questions
// Why does this happen?
// console.log(a);
// var a = 10;
// What is the output?
// console.log(a);
// let a = 10;
// What is the output?
// console.log(typeof null);
// Explain the output:
// console.log(1 + "2");
// console.log("5" - 2);
// What is the output?
// console.log([] == false);
// console.log([] === false);
// Explain:
// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// console.log("C");
// You have a button that users can click 100 times quickly.

// How would you prevent multiple API calls?

// You have a scroll event firing hundreds of times per second.

// How would you optimize it?

// 8. API / HTTP Questions
// How do you call an API in React?
// Fetch vs Axios?
// What are HTTP methods?
// GET vs POST?
// PUT vs PATCH?
// What are HTTP status codes?
// What is CORS?
// What is authentication vs authorization?
// What is JWT?
// Where should JWT be stored?
// What are HTTP headers?
// What is an interceptor?
// How would you handle API errors globally?
// How would you handle token expiration?
// How would you implement retry logic?
// How would you cancel an API request?
// What is AbortController?
// How would you handle loading/error/success states?
// 9. React Routing Questions
// What is React Router?
// What is dynamic routing?
// What is nested routing?
// Link vs useNavigate?
// How do you protect routes?
// How would you implement role-based routing?
// How do you redirect an unauthenticated user?
// How do you pass data between routes?
// How do you handle 404 pages?
// How do you lazy-load routes?
// 10. Forms Questions
// Controlled vs uncontrolled forms?
// How do you validate forms?
// Why would you use React Hook Form?
// What is Controller in React Hook Form?
// How do you handle validation errors?
// How do you handle dependent fields?
// How do you reset a form?
// How do you populate an edit form from API data?
// How do you handle a form with 50+ fields?
// How would you prevent unnecessary form re-renders?
// 11. CSS / UI Questions
// Flexbox vs Grid?
// When would you use Flexbox?
// When would you use Grid?
// How do you make a React application responsive?
// What are media queries?
// What is CSS specificity?
// Position relative, absolute, fixed, sticky?
// What is responsive design?
// How do you handle different screen sizes?
// How would you create a responsive dashboard?
// 12. Real Project Scenario Questions

// These are particularly important because interviewers often ask "What did you actually do in your project?"

// Explain your current React project.
// What was your role in the project?
// How did you structure your React application?
// How did you manage global state?
// How did you handle API integration?
// How did you handle authentication?
// How did you implement role-based access?
// How did you handle API errors?
// How did you handle loading states?
// What was the most difficult feature you implemented?
// Tell me about a production bug you fixed.
// How did you debug that bug?
// Did you face any performance issues?
// How did you improve performance?
// How did you implement pagination?
// How did you implement search and filtering?
// How did you prevent unnecessary API calls?
// How did you handle large datasets?
// How did you handle reusable components?
// How did you ensure responsive UI?
// 13. Advanced Scenario-Based Questions

// These are the ones I'd especially prepare for a 3 YOE interview.

// 221. Live Dashboard

// You have a live dashboard where data changes every few seconds.

// You don't want to repeatedly call the API.

// What would you use?

// 222. WebSocket

// Your interviewer says:

// "We need real-time notifications. Would you use polling or WebSocket?"

// Explain your decision.

// 223. Large Table

// You have 100,000 records in a table.

// The browser becomes slow.

// How would you design the solution?

// 224. Component Architecture

// Your application has:

// Header
// Sidebar
// Dashboard
// Users
// Contracts
// Reports
// Settings

// How would you structure the React project?

// 225. Reusable Components

// You have 20 pages and every page contains slightly different buttons, inputs and tables.

// How would you design reusable components without making them overly complicated?

// 226. Authentication

// User logs in successfully.

// How would you:

// store authentication state?
// protect routes?
// handle token expiration?
// logout?
// redirect the user?
// 227. Role-Based Access

// Your application has:

// Admin
// Manager
// User
// Viewer

// Each role has different permissions.

// How would you implement this?

// 228. API Failure

// You have 5 APIs on a dashboard.

// One API fails but the other 4 succeed.

// Should the entire page show an error?

// How would you design it?

// 229. Optimistic UI

// User clicks Delete.

// Would you wait for the API response before removing the item from UI?

// Or remove it immediately?

// Explain optimistic update.

// 230. Concurrent Requests

// A user changes filters quickly:

// Filter A → API call
// Filter B → API call
// Filter C → API call

// Responses come back in a different order.

// How do you make sure the UI shows only the latest result?

// 14. Coding Questions You Should Practice

// For 3 YOE React interviews, prepare these JavaScript coding problems:

// Reverse a string.
// Check palindrome.
// Find duplicate elements.
// Remove duplicates from an array.
// Find the second largest number.
// Find character frequency.
// Find the first non-repeating character.
// Flatten a nested array without using flat().
// Flatten an object.
// Group an array of objects by property.
// Sort an array of objects.
// Implement debounce.
// Implement throttle.
// Implement map() manually.
// Implement filter() manually.
// Implement reduce() manually.
// Implement Promise.all() conceptually.
// Find missing number from an array.
// Merge two arrays.
// Find intersection of two arrays.
// 15. Machine Coding / React Practical Questions

// You should also practice building these from scratch:

// Todo application.
// Searchable user list.
// Pagination component.
// Debounced search.
// Autocomplete component.
// Modal component.
// Tabs component.
// Accordion.
// Star rating component.
// Multi-select dropdown.
// File upload component.
// Infinite scrolling.
// CRUD application.
// Login + protected dashboard.
// Shopping cart.
// Data table with:
// Search
// Sort
// Filter
// Pagination
// Edit
// Delete
// ⭐ Most Important 25 for Your 3-YOE Preparation

// If you don't have much time, start with these:

// Virtual DOM
// Reconciliation
// React Fiber
// Props vs State
// useEffect
// useEffect dependency array
// useMemo
// useCallback
// React.memo
// Why components re-render
// Preventing unnecessary re-renders
// Context vs Redux
// Redux Toolkit
// API integration
// Debouncing vs throttling
// Event loop
// Closure
// Promise / async-await
// Event bubbling/delegation
// Authentication + JWT
// Large API response optimization
// Large table optimization
// Real-time dashboard / WebSocket
// Role-based access control
// Explain your current project deeply
// One important point for you

// Since you're targeting 3-year React roles, don't prepare React as a list of definitions only. Interviewers are very likely to ask:

// "You have used React in a real project. If this problem happens in your application, what would you do?"

// So your preparation should be roughly:

// JavaScript → React fundamentals → Hooks → Redux → API → Performance → Scenarios → Project discussion → Coding.

// That order will give you much better interview preparation than memorizing 250 answers.
const arr = [1, 2, 3, 3];
const mapArray = arr.map((index, item, array) => {
  console.log("index", index);
  console.log("item", item);
  console.log("array", array);
  item * 2;
});
console.log(mapArray);
