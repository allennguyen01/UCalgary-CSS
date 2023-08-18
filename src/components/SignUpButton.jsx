import PropTypes from "prop-types";

export default function SignUpButton({ link, title }) {
  return (
    <a
      href={link}
      className="bg-black text-sm lg:text-base text-white rounded-xl px-8 py-2 self-center font-bold tracking-wider"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}

SignUpButton.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
