import Button from "./Button";
import { useThunkWithArg } from "../hooks/use-thunk";
import { deleteUser } from "../thunks/deleteUser";

function UserListItem({ user }: { user: User }) {
  const [removeUser, removingUser, removeUserError] =
    useThunkWithArg(deleteUser);

  const handleRemove = (id: string) => {
    removeUser(id);
  };

  return removeUserError ? (
    <div>Error Removing User</div>
  ) : (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
        <Button
          danger
          loading={removingUser}
          onClick={() => handleRemove(user.id)}
        >
          x
        </Button>
      </div>
    </div>
  );
}

export default UserListItem;
