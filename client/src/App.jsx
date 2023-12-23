import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import Feedback from "./components/Feedback";
import Dealer from "./pages/Dealer"
import ShowReport from "./pages/ShowReport";

function App() {
  return (
    <Router>
      <Header />
      {/* <Result /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/dealer" element = {<Dealer />}/>
        <Route path ="/tireReports/details/:id" element={<ShowReport />} />

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
