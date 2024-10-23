import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { RootState, addUser } from "../store/store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";

function UserList() {
  const { data } = useSelector((state: RootState) => {
    return state.users;
  });
  const [loadUsers, loadingUsers, loadUsersError] = useThunk(fetchUsers);
  const [createUser, creatingUser, createUserError] = useThunk(addUser);

  const handleAddUser = () => {
    createUser();
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const alwaysShow = (
    <div className="flex flex-row justify-between items-center m-3">
      <h1 className="m-2 text-xl">Users</h1>
      <Button onClick={handleAddUser} loading={creatingUser || loadingUsers}>
        + Add User
      </Button>
      {createUserError && <div>Error creating user</div>}
    </div>
  );

  const variableContent = loadingUsers ? (
    <div>
      <Skeleton times={7} className="h-10 w-full" />
    </div>
  ) : loadUsersError ? (
    <div>Error fetching data...</div>
  ) : (
    data.map((user) => (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    ))
  );

  return (
    <div>
      {alwaysShow}
      {variableContent}
    </div>
  );
}

export default UserList;
