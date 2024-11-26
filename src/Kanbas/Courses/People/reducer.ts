import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    loginId: string;
    section: string;
    role: string;
    lastActivity: string;
    totalActivity: string;
}

interface PeopleState {
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: PeopleState = {
    users: [],
    loading: false,
    error: null,
};

export const getUsersByCourse = createAsyncThunk(
    "people/getUsersByCourse",
    async (courseId: string) => {
        const response = await axios.get(`/api/users/course/${courseId}`);
        return response.data;
    }
);

const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersByCourse.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsersByCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload || [];
            })
            .addCase(getUsersByCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch users";
            });
    },
});

export default peopleSlice.reducer;
