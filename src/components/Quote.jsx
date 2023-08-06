import PropTypes from "prop-types";

export default function Quote({
  quote,
  people,
  position,
  imgSrc,
  isReversed = false,
}) {
  return (
    <div
      className={`flex items-center justify-center gap-32 w-3/4 ${
        isReversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl text-center">&quot;{quote}&quot;</p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">{people}</p>
          <p className="text-lg font-bold text-gray-500">{position}</p>
        </div>
      </div>
      <img src={imgSrc} alt="" className="h-96 rounded-full" />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
  people: PropTypes.string,
  position: PropTypes.string,
  imgSrc: PropTypes.string,
  isReversed: PropTypes.bool,
};
