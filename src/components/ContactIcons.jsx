import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ContactIcons() {
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

  return <div className="flex gap-8">{contactIcons}</div>;
}
