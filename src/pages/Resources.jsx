import ResourceBox from "../components/ResourceBox";

function Resources() {
  return (
    <div className="flex h-screen justify-center">
      <section className="grid grid-cols-4 grid-rows-3 gap-4 mx-20 my-8 text-lg [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-center [&>*]:p-8">
        <ResourceBox title={"RESOURCES"} />
        <ResourceBox title={"Chinese Food"} />
        <ResourceBox
          title={"Other Chinese Communities in Calgary"}
          colSpan={2}
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
        />
        <ResourceBox
          title={"CSS Student Union Page"}
          rowSpan={2}
          link={
            "https://suuofc.campuslabs.ca/engage/organization/chinese-students-society"
          }
        />
        <ResourceBox
          title={"Mental Health Resources UCalgary"}
          rowSpan={2}
          link={
            "https://www.ucalgary.ca/hr/wellness/wellbeing-worklife/mental-health/resources"
          }
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
      </section>
    </div>
  );
}

export default Resources;
