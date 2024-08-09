import "./styles.css";
import { addtask, deletetasks, toggletask} from "./task";
import { rendertasks} from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
       e.preventDefault();

       const taskinput = document.getElementById("task-input").value;
       if(taskinput !== "") {
        renderTasks();
        //limpiar el cuadro de texto
        document.getElementById("task-input").value = "";

       } 
    });

    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList("delete")) {
            const taskId = e.target.parentElemet.getAtribute("data-id");
            deleteTasks(taskId);
            rendertasks();
        }

        if(e.target.classList("toggle")) {
            const taskId= e.target.parentElemet.getAtribute("data-id");
            rendertasks();
        }
    });
});