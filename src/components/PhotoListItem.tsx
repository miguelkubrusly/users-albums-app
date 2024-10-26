import { useDeletePhotoMutation } from "../store/store";
import { GoTrashcan } from "react-icons/go";

function PhotoListItem({ photo }: { photo: Photo }) {
  const [deletePhoto] = useDeletePhotoMutation();

  const handleDeletePhoto = (photo: Photo) => {
    deletePhoto(photo);
  };

  return (
    <div
      onClick={() => {
        handleDeletePhoto(photo);
      }}
      className="relative m-2 cursor-pointer"
    >
      <img src={photo.url} className="h-20 w-20" alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotoListItem;
