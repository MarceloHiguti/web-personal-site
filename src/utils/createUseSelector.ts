/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const createUseSelector =
  <Name extends string, SliceState>(slice: Slice<SliceState, any, Name>) =>
  <T>(selector: (state: SliceState) => T): T =>
    useSelector((state: { [K in Name]: SliceState }) =>
      selector(state[slice.name])
    );
