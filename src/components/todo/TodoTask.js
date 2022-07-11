import React from 'react';
import './TodoTask.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'


export function TodoTask({index, todo, deleteTask}) {

    return <div className='task'>
        <div className='title'> {todo.title}
            <div className='description'>{todo.description}</div>
        </div>


        <div className="tooltip">
            <button onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrashCan}/></button>
            <div className="right">
                <div className="text-content">
                    <h3>Usuń</h3>
                </div>

            </div>
        </div>
    </div>
}
