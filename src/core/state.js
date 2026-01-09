export const ToolType = {
    PENCIL: 'pencil',
    ERASER: 'eraser',
    TEXT: 'text'
};

export const appState = {
    currentTool: ToolType.PENCIL,
    elements: [],
    isDrawing: false,
    activeElement: null
};