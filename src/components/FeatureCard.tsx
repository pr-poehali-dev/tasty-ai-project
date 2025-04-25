import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-tasty mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-tasty-dark">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
