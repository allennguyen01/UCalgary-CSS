import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout() {
  return (
    <>
      <nav className="flex justify-evenly items-center pt-8 gap-8 font-bold text-lg font-agrandir">
        <Link to="/">
          <img src={logo} alt="CSS logo" className="h-16" />
        </Link>
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/get-involved">GET INVOLVED</Link>
        <Link to="/resources">RESOURCES</Link>
        <Link to="/contact-us">CONTACT US</Link>
      </nav>
      <Outlet />
    </>
  );
}
