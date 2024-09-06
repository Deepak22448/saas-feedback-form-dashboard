import { FC } from "react";

interface FeatureProps {
  title: string;
  description: string;
}
export const Feature: FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="p-4 border rounded-md shadow-md space-y-3">
      <h4 className="font-semibold">{title}</h4>
      <p>{description}</p>
    </div>
  );
};
