import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client, Document } from "yorkie-js-sdk";
import { pixelDataElement } from "./pixelData";

export interface DocState {
  client?: Client;
  doc?: Document<DottingDoc>;
  loading: boolean;
  errorMessage: string;
  status: DocStatus;
}

export type DottingDoc = {
  content: pixelDataElement[][];
  rowStartIndex: number;
  columnStartIndex: number;
  rowCount: number;
  columnCount: number;
};

export enum DocStatus {
  Disconnect = "disconnect",
  Connect = "connect",
}
type ActivateClientResult = { client: Client };
type AttachDocArgs = { doc: Document<DottingDoc>; client: Client };
type AttachDocResult = { doc: Document<DottingDoc>; client: Client };

const initialState: DocState = {
  loading: true,
  errorMessage: "",
  status: DocStatus.Connect,
};

const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    // createDocument(state, action: PayloadAction<string>) {
    //   state.doc = new yorkie.Document<DottingDoc>(`dotting${action.payload}`);
    // },
    // deactivateClient(state) {
    //   const { client } = state;
    //   state.client = undefined;
    //   client?.deactivate();
    // },
    // detachDocument(state) {
    //   const { doc, client } = state;
    //   state.doc = undefined;
    //   client?.detach(doc as Document<DottingDoc>);
    // },
    setClient(state, action: PayloadAction<Client>) {
      state.client = action.payload;
    },
    setDocument(state, action: PayloadAction<Document<DottingDoc>>) {
      state.doc = action.payload;
    },
  },
});

const { reducer, actions } = docSlice;
export const { setDocument, setClient } = actions;
export default reducer;
