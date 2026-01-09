import { appState } from "../core/state";

document.querySelector(".tool-btn").forEach(btn => {
    btn.addEventListener("click", () =>{
        document.querySelectorAll(".tool-btn")
            .forEach(button => button.classList.remove("active"));

        btn.classList.add("active");

        const icon = btn.querySelector("i").className;

        if (icon.includes("pencil")) appState.currentTool = ToolType.PENCIL;
        if (icon.includes("text")) appState.currentTool = ToolType.TEXT;
        if (icon.includes("eraser")) appState.currentTool = ToolType.ERASER;
    } );
})