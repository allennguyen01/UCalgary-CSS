import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function ResourceBox({
  title,
  link = "https://www.google.com/",
  colSpan = 1,
  rowSpan = 1,
  openNewTab = true,
}) {
  const target = openNewTab ? `"_blank"` : "";
  const rel = openNewTab ? `"noopener noreferrer" ` : "";

  return (
    <div
      className={`border-2 border-black relative rounded-lg col-span-${colSpan} row-span-${rowSpan}`}
    >
      <p>{title}</p>
      <NavLink
        to={link}
        className="absolute bottom-0 right-0 m-4"
        target={target}
        rel={rel}
      >
        <BsFillArrowRightCircleFill size={30} />
      </NavLink>
    </div>
  );
}

ResourceBox.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  openNewTab: PropTypes.bool,
};
