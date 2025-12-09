import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "",
      title: "",
      subtitle: "TechNova Global Solutions",
      description:"",
            icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
