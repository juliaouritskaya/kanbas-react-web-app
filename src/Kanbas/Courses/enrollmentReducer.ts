import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses") || "[]") as string[],
};

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
        enrollInCourse: (state, action: PayloadAction<string>) => {
            if (!state.enrolledCourses.includes(action.payload)) {
                state.enrolledCourses.push(action.payload);
                localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
            }
        },
        unenrollFromCourse: (state, action: PayloadAction<string>) => {
            state.enrolledCourses = state.enrolledCourses.filter(
                (id) => id !== action.payload
            );
            localStorage.setItem("enrolledCourses", JSON.stringify(state.enrolledCourses));
        },
    },
});

export const {enrollInCourse, unenrollFromCourse} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
