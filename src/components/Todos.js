import React, {useState} from 'react'



function Todos() {
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <h1>Todo App using Redux Toolkit</h1>
            <div>
                <input value={inputText} onChange={e => setInputText(e.target.value)} />
                <button>Add</button>
            </div>        
           
        </div>
    )
}

export default Todos
