
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import TestCard, { TestCardProps } from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCw } from "lucide-react";

// Sample test data
const sampleTests: TestCardProps[] = [
  {
    id: "1",
    title: "Основы программирования на Python",
    description: "Базовый тест для проверки знаний основ языка Python, включающий вопросы о синтаксисе, типах данных и основных алгоритмах.",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Программирование",
    difficulty: "easy",
    questionCount: 15,
  },
  {
    id: "2",
    title: "Искусственный интеллект и машинное обучение",
    description: "Тест по основам ИИ и машинного обучения, включая нейронные сети, алгоритмы кластеризации и классификации.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Технологии",
    difficulty: "medium",
    questionCount: 20,
  },
  {
    id: "3",
    title: "Продвинутые алгоритмы и структуры данных",
    description: "Сложный тест по алгоритмам сортировки, поиска и оптимизации, а также по продвинутым структурам данных.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Алгоритмы",
    difficulty: "hard",
    questionCount: 25,
  },
  {
    id: "4",
    title: "Основы веб-разработки",
    description: "HTML, CSS и JavaScript для начинающих. Тест включает вопросы по верстке, стилизации и базовой интерактивности.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Веб-разработка",
    difficulty: "easy",
    questionCount: 18,
  },
  {
    id: "5",
    title: "Базы данных и SQL",
    description: "Тест по реляционным базам данных, включающий запросы SQL и проектирование схем данных.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Базы данных",
    difficulty: "medium",
    questionCount: 20,
  },
  {
    id: "6",
    title: "Основы математики для ИИ",
    description: "Линейная алгебра, статистика и теория вероятностей, необходимые для понимания алгоритмов ИИ.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Математика",
    difficulty: "medium",
    questionCount: 22,
  },
];

const Tests = () => {
  const [tests, setTests] = useState<TestCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading tests from API
  useEffect(() => {
    const loadTests = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setTests(sampleTests);
      setLoading(false);
    };

    loadTests();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-tasty-bg/30 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-tasty-dark mb-2">Готовые тесты</h1>
            <p className="text-muted-foreground">Выберите тест из нашей коллекции и проверьте свои знания</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Фильтры</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" onClick={() => setLoading(true)}>
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              <span>Обновить</span>
            </Button>
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg bg-muted animate-pulse h-[320px]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, index) => (
              <TestCard 
                key={test.id} 
                {...test} 
                delay={index * 100}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Tests;
