import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { RootState, addUser } from "../store/store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";

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

  const fixedContent = (
    <div className="flex flex-row justify-between items-center m-3">
      <h1 className="m-2 text-xl">Users</h1>
      <Button
        onClick={handleAddUser}
        outline
        loading={creatingUser || loadingUsers}
      >
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
    <div>Error Fetching Data...</div>
  ) : (
    data.map((user) => (
      <div key={user.id}>
        <UserListItem user={user} />
      </div>
    ))
  );

  return (
    <div>
      {fixedContent}
      {variableContent}
    </div>
  );
}

export default UserList;
