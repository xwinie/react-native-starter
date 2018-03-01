import { Provider } from "mobx-react";
import * as React from "react";
import Index from "./Login"
import store from "../../stores/models/login";

const App = () => (
    <Provider login={store}>
        <Index />
    </Provider>
);

export default App;