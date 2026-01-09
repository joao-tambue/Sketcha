import { appState } from "../core/state";
import { getMousePosition } from './../utils/mouse';

export function onPencilMouseDown(event, canvas) {
    appState.isDrawing = true;

    const point = getMousePosition(event, canvas);

    appState.activeElement = {
        id: crypto.randomUUID(),
        type: 'line',
        points: [point],
    };

    appState.elements.push(appState.activeElement);
}

export function onPencilMouseMove(event, canvas) {
    if (!appState.isDrawing || !appState.activeElement) return;

    const point = getMousePosition(event, canvas);
    appState.activeElement.points.push(point);
}

export function onPencilMouseUp(event, canvas) {
    appState.isDrawing = false;
    appState.activeElement = null;
}