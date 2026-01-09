import { getMousePosition } from './../utils/mouse';
import { appState } from "../core/state.js";

export function onTextClick( event, canvas ) {

    console.log( 'Text tool clicked', event, canvas );

    const { x, y  } = getMousePosition( event, canvas );

    console.log( `Mouse position on canvas: x=${ x }, y=${ y }` );

    const content = prompt( 'Enter text:' );

    if ( content ) return;

    appState.elements.push( {
        id: crypto.randomUUID(),
        type: 'text',
        x,
        y,
        text: content,
    });
}