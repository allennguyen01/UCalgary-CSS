import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import AntiAsianRacism from "./pages/AntiAsianRacism";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/resources" element={<Resources />} />
          <Route
            path="/resources/anti-asian-racism"
            element={<AntiAsianRacism />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
