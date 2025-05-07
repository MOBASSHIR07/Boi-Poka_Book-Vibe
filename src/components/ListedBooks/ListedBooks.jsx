import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList ,getStoredWishList} from '../../utilities/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
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
    return (
        <div>
            <h3 className='text-3xl my-8 '>Listed Books</h3>
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