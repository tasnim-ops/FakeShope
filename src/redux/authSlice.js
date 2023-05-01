import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:null,
    isLoading: false,
    error:null
}
//test for git
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUserInfo: (state,action)=>{
            state.user=action.payload;
        }
    }
});

export const{setUserInfo}= authSlice.actions;
export default authSlice.reducer;