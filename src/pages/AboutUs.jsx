import img from "../assets/who-we-are.jpg";
import ReneePhoto from "../assets/images/meet-the-team/Renee.jpg";
import HansonPhoto from "../assets/images/meet-the-team/Hanson.jpg";
import AllenPhoto from "../assets/images/meet-the-team/Allen.jpg";
import AkhilPhoto from "../assets/images/meet-the-team/Akhil.jpg";
import MitchellPhoto from "../assets/images/meet-the-team/Mitchell.jpg";
import KaitlynHoPhoto from "../assets/images/meet-the-team/KaitlynHo.jpg";
import DeniPhoto from "../assets/images/meet-the-team/Deni.jpg";
import ZoePhoto from "../assets/images/meet-the-team/Zoe.jpg";
import EllaPhoto from "../assets/images/meet-the-team/Ella.jpg";
import WinsomePhoto from "../assets/images/meet-the-team/Winsome.jpg";
import BoscoPhoto from "../assets/images/meet-the-team/Bosco.jpg";
import ChelseaPhoto from "../assets/images/meet-the-team/Chelsea.jpg";
import KaitlynChanPhoto from "../assets/images/meet-the-team/KaitlynChan.jpg";
import AngelPhoto from "../assets/images/meet-the-team/Angel.jpg";
import AlvinPhoto from "../assets/images/meet-the-team/Alvin.jpg";
import KevinPhoto from "../assets/images/meet-the-team/Kevin.jpg";

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
      name: "Renee Pi",
      photo: ReneePhoto,
      position: "President",
      description:
        "Hi! I'm Renee and I am in my final year of a combined degree in a BA in Psychology and a BMus in Piano Performance. My favourite part of CSS has been the events and meeting so many new people, and I’m looking forward to another great year with the club!",
    },
    {
      name: "Hanson Ji",
      photo: HansonPhoto,
      position: "Vice President",
      description:
        "Hey! My name is Hanson and I am in my third year of Chemical Engineering. I joined CSS to further enhance my own understanding of Chinese culture as well as to help share it with others. As VP Events/External I hope to expand our organization's reach and build strong relationships with external organizations and partners.",
    },
    {
      name: "Allen Nguyen",
      photo: AllenPhoto,
      position: "VP Development",
      description:
        "Hey! My name is Allen and I'm in my fifth year of Computer Engineering at UBC. I'm in charge of development and maintainence of the club's website. I hope that this website can bring more people to the amazing events that CSS hosts and bring resources that can educate people on Chinese culture. 🕺💃",
    },
    {
      name: "Akhil Verma",
      photo: AkhilPhoto,
      position: "VP Marketing",
      description:
        "Hello! My name is Akhil and I'm a VP Marketing for CSS! I love playing video games and going on adventures. Coincidentally, I am also studying marketing as a second year student. I really enjoy contributing to make CSS as amazing as possible and learning about Chinese culture.",
    },
    {
      name: "Mitchell Ou",
      photo: MitchellPhoto,
      position: "VP Marketing",
      description:
        "yoo my name is mitchell im vp marketing going into my 4th year in computer science! i'm looking forward to meeting and making new friends!!",
    },
    {
      name: "Kaitlyn Ho",
      photo: KaitlynHoPhoto,
      position: "VP Marketing",
      description:
        "Hi, my name is Kaitlyn Ho and I am VP Marketing for CSS! I am currently heading into my third year in kinesiology. Through CSS, I hope to help other like-minded individuals find community and embrace Chinese culture. I'm also very excited to be a part of such an amazing team and I can't wait to meet everyone at all of the events!",
    },
    {
      name: "Deni Hui",
      photo: DeniPhoto,
      position: "VP Marketing",
      description:
        "Hi! My name is Deni and I'm a third-year business major specializing in supply chain management. I joined CSS in hopes of meeting more people interested in Chinese culture and as the VP of Marketing, I hope to share that love for Chinese culture through our club content.",
    },
    {
      name: "Zoe Zhou",
      photo: ZoePhoto,
      position: "VP Marketing",
      description:
        "Hi! I'm Zoe and I'm entering my 2nd year of Exercise and Health Physiology. I am VP Marketing and I joined CSS to be more interconnected with my community and my Chinese culture, and help others find belonging on campus. I am excited to meet everyone – I can't wait to acquire unforgettable experiences and memories with the community!",
    },
    {
      name: "Ella Wang",
      photo: EllaPhoto,
      position: "VP Events",
      description:
        "Hi, my name is Ella and I am in my fourth year of Finance. While I was born in China, I spent most of my life growing up in Canada. I have been wanting to reconnect with my heritage and forge new connections, so needless to say, I am excited to join as a VP Events of CSS. I look forward to creating new opportunities and memorable experiences for everyone!",
    },
    {
      name: "Winsome Chow",
      photo: WinsomePhoto,
      position: "VP Events",
      description:
        "Hi! My name is Winsome and I'm in my fourth year of Community Rehabilitation and Disability Studies. I'm looking forward to meeting new people from diverse backgrounds, learning from them, and improving on my own knowledge of Chinese culture! My favourite part of CSS is the fulfillment it brings to see such diverse people be curious, embrace, and enjoy our shared culture!",
    },
    {
      name: "Bosco Li",
      photo: BoscoPhoto,
      position: "VP Events",
      description:
        "My name is Bosco, and I am in my third year of Civil Engineering. I joined CSS to get more involved in the community and learn more about Chinese culture. As VP Events, I look forward to help organize fun events and create unforgettable experiences.",
    },
    {
      name: "Chelsea Ji",
      photo: ChelseaPhoto,
      position: "VP External",
      description:
        "Hi! My name is Chelsea and I'm VP of External here at CSS. I'm currently a second year law & society student and I am super grateful to be part of such an inviting community who share similar passions on Chinese culture. It is also always really rewarding and fun to meet new friends who share the same heritage.",
    },
    {
      name: "Kaitlyn Chan",
      photo: KaitlynChanPhoto,
      position: "VP External",
      description:
        "Hi, I'm Kaitlyn and I am a 4th year accounting major. I joined CSS to learn more about my culture and meet new people. I love playing mahjong so I especially encourage everyone to come to our mahjong events!",
    },
    {
      name: "Angel Seraphine",
      photo: AngelPhoto,
      position: "VP Finance",
      description:
        "Hi everyone! My name is Angel and I am going into my third year of Actuarial Science. I joined CSS as the VP of Finance and I am excited to embrace and share more about Chinese culture. In CSS, I am looking forward to the fun events in the future!",
    },
    {
      name: "Alvin Pan",
      photo: AlvinPhoto,
      position: "VP Finance",
      description:
        "Hi im Alvin I'm currently in my final year of university studying economics, im am one of the VPs of finance, I'm here to support the education of Chinese culture to students and to meet many new friends.",
    },
    {
      name: "Kevin Baritua",
      photo: KevinPhoto,
      position: "VP Internal",
      description:
        "Hey, my name is Kevin, this year's VP Internal. I am an incoming third year in the Actuarial Science program. I look forward to meeting new people and working with everyone!",
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
