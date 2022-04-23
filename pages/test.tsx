import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Pixel2dPixel, Pixel2dRow } from "../components/Editor/Panel/Panel";
import { Pixel } from "../components/Editor/Panel/Pixel";
import { pixelDataElement } from "../store/modules/pixelData";

const Test: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixel2dArray, setPixel2dArray] = useState<Pixel2dRow[]>([]);
  const [imageFile, setImageFile] = useState<File>();
  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    const temp: pixelDataElement[][] = [];
    for (let i = 0; i < 32; i++) {
      temp.push([]);
      for (let j = 0; j < 32; j++) {
        temp[i].push({
          rowIndex: i,
          columnIndex: j,
          color: undefined,
          name: undefined,
        });
      }
    }
    const tempPixel2dArray: Pixel2dRow[] = [];
    temp.map((row, rowIndex) => {
      const tempPixel2dArrayRow: Pixel2dPixel[] = [];
      row.map((pixel, columnIndex) => {
        tempPixel2dArrayRow.push({
          columnIndex: columnIndex,
          pixel: (
            <Pixel
              key={`row${rowIndex}column${columnIndex}`}
              id={`row${rowIndex}column${columnIndex}`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              dataColor={pixel.color}
              dataName={pixel.name}
            ></Pixel>
          ),
        });
      });
      tempPixel2dArray.push({
        rowIndex: rowIndex,
        columns: tempPixel2dArrayRow,
      });
    });
    setPixel2dArray(tempPixel2dArray);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log(imageFile);
    if (canvas && imageFile) {
      const ctx = canvas.getContext("2d");
      const imageObject = new Image();

      imageObject.src = URL.createObjectURL(imageFile);
      imageObject.onload = () => {
        var scale = Math.min(
          canvas.width / imageObject.width,
          canvas.height / imageObject.height
        );
        var w = imageObject.width * scale;
        var h = imageObject.height * scale;
        var left = canvas.width / 2 - w / 2;
        var top = canvas.height / 2 - h / 2;
        ctx?.drawImage(imageObject, 0, 0, h, w);
      };

      const fileReader = new FileReader();
      fileReader.onload = (_event) => {};

      // ctx?.getImageData(imageFile);
    }
  }, [canvasRef, imageFile]);
  return (
    <div>
      <input
        type="file"
        id="image_input"
        accept="image/png, image/jpg"
        onChange={(e) => {
          const file = e.currentTarget.files;
          if (file) {
            setImageFile(file[0]);
          }
        }}
      />
      <canvas style={{ width: 320, height: 320 }} ref={canvasRef}></canvas>
      <div id="pixelsContainer">
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
    </div>
  );
};

export default Test;
