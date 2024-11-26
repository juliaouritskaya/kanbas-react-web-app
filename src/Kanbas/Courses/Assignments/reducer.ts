import {createSlice} from "@reduxjs/toolkit";
import {assignments} from "../../Database";

interface Assignment {
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueDate?: string;
    availableFrom?: string;
    availableUntil?: string;
}

const initialState = {
    assignments: [] as Assignment[],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, { payload }) => {
            state.assignments = payload;
        },
        addAssignment: (state, { payload }) => {
            state.assignments = [...state.assignments, payload];
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === payload._id ? payload : a
            );
        },
        deleteAssignment: (state, { payload }) => {
            state.assignments = state.assignments.filter(
                (a) => a._id !== payload
            );
        },
    },
});

export const { setAssignments, addAssignment, updateAssignment, deleteAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;