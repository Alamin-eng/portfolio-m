import { TypeAnimation } from "react-type-animation";
import react, { useState } from "react";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import {BsBoxArrowInRight} from "react-icons/bs"
const Hero = () => {
  const [textColor, setTextColor] = useState("deepink");
  return (
    <div className="Hero">
      <div
        className="Hero-autoTexts"
        style={{
          color: textColor,
        }}
      >
        <TypeAnimation
          sequence={[
            "Hi, I am",
            800,
            () => setTextColor("aqua"),
            "Hi, I am Mohammad Alamin",
            800,
            () => setTextColor("orange"),
            "Hi, I am a Fullstack developer based in London",
            1000,
            () => setTextColor("white"),
            "",
          ]}
          speed={45}
          style={{ fontSize: "2em", padding: "10%" }}
          repeat={Infinity}
        />
      </div>
      <div className="Hero-rightSection">
        <div>
          <div className="welcome">Welcome to my Portfolio</div>
          <p
            style={{
              color: "yellow",
              fontSize: "1.4rem",
              display: "flex",
              alignItems: "center",
              gap:".5rem"
            }}
          >
            Let's connect <BsBoxArrowInRight />{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            width: "100%",
            justifyContent: "start",
            alignItems: "start",
            gap: "2rem",
          }}
        >
          <div>
            <button
              style={{
                backgroundColor:"purple",
                color: "white",
                fontSize: "1rem",
                padding:"10%",
                display: "flex",
                fontWeight:"bold",
                justifyContent:"start",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <RiPagesLine />
              RESUME
            </button>
          </div>

          <div style={{ display: "flex", gap: "2rem", marginRight: "2rem" }}>
            <FaGithub style={{ color: "white", fontSize: "1.4em" }} />
            <FaLinkedin style={{ color: "skyBlue", fontSize: "1.4em" }} />
            <FaMailBulk style={{ color: "green", fontSize: "1.4em" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
