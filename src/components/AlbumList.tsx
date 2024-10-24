import { useFetchAlbumsQuery } from "../store/store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

type Album = {
  id: number;
  title: string;
  userId: number;
};

function AlbumList({ user }: { user: User }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error fetching albums...</div>;
  } else {
    content = data.map((album: Album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel header={header} key={album.id}>
          Album Content!
        </ExpandablePanel>
      );
    });
  }

  console.log(data);

  return (
    <div>
      Album for {user.name}
      {content}
    </div>
  );
}

export default AlbumList;
