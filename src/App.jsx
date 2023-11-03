import { ToastContainer } from "react-toastify";
import RoutesPages from "./routes";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesPages />
    </div>
  );
}

export default App;
