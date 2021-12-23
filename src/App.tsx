import { Provider } from "react-redux";
import store from "redux/store";

import Home from "pages";
import DetailItem from "pages/detail";

function App(): JSX.Element {
  return (

    // <Home />

    //  <DetailItem />
    <Provider store={store}>
      <Home />
    </Provider>

  );
}

export default App;
