import { Button } from "@chakra-ui/react";
import membershipImg from "../assets/images/get-involved/showpass-membership-mobile.jpg";
import SignUpButton from "../components/SignUpButton";

function GetInvolved() {
  return (
    <div className="flex flex-col gap-8 lg:gap-20 m-2 lg:m-8">
      <section
        id="member-signup"
        className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:gap-12 text-sm/loose lg:text-lg/loose"
      >
        <div className="flex flex-col gap-4 lg:gap-8 items-start">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Become a <span className="text-red">2024/25 Member!</span>
          </h1>
          <ul className="list-disc">
            <p>
              To officially become a member of our club, please purchase a
              membership:
            </p>
            <li className="font-bold">Student Membership ($20)</li>
            <li>Available to currently enrolled UofC students.</li>
            <li>
              Please include your student number in the allocated section when
              purchasing.
            </li>
          </ul>
          <ul className="list-disc">
            <p className="font-bold">Membership Benefits</p>
            <li>
              Free access to on-campus CSS events and special ticket prices to
              off-campus events.
            </li>
            <li>Access to early-bird event tickets.</li>
            <li>Exclusive discounts with our sponsors.</li>
            <li>Promotional discounts with other club partners.</li>
          </ul>
          <ul className=" list-disc">
            <p className="font-bold">Additional Information</p>
            <li>
              Off-campus events are held less frequently and will incur
              additional charges to cover venue rental fees.
            </li>
          </ul>
          <p>
            For any questions regarding memberships, please reach out to us at
            css.uofcalgary@gmail.com
          </p>
          <p>Thank you for choosing to become a member of our amazing club!</p>
          <SignUpButton
            link="https://www.showpass.com/m/chinese-students-society-24-25-membership/"
            title="PURCHASE MEMBERSHIP"
          />
        </div>
        <a href="https://www.showpass.com/m/chinese-students-society-24-25-membership/">
          <img
            src={membershipImg}
            alt="Screenshot of membership google form"
            className="w-[32rem] object-contain"
          />
        </a>
      </section>
    </div>
  );
}

export default GetInvolved;
