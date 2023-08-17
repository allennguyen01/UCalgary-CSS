import img from "../assets/placeholder-image.png";
import YearEndParty2022 from "../assets/images/events-diary/year-end-party-2022.jpg";
import YearEndParty2023 from "../assets/images/events-diary/year-end-party-2023.jpg";
import OctopusFridayGames from "../assets/images/events-diary/octopus-games.jpg";
import LNY2023 from "../assets/images/events-diary/lny-2023.jpg";
import LNY2022 from "../assets/images/events-diary/lny-2022.png";
import LNYPhotoContest2022 from "../assets/images/events-diary/lny-photo-contest-2022.jpg";
import MeetAndGreet2022 from "../assets/images/events-diary/meet-and-greet-2022.jpg";
import MeetAndGreet2021 from "../assets/images/events-diary/meet-and-greet-2021.jpg";
import Diversitea from "../assets/images/events-diary/diversitea.jpg";

import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const events = [
  {
    id: 0,
    name: "End of Year Party",
    date: "April 6, 2023",
    img: YearEndParty2023,
  },
  {
    id: 1,
    name: "Diversitea",
    date: "January 20, 2023",
    img: Diversitea,
  },
  {
    id: 2,
    name: "Lunar New Year CSS x CLCC",
    date: "January 27, 2023",
    img: LNY2023,
  },
  {
    id: 3,
    name: "Octopus Friday Games",
    date: "November 25, 2022",
    img: OctopusFridayGames,
  },
  {
    id: 4,
    name: "Meet & Greet",
    date: "October 14, 2022",
    img: MeetAndGreet2022,
  },
  {
    id: 5,
    name: "Year End Party",
    date: "April 1, 2022",
    img: YearEndParty2022,
  },
  {
    id: 6,
    name: "Lunar New Year",
    date: "February 6, 2022",
    img: LNY2022,
  },
  {
    id: 7,
    name: "New Years Photo Contest x CGSA",
    date: "February 5, 2022",
    img: LNYPhotoContest2022,
  },
  {
    id: 8,
    name: "Fall Welcome Event",
    date: "October 22, 2021",
    img: MeetAndGreet2021,
  },
];

export default function Events() {
  return (
    <div className="flex flex-col gap-20 m-8">
      <section className="flex flex-auto gap-8 items-center justify-center">
        <img
          src={img}
          alt="New Event Poster"
          className="border-black border-2"
        />
        <div className="text-center">
          <div className="my-8">
            <p className="text-2xl font-bold">
              <span className="text-red">Upcoming</span> Event:
            </p>
            <h1 className="text-4xl">Meet and Greet 2023</h1>
            <p className="text-lg">Description of the event</p>
          </div>

          <div className="my-16 text-lg">
            <p>
              <strong>Location:</strong> University of Calgary
            </p>
            <p>
              <strong>Date:</strong> Sept. 5, 2023
            </p>
            <p>
              <strong>Time:</strong> 7:00 pm
            </p>
          </div>

          <div>
            <a href="" className="bg-black text-white rounded-xl px-8 py-4">
              SIGN UP
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">
          <span className="text-red">Events</span> Diary
        </h1>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          {events.map((e) => (
            <DiaryEvent key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}

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
