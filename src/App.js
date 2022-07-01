import { Route, Routes} from "react-router-dom";
import Table from "./components/Pages/Table/Table";
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Table></Table>}> </Route>
      </Routes>
    </main>
  );
}

export default App;
