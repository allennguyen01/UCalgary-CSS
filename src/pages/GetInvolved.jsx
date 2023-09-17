import SignUpButton from "../components/SignUpButton";
import membershipImg from "../assets/images/get-involved/membership-google-form.jpg";
import execImg from "../assets/images/get-involved/exec-recruitment-post.jpg";

function GetInvolved() {
  return (
    <div className="flex flex-col gap-8 lg:gap-20 m-2 lg:m-8">
      <section
        id="member-signup"
        className="flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        <div className="flex flex-col gap-4 lg:gap-8 items-start">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Become a <span className="text-red">Member!</span>
          </h1>
          <article className="text-sm/loose lg:text-lg/loose">
            <p>
              Sign up for our mailing list if you want to hear exclusive
              information about our club events, opportunities to volunteer, and
              executive applications! A membership is not needed to be on the
              mailing list.
            </p>
            <br />
            <p>
              <span className="font-bold">
                You can also purchase a membership with CSS for $10.
              </span>
              <br />
              The membership gives you the following benefits:
              <ol className="list-decimal ml-6">
                <li>Last for both semesters (Sept 2023 - April 2024)</li>
                <li>
                  FREE access to all of our events, bypass the entry fee ($3-5)
                  for each event
                </li>
                <li>Exclusive discounts to local Calgary businesses</li>
              </ol>
            </p>
            <br />
            <p>
              <span className="font-bold">How to buy a membership?</span>
              <ul className="list-disc ml-2">
                <li>
                  Payment by cash:
                  <ul className="list-decimal ml-4">
                    <li>You can pay by cash at any in-person events</li>
                  </ul>
                </li>
                <li>
                  Payment by E-transfer:
                  <ol className="list-decimal ml-4">
                    <li>
                      Pay $10 to the following email: css.uofcalgary@gmail.com
                    </li>
                    <li>
                      Copy and paste the following template into the comment
                      section of the e-transfer:
                      <div className="ml-2 italic">
                        <p>&quot;Full Name&quot;</p>
                        <p>&quot;For CSS membership purchase&quot;</p>
                      </div>
                    </li>
                  </ol>
                  <p>
                    Note: *You may be required to put a security question and
                    answer to send the e-transfer. You can put whatever you
                    want. If we have any issues receiving your e-transfer, we
                    will contact you directly.*
                  </p>
                </li>
              </ul>
            </p>
          </article>
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
      <section
        id="exec-signup"
        className="flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        <div className="flex flex-col gap-4 lg:gap-8 items-start">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Become an <span className="text-red">Exec!</span>
          </h1>
          <p className="text-sm/loose lg:text-lg/loose">
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
