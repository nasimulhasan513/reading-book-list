import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const NavBar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Reading Book List</h1>
            <p>Currently You Have {books.length} Books To Get Throw...</p>
        </div>
    )
}

export default NavBar
