import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout() {
  const links = [
    {
      id: 1,
      content: "About Us",
      to: "/about-us",
    },
    {
      id: 2,
      content: "Events",
      to: "/events",
    },
    {
      id: 3,
      content: "Get Involved",
      to: "/get-involved",
    },
    {
      id: 4,
      content: "Resources",
      to: "/resources",
    },
    {
      id: 5,
      content: "Contact",
      to: "/contact-us",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center gap-8 font-bold text-lg font-agrandir">
        <Link to="/">
          <img src={logo} alt="CSS logo" className="h-16" />
        </Link>
        <div>
          {links.map((link) => (
            <NavLink
              to={link.to}
              key={link.id}
              className="hover:text-red rounded-lg px-4 py-4"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "red" : "",
                  color: isActive ? "white" : "",
                };
              }}
            >
              {link.content}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
