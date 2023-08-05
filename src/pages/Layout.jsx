import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout() {
  const links = [
    {
      id: 1,
      content: "ABOUT US",
      to: "/about-us",
    },
    {
      id: 2,
      content: "EVENTS",
      to: "/events",
    },
    {
      id: 3,
      content: "GET INVOLVED",
      to: "/get-involved",
    },
    {
      id: 4,
      content: "RESOURCES",
      to: "/resources",
    },
    {
      id: 5,
      content: "CONTACT US",
      to: "/contact-us",
    },
  ];

  return (
    <>
      <nav className="flex justify-evenly items-center pt-8 gap-8 font-bold text-lg font-agrandir ">
        <Link to="/">
          <img src={logo} alt="CSS logo" className="h-16" />
        </Link>
        {links.map((link) => (
          <NavLink
            to={link.to}
            key={link.id}
            className="hover:bg-gray-400 rounded-lg px-8 py-4"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "red" : "",
              };
            }}
          >
            {link.content}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
}
