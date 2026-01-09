import {canvas} from "./core/canvas.js";
import { appState, ToolType } from "./core/state.js";
import { render } from "./core/renderer.js";

import {
    onPencilMouseDown,
    onPencilMouseMove,
    onPencilMouseUp
} from "./tools/pencil.tool.js";

import { onTextClick } from "./tools/text.tool.js";
import { eraseElementAtPosition } from "./tools/eraser.tool.js";

import "./ui/toolbar.js";

canvas.addEventListener("mousedown", e => {
    if (appState.currentTool === ToolType.PENCIL)
        onPencilMouseDown(e, canvas);

    if (appState.currentTool === ToolType.ERASER)
        eraseElementAtPosition(appState, canvas, e);
});

canvas.addEventListener("mousemove", e => {
    if (appState.currentTool === ToolType.PENCIL)
        onPencilMouseMove(e, canvas);
});

canvas.addEventListener("mouseup", () => {
    if (appState.currentTool === ToolType.PENCIL)
        onPencilMouseUp();
});

canvas.addEventListener("click", e => {
    if (appState.currentTool === ToolType.TEXT)
        onTextClick(e, canvas);
});

function loop() {
    render(appState.elements);
    requestAnimationFrame(loop);
}

loop();