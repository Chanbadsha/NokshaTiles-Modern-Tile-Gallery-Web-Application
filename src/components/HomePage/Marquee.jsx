import Marquee from "react-fast-marquee";
import { FaDiamond, FaRegCircleDot, FaStar } from "react-icons/fa6";

const marqueeTexts = [
  "New Arrivals: Elegant Ceramic & Marble Tiles",
  "Weekly Feature: Modern Geometric Patterns",
  "Discover Timeless Noksha-Inspired Designs",
  "Upgrade Your Space with Premium Tiles",
  "Join the NokshaTiles Design Community",
];

const Marquees = () => {
  return (
    <Marquee autoFill>
      <div className="flex items-center gap-10 bg-[#3B82F6] py-3 px-6">
        {marqueeTexts.map((text, ind) => (
          <div key={ind} className="flex items-center gap-2">
            <FaStar className="text-white/80 text-xs md:text-sm" />

            <p className="text-white text-sm md:text-base font-medium whitespace-nowrap tracking-wide">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Marquees;
