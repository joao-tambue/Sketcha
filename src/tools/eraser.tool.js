import { getMousePosition } from "../utils/mouse";

export function onElementAtPosition( state, canvas, event ) {
    const { x, y } = getMousePosition( event, canvas );

    state.elements = state.elements.filter(el => {
        if (el.type === 'text') {
            return Math.abs(el.x - x) > 20 || Math.abs(el.y - y) > 20;
        }

        if (el.type === 'line') {
            return !el.points.some(
                position => Math.abs(position.x - x) <= 5 && Math.abs(position.y - y) <= 5
            );
        }

        return true;
    });
}