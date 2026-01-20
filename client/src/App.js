
import './App.css';
import {User} from './getUsers/user';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './addUser/Add';
import Updateuser from './updateuser/Updateuser';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/create",
      element:<Add/>

    },{
      path:"/update/:id",
      element:<Updateuser/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={ router}></RouterProvider>
    </div>
  );
}

export default App;
