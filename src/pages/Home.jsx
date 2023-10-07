import img from "../assets/home.jpg";
import ContactIcons from "../components/ContactIcons";
import SignUpButton from "../components/SignUpButton";
import { TypeAnimation } from "react-type-animation";
import { Divider } from "@chakra-ui/react";

function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row flex-auto justify-center items-center gap-6 lg:gap-12 border-gray-500 border-2 p-4 lg:p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl lg:text-7xl font-semibold">
          Chinese <span className="text-red">Students&apos;</span> Society
        </h1>

        <TypeAnimation
          sequence={[
            "We are U of C's largest Chinese club",
            1000,
            "We are a student community",
            1000,
            "We are a social organization",
            1000,
            "We are a cultural association",
            1000,
          ]}
          speed={50}
          className="font-semibold text-base lg:text-2xl"
          repeat={Infinity}
        />

        <p className="text-base lg:text-lg">
          Dedicated to promoting Chinese culture since 1968
        </p>

        <SignUpButton
          link="https://forms.gle/TEfPJJGGk8kFCDmC8"
          title="JOIN US"
        />

        <Divider borderColor={"black"} />

        <p className="text-sm lg:text-lg font-semibold">
          FOLLOW US ON SOCIAL MEDIA
        </p>

        <ContactIcons />
      </div>
      <img src={img} alt="" className="max-h-96 rounded-lg" />
    </div>
  );
}

export default Home;
