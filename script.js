const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let tTotal = 0;
let tPendientes = 0;

function addTodo() {
  
 let nombreTarea = prompt("Que tarea deseas agregar?")
  
 if(nombreTarea){
    let tarea = crearTarea(nombreTarea);

    if(tarea){
      tTotal++;
      tPendientes++;
    }
    list.appendChild(tarea);
    renderizarContadores();
  }

}

function crearTarea(name){
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute("type","checkbox");
  checkbox.onchange = cambioCheckbox;
  checkbox.className = classNames.TODO_CHECKBOX;
  
  const span = document.createElement('span');
  span.className = classNames.TODO_TEXT;
  span.setAttribute('editable', true)
  span.innerHTML = name;

  const eliminar = document.createElement('button');
  eliminar.className = classNames.TODO_DELETE;
  eliminar.innerHTML = 'X';
  eliminar.onclick = eliminarTarea;

  const li = document.createElement('li');
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(eliminar);

  return li
}

function estaOncheck(elemento){
  return elemento.checked;
}

function cambioCheckbox(){
  if(estaOncheck(this)){
    tPendientes--
  }else{
    tPendientes++
  }
  renderizarContadores();
}

function eliminarTarea(){
  const parent = this.parentNode;
  const checkbox = parent.firstElementChild;

  if(!estaOncheck(checkbox)){
    tPendientes--
  }
  tTotal--
  parent.remove();

  renderizarContadores()
}

function renderizarContadores(){
  itemCountSpan.innerHTML = tTotal.toString();
  uncheckedCountSpan.innerHTML = tPendientes.toString();
}