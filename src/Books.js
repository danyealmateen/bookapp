import "./Books.css";

const Books = () => {
    return (
        <>
            <div className="createNewBookDiv">
                <button>Create new book</button>
                <form>
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Pages" />
                </form>
            </div>
        </>
    )
}

export default Books;