import PhotoList from "./PhotoList";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { useDeleteAlbumMutation } from "../store/store";
import { GoTrashcan } from "react-icons/go";

function AlbumsListItem({ album }: AlbumsListItemProps) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const handleDeleteAlbum = (
    event: React.MouseEvent<HTMLButtonElement>,
    album: Album
  ) => {
    event.stopPropagation();
    deleteAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2 scale-75"
        secondary
        loading={results.isLoading}
        onClick={(event) => handleDeleteAlbum(event, album)}
      >
        <GoTrashcan className="scale-125" />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
