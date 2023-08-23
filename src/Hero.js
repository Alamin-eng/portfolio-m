import { TypeAnimation } from "react-type-animation";



const Hero = () => {
  return (
    <div className="Hero">
      <TypeAnimation
        preRenderFirstString={true}
        
        sequence={[
          "Hi, I am",
          1000,
          "Hi, I am Mohammad Alamin", // initially rendered starting point
          1000,
          "Hi, I am a Fullstack developer based in London",
          1000,
        ]}
        speed={15}
        style={{ fontSize: "2em"}}
        repeat={Infinity}
      />
    </div>
  );
};
export default Hero;
