
function BookShow({ book, onDelete }) {
   
    const handleClick = () =>{
        onDelete(book.id)
    }

    return(
        <div>
            <div>{book.title}</div>
            <button onClick={handleClick} >Delete</button>
        </div>
    )
}

export default BookShow;