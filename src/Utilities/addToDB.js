import Swal from 'sweetalert2'
const getStoredBook = () => {
  const storedBook = localStorage.getItem("bookList");

  return storedBook ? JSON.parse(storedBook) : [];
};

const addToStoredData = (id) => {
  const storedBook = getStoredBook();

  if (storedBook.includes(id)) {
    Swal.fire({
      icon: "error",
      title: "Book Already Added to Read List",
    });
  } else {
    storedBook.push(id);
    localStorage.setItem('bookList', JSON.stringify(storedBook));
  }
};

export { addToStoredData , getStoredBook };
