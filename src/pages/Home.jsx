import img from "../assets/home.jpg";
import ContactIcons from "../components/ContactIcons";
import SignUpButton from "../components/SignUpButton";
import { Divider } from "@chakra-ui/react";

function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row flex-auto justify-center items-center gap-6 lg:gap-12 border-gray-500 border-2 p-4 lg:p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl lg:text-7xl font-semibold">
          Chinese <span className="text-red">Students&apos;</span> Society
        </h1>

        <p className="text-base lg:text-xl">
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
