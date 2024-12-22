import ToDo from "./Components/ToDo";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
