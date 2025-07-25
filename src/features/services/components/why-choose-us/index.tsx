import { BulletPoints } from "../bullet-points";

export const WhyChooseUs = (props: any) => {
  const { heading, points } = props;
  return <BulletPoints heading={heading} points={points} />;
};
