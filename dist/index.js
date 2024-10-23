import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(Provider, Object.assign({ store: store }, { children: _jsx(App, {}) })));
//# sourceMappingURL=index.js.map