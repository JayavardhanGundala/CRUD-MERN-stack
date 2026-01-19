
import './App.css';
import {User} from './getUsers/user';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './addUser/Add';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/create",
      element:<Add/>

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={ router}></RouterProvider>
    </div>
  );
}

export default App;
