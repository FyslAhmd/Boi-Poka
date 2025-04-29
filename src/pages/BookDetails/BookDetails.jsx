import { useLoaderData, useParams } from "react-router";
import { addToStoredData } from "../../Utilities/addToDB";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleData = data?.find((book) => book.bookId === bookId);

  const { bookName, image } = singleData;

  const handleMarkAsRead = (id) => {
    Swal.fire({
      title: "Book Added to Read List",
      icon: "success",
    });
    addToStoredData(id);
  };
  return (
    <div>
      {data.length < 1 ? (
        "Loading..."
      ) : (
        <div>
          <img className="w-48" src={image} alt="" />
          <h5>{bookName}</h5>
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-accent m-2"
          >
            Mark as Read
          </button>
          <button className="btn btn-info m-2">Wishlist</button>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
