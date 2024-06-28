const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const canceleditbtn = document.querySelector("#cancel-edit-btn");
let oldinputvalue;

const savetodo = (Text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todotitle = document.createElement("h3");
    todotitle.innerText = Text;
    todo.appendChild(todotitle);

    const donebtn =  document.createElement("button")
    donebtn.classList.add("finish-todo");
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(donebtn);

    const editbtn =  document.createElement("button")
    editbtn.classList.add("edit-todo");
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editbtn);
    
    const deletebtn =  document.createElement("button")
    deletebtn.classList.add("remove-todo");
    deletebtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deletebtn);

    todolist.appendChild(todo)
    todoinput.value ="";
    todoinput.focus();
}

const toggleforms = () =>{
    editform.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todolist.classList.toggle("hide");
}

const updatetodo = (text) =>{
    const todos = document.querySelectorAll(".todo")
    
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
    
        if (todoTitle.innerText === oldinputvalue) {
          todoTitle.innerText = text;
    
        }
      });
}

todoform.addEventListener("submit",(e)=>{
    e.preventDefault(); // não recarregar a pagina 

    const inputvalue = todoinput.value
    if (inputvalue === '') {
        return alert("para adicionar escreva no campo!");
    }else{
        savetodo(inputvalue);
    } 
    console.log(inputvalue);
})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    let todotitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todotitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    if(targetEl.classList.contains("edit-todo")){
        toggleforms()
        editinput.value = todotitle;
        oldinputvalue = todotitle;
    }
});

editform.addEventListener("submit",(e) =>{
    e.preventDefault()
    const editinputvalue = editinput.value;
    if(editinput){
        updatetodo(editinputvalue)
    }
    toggleforms()
})


canceleditbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    toggleforms();
})