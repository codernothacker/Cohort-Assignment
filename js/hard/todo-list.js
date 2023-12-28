/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
// */
let todo=[];

class Todo {
   constructor(){
    // let todo=[];
   }
  add(string){
      todo.push(string);
      return todo;
  }
  remove(num){
    todo.splice(num,1)
    return todo;

  }
  update(num,string){
    todo[num]=string
    return todo;
  }
  getAll(){
    function show(string){
      console.log(string)
    }
    todo.forEach(show)
  }
  get(num){
    console.log(todo[num])
  }
  clear(){
    todo.forEach(function(item, index) {
     
        todo.splice(index,1)
    
      
    })
  }

}
const todolist = new todo;
todolist.add('bath')
todo.getAll()

// module.exports = Todo;
