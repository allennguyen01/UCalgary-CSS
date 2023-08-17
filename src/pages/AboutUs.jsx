import img from "../assets/who-we-are.jpg";
import LucyHeadshot from "../assets/images/meet-the-team/Lucy.jpg";
import CeciliaHeadshot from "../assets/images/meet-the-team/Cecilia.jpg";
import JoyceHeadshot from "../assets/images/meet-the-team/Joyce.jpg";
import KerryHeadshot from "../assets/images/meet-the-team/Kerry.jpg";
import ReneeHeadshot from "../assets/images/meet-the-team/Renee.jpg";
import StephHeadshot from "../assets/images/meet-the-team/Steph.jpg";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function AboutUs() {
  const iconSize = 80;

  const teamMembers = [
    {
      name: "Lucy Li",
      photo: LucyHeadshot,
      position: "Co-President",
      description:
        "Hi! I am Lucy and I am one of the Co-Presidents of CSS this year! I am from Vancouver and I am currently in my last year of my BComm degree majoring in Business Analytics. I joined CSS because I want to be a part of a community with likeminded people with the common interest of embracing Chinese culture!",
    },
    {
      name: "Cecilia Xu",
      photo: CeciliaHeadshot,
      position: "Co-President",
      description:
        "I’m Cecilia, a final-year Neuroscience student at UofC. Originally from China, my profound passion for Chinese culture has driven me to actively engage with and lead CSS. My aim is to create a welcoming and enjoyable space within our campus, where anyone interested in Chinese culture can feel included and free to embrace our shared heritage.",
    },
    {
      name: "Joyce Ho",
      photo: JoyceHeadshot,
      position: "VP Finance",
      description:
        "My name is Joyce and I am currently in my final year of accounting. I joined CSS in 2021 as the VP of finance. One of my favourite things about CSS is the people. I love working with the other execs to promote Chinese cultre on campus by creating an environment for students to have fun and meet new friends!",
    },
    {
      name: "Kerry Guo",
      photo: KerryHeadshot,
      position: "VP Finance",
      description:
        "Hi, my name is Kerry, I’m currently in my final year doing Statistics, I’m one of the VP finance. I really like CSS because I was able to meet different people, and all the events were very interesting and interactive.",
    },
    {
      name: "Stephanie Liew",
      photo: StephHeadshot,
      position: "VP Marketing",
      description:
        "Hello! My name is Stephanie and I’m VP Marketing for CSS!! I’m an international student from Malaysia and currently in my final year of my Kinesiology degree. I’m so thankful that I found CSS during my Uni journey because it’s helped me make so many new friends and meet lots of good people 💓",
    },
    {
      name: "Renee Pi",
      photo: ReneeHeadshot,
      position: "VP Events",
      description:
        "Hi! I’m Renee and I am in my fourth year of a combined degree in Psychology and Piano Performance. My favourite part of being an executive in CSS has been the events and making new connections with students from so many diverse backgrounds!",
    },
  ];

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
          <MissionCard
            title="CONNECT"
            icon={<Diversity3Icon sx={{ fontSize: iconSize }} />}
            content="CSS celebrates Chinese culture through events and fosters
            relationships with Calgary's Chinese community and other
            cultural clubs on campus. We actively seek new collaborations."
          />
          <MissionCard
            title="SOCIALIZE"
            icon={<ConnectWithoutContactIcon sx={{ fontSize: iconSize }} />}
            content="CSS enhances the university experience by providing opportunities
              to meet, make friends, and build a social network through events
              like the Meet and Greet, Sports Tournaments, Dances, Volunteer
              Opportunities, and the Year End Gala."
          />
          <MissionCard
            title="SUPPORT"
            icon={<HandshakeIcon sx={{ fontSize: iconSize }} />}
            content="CSS engages in community service, welcomes all interested in
            Chinese culture, and offers sponsor discounts at select on-campus
            and off-campus businesses for members."
          />
        </div>
      </div>
      <div id="meet-the-team" className="flex flex-col gap-8">
        <h1 className="text-6xl font-semibold">
          Meet the <span className="text-red">Team</span>
        </h1>

        <div className="grid grid-cols-3 gap-12 mx-12">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} teamMember={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MissionCard({ title, icon, content }) {
  return (
    <Card size={"sm"}>
      <CardBody className="text-center">
        <Text className="text-3xl text-center font-bold">{title}</Text>
        {icon}
        <Text>{content}</Text>
      </CardBody>
    </Card>
  );
}

MissionCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  content: PropTypes.string,
};

function TeamCard({ teamMember }) {
  return (
    <Card size={"sm"}>
      <CardBody>
        <Image
          src={teamMember.photo}
          alt={teamMember.name}
          borderRadius="lg"
          width={"sm"}
        />
        <Stack mt="6" spacing="3">
          <Text>
            <Text fontWeight={"extrabold"} fontSize="2xl">
              {teamMember.name}
            </Text>
            <Text className="text-gray-500" fontSize="lg">
              {teamMember.position}
            </Text>
          </Text>

          <Text>{teamMember.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

TeamCard.propTypes = {
  teamMember: PropTypes.object,
};
