import { useState, useEffect } from "react"
import React from "react";
import "./BookList.css"


interface Book {
    title: string;
    pages: string;
}

interface BookListProps {
    bookAdded: boolean;
}

const BookList: React.FC<BookListProps> = ({ bookAdded }) => {


    const [books, setBooks] = useState<Book[]>([]);


    useEffect(() => {
        fetch('https://bookapp-135fc-default-rtdb.europe-west1.firebasedatabase.app/books.json')
            .then(response => response.json())
            .then(data => {
                setBooks(Object.values(data))
            });
    }, [bookAdded]);

    return (
        <>
            {books.map((book, index) =>
                <div className="bookDiv" key={index}>
                    <h2>{book.title}</h2>
                    <p>{book.pages} pages total</p>
                </div>)}
        </>
    )
}

export default BookList;