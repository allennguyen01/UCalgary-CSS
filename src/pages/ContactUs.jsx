import ContactIcons from "../components/ContactIcons";
import logo from "../assets/logo.png";

function ContactUs() {
  return (
    <section className="flex flex-col flex-auto m-8 justify-between">
      <h1 className="text-7xl font-bold mb-8">
        <span className="text-red">Contact</span> Us
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-6 text-xl">
          <p className="font-bold">LOCATION</p>
          <p>University of Calgary, 2500 University Dr NW, Calgary</p>
          <p className="font-bold">EMAIL</p>
          <p>css.uofcalgary@gmail.com</p>
          <p className="font-bold">SOCIAL</p>
          <ContactIcons />
        </div>
        <img src={logo} alt="CSS logo" className="h-64" />
      </div>
    </section>
  );
}

export default ContactUs;
