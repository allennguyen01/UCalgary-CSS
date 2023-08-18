import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ContactIcons() {
  const iconSizes = { sm: 6, lg: 8 };

  const contactLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/css.ucalgary/",
      icon: (
        <BsInstagram
          className={`h-${iconSizes.sm} w-${iconSizes.sm} lg:h-${iconSizes.lg} lg:w-${iconSizes.lg}`}
        />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/uofccss",
      icon: (
        <BsFacebook
          className={`h-${iconSizes.sm} w-${iconSizes.sm} lg:h-${iconSizes.lg} lg:w-${iconSizes.lg}`}
        />
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/n3amXwbAaW",
      icon: (
        <BsDiscord
          className={`h-${iconSizes.sm} w-${iconSizes.sm} lg:h-${iconSizes.lg} lg:w-${iconSizes.lg}`}
        />
      ),
    },
    {
      name: "Email",
      href: "mailto:css.uofcalgary@gmail.com",
      icon: (
        <FiMail
          className={`h-${iconSizes.sm} w-${iconSizes.sm} lg:h-${iconSizes.lg} lg:w-${iconSizes.lg}`}
        />
      ),
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
