import React from 'react';
import {addToBase} from '../fireToAPI/fireToAPI';
import {sampleBase} from "./todoSampleBase";

export const TodoSampleTasks = ({todos, setTodos}) => {
    async function addHandler() {
        const newTodos = todos;
        let index = 0;
        sampleBase.map(async ({

                                  title,
                                  description,

                              }) => {

            const isOkAddToBase = await addToBase(title, description);
            index++;
            if (isOkAddToBase) {
                newTodos.push({

                    title,
                    description,

                });
                if(index === 5){
                    setTodos(newTodos)
                    index=0;
                }

            }
        })



    }

    return <button onClick={() => addHandler()}>Dodaj przykładowe zadania</button>
}