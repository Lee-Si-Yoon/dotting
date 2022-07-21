import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DimensionsInput } from "../components/Editor/PanelControl/DimensionsInput";
import { Editor } from "../components/Editor";
import { PanelUpperButtons } from "../components/Editor/PanelControl/PanelUpperButtons";
import {
  colorGroup,
  dataArrayElement,
  PanelKeys,
  rowColumnColor,
} from "../const/CommonDTO";
import { downloadImageRef } from "../const/CommonFunctions";
import { PanelBelowButtons } from "../components/Editor/PanelControl/PanelBelowButtons";
import { Panel } from "../components/Editor/Panel";
import { Toolbar } from "../components/Editor/Toolbar";
import { Canvas } from "../components/Editor/Canvas";
import { ColorPicker } from "../components/Editor/Toolbar/ColorPicker";
import { ColorGroups } from "../components/Editor/Toolbar/ColorGroups";
import { ColorWindow } from "../components/Editor/ColorWindow";
import { useDispatch, useSelector } from "react-redux";
import { initialize, pixelDataElement } from "../store/modules/pixelData";
import { RootState } from "../store/modules";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const doc = useSelector((state: RootState) => state.docSlice.doc);
  const defaultHeight: number = useMemo(() => 32, []);
  const defaultWidth: number = useMemo(() => 32, []);
  const [initialData, setInitialData] = useState<pixelDataElement[][]>([]);

  const [hideOptions, setHideOptions] = useState<boolean>(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState<boolean>(true);
  // const [selectedGroup, setSelectedGroup] = useState<colorGroup>();
  const [buttonText, setButonText] = useState<"start drawing" | "reset">(
    "start drawing"
  );
  const [openChangePanel, setOpenChangePanel] = useState<boolean>(false);
  const [openChangePanelKey, setOpenChangePanelKey] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);

  const [canvasSize, setCanvasSize] = useState<{
    width: number;
    height: number;
  }>({
    width: defaultWidth,
    height: defaultHeight,
  });

  // const [keyData, setKeyData] = useState<PanelKeys>({
  //   L_key: 0,
  //   R_key: defaultWidth - 1,
  //   T_key: 0,
  //   B_key: defaultWidth - 1,
  // });

  // const [resetKeys, setResetKeys] = useState<PanelKeys>({
  //   L_key: 0,
  //   R_key: defaultWidth - 1,
  //   T_key: 0,
  //   B_key: defaultWidth - 1,
  // });

  // const [currentKeys, setCurrentKeys] = useState<PanelKeys>({
  //   L_key: 0,
  //   R_key: defaultWidth - 1,
  //   T_key: 0,
  //   B_key: defaultWidth - 1,
  // });

  const [colorArray, setColorArray] = useState<dataArrayElement[]>([]);

  const [colorData, setColorData] = useState<rowColumnColor[]>([]);

  const initializeDrawingPanel = useCallback(() => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButonText("reset")
      : setButonText("start drawing");
  }, [hideOptions, hideDrawingPanel]);

  const resetOrStartPanel = useCallback(() => {
    initializeDrawingPanel();
    const temp: pixelDataElement[][] = [];
    doc?.update((root) => {
      for (
        let i = root.laneKeys.rowStartKey;
        i < root.laneKeys.rowLastKey - 1;
        i++
      ) {
        for (
          let j = root.laneKeys.columnStartKey;
          j < root.laneKeys.columnLastKey - 1;
          j++
        ) {
          root.dataArray[i][j].color = undefined;
          root.dataArray[i][j].name = undefined;
        }
      }
    });
    for (let i = 0; i < canvasSize.height; i++) {
      temp.push([]);
      for (let j = 0; j < canvasSize.width; j++) {
        temp[i].push({
          rowIndex: i,
          columnIndex: j,
          color: undefined,
          name: undefined,
        });
      }
    }
    setInitialData(temp);
    dispatch(initialize({ data: temp }));
    // setDataArray([]);
    // setHistory([]);
    // setHistoryIndex(0);
  }, [canvasSize]);

  const downloadImage = useCallback(() => {
    const pixelRef = document.getElementById("pixelsContainer");
    console.log(pixelRef);
    downloadImageRef(pixelRef);
  }, []);

  // const saveProject = useCallback(() => {
  //   setKeyData(JSON.parse(JSON.stringify(currentKeys)));
  //   setColorData(JSON.parse(JSON.stringify(dataArray)));
  // }, [currentKeys, dataArray]);

  // const resetDataKeyState = useCallback(
  //   (colorDataArray: rowColumnColor[], keyDataArray: PanelKeys) => {
  //     setColorArray(JSON.parse(JSON.stringify(colorDataArray)));
  //     setResetKeys(JSON.parse(JSON.stringify(keyDataArray)));
  //   },
  //   []
  // );

  const bringSavedProject = () => {
    // resetDataKeyState(colorData, keyData);
  };

  // const { mouseDown, mouseUp } = useMouseEvent();
  console.log("index");

  return (
    <Editor>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColorWindow />
      <Canvas>
        <h1>Pixel Create Character</h1>
        {hideDrawingPanel && (
          <DimensionsInput
            setCanvasSize={setCanvasSize}
            defaultHeight={defaultHeight}
            defaultWidth={defaultWidth}
            // resetKeys={resetKeys}
            // setResetKeys={setResetKeys}
          />
        )}
        <PanelUpperButtons
          buttonText={buttonText}
          clickFunctions={[resetOrStartPanel]}
        />
        {hideOptions && (
          <>
            <Panel
              initialData={initialData}
              panelRef={panelRef}
              // resetKeys={resetKeys}
              // currentKeys={currentKeys}
              // setCurrentKeys={setCurrentKeys}
              colorArray={colorArray}
              // setResetKeys={setResetKeys}
              setColorArray={setColorArray}
            />
          </>
        )}
        <PanelBelowButtons
          clickFunctions={[downloadImage, () => {}, bringSavedProject]}
          hideDrawingPanel={hideDrawingPanel}
        />
      </Canvas>
      <Toolbar>
        <ColorPicker />
        <ColorGroups />
      </Toolbar>
    </Editor>
  );
};

export default Home;
