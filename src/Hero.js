import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "Hi,",
          1000,
          "I am Mohammad Alamin", // initially rendered starting point
          1000,
          "A Fullstack developer",
          1000,
          "Based in London",
          1000,
        ]}
        speed={15}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
};
export default Hero;
