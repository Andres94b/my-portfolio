import { Divider } from "@heroui/divider";
import { subtitle } from "../primitives";
import SubSection from "./sub-section";

type params = {
  name: string;
  subSection: string[] | any[];
};

export default function Section({ name, subSection }: params) {
  return (
    <div className="flex flex-col mt-4">
      <span className={subtitle()}>{name}</span>
      <Divider />
      {subSection.map((s, index) => {
        return (
          <SubSection
            key={index}
            institutionName={s.name}
            location={s.location}
            from={s.from}
            to={s.to}
            bullets={s.bullets}
          ></SubSection>
        );
      })}
    </div>
  );
}
