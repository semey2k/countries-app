import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlice from "./slice/darkmodeSlice";
import dataSlice from "./slice/dataSlice";


export default configureStore({
    reducer: {
        countries: dataSlice,
        darkMode: darkmodeSlice,
    }
})