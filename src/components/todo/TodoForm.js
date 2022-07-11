import React, {useState} from 'react';


export function TodoForm({createTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleClick(e) {
        e.preventDefault();
        if (!title && !description) {
            return
        }
        ;
        createTask(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleClick}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            <input type="submit" value='Add'/>


        </form>
    )
}