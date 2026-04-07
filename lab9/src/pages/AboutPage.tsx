import { Card, Badge } from '../components/ui';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card variant="elevated" size="fullWidth">
        <Card.Header
          title="Про застосунок"
          subtitle={
            <div className="flex gap-2 mt-2">
              <Badge variant="primary">React 19</Badge>
              <Badge variant="success">TypeScript</Badge>
              <Badge variant="info">Tailwind CSS</Badge>
            </div>
          }
        />

        <Card.Body padding="spacious">
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                📝 Опис
              </h3>
              <p className="leading-relaxed">
                "Галерея Домашніх Улюбленців" — це сучасний веб-застосунок для управління
                інформацією про ваших домашніх тварин. Застосунок розроблено з використанням
                React 19, TypeScript, Tailwind CSS та Zustand для управління станом.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🛠️ Технології
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">React 19</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Бібліотека для побудови інтерфейсів
                        </p>
                      </div>
                      <Badge variant="soft-primary">Core</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">TypeScript</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Типізація для надійного коду
                        </p>
                      </div>
                      <Badge variant="soft-success">Core</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">Tailwind CSS</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Utility-first CSS framework
                        </p>
                      </div>
                      <Badge variant="soft-info">Styles</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">Zustand</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Управління станом застосунку
                        </p>
                      </div>
                      <Badge variant="soft-warning">State</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">React Router</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Маршрутизація та навігація
                        </p>
                      </div>
                      <Badge variant="soft-primary">Routing</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card variant="flat" size="fullWidth">
                  <Card.Body padding="compact">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-300">Vite</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Швидкий build tool
                        </p>
                      </div>
                      <Badge variant="soft-success">Build</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ✨ Функціональність
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'Додавання нових улюбленців через форму', status: 'success' },
                  { text: 'Перегляд детальної інформації про кожного улюбленця', status: 'success' },
                  { text: 'Фільтрація за типом тварини та статусом', status: 'success' },
                  { text: 'Позначення улюблених тварин', status: 'success' },
                  { text: 'Відстеження статусу вакцинації', status: 'success' },
                  { text: 'Тимчасове видалення з можливістю відновлення', status: 'success' },
                  { text: 'Перегляд випадкових порід собак через Dog CEO API', status: 'success' },
                  { text: 'Темна/світла тема інтерфейсу', status: 'success' },
                  { text: 'Збереження даних у localStorage', status: 'success' },
                  { text: 'Адаптивний дизайн для мобільних пристроїв', status: 'success' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge variant="success" size="sm">✓</Badge>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                💻 Розробка
              </h3>
              <p className="leading-relaxed">
                Застосунок створено як частину практичних робіт з вивчення сучасних
                веб-технологій. Код організовано за компонентним підходом з розділенням
                логіки, UI та стану. Використовується функціональний підхід з React Hooks.
              </p>
            </section>

            <Card variant="elevated" size="fullWidth" className="bg-gradient-to-r from-blue-500 to-purple-600">
              <Card.Body>
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">
                      Лабораторна робота №10
                    </h3>
                    <Badge variant="warning">Нове</Badge>
                  </div>
                  <p className="mb-3">
                    Цей застосунок демонструє використання CSS Modules, дизайн-токенів
                    та універсальних UI компонентів для створення переконливої та масштабованої
                    бібліотеки компонентів.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outlined-secondary" size="sm">CSS Modules</Badge>
                    <Badge variant="outlined-secondary" size="sm">Design Tokens</Badge>
                    <Badge variant="outlined-secondary" size="sm">UI Components</Badge>
                    <Badge variant="outlined-secondary" size="sm">Context API</Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
