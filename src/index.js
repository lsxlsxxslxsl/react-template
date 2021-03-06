import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import PostList from "./PostList";
// import Render from "./Render";
// import Error from "./Error";
// import Portals from './Portals'
// import HocWithPersistentData from './HocWithPersistentData'
// import HocWithRef from './HocWithRef'
// import HocWithControlledState from './HocWithControlledState'
// import HocWithStyle from './HocWithStyle'
import HocWithExtend from './HocWithExtend'


ReactDOM.render(<HocWithExtend />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
