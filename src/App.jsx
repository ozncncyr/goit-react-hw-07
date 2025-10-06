import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="App-title">Phonebook</h1>
      <Form />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;
