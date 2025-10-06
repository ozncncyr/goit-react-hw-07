import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { MoonLoader } from "react-spinners";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate
      loading={<MoonLoader color="#007bff" size={40} />}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
);
