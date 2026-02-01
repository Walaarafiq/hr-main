"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
(0, client_1.createRoot)(document.getElementById('root')).render(
// <StrictMode>
//   <App />
// </StrictMode>,
(0, jsx_runtime_1.jsx)(App_1.default, {}));
