import PropTypes from "prop-types";

export default function SignUpButton({ link, title }) {
  return (
    <a
      href={link}
      className="bg-black hover:bg-slate-200 text-xs lg:text-base text-white hover:text-black rounded-lg px-8 py-3 self-center font-bold tracking-wider"
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
