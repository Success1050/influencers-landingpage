"use client";

import React, { useState } from "react";

const Overview = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="prose max-w-none space-y-4 text-gray-700 text-sm sm:text-base">
      <p>
        Tracy Darrell (Trace) Adkins is an American country music artist, born
        January 13, 1962, in Springhill, Louisiana. His musical interest came at
        an early age, when his father taught him to play the guitar.
      </p>

      <p>
        In high school, he joined a gospel music group called the New
        Commitments. He was also a member of Future Farmers of America (FFA).
        Later, Adkins went on to study petroleum technology at Louisiana Tech
        University, where he also played football.
      </p>

      <p>
        After graduation, he took up work at an oil rig. He lost the pinky
        finger on his left hand in an accident, and asked doctors to reattach
        the finger at an angle so that he could continue to play guitar.
      </p>

      {showMore && (
        <>
          <p>
            After working on the oil rigs for a few years, Adkins embarked on
            what he calls his "true musical education" – playing one honky-tonk
            after another. While singing at Tillie's & Lucy's Pub in Nashville,
            Adkins was spotted by a Capitol Records executive and was signed to
            the label.
          </p>
        </>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-600 hover:underline font-semibold"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Overview;
