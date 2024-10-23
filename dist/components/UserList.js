import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { deleteUser } from "../thunks/deleteUser";
import { addUser } from "../store/store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk, useThunkWithArg } from "../hooks/use-thunk";
function UserList() {
    const { data } = useSelector((state) => {
        return state.users;
    });
    const [loadUsers, loadingUsers, loadUsersError] = useThunk(fetchUsers);
    const [createUser, creatingUser, createUserError] = useThunk(addUser);
    const [removeUser, removingUser, removeUserError] = useThunkWithArg(deleteUser);
    const handleAddUser = () => {
        createUser();
    };
    const handleRemove = (id) => {
        removeUser(id);
    };
    useEffect(() => {
        loadUsers();
    }, [loadUsers]);
    const alwaysShow = (_jsxs("div", Object.assign({ className: "flex flex-row justify-between items-center m-3" }, { children: [_jsx("h1", Object.assign({ className: "m-2 text-xl" }, { children: "Users" })), _jsx(Button, Object.assign({ onClick: handleAddUser, loading: creatingUser || loadingUsers }, { children: "+ Add User" })), createUserError && _jsx("div", { children: "Error creating user" })] })));
    const variableContent = loadingUsers || removingUser ? (_jsx("div", { children: _jsx(Skeleton, { times: 7, className: "h-10 w-full" }) })) : loadUsersError ? (_jsx("div", { children: "Error Fetching Data..." })) : removeUserError ? (_jsx("div", { children: "Error Removing User" })) : (data.map((user) => (_jsx("div", Object.assign({ className: "mb-2 border rounded" }, { children: _jsxs("div", Object.assign({ className: "flex p-2 justify-between items-center cursor-pointer" }, { children: [user.name, _jsx(Button, Object.assign({ danger: true, onClick: () => handleRemove(user.id) }, { children: "x" }))] })) }), user.id))));
    return (_jsxs("div", { children: [alwaysShow, variableContent] }));
}
export default UserList;
//# sourceMappingURL=UserList.js.map