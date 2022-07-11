import React, {useEffect, useState} from 'react';
import {TodoTitle} from './TodoTitle.js';
import {TodoForm} from './TodoForm.js';
import {TodoTaskContainer} from "./TodoTaskContainer";
import {TodoSampleTasks} from "./TodoSampleTasks";

export function TodoMain() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async ()=>{
            async function fetchData() {
                const data = await fetch(`http://localhost:3001/task/search/`);
                const todos = await data.json();
                setTodos(todos)
            }

            await fetchData();
        })()
    }, []);


    async function createTask(title, description) {
        const newTodos = [...todos, {title, description}];

        const addRes = await fetch(`http://localhost:3001/task`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, description})
        });
        // const data = await addRes.json();
        setTodos(newTodos);
    }


    async function deleteTask(index) {
        const newTodos = [...todos];
        const del = newTodos.splice(index, 1);
        const itemDelInDB = await fetch(`http://localhost:3001/task`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(del)
        });
        const data = await itemDelInDB.json();
        setTodos(newTodos);
    }

    return <>
        <TodoTitle/>
        <TodoForm todos={[...todos]} createTask={createTask}/>
        <TodoSampleTasks todos={[...todos]} setTodos={setTodos} />
        <TodoTaskContainer todos={todos} deleteTask={deleteTask}/>
    </>
}