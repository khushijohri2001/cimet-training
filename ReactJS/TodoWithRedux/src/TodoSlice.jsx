import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "Todo",
    initialState: {
        input: "",
        todos: [],
        isEdit: false,
        editId: null,
        editInput: ""
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, {
                id: Date.now(),
                task: state.input,
                isComplete: false
            }]

            state.input = ""
        },
        deleteTodo: (state, action) => {
            const updatedTodo = state.todos.filter(todo => todo.id !== action.payload);
            state.todos = updatedTodo
        },
        editTodo: (state, action) => {
            state.editId =  action.payload
            state.isEdit = !state.isEdit
            state.editInput = state.todos.find((todo) => todo.id === action.payload).task
        },
        setEditInput: (state, action) => {
            state.editInput = action.payload
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === state.editId ? {...todo, task: state.editInput} : todo);
            state.isEdit = false;
            state.editId = null;
            state.editInput = ""
        },
        deleteAllTodos: (state, action) => {
            state.todos=[]
        }
    }
})

export const SelectInput = (state) => {return state.Todo.input}
export const SelectTodos = (state) => {return state.Todo.todos}
export const SelectIsEdit = (state) => {return state.Todo.isEdit}
export const SelectEditId = (state) => {return state.Todo.editId}
export const SelectEditInput = (state) => {return state.Todo.editInput}

export const { setInput, addTodo, deleteTodo, editTodo, setEditInput, updateTodo, deleteAllTodos } = TodoSlice.actions;

export default TodoSlice.reducer