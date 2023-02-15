function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Make School Lunches',
      isCompleted: false,
    },
    {
      text: 'Meet Contractor at 10 am Thursday ',
      isCompleted: false,
    },
    {
      text: 'Sign Up for Swim Lessons and Jr. Guard test -Vivian',
      isCompleted: false,
    },        
    {
      text: 'Work On Module 13',
      isCompleted: false,
    },   
    {
      text: 'Volunteer in Class-Vivian',
      isCompleted: false,
    }, 
    {
      text: 'Basketball Game- Isaac',
      isCompleted: false,
    }, 
    {
      text: 'Dinner with Longs',
      isCompleted: false,
    }, 
    {
      text: 'Mammogram',
      isCompleted: false,
    },  
        {
      text: 'Snowboard Gear for Isaac',
      isCompleted: false,
    },
        {
      text: 'Donuts for Basketball Game',
      isCompleted: false,
    },
        {
      text: 'Piano Lessons M & T',
      isCompleted: false,
    },
        {
      text: 'Play Practice M & W',
      isCompleted: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);