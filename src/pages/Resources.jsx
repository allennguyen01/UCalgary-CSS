import ResourceBox from "../components/ResourceBox";

function Resources() {
  return (
    <div className="flex flex-auto">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 m-8 text-lg [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-center [&>*]:p-8">
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
      </div>
    </div>
  );
}

export default Resources;
