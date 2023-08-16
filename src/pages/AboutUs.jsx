import img from "../assets/who-we-are.jpg";
import PropTypes from "prop-types";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function AboutUs() {
  const iconSize = 80;

  return (
    <div className="flex flex-auto flex-col m-8 gap-12">
      <div id="who-we-are" className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-16">
          <div>
            <h1 className="text-6xl font-semibold">
              Who <span className="text-red">We</span> Are
            </h1>
            <p className="text-xl my-8 leading-relaxed">
              Established in 1968, the Chinese Students&apos; Society (CSS) is
              the pioneering and largest Chinese student club at the University
              of Calgary. As a non-profit organization, CSS is devoted to
              promoting Chinese culture while fostering multiculturalism within
              the club.
              <br /> <br />
              We provide a welcoming environment for students to forge new
              friendships and broaden their social network through a variety of
              events, including our annual meet and greet, volunteer activities,
              dances, inter-club sports events, and year-end banquet.
            </p>
          </div>
          <img
            src={img}
            alt="CSS team photo"
            className="h-[26rem] rounded-full"
          />
        </div>
        <p className="text-lg text-center">
          We would like to acknowledge the traditional territories of the people
          of the Treaty 7 region in Southern Alberta. <br />
          The City of Calgary is also home to Métis Nation of Alberta, Region 3.
        </p>
      </div>
      <div id="our-mission">
        <h1 className="text-6xl font-semibold my-10">
          Our <span className="text-red">Mission</span>
        </h1>
        <div className="text-xl leading-relaxed flex gap-20">
          <MissionBox
            title="CONNECT"
            icon={<Diversity3Icon sx={{ fontSize: iconSize }} />}
            content="CSS celebrates Chinese culture through events and fosters
            relationships with Calgary's Chinese community and other
            cultural clubs on campus. We actively seek new collaborations."
          />
          <MissionBox
            title="SOCIALIZE"
            icon={<ConnectWithoutContactIcon sx={{ fontSize: iconSize }} />}
            content="CSS enhances the university experience by providing opportunities
              to meet, make friends, and build a social network through events
              like the Meet and Greet, Sports Tournaments, Dances, Volunteer
              Opportunities, and the Year End Gala."
          />
          <MissionBox
            title="SUPPORT"
            icon={<HandshakeIcon sx={{ fontSize: iconSize }} />}
            content="CSS engages in community service, welcomes all interested in
            Chinese culture, and offers sponsor discounts at select on-campus
            and off-campus businesses for members."
          />
        </div>
      </div>
      <div id="quotes" className="flex flex-col gap-8">
        <h1 className="text-6xl font-semibold my-10">
          Meet the <span className="text-red">Team</span>
        </h1>
        <div className="flex flex-col items-center">
          <Quote
            quote="By featuring positive feedback from others, your potential clients won’t have to take your word for it, instead they can hear and learn from others’ experiences."
            people="Lucy Li and Cecilia Xu"
            position="CO-PRESIDENTS"
            imgSrc={img}
          />
          <Quote
            quote="By featuring positive feedback from others, your potential clients won’t have to take your word for it, instead they can hear and learn from others’ experiences."
            people="Joyce Ho and Kerry Guo"
            position="VP OF FINANCE"
            imgSrc={img}
            isReversed={true}
          />
        </div>
      </div>
    </div>
  );
}

function MissionBox({ title, icon, content }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p className="text-3xl text-center font-bold">{title}</p>
      {/* <ConnectWithoutContactIcon sx={{ fontSize: 60 }} /> */}
      {icon}
      <p>{content}</p>
    </div>
  );
}

MissionBox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  content: PropTypes.string,
};

function Quote({ quote, people, position, imgSrc, isReversed = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-32 w-3/4 ${
        isReversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl text-center">&quot;{quote}&quot;</p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">{people}</p>
          <p className="text-lg font-bold text-gray-500">{position}</p>
        </div>
      </div>
      <img src={imgSrc} alt="" className="h-96 rounded-full" />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
  people: PropTypes.string,
  position: PropTypes.string,
  imgSrc: PropTypes.string,
  isReversed: PropTypes.bool,
};
