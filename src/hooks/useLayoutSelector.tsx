import { createUseSelector } from "utils/createUseSelector";

import { layoutSlice } from "slices/layout.slice";

export const useLayoutSelector = createUseSelector(layoutSlice);
