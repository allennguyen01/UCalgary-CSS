import { Card, CardBody, Text, Stack, HStack, Box } from "@chakra-ui/react";
import { TbWorldWww } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { PropTypes } from "prop-types";

const communities = [
  {
    name: "Calgary Chinese Cultural Centre",
    description:
      "A non-profit community centre for Calgarians to meet and socialize",
    website: "https://www.culturalcentre.ca/",
    instagram: "https://www.instagram.com/calgarychinese/",
    color: "red",
  },
  {
    name: "Diversecities",
    description:
      "Charitable organization aiming to make social mobility accessible",
    website: "https://www.diversecities.org/",
    instagram: "https://www.instagram.com/hidiversecities/",
    color: "orange",
  },
  {
    name: "Calgary Chinatown",
    description:
      "Features events and socializing opportunities in YYC Chinatown",
    instagram: "https://www.instagram.com/calgarychinatown/",
    color: "yellow",
  },
  {
    name: "Friends of Chinatown YYC",
    description: "Shares yummy food and fun events in YYC Chinatown",
    instagram: "https://www.instagram.com/friendsofchinatownyyc/",
    color: "red",
  },
  {
    name: "Chinatown Pop Up Movie Club",
    description: "Shares classic Chinese films to foster a sense of belonging",
    website: "https://chinatownpopupmovieclub.com/",
    instagram: "https://www.instagram.com/chinatownpopup/",
    color: "orange",
  },
];

export default function ChineseCommunities() {
  return (
    <div
      id="calgary-chinese-communities"
      className="flex flex-col gap-4 m-4 lg:gap-8 lg:m-8"
    >
      <h1 className="text-3xl lg:text-5xl font-bold">
        Calgary <span className="text-red">Chinese Communities</span>
      </h1>
      <div className="flex justify-center">
        <div className="grid gap-4 lg:gap-8 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.name} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunityCard({ community }) {
  const iconSize = 25;
  const instagramIcon = community.instagram ? (
    <a href={community.instagram} target="_blank" rel="noopener noreferrer">
      <BsInstagram size={iconSize} />
    </a>
  ) : (
    <></>
  );
  const websiteIcon = community.website ? (
    <a href={community.website} target="_blank" rel="noopener noreferrer">
      <TbWorldWww size={iconSize} />
    </a>
  ) : (
    <></>
  );

  const backgroundColor = {
    red: "red.300",
    orange: "orange.200",
    yellow: "yellow.200",
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      className={`max-w-[15rem] lg:max-w-sm ${
        backgroundColor[community.color]
      }`}
      backgroundColor={backgroundColor[community.color]}
    >
      <Box className="flex items-center justify-center text-center m-4 p-4 lg:max-w-fit border-slate-300 border-2 rounded-lg bg-white">
        <Text>{community.description}</Text>
      </Box>

      <Stack>
        <CardBody
          className="flex flex-col items-center justify-center text-center gap-2"
          paddingY={6}
          paddingX={6}
        >
          <Text className="font-bold text-lg lg:text-xl">{community.name}</Text>
          <HStack>
            {instagramIcon}
            {websiteIcon}
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
}

CommunityCard.propTypes = {
  community: PropTypes.object,
};
