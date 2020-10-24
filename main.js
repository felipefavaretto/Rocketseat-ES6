class todolist {
    constructor(){
        this.todos= []
    }
    addtodo(){
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

const minhalista = new todolist();

document.getElementById('novotodo').onclick = function(){
    minhalista.addtodo();
}