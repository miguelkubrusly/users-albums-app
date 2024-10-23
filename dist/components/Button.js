var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { GoSync } from "react-icons/go";
function Button(_a) {
    var { primary, secondary, success, warning, danger, outline, rounded, children, className, loading } = _a, rest = __rest(_a, ["primary", "secondary", "success", "warning", "danger", "outline", "rounded", "children", "className", "loading"]);
    const classes = twMerge(classNames(className, "flex text-sm text-center px-3 py-1.5 border border-solid font-medium m-2 h-8", {
        "border-black bg-gray-100 text-black hover:bg-gray-200": !primary && !secondary && !success && !warning && !danger && !outline,
        "border-black text-black bg-transparent hover:bg-gray-200 hover:text-black": !primary && !secondary && !success && !warning && !danger && outline,
        "rounded-full": rounded,
        "border-blue-500 bg-blue-500 text-white hover:bg-blue-600": primary && !outline,
        "border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white": primary && outline,
        "border-gray-700 bg-gray-800 text-white hover:bg-gray-900": secondary && !outline,
        "border-gray-700 text-gray-800 bg-transparent hover:bg-gray-800 hover:text-white": secondary && outline,
        "border-green-500 bg-green-500 text-white hover:bg-green-600": success && !outline,
        "border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white": success && outline,
        "border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600": warning && !outline,
        "border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white": warning && outline,
        "border-red-500 bg-red-500 text-white hover:bg-red-600": danger && !outline,
        "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white": danger && outline,
        "opacity-60": loading,
    }));
    return (_jsx("button", Object.assign({}, rest, { disabled: loading, className: classes }, { children: loading ? _jsx(GoSync, { className: "animate-spin" }) : children })));
}
export default Button;
//# sourceMappingURL=Button.js.map