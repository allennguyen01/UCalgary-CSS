import img from "../assets/who-we-are.jpg";

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
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export default function AboutUs() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      const { data, error } = await supabase.from("team").select();
      if (data) {
        setTeam(data);
      }

      if (error) {
        console.error("Error fetching team members:", error);
      }
    }

    fetchTeam();
  }, []);

  const iconSize = 80;

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
            {team.map((member) => (
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
            src={teamMember.img}
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
