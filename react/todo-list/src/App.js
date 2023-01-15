import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
    const [newTodo, setNewTodo] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //will not add item if input is empty
        if(newTodo.length === 0){
            return;
        }

        const todoItem = {
            text: newTodo,
            complete: false
        }
        
        setList([...list, todoItem]);
        setNewTodo('');
    }

    const handleChecked = (index) => {
        const updated = list.map((item, i) => {
            if(index === i) {
                item.complete = !item.complete;
            }

            return item;
        });

        setList(updated);
    }

    const handleDelete = (index) => {
        const filterList = list.filter((item, i) => {
            return i !== index;
        });

        setList(filterList);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' onChange={(e) => setNewTodo(e.target.value)} value= { newTodo }/>
                <div>
                    <button>Add</button>
                </div>
            </form>

            <div>
                {
                    list.map((item, i) => {
                        
                        
                        return (
                            <Todo 
                                key={i} 
                                item={item} 
                                handleChecked={handleChecked} 
                                i={i}
                                handleDelete={handleDelete}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
