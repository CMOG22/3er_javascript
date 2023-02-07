//login
function go(){
    let login = "admin";
    let password = "admin";
    if (document.form.password.value==password && document.form.login.value==login){
        window.location="./pages/admin.html"
    } else {
        alert("Usuario y/o contraeña invalidos")
    }
}

//
const taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addTask(cliente, sexo, telefono, mail, observaciones, especialidad, dueDate) {
    const task = {
        cliente,
        sexo,
        telefono,
        mail,
        observaciones,
        especialidad,
        dueDate,
        complete: false,
    };
    taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    return task;
}

function markAsComplete(taskIndex) {
    taskList[taskIndex].complete = true;
    localStorage.setItem('taskList', JSON.stringify(taskList));
    renderTasks();
}

function removeTask(taskIndex) {
    taskList.splice(taskIndex, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    renderTasks();
}

function renderTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
              <h2>Paciente: ${task.cliente}</h2>
              <p>Sexo: ${task.sexo}</p>
              <p>Telefono: ${task.telefono}</p>
              <p>Correo electronico: ${task.mail}</p>
              <p>Observaciones: ${task.observaciones}</p>
              <p>Especielidad: ${task.especialidad}</p>
              <p>Fecha de cita: ${task.dueDate}</p>
              <p>Confirmada: ${task.complete}</p>
            </div>
        `;
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "Confirmada";
        completeButton.addEventListener("click", function() {
            markAsComplete(i);
        });
        li.appendChild(completeButton);
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Cancelar";
        removeButton.addEventListener("click", function() {
            removeTask(i);
        });
        li.appendChild(removeButton);
        taskListElement.appendChild(li);
    }
}



function init() {
    const taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const clienteInput = document.getElementById("cliente-input");
        const sexoInput = document.getElementById("sexo-input");
        const telefonoInput = document.getElementById("telefono-input");
        const mailInput = document.getElementById("mail-input");
        const observacionesInput = document.getElementById("observaciones-input");
        const especialidadInput = document.getElementById("especialidad-input");
        const dueDateInput = document.getElementById("due-date-input");
        
        addTask(clienteInput.value, sexoInput.value, telefonoInput.value, mailInput.value, observacionesInput.value, especialidadInput.value, dueDateInput.value);
        clienteInput.value = "";
        sexoInput.value = "";
        telefonoInput.value = "";
        mailInput.value = "";
        observacionesInput.value = "";
        especialidadInput.value = "";
        dueDateInput.value = "";
          renderTasks();
    });
    //addTask("César", "masculino", "General", "02/02/2023");
    //addTask("Miriam", "Femenino", "Psicologo", "01/03/2023");
    renderTasks();
  }

  init();