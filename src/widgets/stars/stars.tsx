import React from "react";
import { FaStar } from "react-icons/fa";

interface StarsProps {
  star: number | undefined;
}

const Stars: React.FC<StarsProps> = ({ star }) => {
  const all_star = [];
  for (let i = 0; i < 5; i++) {
    if (star) {
      if (i < star) {
        all_star.push(<FaStar fill="#DECC16" size={15} />);
      } else {
        all_star.push(<FaStar fill="#B6A58A" size={15} />);
      }
    }
  }

  return (
    <div className="stars">
      {all_star.map((element, i) => {
        return <span key={i}>{element}</span>;
      })}
    </div>
  );
};

export default Stars;
