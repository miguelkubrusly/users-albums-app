import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
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
        <div className="flex flex-row items-center justify-between ">
          <div className=" scale-75">
            <Button
              className="mr-3"
              outline
              loading={removingUser}
              onClick={() => handleRemove(user.id)}
            >
              <GoTrashcan className="scale-125" />
            </Button>
          </div>
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
