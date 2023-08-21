import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Resources() {
  return (
    <div className="flex flex-auto justify-center">
      <div className="grid mb-8 lg:grid-cols-4 lg:grid-rows-3 gap-4 m-2 lg:mx-24 child:flex child:items-center child:justify-center child:text-center">
        <div className="border-2 border-black relative rounded-lg bg-black text-white p-8">
          <p className="text-3xl lg:text-4xl font-extrabold text-red">
            Resources
          </p>
        </div>
        <ResourceBox title={"Chinese Food"} />
        <ResourceBox
          title={"Other Chinese Communities in Calgary"}
          colSpan={2}
          backgroundColor="black"
          link={"/resources/chinese-communities"}
          openNewTab={false}
        />
        <ResourceBox
          title={"Historic Chinatown Tour"}
          rowSpan={2}
          link={
            "https://www.eventbrite.ca/e/historic-chinatown-tour-tickets-655845620907?aff=ebdssbdestsearch"
          }
        />
        <ResourceBox
          title={"Anti-Asian Racism"}
          link={"/resources/anti-asian-racism"}
          openNewTab={false}
          backgroundColor="black"
        />
        <ResourceBox
          title={"CSS Student Union Page"}
          rowSpan={2}
          link={
            "https://suuofc.campuslabs.ca/engage/organization/chinese-students-society"
          }
        />
        <ResourceBox
          title={"University of Calgary Mental Health Resources"}
          rowSpan={2}
          link={
            "https://www.ucalgary.ca/hr/wellness/wellbeing-worklife/mental-health/resources"
          }
          backgroundColor="black"
        />
        <ResourceBox
          title={"History of Chinatown"}
          link={"https://www.sfu.ca/chinese-canadian-history/"}
        />
      </div>
    </div>
  );
}

function ResourceBox({
  title,
  link = "https://www.google.com/",
  colSpan = 1,
  rowSpan = 1,
  openNewTab = true,
  backgroundColor = "white",
}) {
  const target = openNewTab ? `"_blank"` : "";
  const rel = openNewTab ? `"noopener noreferrer" ` : "";
  const bgColorVariants = {
    white: "bg-white text-black",
    black: "bg-black text-white",
  };

  const lgGridColSpans = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
  };

  const lgGridRowSpans = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
  };

  return (
    <div
      className={`border-2 border-black relative rounded-lg col-span-1 row-span-1 p-6 pr-14 lg:p-12 ${lgGridColSpans[colSpan]} ${lgGridRowSpans[rowSpan]} ${bgColorVariants[backgroundColor]}`}
    >
      <p className="text-base lg:text-lg">{title}</p>
      <NavLink
        to={link}
        className="absolute lg:bottom-0 right-0 m-4"
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
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
