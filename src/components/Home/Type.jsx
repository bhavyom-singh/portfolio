import Typewriter from "typewriter-effect";
export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Full Stack Developer", "Backend Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
