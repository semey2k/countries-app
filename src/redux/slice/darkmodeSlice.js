import { createSlice } from "@reduxjs/toolkit";


const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: {
        theme: window.localStorage.getItem('theme') || 'light',
    },
    reducers: {
        setDarkmode(state){
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

export const {setDarkmode} = darkmodeSlice.actions;
export default darkmodeSlice.reducer;