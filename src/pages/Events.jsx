import LNY2024_1 from "../assets/images/upcoming-events/lunar-new-year-2024(1).png";
import LNY2024_2 from "../assets/images/upcoming-events/lunar-new-year-2024(2).png";
import LNY2024_3 from "../assets/images/upcoming-events/lunar-new-year-2024(3).png";

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
import EmbraceTheWarmth2023 from "../assets/images/events-diary/embrace-the-warmth-2023.jpg";
import ChineseMedicine2023 from "../assets/images/events-diary/chinese-medicine-2023.jpg";
import WinterMeetAndGreet2024 from "../assets/images/events-diary/winter-meet-and-greet-2024.png";
import PaintAndMahjongNight2023 from "../assets/images/events-diary/paint-and-mahjong-night-2023.png";
import LNY2024 from "../assets/images/events-diary/lny-2024.png";
import Badminton2024 from "../assets/images/events-diary/badminton-tournament-2024.png";
import Valentines2024 from "../assets/images/events-diary/valentines-2024.png";
import TilesAndSmiles2024 from "../assets/images/events-diary/tiles-and-smiles-2024.jpg";
import NeonNight2024 from "../assets/images/events-diary/neon-night-2024.jpg";

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

const breakpoints = {
  base: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

extendTheme({ breakpoints });

let id = 0;

const events = [
  {
    id: id++,
    name: "Fall Welcome Event",
    date: "October 22, 2021",
    schoolYear: 2021,
    img: MeetAndGreet2021,
  },
  {
    id: id++,
    name: "New Years Photo Contest x CGSA",
    date: "February 5, 2022",
    schoolYear: 2021,
    img: LNYPhotoContest2022,
  },
  {
    id: id++,
    name: "Lunar New Year",
    date: "February 6, 2022",
    schoolYear: 2021,
    img: LNY2022,
  },
  {
    id: id++,
    name: "Year End Party",
    date: "April 1, 2022",
    schoolYear: 2021,
    img: YearEndParty2022,
  },
  {
    id: id++,
    name: "Meet & Greet",
    date: "October 14, 2022",
    schoolYear: 2022,
    img: MeetAndGreet2022,
  },
  {
    id: id++,
    name: "Octopus Friday Games",
    date: "November 25, 2022",
    schoolYear: 2022,
    img: OctopusFridayGames,
  },
  {
    id: id++,
    name: "Lunar New Year CSS x CLCC",
    date: "January 27, 2023",
    schoolYear: 2022,
    img: LNY2023,
  },
  {
    id: id++,
    name: "Diversitea",
    date: "January 20, 2023",
    schoolYear: 2022,
    img: Diversitea,
  },
  {
    id: id++,
    name: "End of Year Party",
    date: "April 6, 2023",
    schoolYear: 2022,
    img: YearEndParty2023,
  },
  {
    id: id++,
    name: "Fall Icebreaker",
    date: "October 3, 2023",
    schoolYear: 2023,
    img: FallIcebreaker2023_3,
  },
  {
    id: id++,
    name: "Paint & Mahjong Night",
    date: "October 24, 2023",
    schoolYear: 2023,
    img: PaintAndMahjongNight2023,
  },
  {
    id: id++,
    name: "Embrace the Warmth Game & Movie Night",
    date: "November 7, 2023",
    schoolYear: 2023,
    img: EmbraceTheWarmth2023,
  },
  {
    id: id++,
    name: "Traditional Chinese Medicine Destress Night",
    date: "November 29, 2023",
    schoolYear: 2023,
    img: ChineseMedicine2023,
  },
  {
    id: id++,
    name: "Winter Meet & Greet",
    date: "January 18, 2024",
    schoolYear: 2023,
    img: WinterMeetAndGreet2024,
  },
  {
    id: id++,
    name: "Year of the Dragon Lunar New Year Gala",
    date: "February 4, 2024",
    schoolYear: 2023,
    img: LNY2024,
  },
  {
    id: id++,
    name: "Valentine's Day Cupid Dash",
    date: "February 16, 2024",
    schoolYear: 2023,
    img: Valentines2024,
  },
  {
    id: id++,
    name: "Badminton Tournament w/ UCBC, VSA, & TSA",
    date: "March 16, 2024",
    schoolYear: 2023,
    img: Badminton2024,
  },
  {
    id: id++,
    name: "Tiles and Smiles",
    date: "March 22, 2024",
    schoolYear: 2023,
    img: TilesAndSmiles2024,
  },
  {
    id: id++,
    name: "Neon Night @ Soundbar Stage & Bar",
    date: "April 10, 2024",
    schoolYear: 2023,
    img: NeonNight2024,
  },
];

export default function Events() {
  const upcomingEvent = {
    title: "CSS x CSSA Lunar New Year Celebration",
    imgSrcs: [LNY2024_1, LNY2024_2, LNY2024_3],
    link: "https://www.showpass.com/css-x-cssa-lunar-new-year-celebration/",
    description:
      "咚咚锵大家 🥁🧧📣 Join us for our BIGGEST EVENT OF THE YEAR ‼️ We will be collaborating with @cssa.uc to host a Lunar New Year Celebration coming February 4th, 2024 to usher in the year of the Dragon 🐉✨",
    location: "Regency Palace, Dragon City Mall",
    date: "Sunday February 4, 2024",
    time: "6:00 - 10:00 p.m.",
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
