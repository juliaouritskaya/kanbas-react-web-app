import {createSlice} from "@reduxjs/toolkit";

interface Module {
    _id: string;
    name: string;
    course: string;
    lessons?: any[];
    editing?: boolean;
}

const initialState = {
    modules: [] as Module[],
};
const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, { payload: module }) => {
            state.modules = [...state.modules, module];
        },
        deleteModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.filter(
                (m: any) => m._id !== moduleId);
        },
        updateModule: (state, {payload: module}) => {
            state.modules = state.modules.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        editModule: (state, {payload: moduleId}) => {
            state.modules = state.modules.map((m: any) =>
                m._id === moduleId ? {...m, editing: true} : m
            ) as any;
        },
    },
});
export const {addModule, deleteModule, updateModule, editModule,  setModules} =
    modulesSlice.actions;
export default modulesSlice.reducer;