//lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

//funcion para llevar las tareas
export const getTasks = () => tasks;

//funcion para agregar una tarea

export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        complete: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    //funcion para eliminar una tarea
    export const deleteTasks = (id) => {
        tasks = tasks.filter((tasks) => task.id !== parseInt(id));
        localStorage.setItem("tasks", JSON.stringify(tasks));

    };

    //funcion para actualizar una tarea
    export const toggleTask = (id) =>{
        tasks = tasks.map((task) => {
            if(tasks.id === parseInt(id)) {
                task.complete = !task.complete;
            }
            return task;
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
    };
