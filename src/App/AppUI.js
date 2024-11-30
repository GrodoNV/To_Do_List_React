import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal/index.js";
import { TodoContext } from "../TodoContext/index.js";
import { TodoForm } from "../TodoForm/index.js";

function AppUI() {
    const {loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
    <>
    <TodoCounter/>
    <TodoSearch />


    <TodoList>
    {loading && <TodosLoading />}
    {error && <TodosError/>}
    {(!loading && searchedTodos.length ===0 ) && <EmptyTodos/>}
    {searchedTodos.map((todo) => (
    <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
    />
    ))}
    </TodoList>
    <CreateTodoButton 
        setOpenModal = {setOpenModal}
    />

    {openModal && (
        <Modal>
            <TodoForm/>
        </Modal>
    )}

    </>
    );
}

export { AppUI };
