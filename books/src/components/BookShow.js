import { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)
   
    const handleDeleteClick = () =>{
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return(
        <div>
            <div>{content}</div>
            <button onClick= {handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>X</button>
        </div>
    )
}

export default BookShow;