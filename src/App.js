import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <AddTodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
