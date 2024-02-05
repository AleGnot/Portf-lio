import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import { LangStore } from "./contexts/lengContext";

function App() {

  return (
    <LangStore>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Main />} />
        </Routes>
      </BrowserRouter>
    </LangStore>
  )
}

export default App;
