import React from 'react';
import {TodoTask} from './TodoTask.js';

export function TodoTaskContainer({todos, deleteTask}) {
    return (

        <div>

            {
                todos.map((todo, index) => {

                    return (
                        <TodoTask
                            key={index}
                            index={index}
                            todo={todo}
                            deleteTask={deleteTask}
                        />
                    );

                })
            }

        </div>
    )
}