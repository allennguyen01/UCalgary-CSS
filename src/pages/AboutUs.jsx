import img from "../assets/who-we-are.jpg";
import Quote from "../components/Quote";

function AboutUs() {
  return (
    <div className="flex flex-auto flex-col p-20 gap-12">
      <div id="who-we-are" className="flex flex-col items-center gap-8">
        <div className="flex align-center justify-center gap-8">
          <div>
            <h1 className="text-7xl font-semibold">Who We Are</h1>
            <p className="text-2xl my-8 leading-relaxed">
              Established in 1968, the Chinese Students&apos; Society (CSS) is
              the pioneering and largest Chinese student club at the University
              of Calgary. As a non-profit organization, CSS is devoted to
              promoting Chinese culture while fostering multiculturalism within
              the club.
              <br /> <br />
              We provide a welcoming environment for students to forge new
              friendships and broaden their social network through a variety of
              events, including our annual meet and greet, volunteer activities,
              dances, inter-club sports events, and year-end banquet.
            </p>
          </div>
          <img
            src={img}
            alt="CSS team photo"
            className="h-[32rem] rounded-full"
          />
        </div>
        <p className="text-xl text-center">
          We would like to acknowledge the traditional territories of the people
          of the Treaty 7 region in Southern Alberta. <br />
          The City of Calgary is also home to Métis Nation of Alberta, Region 3.
        </p>
      </div>
      <div id="our-mission">
        <h1 className="text-7xl font-semibold my-10">Our Mission</h1>
        <p className="text-2xl leading-relaxed">
          <strong>CONNECT: </strong>CSS celebrates Chinese culture through
          events and fosters relationships with Calgary&apos;s Chinese community
          and other cultural clubs on campus. We actively seek new
          collaborations. <br />
          <br />
          <strong>SUPPORT: </strong> CSS enhances the university experience by
          providing opportunities to meet, make friends, and build a social
          network through events like the Meet and Greet, Sports Tournaments,
          Dances, Volunteer Opportunities, and the Year End Gala. <br />
          <br />
          <strong>SUPPORT: </strong>CSS engages in community service, welcomes
          all interested in Chinese culture, and offers sponsor discounts at
          select on-campus and off-campus businesses for members.
        </p>
      </div>
      <div id="quotes" className="flex flex-col gap-8">
        <h1 className="flex text-7xl font-semibold my-8">Team Testimonials</h1>
        <div className="flex flex-col items-center">
          <Quote
            quote="By featuring positive feedback from others, your potential clients won’t have to take your word for it, instead they can hear and learn from others’ experiences."
            people="Lucy Li and Cecilia Xu"
            position="CO-PRESIDENTS"
            imgSrc={img}
          />
          <Quote
            quote="By featuring positive feedback from others, your potential clients won’t have to take your word for it, instead they can hear and learn from others’ experiences."
            people="Joyce Ho and Kerry Guo"
            position="VP OF FINANCE"
            imgSrc={img}
            isReversed={true}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
