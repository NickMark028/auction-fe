import { Provider } from "react-redux";
import store from "redux/store";

import Home from "pages";
import Login from "pages/login";
import DetailItem from "pages/detail";
import AddProduct from "pages/addProduct";
import Register from "pages/register";
import List from "pages/userlist";

function App(): JSX.Element {
  return (
  
    // <Home />
    <List/>
       //<DetailItem />
  
  );
}

export default App;
