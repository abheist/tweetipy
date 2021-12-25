// @ts-ignore
import { changeDpiDataUrl } from "changedpi";
import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import { Resizable } from "re-resizable";
import React, { useRef } from "react";
import EditableDiv from "../EditableDiv";
import "./index.css";

export default function TweetImageBox() {
  const textInput = useRef(null);
  const SCALE = 2;
  const BASE_DPI = 300;

  const handleChange = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (textInput.current) {
      const imageNode: HTMLElement = textInput.current;
      getImage(imageNode);
    }
  };

  async function getImage(imageNode: HTMLElement) {
    let image = await domtoimage.toPng(imageNode, {
      style: {
        transform: `scale(${SCALE})`,
        "transform-origin": "top left",
        width: `${imageNode.offsetWidth}px`,
        height: `${imageNode.offsetHeight}px`,
      },
      height: imageNode.offsetHeight * SCALE,
      width: imageNode.offsetWidth * SCALE,
    });
    image = await changeDpiDataUrl(image, BASE_DPI * SCALE);
    FileSaver.saveAs(image, "y-node.png");
  }

  const divSizes = {
    minHeight: "300px",
    minWidth: "820px",
    maxHeight: "700px",
    maxWidth: "1080px",
  };

  return (
    <div>
      <div className="flex flex-row justify-center mt-36">
        <div ref={textInput}>
          <Resizable
            className="bg-red-200 text-slate-700"
            minWidth={divSizes.minHeight}
            minHeight={divSizes.minHeight}
            maxWidth={divSizes.maxWidth}
            children={<EditableDiv sizes={divSizes} />}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mt-20">
        <button
          className="px-4 py-2 font-medium bg-blue-500 rounded-md text-slate-800 ring-offset-2 focus:ring-2"
          onClick={handleChange}
        >
          tweet
        </button>
      </div>
    </div>
  );
}
