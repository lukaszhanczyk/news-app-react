import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {AuthContextProvider} from "./contexts/AuthContextProvider.jsx";

function App() {

  return (
      <div>
          <AuthContextProvider>
              <RouterProvider router={router}/>
          </AuthContextProvider>
      </div>
  )
}

export default App
