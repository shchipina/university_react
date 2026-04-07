import { Link } from 'react-router-dom';
import { usePetStore } from '../store/usePetStore';
import { Card, Button, Badge } from '../components/ui';

export default function HomePage() {
  const pets = usePetStore((state) => state.pets);

  return (
    <div className="max-w-4xl mx-auto">
      <Card variant="elevated" size="fullWidth">
        <Card.Body padding="spacious">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ласкаво просимо! 🐾
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Управління улюбленцями стало простішим
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <Card variant="outlined" size="fullWidth">
              <Card.Body>
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  📖 Про застосунок
                </h3>
                <p className="leading-relaxed">
                  Цей застосунок допоможе вам зберігати та керувати інформацією про
                  ваших домашніх улюбленців. Додавайте нових тварин, відстежуйте їх
                  вакцинацію, відзначайте фаворитів та переглядайте детальну інформацію
                  про кожного улюбленця.
                </p>
              </Card.Body>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card variant="flat" size="fullWidth">
                <Card.Header title="✨ Основні можливості" />
                <Card.Body padding="compact">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="success" size="sm">✓</Badge>
                      Додавання та редагування улюбленців
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="success" size="sm">✓</Badge>
                      Фільтрація за типом та статусом
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="success" size="sm">✓</Badge>
                      Управління улюбленими
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="success" size="sm">✓</Badge>
                      Відстеження вакцинації
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="success" size="sm">✓</Badge>
                      Тимчасове видалення
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card variant="flat" size="fullWidth">
                <Card.Header title="📊 Статистика" />
                <Card.Body padding="compact">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Всього улюбленців:</span>
                      <Badge variant="primary" size="lg">{pets.length}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Улюблені:</span>
                      <Badge variant="warning" size="lg">
                        ⭐ {pets.filter(p => p.isFavorite).length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Щеплені:</span>
                      <Badge variant="success" size="lg">
                        ✓ {pets.filter(p => p.isVaccinated).length}
                      </Badge>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <Card variant="elevated" size="fullWidth" className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Card.Body>
                <div className="text-white text-center">
                  <p className="text-lg mb-4">
                    Готові почати? Перегляньте своїх улюбленців!
                  </p>
                  <Link to="/pets">
                    <Button variant="secondary" size="lg">
                      Перейти до галереї →
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
