import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const articles = [
  {
    id: 0,
    title: "❓ Awareness",
    link: "https://succinct-paint-8b3.notion.site/Awareness-9a83f312b07a44d6aa108a8c25ec4c0f",
    summary:
      "Impactful change begins with education and awareness, so it is our responsibility not only to show support for the Asian community but also to garner understanding and support from others. Confront racism in public, be politically proactive, share resources, and most importantly, engage in meaningful conversations about racism. Share this knowledge with those who may struggle to understand the importance of the issue. In some cases, the conversation may be uncomfortable at first, but a little awkwardness is worthwhile if the other party derives some value from it.",
  },
  {
    id: 1,
    title: "❤️️ Compassion",
    link: "https://succinct-paint-8b3.notion.site/Compassion-bc2237b943634114aaceca45d0940b96",
    summary:
      "The recent influx of news covering the racism and violence against Asian-Americans and Asian-Canadians has created a media space that may be a major source of anxiety for Asian communities. While we should demonstrate compassion to those around us that are going through these traumatic experiences, it is also important to practice self-care, and breaks from constantly interacting with traumatic content.",
  },
  {
    id: 2,
    title: "🏃 Take Action",
    link: "https://succinct-paint-8b3.notion.site/Take-Action-c2836c1c00594e69a993de3b18cf20b4",
    summary:
      "We can support the Asian community by donating to relevant organizations that work to stop hate and racism through actions like community restoration, community enrichment, policy reforms, and much more. If you see someone experiencing racism, discrimination, harassment, or assault, be an active ally. Listen to Asian voices and encourage them to speak up and speak out about the injustices they face in our communities. Report any anti-Asian hate you see.",
  },
  {
    id: 3,
    title: "📢 Amplifying Asian Voices",
    link: "https://succinct-paint-8b3.notion.site/Amplifying-Asian-Voices-2f5da2eb7ca14b8b8b29faeeb1963955",
    summary:
      "Now is the time to stand with your Asian Canadian/APPI friends. Listen to Asian voices and encourage them to speak up and speak out about the injustices they face in our communities. Report any anti-Asian hate you see.",
  },
];

export default function AntiAsianRacism() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8 m-2 lg:m-8">
      <h1 className="table-caption text-3xl lg:text-5xl text-center font-bold">
        <span className="text-red">Anti-Asian</span> Racism Resources
      </h1>

      <TabResources />
    </section>
  );
}

function TabResources() {
  return (
    <Tabs>
      <TabList>
        {articles.map((article) => (
          <Tab key={article.id} className="p-0">
            <Text className="text-xs lg:text-2xl">{article.title}</Text>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {articles.map((article) => (
          <TabPanel key={article.id} padding={2}>
            <Text className="flex flex-col gap-2 lg:gap-4 text-sm/loose lg:text-xl/loose">
              <Text className="text-lg lg:text-2xl font-bold">Summary</Text>
              <Text>{article.summary} </Text>
              <Text className="font-bold">
                To learn more, check out our article:
                <Link href={article.link} isExternal color="blue.600">
                  {article.title} <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </Text>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
