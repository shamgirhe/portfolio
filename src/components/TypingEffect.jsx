// import React, { useState, useEffect } from "react";

// const TypingEffect = () => {
//   let skil = [
//     "Full Stack Developer",
//     "MERN Stack Developer",
//     "Software Developer",
//     "Open Source Contributor",
//     "Freelancer",
//   ];

//   let styleText = {
//     color: 'pink' 
//   }
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [arrIndex, setArrIndex] = useState(0);
//   const [flag, setFlag] = useState(false);
//   let text = skil[arrIndex];

//   useEffect(() => {
//     if (arrIndex === skil.length - 1) {
//       setArrIndex(0);
//     }
//     text = skil[arrIndex];
//     if (index !== text.length + 1) {
//       const intervalId = setInterval(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex((prev) => prev + 1);
//         setFlag(!flag);
//       }, 200);

//       return () => clearInterval(intervalId);
//     } else {
//       setArrIndex((prev) => prev + 1);
//       setDisplayedText("");
//       setIndex(0);
//     }
//   }, [arrIndex, index, text]);

//   return (
//     <span style={styleText}>
//       {displayedText}
//       {flag && " |"}
//     </span>
//   );
// };

// export default TypingEffect;


import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const skills = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Developer",
    "Open Source Contributor",
    "Freelancer",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const intervalId = setInterval(() => {
      if (index < currentSkill.length) {
        setDisplayedText((prevText) => prevText + currentSkill.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
        setFlag(!flag);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
          setSkillIndex((prevSkillIndex) =>
            prevSkillIndex === skills.length - 1 ? 0 : prevSkillIndex + 1
          );
        }, 1000); // Delay before switching to the next skill
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [index, skillIndex, skills]);

  return <><span style={{ color: 'pink' }}>{displayedText}</span>{flag && "|"}
  </>
};

export default TypingEffect;
