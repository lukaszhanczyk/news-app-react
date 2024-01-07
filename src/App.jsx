import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {AuthContextProvider} from "./contexts/AuthContextProvider.jsx";
import {FiltersContextProvider} from "./contexts/FiltersContextProvider.jsx";

function App() {

  return (
      <div>
          <AuthContextProvider>
              <FiltersContextProvider><RouterProvider router={router}/></FiltersContextProvider>
          </AuthContextProvider>
      </div>
  )
}

export default App
