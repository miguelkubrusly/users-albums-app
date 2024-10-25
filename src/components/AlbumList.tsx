import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store/store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumList({ user }: { user: User }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAdd = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={4} />;
  } else if (error) {
    content = <div>Error fetching albums...</div>;
  } else {
    content = data.map((album: Album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Album for {user.name}</h3>
      </div>
      <Button loading={results.isLoading} onClick={handleAdd}>
        + Add Album
      </Button>
      {content}
    </div>
  );
}

export default AlbumList;
