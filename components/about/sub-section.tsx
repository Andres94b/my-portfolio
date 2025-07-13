import { subtitle } from "../primitives";

type params = {
  key: number;
  institutionName: string;
  position?: string;
  location?: string;
  from: string;
  to: string;
  description?: string;
  bullets?: string[];
};

export default function SubSection({
  institutionName,
  location,
  from,
  to,
  description,
  bullets,
}: params) {
  return (
    <div className="flex flex-col">
      <span className={subtitle()}>{institutionName}</span>
      <span>{location}</span>
      <p>
        {from} - {to}
      </p>
      <ul className="p-4">
        {bullets?.map((b, index) => (
          <li key={index} className="list-disc">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
