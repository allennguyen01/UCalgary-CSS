import img from "../assets/who-we-are.jpg";
import LucyPhoto from "../assets/images/meet-the-team/Lucy-meme.jpg";
import CeciliaPhoto from "../assets/images/meet-the-team/Cecilia-meme.jpg";
import JoycePhoto from "../assets/images/meet-the-team/Joyce.jpg";
import KerryPhoto from "../assets/images/meet-the-team/Kerry.jpg";
import ReneePhoto from "../assets/images/meet-the-team/Renee.jpg";
import StephPhoto from "../assets/images/meet-the-team/Steph.jpg";
import AllenPhoto from "../assets/images/meet-the-team/Allen.jpg";
import EthanPhoto from "../assets/images/meet-the-team/Ethan.jpg";
import KevinPhoto from "../assets/images/meet-the-team/Kevin.jpg";
import HansonPhoto from "../assets/images/meet-the-team/Hanson.jpg";
import ChelseaPhoto from "../assets/images/meet-the-team/Chelsea.jpg";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function AboutUs() {
  const iconSize = 80;

  const teamMembers = [
    {
      name: "Lucy Li",
      photo: LucyPhoto,
      position: "Co-President",
      description:
        "Hi! I am Lucy and I am one of the Co-Presidents of CSS this year! I am from Vancouver and I am currently in my last year of my BComm degree majoring in Business Analytics. I joined CSS because I want to be a part of a community with likeminded people with the common interest of embracing Chinese culture!",
    },
    {
      name: "Cecilia Xu",
      photo: CeciliaPhoto,
      position: "Co-President",
      description:
        "I'm Cecilia, a final-year Neuroscience student at UofC. Originally from China, my profound passion for Chinese culture has driven me to actively engage with and lead CSS. My aim is to create a welcoming and enjoyable space within our campus, where anyone interested in Chinese culture can feel included and free to embrace our shared heritage.",
    },
    {
      name: "Joyce Ho",
      photo: JoycePhoto,
      position: "VP Finance",
      description:
        "My name is Joyce and I am currently in my final year of accounting. I joined CSS in 2021 as the VP of finance. One of my favourite things about CSS is the people. I love working with the other execs to promote Chinese cultre on campus by creating an environment for students to have fun and meet new friends!",
    },
    {
      name: "Kerry Guo",
      photo: KerryPhoto,
      position: "VP Finance",
      description:
        "Hi, my name is Kerry, I'm currently in my final year doing Statistics, I'm one of the VP finance. I really like CSS because I was able to meet different people, and all the events were very interesting and interactive.",
    },
    {
      name: "Stephanie Liew",
      photo: StephPhoto,
      position: "VP Marketing",
      description:
        "Hello! My name is Stephanie and I'm VP Marketing for CSS!! I'm an international student from Malaysia and currently in my final year of my Kinesiology degree. I'm so thankful that I found CSS during my Uni journey because it's helped me make so many new friends and meet lots of good people 💓",
    },
    {
      name: "Renee Pi",
      photo: ReneePhoto,
      position: "VP Events",
      description:
        "Hi! I'm Renee and I am in my fourth year of a combined degree in Psychology and Piano Performance. My favourite part of being an executive in CSS has been the events and making new connections with students from so many diverse backgrounds!",
    },
    {
      name: "Allen Nguyen",
      photo: AllenPhoto,
      position: "VP Development",
      description:
        "Hey! My name is Allen and I'm in my fifth year of Computer Engineering at UBC. I'm in charge of development and maintainence of the club's website. I hope that this website can bring more people to the amazing events that CSS hosts and bring resources that can educate people on Chinese culture. 🕺💃",
    },
    {
      name: "Hanson Ji",
      photo: HansonPhoto,
      position: "VP External/Events",
      description:
        "Hey! My name is Hanson and I am in my third year of Chemical Engineering. I joined CSS to further enhance my own understanding of Chinese culture as well as to help share it with others. As VP Events/External I hope to expand our organization's reach and build strong relationships with external organizations and partners.",
    },
    {
      name: "Chelsea Ji",
      photo: ChelseaPhoto,
      position: "Jr VP External",
      description:
        "Hi everyone! My name is Chelsea and I'm the Jr VP of External here at CSS. I'm currently a first year Education student at U of C and I am super excited to be part of such an inviting community who share similar passion on Chinese culture. It is also always really rewarding and fun to meet new friends who share the same heritage.",
    },
    {
      name: "Ethan Do",
      photo: EthanPhoto,
      position: "Jr VP Marketing",
      description:
        "Hi! My name is Ethan and I am the Jr VP of Marketing. I am a first year studying Linguistics, I can't wait to meet so many new people! I joined CSS so I could meet other likeminded people as well as share Chinese culture with other students! It is really fulfilling seeing other people enjoy the Chinese culture as well as events we host!",
    },
    {
      name: "Kevin Li",
      photo: KevinPhoto,
      position: "Graphic Designer",
      description:
        "I study Graphic Design at Pratt Institute in New York. I'm captivated by design because it's a humble, subtle, yet powerful art that's all around us. As a big fan of Chinese culture and history, I joined out at CSS to integrate this interest with my skills in art.",
    },
  ];

  return (
    <div className="flex flex-auto flex-col m-2 lg:m-8 gap-12">
      <div id="who-we-are" className="flex flex-col items-center gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16">
          <div>
            <h1 className="text-4xl lg:text-6xl font-semibold">
              Who <span className="text-red">We</span> Are
            </h1>
            <p className="text-base/relaxed lg:text-xl/relaxed my-8">
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
            className="max-h-[32rem] rounded-full"
          />
        </div>
        <p className="text-sm lg:text-lg text-center max-w-4xl">
          We would like to acknowledge the traditional territories of the people
          of the Treaty 7 region in Southern Alberta. The City of Calgary is
          also home to Métis Nation of Alberta, Region 3.
        </p>
      </div>
      <div id="our-mission" className="flex flex-col gap-8">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Our <span className="text-red">Mission</span>
        </h1>
        <div className="flex flex-col lg:flex-row text-xl leading-relaxed gap-8 lg:gap-20">
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
      <div id="meet-the-team" className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Meet the <span className="text-red">Team</span>
        </h1>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 lg:mx-12">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} teamMember={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionCard({ title, icon, content }) {
  return (
    <Card size={"sm"}>
      <CardBody className="text-center">
        <Text className="lg:text-3xl font-bold">{title}</Text>
        <Text>{icon}</Text>
        <Text className="text-base lg:text-lg leading-relaxed">{content}</Text>
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
    <Card>
      <CardBody>
        <Box className="flex justify-center">
          <Image
            src={teamMember.photo}
            alt={teamMember.name}
            className="justify-self-center max-h-60 object-contain rounded-xl"
          />
        </Box>

        <Stack mt="6" spacing="3">
          <Text>
            <Text className="font-bold text-lg lg:text-2xl">
              {teamMember.name}
            </Text>
            <Text className="text-sm lg:text-base font-bold text-gray-500">
              {teamMember.position}
            </Text>
          </Text>

          <Text className="hidden lg:flex text-sm lg:text-base leading-relaxed">
            {teamMember.description}
          </Text>
        </Stack>
        <Accordion allowToggle className="lg:hidden">
          <AccordionItem className="p-0 m-0">
            <AccordionButton paddingX={0} paddingY={2}>
              <Box className="text-sm text- inline flex-1 text-left">
                Member Bio
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel padding={0}>
              <Text className="text-xs leading-relaxed">
                {teamMember.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}

TeamCard.propTypes = {
  teamMember: PropTypes.object,
};
