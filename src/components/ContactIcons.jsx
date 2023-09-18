import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ContactIcons() {
  const iconSizes = `h-6 w-6 lg:h-8 lg:w-8`;

  const contactLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ucalgary.css/",
      icon: <BsInstagram className={iconSizes} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/uofccss",
      icon: <BsFacebook className={iconSizes} />,
    },
    {
      name: "Discord",
      href: "https://discord.gg/n3amXwbAaW",
      icon: <BsDiscord className={iconSizes} />,
    },
    {
      name: "Email",
      href: "mailto:css.uofcalgary@gmail.com",
      icon: <FiMail className={iconSizes} />,
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
