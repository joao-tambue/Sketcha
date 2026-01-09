// const quadro = document.querySelector("canvas");
// const ctx = quadro.getContext("2d");

// quadro.width = window.innerWidth;
// quadro.height = window.innerHeight;

// let desenhando = false;
// let ultmoX = 0;
// let ultmoY = 0;

// quadro.addEventListener("mousedown", (e) => {
//     desenhando = true;
//     ultmoX = e.clientX;
//     ultmoY = e.clientY;
//     // console.log('cursor pressionado');

// });

// window.addEventListener("mouseup", () => {
//     desenhando = false;
//     // console.log('cursor parou de pressionar');
// });

// quadro.addEventListener("mousemove", (e) => {
//     if (!desenhando) return;
//     // console.log('cursor se movendo');

//     ctx.strokeStyle = "white";
//     ctx.lineWidth = 2;
//     ctx.lineCap = "round";

//     ctx.beginPath();
//     ctx.moveTo(ultmoX, ultmoY);
//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();

//     ultmoX = e.clientX;
//     ultmoY = e.clientY;
// });