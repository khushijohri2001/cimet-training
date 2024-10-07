import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "Todo",
    initialState: {
        input: "",
        todos: [],
        isEdit: false,
        editId: null
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
            state.isEdit = !state.isEdit
        }
    }
})

export const SelectInput = (state) => {return state.Todo.input}
export const SelectTodos = (state) => {return state.Todo.todos}
export const SelectIsEdit = (state) => {return state.Todo.isEdit}

export const { setInput, addTodo, deleteTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer