import SignUpButton from "../components/SignUpButton";
import membershipImg from "../assets/images/get-involved/membership-google-form.jpg";
import execImg from "../assets/images/get-involved/exec-recruitment-post.jpg";

function GetInvolved() {
  return (
    <div className="flex flex-col gap-20 m-12">
      <section id="member-signup" className="flex gap-12">
        <div className="flex flex-col gap-8 items-start">
          <h1 className="text-6xl font-bold">Become a Member!</h1>
          <p className="leading-loose text-lg">
            Sign up for our mailing list if you want to hear exclusive
            information about our club events, opportunities to volunteer, and
            executive applications! <br /> <br />
            You can also purchase a membership with CSS for $____. <br />
            The membership gives you FREE access to all of our events over the
            23/24 academic year. This means you can bypass the entry fee ($3-5)
            for each event. You can purchase our membership at any point during
            the year.
          </p>
          <SignUpButton
            link="https://forms.gle/3248imb2hsHckP3KA"
            title="SIGN UP"
          />
        </div>
        <img
          src={membershipImg}
          alt="Screenshot of membership google form"
          className="w-[32rem] object-contain"
        />
      </section>
      <section id="exec-signup" className="flex gap-12">
        <div className="flex flex-col gap-8 items-start">
          <h1 className="text-6xl font-bold">Become a Exec!</h1>
          <p className="leading-loose text-lg">
            At CSS, we value diversity and inclusivity and encourage individuals
            from all backgrounds to apply. Our focus is not solely on Chinese
            ethnicity or the most impressive resumes and experiences. Instead,
            we seek individuals with a genuine enthusiasm for Chinese culture
            and a strong motivation to promote it to all UCalgary students. Even
            if you have no previous experience as a club executive, this will
            NOT impact our decision to get to know you through the interview
            process. <br />
            <br />
            <strong>Our priority deadline is Aug 1st, 2023. </strong>After that
            applications will still be accepted on a rolling basis until all
            these positions fill up.
          </p>
          <SignUpButton
            link="https://forms.gle/nq3kVm4UHiVKpq2U6"
            title="APPLY NOW"
          />
        </div>
        <img
          src={execImg}
          alt="Screenshot of exec application post"
          className="w-[32rem] object-contain"
        />
      </section>
    </div>
  );
}

export default GetInvolved;
