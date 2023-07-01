import { useState, useEffect } from "react"
import React from "react";


const BookList = () => {

    interface Book {
        title: string;
        pages: string;
    }

    const [books, setBooks] = useState<Book[]>([]);
    // const [bookAdded, setBookAdded] = useState(false);

    useEffect(() => {
        fetch('https://bookapp-135fc-default-rtdb.europe-west1.firebasedatabase.app/books.json')
            .then(response => response.json())
            .then(data => {
                setBooks(Object.values(data))
            });
    }, []);

    return (
        <>
            {books.map((book, index) =>
                <div key={index}>
                    <h2>{book.title}</h2>
                    <p>{book.pages}</p>
                </div>)}
        </>
    )
}

export default BookList;