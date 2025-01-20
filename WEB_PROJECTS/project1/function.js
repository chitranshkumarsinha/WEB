document.addEventListener('DOMContentLoaded',() => {
    const todoInput = document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-button');
    const todoList = document.getElementById('todo-list')
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(task => {renderTask(task)});

    addTaskButton.addEventListener('click',()=>{
        const tasktext = todoInput.value.trim();
        if(tasktext === "") return;
        
        // for each task it's properties are assigned
        const newtask = {
            id: Date.now(),
            text: tasktext,
            completed: false
        }
        tasks.push(newtask);
        renderTask(newtask)
        saveTasks();
        todoInput.value = ""; //clear input box
        console.log(tasks);
    })
    
    function renderTask(task){
        const li = document.createElement('li');
        li.setAttribute('data-id',task.id)
        if(task.completed) li.classList.add('completed')
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>`
        li.addEventListener('click',(e)=>{
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed
            li.classList.toggle('completed')
            saveTasks()
        });
        
        //.queryselector is same as document.getelementby...
        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation();// prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTasks();
        })

        todoList.appendChild(li)
    }

    function saveTasks(){
        // local storage is invoked by writing 'localstorage'
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
})


