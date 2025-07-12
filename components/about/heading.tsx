import { subtitle, title } from "../primitives";

export const Heading = () => {
  return (
    <div>
      <span className={title()}>Andres Bonilla</span>
      <span className={subtitle()}>Full Stack Developer</span>
    </div>
  );
};
