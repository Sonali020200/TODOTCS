import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {id, text} = action.payload;
            state.push({id, text, completed: false});
        },
        toggleTodo: (state, action) => {
            const {id} = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            const {id} = action.payload;
            return state.filter(todo => todo.id !== id);
        },
        setFilter: (state, action)=> {
            state.filter = action.payload;
        },
    },
});

export const {addTodo, toggleTodo, deleteTodo, setFilter} = todosSlice.actions;

export default todosSlice.reducer;