import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { useDeleteAlbumMutation } from "../store/store";

function AlbumsListItem({ album }: AlbumsListItemProps) {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    album: Album
  ) => {
    event.stopPropagation();
    deleteAlbum(album);
  };

  const header = (
    <div className="p-2 flex flex-row mb-2">
      <Button
        className="mr-3 scale-75"
        danger
        loading={results.isLoading}
        onClick={(event) => handleDelete(event, album)}
      >
        x
      </Button>
      {album.title}
    </div>
  );
  return <ExpandablePanel header={header}>Album Content!</ExpandablePanel>;
}
export default AlbumsListItem;
