import React from "react";
import "./Books.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState(' ');
    const [pages, setPages] = useState(' ');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()


        fetch('https://bookapp-135fc-default-rtdb.europe-west1.firebasedatabase.app/books.json', {
            method: 'POST',
            body: JSON.stringify({
                title, pages
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(data => {
            setTitle(' ')
            setPages(' ')
            navigate('/')
        }).catch(error => {
            console.error("Error adding book", error)
        })
    }

    return (
        <>
            <div className="createNewBookDiv">
                <form onSubmit={handleSubmit}>
                    <button type="submit">Create new book</button>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Pages"
                        value={pages}
                        onChange={(e) => {
                            setPages(e.target.value)
                        }}
                    />
                </form>
            </div>
        </>
    )
}

export default Books;