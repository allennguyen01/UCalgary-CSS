import InstagramScreenshot from "../assets/images/upcoming-events/instagram-screenshot.png";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  extendTheme,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import SignUpButton from "../components/SignUpButton";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const breakpoints = {
  base: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

extendTheme({ breakpoints });

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase.from("events").select();
      if (data) {
        const sortedData = data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
        setEvents(sortedData);
      }

      if (error) {
        console.error("Error fetching events for event diary:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <main className="flex flex-col gap-20 m-8">
      <section
        id="upcoming-event"
        className="flex flex-col lg:flex-row flex-auto gap-8 lg:gap-12 items-center justify-evenly"
      >
        <img src={InstagramScreenshot} className="lg:max-w-xl rounded-xl" />

        <div className="flex flex-col text-center gap-4 lg:gap-12">
          <div className="flex flex-col gap-2 lg:gap-8">
            <h1 className="text-2xl lg:text-4xl font-bold">
              For <span className="text-red">Upcoming</span> Events:
            </h1>
            <p className="text-xl lg:text-2xl font-medium max-w-md">
              Checkout out our Instagram! It is always up to date with our
              latest events and club updates.
            </p>
          </div>
          <SignUpButton
            link={"https://www.instagram.com/ucalgary.css/"}
            title={"INSTAGRAM"}
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <span className="text-red">Events</span> Diary
        </h1>

        <Tabs
          isFitted
          variant="soft-rounded"
          colorScheme="red"
          size={{ sm: "sm", lg: "md" }}
        >
          <TabList>
            <Tab>2024/25</Tab>
            <Tab>2023/24</Tab>
            <Tab>2022/23</Tab>
            <Tab>2021/22</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .filter((e) => e.schoolYear == 2024)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .filter((e) => e.schoolYear == 2023)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .filter((e) => e.schoolYear == 2022)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .filter((e) => e.schoolYear == 2021)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </main>
  );
}

function UpcomingEvent({ upcomingEvent }) {
  return (
    <section
      id="upcoming-event"
      className="flex flex-col lg:flex-row flex-auto gap-4 lg:gap-8 items-center justify-evenly"
    >
      <Carousel className="rounded-xl lg:max-w-xl">
        {upcomingEvent.imgSrcs.map((src, index) => (
          <div key={index}>
            <img src={src} />
          </div>
        ))}
      </Carousel>

      <div className="flex flex-col text-center gap-4 lg:gap-8">
        <div className="flex flex-col items-center lg:gap-2">
          <p className="text-lg lg:text-2xl font-bold">
            <span className="text-red">Upcoming</span> Event:
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            {upcomingEvent.title}
          </h1>
          <p className="text-sm text-left lg:text-lg max-w-lg">
            {upcomingEvent.description}
          </p>
        </div>

        <div className="text-sm lg:text-lg">
          <p>
            <strong>Location:</strong> {upcomingEvent.location}
            <br />
            <strong>Date:</strong> {upcomingEvent.date}
            <br />
            <strong>Time:</strong> {upcomingEvent.time}
          </p>
        </div>

        <div>
          <SignUpButton link={upcomingEvent.link} title={"SIGN UP"} />
        </div>
      </div>
    </section>
  );
}

UpcomingEvent.propTypes = {
  upcomingEvent: PropTypes.object,
};

function DiaryEvent({ event }) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  }

  return (
    <Card>
      <CardBody className="flex flex-col gap-4">
        <Image
          src={event.img}
          alt={event.name}
          className="border border-black w-[400px] h-[300px] object-cover rounded-lg"
        />
        <Stack>
          <Text className="text-lg font-bold">{event.name}</Text>
          <Text>{formatDate(event.date)}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

DiaryEvent.propTypes = {
  event: PropTypes.object,
};
