import { Provider } from "react-redux";
import store from "./redux/Store";
import News from "./Components/News";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <News />
      </div>
    </Provider>
  );
}

export default App;
