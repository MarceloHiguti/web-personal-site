import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LayoutElementsVisibility {
  sidebar: boolean;
  navbar: boolean;
  profileMenu: boolean;
}

interface LayoutProgressOverlay {
  isActive: boolean;
  tip?: string;
}

export interface LayoutSlice {
  visibility: LayoutElementsVisibility;
  progressOverlay: LayoutProgressOverlay;
  isSidebarOpen: boolean;
}

const initialState: LayoutSlice = {
  visibility: {
    sidebar: false,
    navbar: false,
    profileMenu: false,
  },
  isSidebarOpen: false,
  progressOverlay: {
    isActive: false,
    tip: undefined,
  },
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    updateLayoutElementsVisibility: (
      state,
      { payload }: PayloadAction<LayoutElementsVisibility>
    ) => {
      state.visibility = payload;
    },
    updateLayoutProgressOverlay: (
      state,
      { payload }: PayloadAction<LayoutProgressOverlay>
    ) => {
      state.progressOverlay = payload;
    },
    toggleSidebarOpen(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {
  updateLayoutElementsVisibility,
  updateLayoutProgressOverlay,
  toggleSidebarOpen,
} = layoutSlice.actions;
