import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="flex justify-center mt-4">
        <ul className="flex gap-8 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact-us">Contact Us</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
