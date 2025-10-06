import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
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
