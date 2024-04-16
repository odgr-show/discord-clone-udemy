import {createSlice} from "@reduxjs/toolkit"
import { InitialUserstate } from "../Types";

const initialState: InitialUserstate = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});
console.log(userSlice)

export default userSlice.reducer;

