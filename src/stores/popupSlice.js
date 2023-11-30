import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProjects: false,
  showHistory: false,
  showEducation: false,
  showCerts: false,
  showSkills: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setShowProjects: (state) => {
      state.showProjects = !state.showProjects;
    },
    setShowHistory: (state) => {
      state.showHistory = !state.showHistory;
    },
    setShowEducation: (state) => {
      state.showEducation = !state.showEducation;
    },
    setShowSkills: (state) => {
      state.showSkills = !state.showSkills;
    },
    setShowCerts: (state) => {
      state.showCerts = !state.showCerts;
    },
  },
});
export const {
  setShowEducation,
  setShowHistory,
  setShowProjects,
  setShowSkills,
  setShowCerts,
} = popupSlice.actions;
export default popupSlice.reducer;
