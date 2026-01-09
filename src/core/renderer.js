import { ctx } from './canvas.js';

export function render(elements) {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Render each element
    elements.forEach(element => {
        if (element.type === 'line') {
            drawLine(element);
        }

        if (element.type === 'text') {
            drawText(element);
        }
    });
}

function drawLine({ points }) {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    points.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.stroke();
}

function drawText({ x, y, text}) {
    ctx.fillStyle = '#fff';
    ctx.font = '16px sans-serif';
    ctx.fillText(text, x, y);
}