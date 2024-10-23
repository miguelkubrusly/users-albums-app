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
import classNames from "classnames";
function Panel(_a) {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    const constantClasses = "border rounded p-2 shadow bg-white w-full";
    const finalClassName = className
        ? classNames(constantClasses, className)
        : constantClasses;
    return (_jsx("div", Object.assign({}, rest, { className: finalClassName }, { children: children })));
}
export default Panel;
//# sourceMappingURL=Panel.js.map