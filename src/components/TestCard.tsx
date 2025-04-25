
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface TestCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
  questionCount?: number;
  createdBy?: string;
  delay?: number;
}

const TestCard = ({ 
  id, 
  title, 
  description, 
  image, 
  category, 
  difficulty,
  questionCount = 10,
  createdBy = "TastyAI",
  delay = 0
}: TestCardProps) => {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  };

  return (
    <Link 
      to={`/tests/${id}`}
      className="block no-underline"
    >
      <Card 
        className="h-full overflow-hidden card-hover transform transition-all duration-500 animate-scale-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold text-tasty-dark">{title}</CardTitle>
            {difficulty && (
              <Badge className={difficultyColors[difficulty] || ""}>
                {difficulty === "easy" ? "Легкий" : difficulty === "medium" ? "Средний" : "Сложный"}
              </Badge>
            )}
          </div>
          {category && (
            <Badge variant="outline" className="w-fit">
              {category}
            </Badge>
          )}
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <span>{questionCount} вопросов</span>
          <span>Автор: {createdBy}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TestCard;
