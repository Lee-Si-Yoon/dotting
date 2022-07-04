import React, { useEffect, useState } from "react";
import {
  dataArrayElement,
  PanelKeys,
  PixelDTO,
  rowColumnColor,
} from "../../../../const/CommonDTO";
import { Pixel } from "../Pixel";
import * as S from "./styles";
import * as mouseEvent from "../../../../store/modules/mouseEvent";
import * as pixelDataRedux from "../../../../store/modules/pixelData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/modules";
import { pixelDataElement } from "../../../../store/modules/pixelData";
import ReactDOM, { render } from "react-dom";
import { Pixel2dRow, Position } from "../Panel";
import { SizeControlProps } from "../SizeControl/SizeControlProps";
import { modifyPixelById } from "../../../../const/PixelFunctions";
import dynamic from "next/dynamic";
import {
  DottingDoc,
  setClient,
  setDocument,
} from "../../../../store/modules/docSlice";

interface Props extends SizeControlProps {
  panelRef: React.RefObject<HTMLDivElement>;
  pixel2dArray: Pixel2dRow[];
}

const INITIAL_ROW_COUNT = 32;
const INITIAL_COLUMN_COUNT = 32;

const PixelsContainer: React.FC<Props> = ({
  panelRef,
  pixel2dArray,
  addRow,
  addColumn,
  deleteColumn,
  deleteRow,
}) => {
  const dispatch = useDispatch();

  console.log("pixelContainer rendered");

  const actionRecord = useSelector(
    (state: RootState) => state.pixelData.actionRecord
  );

  const document = useSelector((state: RootState) => state.docSlice.doc);
  const client = useSelector((state: RootState) => state.docSlice.client);
  useEffect(() => {
    const activateClient = async () => {
      const yorkie = await import("yorkie-js-sdk");
      const client = new yorkie.Client("http://localhost:8080");
      await client.activate();
      dispatch(setClient(client));
      const doc = new yorkie.Document<DottingDoc>("dotting-1");
      await client.attach(doc);
      dispatch(setDocument(doc));

      doc.update((root: DottingDoc) => {
        if (!root.content) {
          //initialize
          const tempArray = [];
          const rowStartIndex = 0;
          const columnStartIndex = 0;
          for (let i = 0; i < INITIAL_ROW_COUNT; i++) {
            const tempRow = [];
            for (let j = 0; j < INITIAL_COLUMN_COUNT; j++) {
              const pixelElement: pixelDataElement = {
                name: undefined,
                color: undefined,
                rowIndex: i,
                columnIndex: j,
              };
              tempRow.push(pixelElement);
            }
            tempArray.push(tempRow);
          }
          root.content = tempArray;
          root.rowStartIndex = rowStartIndex;
          root.columnStartIndex = columnStartIndex;
          root.columnCount = INITIAL_ROW_COUNT;
          root.rowCount = INITIAL_ROW_COUNT;
        }
      });

      doc.subscribe((event) => {
        if (event.type === "local-change") {
          console.log(event);
        } else if (event.type === "remote-change") {
          for (const changeInfo of event.value) {
            // console.log(changeInfo.change.getMessage());
            for (const path of changeInfo.paths) {
              console.log("change path", path);
              if (path.startsWith("$.content")) {
                // const x = changeInfo.
              }
            }
          }
        }
      });
    };
    activateClient();
  }, []);

  useEffect(() => {
    console.log("record changed");
    if (actionRecord) {
      const data =
        actionRecord.action === "undo"
          ? actionRecord.before
          : actionRecord.after;
      if (actionRecord.type in pixelDataRedux.pixelChangeActionType) {
        switch (actionRecord.type) {
          case pixelDataRedux.pixelChangeActionType.PIXEL_CHANGE:
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              modifyPixelById({
                rowIndex: data[i].rowIndex,
                columnIndex: data[i].columnIndex,
                color: data[i].color,
                name: data[i].name,
              });
            }
            break;
        }
      } else if (actionRecord.type in pixelDataRedux.laneChangeActionType) {
        switch (actionRecord.type) {
          case pixelDataRedux.laneChangeActionType.REMOVE_TOP_LANE:
            addRow({ position: Position.TOP, data: data });
            break;
          case pixelDataRedux.laneChangeActionType.REMOVE_BOTTOM_LANE:
            addRow({ position: Position.BOTTOM, data: data });
            break;
          case pixelDataRedux.laneChangeActionType.REMOVE_LEFT_LANE:
            addColumn({ position: Position.LEFT, data: data });
            break;
          case pixelDataRedux.laneChangeActionType.REMOVE_RIGHT_LANE:
            addColumn({ position: Position.RIGHT, data: data });
            break;
          case pixelDataRedux.laneChangeActionType.ADD_TOP_LANE:
            deleteRow({ position: Position.TOP });
            break;
          case pixelDataRedux.laneChangeActionType.ADD_BOTTOM_LANE:
            deleteRow({ position: Position.BOTTOM });
            break;
          case pixelDataRedux.laneChangeActionType.ADD_LEFT_LANE:
            deleteColumn({ position: Position.LEFT });
            break;
          case pixelDataRedux.laneChangeActionType.ADD_RIGHT_LANE:
            deleteColumn({ position: Position.RIGHT });
            break;
        }
      }
    }
    // if(typeof actionRecord === pixelDataRedux.laneChangeActionType)
  }, [actionRecord]);

  if (!document || !client) {
    return null;
  }

  return (
    <div id="pixelsContainer" ref={panelRef}>
      <button
        onClick={() => {
          document.update((root) => {
            root.content[0][0] = {
              name: "hi",
              color: "#000000",
              rowIndex: 0,
              columnIndex: 0,
            };
          });
        }}
      >
        update yorkie
      </button>
      {document.getRoot().content.map((row) => {
        return (
          <div
            // key={`row${row.rowIndex}`}
            // id={`row${row.rowIndex}`}
            className="row"
          >
            {row.map((element) => {
              return;
            })}
          </div>
        );
      })}
      {pixel2dArray.map((row) => {
        return (
          <div
            key={`row${row.rowIndex}`}
            id={`row${row.rowIndex}`}
            className="row"
          >
            {row.columns.map((element) => {
              return element.pixel;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PixelsContainer;
