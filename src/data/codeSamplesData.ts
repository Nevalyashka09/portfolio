import video from "../images/videos/sampleVideoTest.mov";
import starRatingVideo from "../images/videos/starRating.mov";

export interface CodeSample {
  name: string;
  description: string;
  video: string;
  codeText: string;
}

export const codeSamples: CodeSample[] = [
  {
    name: "Star Rating",
    description:
      "This simple feature allows users to provide quick feedback with just a click.",
    video: starRatingVideo,
    codeText: `import React, { useState } from "react";

const getResponseMessage = (rating: number): string => {
  switch (rating) {
    case 5:
      return "Thank you for the 5 stars! We're thrilled you had an amazing experience!";
    case 4:
      return "Thanks for the 4 stars! We’re so glad you enjoyed your time!";
    case 3:
      return "You rated us 3 stars! Not bad, but we aim to improve! ";
    case 2:
      return "You rated us 2 stars. Ouch, we need to do better!";
    case 1:
      return "You rated us 1 star. Oh no! We’ll work hard to make it right!";
    default:
      return "";
  }
};

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHover(value);
  };

  const handleMouseLeave = (): void => {
    setHover(0);
  };

  const styles = {
    text: {
      fontSize: "1.1rem",
      fontFamily: "istokWeb",
    },
    starsRatingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      gap: "1.5rem",
      margin: "10rem",
    },
    textContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column" as const,
      gap: "0.5rem",
    },
    starContainer: {
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.starsRatingContainer}>
      <div style={styles.textContainer}>
        <p style={styles.text}>Was it amazing or just alright?</p>
        <p style={styles.text}>Rate us!</p>
      </div>
      <div style={styles.starContainer}>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              style={{
                fontSize: "2rem",
                color: starValue <= (hover || rating) ? "#FAE843" : "#D9D9D9",
              }}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </span>
          );
        })}
      </div>
      <p style={styles.text}>{getResponseMessage(rating)}</p>
    </div>
  );
};
export default StarRating;
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

const CodeSamples = () => {
  return (
    <div>
      <LightBlueRectangularHeader
        text="My Code Samples"
        font="istokWeb"
        fontSize="2.5rem"
      />
      <div className="aboutCodeSamplesContainer">
        <p className="p-istok">
          Welcome to my personal React component library! Click on any card to
          enlarge it, view the code, or download the complete React component
          along with its styles.
        </p>
      </div>
      <div className="cardsContainer">
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
        />
      </div>
    </div>
  );
};
export default CodeSamples;
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

const CodeSamples = () => {
  return (
    <div>
      <LightBlueRectangularHeader
        text="My Code Samples"
        font="istokWeb"
        fontSize="2.5rem"
      />
      <div className="aboutCodeSamplesContainer">
        <p className="p-istok">
          Welcome to my personal React component library! Click on any card to
          enlarge it, view the code, or download the complete React component
          along with its styles.
        </p>
      </div>
      <div className="cardsContainer">
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
        />
      </div>
    </div>
  );
};

export default CodeSamples;
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

const CodeSamples = () => {
  return (
    <div>
      <LightBlueRectangularHeader
        text="My Code Samples"
        font="istokWeb"
        fontSize="2.5rem"
      />
      <div className="aboutCodeSamplesContainer">
        <p className="p-istok">
          Welcome to my personal React component library! Click on any card to
          enlarge it, view the code, or download the complete React component
          along with its styles.
        </p>
      </div>
      <div className="cardsContainer">
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
        />
      </div>
    </div>
  );
};

export default CodeSamples;
`,
  },
  {
    name: "Slider",
    description: "Simple and easy to use slider",
    video: video,
    codeText: `export default CodeSamples; import React from "react";
import "../styles/codeSamples.scss";
import LightBlueRectangularHeader from "../portfolioComponents/LightBlueRectangularHeader";
import SampleCard from "../portfolioComponents/SampleCard";
import video from "../images/videos/sampleVideoTest.mov";

const CodeSamples = () => {
  return (
    <div>
      <LightBlueRectangularHeader
        text="My Code Samples"
        font="istokWeb"
        fontSize="2.5rem"
      />
      <div className="aboutCodeSamplesContainer">
        <p className="p-istok">
          Welcome to my personal React component library! Click on any card to
          enlarge it, view the code, or download the complete React component
          along with its styles.
        </p>
      </div>
      <div className="cardsContainer">
        <SampleCard
          sampleName="Slider"
          sampleDescription="Simple and easy to use slider"
          video={video}
        />
      </div>
    </div>
  );
};

export default CodeSamples;
`,
  },
];
