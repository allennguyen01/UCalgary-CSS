import { useState } from "react";
import PropTypes from "prop-types";

export default function AntiAsianRacism() {
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

  const [boxOpen, setBoxOpen] = useState([false, false, false, false]);

  return (
    <section className="flex flex-col gap-8 m-8">
      <h1 className="text-5xl text-center font-bold mb-4">
        Anti-Asian Racism Resources
      </h1>
      <div className="flex flex-row items-start">
        <div className="flex flex-col items-start gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                switch (article.id) {
                  case 0:
                    setBoxOpen([true, false, false, false]);
                    break;
                  case 1:
                    setBoxOpen([false, true, false, false]);
                    break;
                  case 2:
                    setBoxOpen([false, false, true, false]);
                    break;
                  case 3:
                    setBoxOpen([false, false, false, true]);
                    break;
                }
              }}
              className="flex items-center justify-center text-center text-2xl text-white bg-black w-56 h-24 p-4 rounded-lg hover:bg-gray-200 hover:text-gray-800"
            >
              {article.title}
            </a>
          ))}
        </div>
        <div className="mx-12">
          {articles.map((article) => (
            <ContentBox key={article.id} article={article} boxOpen={boxOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentBox({ article, boxOpen }) {
  return (
    <p
      className={`${
        boxOpen[article.id] ? "block" : "hidden"
      } text-2xl leading-loose`}
    >
      {article.summary}
      <br />
      <p className="font-semibold">
        For more info, click the link:{" "}
        <a
          href={article.link}
          className="underline text-blue-600 hover:text-blue-800"
        >
          {article.title}
        </a>
      </p>
    </p>
  );
}

ContentBox.propTypes = {
  boxOpen: PropTypes.array,
  article: PropTypes.object,
};
