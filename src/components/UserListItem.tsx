import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useThunkWithArg } from "../hooks/use-thunk";
import { deleteUser } from "../thunks/deleteUser";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }: { user: User }) {
  const [removeUser, removingUser, removeUserError] =
    useThunkWithArg(deleteUser);

  const handleRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    removeUser(id);
  };

  const header = (
    <>
      <div className=" scale-75">
        <Button
          className="mr-3"
          outline
          loading={removingUser}
          onClick={(event) => handleRemove(event, user.id)}
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
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UserListItem;
