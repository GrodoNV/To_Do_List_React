//import React, { useState } from 'react'
// En tu index.js
import React from 'react';
import './index.css';  
function EmptyTodos() {
    return (
        <div className="TodoList-empty">
            <p>Crea tu primer To Do!<br />Dale click al <br /> <strong>+</strong></p>


        </div>
    );
}
export { EmptyTodos };
