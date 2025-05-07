import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utilities/addToDb';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { image, bookName, author, category, rating, tags, description, review } = book;
    const handlemarkasRead = (id)=>{
     addToStoredReadList(id);
    }
    const handlemarkasWish = (id)=>{
     addToStoredWishList(id);
    }

    return (
        <div className='my-12 px-6 mb-4'>
            <h2 className="text-2xl font-bold mb-6">Book Details</h2>
            <div className='flex flex-col md:flex-row items-center gap-10 bg-slate-100 p-6 rounded-xl shadow-md'>
                <img className='w-60 h-auto rounded-lg shadow' src={image} alt={bookName} />
                <div className='flex-1 space-y-4'>
                    <h3 className='text-3xl font-semibold'>{bookName}</h3>
                    <p className='text-gray-600'>by <span className='font-medium'>{author}</span></p>

                    <div className='flex flex-wrap gap-2'>
                        {tags.map((tag, index) => (
                            <span key={index} className='badge badge-accent'>{tag}</span>
                        ))}
                    </div>

                    <p><strong>Category:</strong> {category}</p>
                    <p className="text-sm text-gray-700">{description}</p>

                    <p> <strong>Review:</strong>{review}</p>

            
                    <div className="flex items-center gap-2">
                        <div className="rating">
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" disabled checked={rating >= 1} />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" disabled checked={rating >= 2} />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" disabled checked={rating >= 3} />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" disabled checked={rating >= 4} />
                            <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" disabled checked={rating >= 5} />
                        </div>
                        <span className="text-sm text-gray-500">({rating})</span>
                    </div>

                    <div className='pt-4 space-x-4'>
                        <button onClick={()=>handlemarkasRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
                        <button onClick={()=>handlemarkasWish(bookId)} className="btn btn-active btn-accent">Add Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
