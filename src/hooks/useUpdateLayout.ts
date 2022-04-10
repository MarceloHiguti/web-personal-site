import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  LayoutElementsVisibility,
  updateLayoutElementsVisibility,
} from "slices/layout.slice";

export function useUpdateLayout(): (values: LayoutElementsVisibility) => void {
  const dispatch = useDispatch();

  return useCallback(
    (values: LayoutElementsVisibility) => {
      dispatch(updateLayoutElementsVisibility(values));
    },
    [dispatch]
  );
}
