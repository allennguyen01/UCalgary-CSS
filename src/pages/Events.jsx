import img from "../assets/placeholder-image.png";
import PropTypes from "prop-types";

const events = [
  {
    id: 0,
    name: "End of Year Party",
    date: "April 6, 2023",
    img: img,
  },
  {
    id: 1,
    name: "Diversitea",
    date: "January 20, 2023",
    img: img,
  },
  {
    id: 2,
    name: "Lunar New Year CSS x CLCC",
    date: "January 27, 2023",
    img: img,
  },
  {
    id: 3,
    name: "Octopus Friday Games",
    date: "November 25, 2022",
    img: img,
  },
  {
    id: 4,
    name: "Meet & Greet",
    date: "October 14, 2022",
    img: img,
  },
  {
    id: 5,
    name: "Year End Party",
    date: "April 1, 2022",
    img: img,
  },
  {
    id: 6,
    name: "Lunar New Year",
    date: "February 6, 2022",
    img: img,
  },
  {
    id: 7,
    name: "New Years Photo Contest x CGSA",
    date: "February 5, 2022",
    img: img,
  },
  {
    id: 8,
    name: "Fall Welcome Event",
    date: "October 22, 2021",
    img: img,
  },
];

export default function Events() {
  return (
    <div className="flex flex-col gap-8 m-8">
      <section className="flex flex-auto gap-8 items-center justify-center">
        <img
          src={img}
          alt="New Event Poster"
          className="border-black border-2"
        />
        <div className="text-center">
          <div className="my-8">
            <p className="text-2xl font-bold">Upcoming Event:</p>
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

      <section>
        <h1 className="text-5xl font-bold">Event Diary</h1>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center my-4">
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
    <div>
      <img
        src={event.img}
        alt={event.name}
        width={400}
        className="border border-black"
      />
      <p className="text-lg">{event.name}</p>
      <p>{event.date}</p>
    </div>
  );
}

DiaryEvent.propTypes = {
  event: PropTypes.object,
};
