import { Outlet, Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

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

export default function Layout() {
  return (
    <>
      <nav className="flex justify-between items-center md:gap-8 ">
        <HomeLogoButton />
        <div className="max-lg:hidden">
          <DesktopNavBar />
        </div>
        <div className="lg:hidden">
          <MobileNavBar />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

function DesktopNavBar() {
  return (
    <div className="font-bold text-lg">
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
  );
}

function MobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <RxHamburgerMenu ref={btnRef} onClick={onOpen} size={25} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HomeLogoButton onClose={onClose} />
          </DrawerHeader>

          <DrawerBody className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink to={link.to} key={link.id} onClick={onClose}>
                {link.content}
              </NavLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function HomeLogoButton({ onClose }) {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="CSS logo"
        className="h-12 lg:h-16"
        onClick={onClose}
      />
    </Link>
  );
}

HomeLogoButton.propTypes = {
  onClose: PropTypes.func,
};
