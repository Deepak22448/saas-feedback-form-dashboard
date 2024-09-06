import { Feature } from "./feature";
import { MaxWidthWrapper } from "./max-width-wrapper";

const features = [
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and services.",
  },
  {
    title: "Customizable",
    description: "Customize Nexx to fit your needs and preferences.",
    icon: "icon-2",
  },
  {
    title: "Analytics",
    description: "Track and analyze feedback to make informed decisions.",
  },
  {
    title: "Secure",
    description: "Your data is safe and secure with Nexx.",
  },
  {
    title: "Scalable",
    description: "Grow your business with Nexx as you scale.",
  },
  {
    title: "Fast Support",
    description: "Get help when you need it with our fast support team.",
  },
];
export const FeaturesSection = () => {
  return (
    <MaxWidthWrapper className="my-10">
      <h2 className="mb-6 text-3xl font-bold text-center">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
