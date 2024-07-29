import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
