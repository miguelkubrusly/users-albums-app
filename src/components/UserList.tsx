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
  const [doLoadUsers, loadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, creatingUser, creatingUserError] = useThunk(addUser);

  const handleAddUser = () => {
    doCreateUser();
  };
  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  useEffect(() => {
    doLoadUsers();
  }, [doLoadUsers]);

  if (loadingUsers) {
    return <Skeleton times={7} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAddUser} loading={creatingUser}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user"}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UserList;
