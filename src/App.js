
import './App.css';
import Home from './pages/home';
import TodoList from './pages/user_pages/todo_list';
import { Switch, Route } from "react-router-dom";
import Login from './pages/account_pages/login';
import Register from "./pages/account_pages/register"
import AdminTodoList from './pages/admin_pages/todo_list';
import NotFound from './pages/not_found/404';



function App() {
  return (
  <>

  <Switch>
   <Route  path='/' exact component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/user/todo-list' component={TodoList} />
    <Route path='/admin/todo-list' component={AdminTodoList} />
    <Route path="*" component={NotFound}/>
    
  </Switch>
    
  
  </>
  );
}

export default App;
