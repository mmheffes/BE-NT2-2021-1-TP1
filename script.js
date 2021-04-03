const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let contador = 0;
  let cont = 0;

  function addTodo() {
    
    const nuevoTitulo = prompt("Que tarea deseas agregar?")
    if(nuevoTitulo != undefined){
      contador++
      itemCountSpan.innerHTML = contador
      
      addElement (nuevoTitulo)
    }

  }

  function addElement (titulo) {
    let newli = document.createElement("li");
    let input = document.createElement("INPUT");
    input.type = 'checkbox'
    input.checked = true
    let contenido = document.createTextNode(titulo)
    newli.appendChild(input)
    newli.appendChild(contenido)
    list.appendChild(newli)
    
  }