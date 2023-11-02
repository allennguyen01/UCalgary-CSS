// import comingSoon from "../assets/images/upcoming-events/coming-soon.jpg";
// import WelcomeBack2023 from "../assets/images/upcoming-events/welcome-back-2023.png";
// import MahjongPaintNight2023 from "../assets/images/upcoming-events/mahjong-paint-night-2023.jpg";
import EmbraceTheWarmth2023 from "../assets/images/upcoming-events/embrace-the-warmth-2023.png";

import YearEndParty2022 from "../assets/images/events-diary/year-end-party-2022.jpg";
import YearEndParty2023 from "../assets/images/events-diary/year-end-party-2023.jpg";
import OctopusFridayGames from "../assets/images/events-diary/octopus-games.jpg";
import LNY2023 from "../assets/images/events-diary/lny-2023.jpg";
import LNY2022 from "../assets/images/events-diary/lny-2022.png";
import LNYPhotoContest2022 from "../assets/images/events-diary/lny-photo-contest-2022.jpg";
import MeetAndGreet2022 from "../assets/images/events-diary/meet-and-greet-2022.jpg";
import MeetAndGreet2021 from "../assets/images/events-diary/meet-and-greet-2021.jpg";
import Diversitea from "../assets/images/events-diary/diversitea.jpg";
import FallIcebreaker2023_1 from "../assets/images/events-diary/fall-icebreaker-2023(1).jpg";
import FallIcebreaker2023_2 from "../assets/images/events-diary/fall-icebreaker-2023(2).jpg";
import FallIcebreaker2023_3 from "../assets/images/events-diary/fall-icebreaker-2023(3).jpg";

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

const breakpoints = {
  base: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

extendTheme({ breakpoints });

const events = [
  {
    id: 0,
    name: "Fall Welcome Event",
    date: "October 22, 2021",
    schoolYear: 2021,
    img: MeetAndGreet2021,
  },
  {
    id: 1,
    name: "New Years Photo Contest x CGSA",
    date: "February 5, 2022",
    schoolYear: 2021,
    img: LNYPhotoContest2022,
  },
  {
    id: 2,
    name: "Lunar New Year",
    date: "February 6, 2022",
    schoolYear: 2021,
    img: LNY2022,
  },
  {
    id: 3,
    name: "Year End Party",
    date: "April 1, 2022",
    schoolYear: 2021,
    img: YearEndParty2022,
  },
  {
    id: 4,
    name: "Meet & Greet",
    date: "October 14, 2022",
    schoolYear: 2022,
    img: MeetAndGreet2022,
  },
  {
    id: 5,
    name: "Octopus Friday Games",
    date: "November 25, 2022",
    schoolYear: 2022,
    img: OctopusFridayGames,
  },
  {
    id: 6,
    name: "Lunar New Year CSS x CLCC",
    date: "January 27, 2023",
    schoolYear: 2022,
    img: LNY2023,
  },
  {
    id: 7,
    name: "Diversitea",
    date: "January 20, 2023",
    schoolYear: 2022,
    img: Diversitea,
  },
  {
    id: 8,
    name: "End of Year Party",
    date: "April 6, 2023",
    schoolYear: 2022,
    img: YearEndParty2023,
  },
  {
    id: 9,
    name: "Fall Icebreaker",
    date: "October 3, 2023",
    schoolYear: 2023,
    img: FallIcebreaker2023_3,
  },
];

export default function Events() {
  function Description() {
    return (
      <div className="text-left">
        <p>
          Join us for a fantastic evening with fun games, movies, activities,
          and delicious food! 🍿
        </p>{" "}
        <p>
          Activities will include (tentatively): Movie Screening, Mahjong & Card
          Games, Snack Station, Paper Cutting Station, Painting, And More!
        </p>
      </div>
    );
  }

  const upcomingEvent = {
    title: "Embrace the Warmth",
    imgSrc: EmbraceTheWarmth2023,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScz_DFHepzYHWqrbXR36CO0XedvSJimuFRwzCDCea2PaUvS-A/viewform",
    description: <Description />,
    location: "TBA",
    date: "Tuesday November 7, 2023",
    time: "6:30 - 8:30 p.m.",
  };

  return (
    <main className="flex flex-col gap-20 m-8">
      <UpcomingEvent upcomingEvent={upcomingEvent} />

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
            <Tab>2023/2024</Tab>
            <Tab>2022/2023</Tab>
            <Tab>2021/2022</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .toReversed()
                  .filter((e) => e.schoolYear == 2023)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .toReversed()
                  .filter((e) => e.schoolYear == 2022)
                  .map((e) => (
                    <DiaryEvent key={e.id} event={e} />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center">
                {events
                  .toReversed()
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
      <img
        src={upcomingEvent.imgSrc}
        alt="New Event Poster"
        className="rounded-xl lg:max-w-xl"
      />
      <div className="flex flex-col text-center gap-4 lg:gap-8">
        <div className="flex flex-col lg:gap-2">
          <p className="text-lg lg:text-2xl font-bold">
            <span className="text-red">Upcoming</span> Event:
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            {upcomingEvent.title}
          </h1>
          <p className="text-sm lg:text-lg max-w-lg">
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
          <Text>{event.date}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

DiaryEvent.propTypes = {
  event: PropTypes.object,
};
