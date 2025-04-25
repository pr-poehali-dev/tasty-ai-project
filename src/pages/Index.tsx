import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Flame, Bot, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-tasty-bg to-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 pb-20 px-6 lg:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tasty-dark animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Интерактивные тесты с <span className="text-tasty">искусственным интеллектом</span>
            </h1>
            <p 
              className="text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-muted-foreground animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              Откройте новый уровень тестирования с TastyAI — платформой, где ИИ создает персонализированные тесты и помогает в обучении на основе ваших результатов.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <Link to="/auth" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-tasty">
                  Войти
                </button>
              </Link>
              <Link to="/tests" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-outline">
                  Готовые тесты
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-tasty-dark">
              Почему <span className="text-tasty">TastyAI</span> лучший выбор?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Brain size={32} />}
                title="Умные тесты"
                description="Наш ИИ анализирует ваши ответы и адаптирует сложность, чтобы оптимизировать обучение."
                delay={100}
              />
              <FeatureCard 
                icon={<Flame size={32} />}
                title="Персонализация"
                description="Тесты создаются с учетом ваших интересов, уровня знаний и целей обучения."
                delay={200}
              />
              <FeatureCard 
                icon={<Bot size={32} />}
                title="ИИ-ассистент"
                description="Получайте подсказки и объяснения от ИИ во время прохождения теста."
                delay={300}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
