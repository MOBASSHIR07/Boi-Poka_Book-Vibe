import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../utilities/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allbooks = useLoaderData();
    useEffect(() => {

        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allbooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)

        const storedWishList = getStoredWishList().map(id => parseInt(id));
        const wishBookList = allbooks.filter(book => storedWishList.includes(book.bookId));
        setWishList(wishBookList);

    }, [])

    const handleSort = (criteria) => {
        setSort(criteria);
        if (criteria === 'Ratings') {
            const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedBooks);
        }
        else if (criteria === 'No of pages') {
            const sortedBooks = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedBooks);
        }
    }

    return (
        <div>
            <h3 className='text-3xl my-8 text-center '>Listed Books</h3>
            <div className="dropdown dropdown-center mb-4 flex justify-center items-center relative">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort By : ${sort}` : 'Sort by⬇️'}
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm absolute top-[0%] mt-1"
                >
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('No of pages')}><a>No of Pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read</h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                        {
                            readList.map(book => (
                                <Book key={book.bookId} book={book} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            wishList.map(book => (
                                <Book key={book.bookId} book={book} />
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;