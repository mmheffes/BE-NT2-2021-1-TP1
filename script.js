const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let tarea = '';

  function addTodo() {
    
    tarea = prompt("Que tarea deseas agregar?")
    if(tarea !==  null && tarea.trim().length > 0){
      
      let elemento = crearInput(tarea);
      let nuevoLi = crearLi(tarea);

      nuevoLi.prepend(elemento);
      addElement (nuevoLi);

      actualizaContadores();
    }

  }

  function addElement (titulo) {
    list.appendChild(titulo);
  }

  function crearInput(name){
    let newInput = document.createElement('INPUT');
    newInput.setAttribute("type","checkbox");
    newInput.setAttribute("value","valor_checkbox");
    newInput.setAttribute("id",name);
    newInput.className += classNames.TODO_CHECKBOX;
    newInput.setAttribute("onclick","actualizaContadores()");
    newInput.checked = true;
    return newInput;
  }

  function crearLi(texto){
    let li = document.createElement("li");
    li.innerText = texto;
    return li;
  }

  function actualizaContadores(){
    updateItemCount()
    updateUncheckedCount()
  }
  
  function updateItemCount(){
    let items = document.getElementsByClassName(classNames.TODO_CHECKBOX);
    let contador = 0;

    for(let i = 0; i < items.length; i++){
      if(items[i].checked){
        contador++
      }
    }
    itemCountSpan.innerText = contador;
  }

  function updateUncheckedCount(){
    let items = document.getElementsByClassName(classNames.TODO_CHECKBOX);
    let contador = 0;

    for(let i = 0; i < items.length; i++){
      if(!items[i].checked){
        contador++
      }
    }
    uncheckedCountSpan.innerText = contador;
  }