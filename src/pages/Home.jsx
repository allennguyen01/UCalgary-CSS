import img from "../assets/home.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Home() {
  const iconSize = 30;

  const contactLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/css.ucalgary/",
      icon: <BsInstagram size={iconSize} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/uofccss",
      icon: <BsFacebook size={iconSize} />,
    },
    {
      name: "Discord",
      href: "https://discord.gg/n3amXwbAaW",
      icon: <BsDiscord size={iconSize} />,
    },
    {
      name: "Email",
      href: "mailto:css.uofcalgary@gmail.com",
      icon: <FiMail size={iconSize} />,
    },
  ];

  const contactIcons = contactLinks.map((contact) => (
    <a
      key={contact.name}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {contact.icon}
    </a>
  ));

  return (
    <div className="flex flex-auto justify-center items-center gap-10 border-gray-500 border-2 mt-4 m-12 p-8 rounded-lg font-agrandir">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-semibold font-agrandir">
          Chinese Students&apos; Society
        </h1>

        <p className="text-xl">
          Dedicated to promoting Chinese culture since 1968
        </p>

        <a
          href="https://forms.gle/TEfPJJGGk8kFCDmC8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-12 py-2 text-white font-semibold rounded-lg my-4"
        >
          JOIN US
        </a>

        <svg height="10" width="60%" className="m-4">
          <line x1="100%" stroke="black" strokeWidth="3" />
        </svg>

        <p className="font-semibold">FOLLOW US ON SOCIAL MEDIA</p>

        <div className="flex gap-8">{contactIcons}</div>
      </div>
      <img src={img} alt="" className="h-96 rounded-lg" />
    </div>
  );
}

export default Home;
