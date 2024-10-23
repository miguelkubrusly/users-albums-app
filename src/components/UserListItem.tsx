import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useThunkWithArg } from "../hooks/use-thunk";
import { deleteUser } from "../thunks/deleteUser";
import ExpandablePanel from "./ExpandablePanel";

function UserListItem({ user }: { user: User }) {
  const [removeUser, removingUser, removeUserError] =
    useThunkWithArg(deleteUser);

  const handleRemove = (id: string) => {
    removeUser(id);
  };

  const header = (
    <>
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
    </>
  );

  return removeUserError ? (
    <div>Error Removing User</div>
  ) : (
    <ExpandablePanel header={header}>CONTENT</ExpandablePanel>
  );
}

export default UserListItem;
