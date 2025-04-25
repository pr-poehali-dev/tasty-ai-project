
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil, Sparkles, Clock, Upload } from "lucide-react";

const Create = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-tasty-bg/30 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-tasty-dark mb-2">Создать новый тест</h1>
            <p className="text-muted-foreground">Заполните детали теста, и наш ИИ поможет вам создать качественные вопросы</p>
          </div>
          
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>Основная информация</CardTitle>
              <CardDescription>
                Укажите название, описание и другие параметры вашего теста
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название теста</Label>
                <Input 
                  id="title" 
                  placeholder="Введите название теста"
                  className="transition-all focus-within:ring-2 focus-within:ring-tasty/60"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Описание</Label>
                <Textarea 
                  id="description" 
                  placeholder="Опишите, о чем ваш тест и что он проверяет"
                  className="min-h-[120px] transition-all focus-within:ring-2 focus-within:ring-tasty/60"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Программирование</SelectItem>
                      <SelectItem value="math">Математика</SelectItem>
                      <SelectItem value="science">Наука</SelectItem>
                      <SelectItem value="language">Языки</SelectItem>
                      <SelectItem value="history">История</SelectItem>
                      <SelectItem value="art">Искусство</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Сложность</Label>
                  <Select>
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Выберите сложность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Легкая</SelectItem>
                      <SelectItem value="medium">Средняя</SelectItem>
                      <SelectItem value="hard">Сложная</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Изображение теста</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      Перетащите файл или кликните для загрузки
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <Button variant="outline" className="flex items-center gap-2">
                  <Pencil size={16} />
                  <span>Создать вручную</span>
                </Button>
                <Button className="flex items-center gap-2 bg-tasty hover:bg-tasty-dark">
                  <Sparkles size={16} />
                  <span>Сгенерировать с ИИ</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Сохранить черновик</span>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Генерация теста с помощью ИИ займет около 30 секунд
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Create;
