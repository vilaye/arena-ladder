import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import APCalculatorPage from "./pages/APCalculator";
import CutoffPage from "./pages/Cutoff";
import LadderPage from "./pages/Ladder";
import TeamPage from "./pages/Team";
import PlayerPage from "./pages/Player";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/ladder" element={<LadderPage />} />
        <Route path="/cutoff" element={<CutoffPage />} />
        <Route path="/arena-point-calculator" element={<APCalculatorPage />} />
        <Route path="/team/:id" element={<TeamPage />} />
        <Route
          path="/player/:name"
          element={<PlayerPage key={uuidv4()} />}
        />
        <Route path="*" element={<LadderPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
