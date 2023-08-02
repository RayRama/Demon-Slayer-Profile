import { Route, Routes } from "react-router-dom";
import { Uppermoon } from "./pages/Uppermoon";
import { Kokushibo } from "./pages/Kokushibo";
import { Douma } from "./pages/Douma";
import { Akaza } from "./pages/Akaza";
import { Hantengu } from "./pages/Hantengu";
import { Gyokko } from "./pages/Gyokko";
import { Daki } from "./pages/Daki";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />

      <Route path="/uppermoon" element={<Uppermoon />}>
        <Route path="kokushibo" element={<Kokushibo />} />
        <Route path="douma" element={<Douma />} />
        <Route path="akaza" element={<Akaza />} />
        <Route path="hantengu" element={<Hantengu />} />
        <Route path="gyokko" element={<Gyokko />} />
        <Route path="daki" element={<Daki />} />
      </Route>
    </Routes>
  );
}

export default App;
