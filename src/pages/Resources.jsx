import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Resources() {
  return (
    <div className="flex flex-auto">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 mx-24 text-lg child:flex child:items-center child:justify-center child:text-center child:p-8">
        <div
          className={`border-2 border-black relative rounded-lg bg-black text-white`}
        >
          <p className="text-4xl font-extrabold text-red">Resources</p>
        </div>
        <ResourceBox title={"Chinese Food"} />
        <ResourceBox
          title={"Other Chinese Communities in Calgary"}
          colSpan={2}
          backgroundColor="black"
          textColor="white"
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
          textColor="white"
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
          textColor="white"
        />
        <ResourceBox
          title={"History of Chinatown"}
          link={"https://www.sfu.ca/chinese-canadian-history/"}
        />
        {/* <div className="border-2 border-black">Resources</div>
        <div className="border-2 border-black">Chinese Food</div>
        <div className="border-2 border-black col-span-2 ">
          Other Chinese Communities in Calgary
        </div>
        <div className="border-2 border-black row-span-2 relative">
          Historic Chinatown Tour
          <a
            href="https://www.sfu.ca/chinese-canadian-history/"
            className="absolute bottom-0 right-0"
          >
            <BsFillArrowRightCircleFill size={30} />
          </a>
        </div>
        <div className="border-2 border-black">Anti-Asian Racism</div>
        <div className="border-2 border-black row-span-2">
          CSS Student Union Page
        </div>
        <div className="border-2 border-black row-span-2">
          Mental Health Resources UCalgary
        </div>
        <div className="border-2 border-black ">History of Chinatown</div> */}
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
  textColor = "black",
}) {
  const target = openNewTab ? `"_blank"` : "";
  const rel = openNewTab ? `"noopener noreferrer" ` : "";

  return (
    <div
      className={`border-2 border-black relative rounded-lg col-span-${colSpan} row-span-${rowSpan} bg-${backgroundColor} text-${textColor}`}
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
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
