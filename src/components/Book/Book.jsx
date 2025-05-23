import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card  w-96 shadow-sm p-6 bg-slate-100 ">
                <figure className='bg-gray-400 py-8 rounded-2xl mb-2'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Books" />
                </figure>
                <div className="card-bod">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-600">{tag}</button>)
                        }

                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className=" border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between my-2">
                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" aria-label="5 star" />
                        </div>
                       
                    </div>
                    <div className='flex justify-between '>
                           <div>
                           {
                                totalPages > 0
                                    ? <span className="badge badge-outline">{totalPages} pages</span>
                                    : <span className="badge badge-outline">N/A</span>
                            }
                           </div>
                           <div>
                           {
                                rating > 0
                                    ? <span className="badge badge-outline">{rating} ratings</span>
                                    : <span className="badge badge-outline">N/A</span>
                            }
                           </div>
                        </div>
                </div>
            </div></Link>
    );
};

export default Book;