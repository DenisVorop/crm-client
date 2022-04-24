import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPage } from '../../../Redux/Reducers/usersReducer';

import './pagination.scss'

const Pagination = () => {
    const dispatch = useDispatch()

    const { totalCount, limit, currentPage } = useSelector(({ usersReducer }) => usersReducer);
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className="pagination">
            <div className="pagination__container">
                <div className="pagination__body">
                    <div className="pagination__items">
                        {pages.map((page, index) => {
                            return (
                                <div
                                    key={`${page}_${index}`}
                                    onClick={() => dispatch(getPage(page))}
                                    className={page === currentPage ? 'pagination__item pagination__item-active' : 'pagination__item'}
                                >
                                    {page}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
