import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readBook, setReadBok] = useState([]);
  const [sort,setSort] = useState('');
  const data = useLoaderData();

  useEffect(() => {
    const storedBookLists = getStoredBook();
    const storedBookList = storedBookLists.map((id) => parseInt(id));
    const fullDetails = data.filter((book) =>
      storedBookList.includes(book.bookId)
    );
    setReadBok(fullDetails);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if(type==='pages') {
        const sortedBookByPages = [...readBook].sort((a,b)=> a.totalPages - b.totalPages);
        setReadBok(sortedBookByPages);
    }
    else if(type==='ratings') {
        const sortedBookByPages = [...readBook].sort((a,b)=> a.rating - b.rating);
        setReadBok(sortedBookByPages);
    }
  }
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by {sort ? sort : ''}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=>handleSort('pages')}>
            <a>Pages</a>
          </li>
          <li onClick={()=>handleSort('ratings')}>
            <a>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center text-3xl font-bold">Read Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {readBook.map((book) => (
              <Book key={book.bookId} singleBook={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
