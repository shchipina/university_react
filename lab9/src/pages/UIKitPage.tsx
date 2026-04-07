import { useState } from 'react';
import { Button, Card, Input, Badge, Modal } from '../components/ui';

export default function UIKitPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UI Kit - Бібліотека компонентів
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Демонстрація всіх UI компонентів з CSS Modules
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Buttons
        </h2>

        <Card className="mb-6">
          <Card.Header title="Варіанти кнопок" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Розміри кнопок" />
          <Card.Body>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Стани кнопок" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button loading>Loading...</Button>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card variant="default">
            <Card.Header title="Default Card" subtitle="З тінню" />
            <Card.Body>
              Базова картка з легкою тінню та рамкою
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="secondary">Скасувати</Button>
              <Button size="sm">Зберегти</Button>
            </Card.Footer>
          </Card>

          <Card variant="elevated">
            <Card.Header title="Elevated Card" subtitle="Більша тінь" />
            <Card.Body>
              Картка з підвищеною тінню для акценту
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Дія</Button>
            </Card.Footer>
          </Card>

          <Card variant="outlined">
            <Card.Header title="Outlined Card" subtitle="З рамкою" />
            <Card.Body>
              Картка з рамкою без тіні
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="outline">Дія</Button>
            </Card.Footer>
          </Card>
        </div>

        <Card interactive onClick={() => alert('Картка натиснута!')}>
          <Card.Header title="Interactive Card" subtitle="Клікабельна" />
          <Card.Body>
            Ця картка інтерактивна - натисніть на неї!
          </Card.Body>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Inputs
        </h2>

        <Card className="mb-6">
          <Card.Header title="Базові поля вводу" />
          <Card.Body>
            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                helperText="Введіть вашу електронну адресу"
              />

              <Input
                label="Пароль"
                type="password"
                placeholder="••••••••"
                required
              />

              <Input
                label="З помилкою"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                error="Це поле обов'язкове"
              />

              <Input
                label="Успішно"
                value="success@example.com"
                success="Email валідний"
              />

              <Input
                label="Заблоковане поле"
                value="Не можна редагувати"
                disabled
              />
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Розміри полів" />
          <Card.Body>
            <div className="space-y-4">
              <Input size="sm" placeholder="Small input" />
              <Input size="md" placeholder="Medium input" />
              <Input size="lg" placeholder="Large input" />
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title="З іконками" />
          <Card.Body>
            <div className="space-y-4">
              <Input
                placeholder="Пошук..."
                iconLeft={<span>🔍</span>}
              />
              <Input
                type="password"
                placeholder="Пароль"
                iconRight={<span>👁️</span>}
              />
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Badges
        </h2>

        <Card className="mb-6">
          <Card.Header title="Кольорові варіанти" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Outlined варіанти" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outlined-primary">Outlined Primary</Badge>
              <Badge variant="outlined-success">Outlined Success</Badge>
              <Badge variant="outlined-danger">Outlined Danger</Badge>
              <Badge variant="outlined-warning">Outlined Warning</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Soft варіанти" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Badge variant="soft-primary">Soft Primary</Badge>
              <Badge variant="soft-success">Soft Success</Badge>
              <Badge variant="soft-danger">Soft Danger</Badge>
              <Badge variant="soft-warning">Soft Warning</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6">
          <Card.Header title="Розміри" />
          <Card.Body>
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title="Спеціальні варіанти" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Badge dot>З крапкою</Badge>
              <Badge icon={<span>⭐</span>}>З іконкою</Badge>
              <Badge variant="danger" onRemove={() => alert('Видалено!')}>
                Removable
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Modals
        </h2>

        <Card>
          <Card.Header title="Модальні вікна" />
          <Card.Body>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setModalOpen(true)}>
                Відкрити звичайне модальне вікно
              </Button>
              <Button variant="danger" onClick={() => setConfirmModalOpen(true)}>
                Відкрити модальне підтвердження
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="md">
          <Modal.Header title="Звичайне модальне вікно" />
          <Modal.Body>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Це приклад звичайного модального вікна з текстовим контентом.
            </p>
            <Input
              label="Введіть щось"
              placeholder="Текст..."
              helperText="Поля вводу працюють усередині модального вікна"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Скасувати
            </Button>
            <Button onClick={() => setModalOpen(false)}>
              Зберегти
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          open={confirmModalOpen}
          onClose={() => setConfirmModalOpen(false)}
          size="sm"
          variant="danger"
        >
          <Modal.Header title="Підтвердження видалення" />
          <Modal.Body>
            <p className="text-gray-700 dark:text-gray-300">
              Ви впевнені, що хочете видалити цей елемент? Цю дію неможливо скасувати.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setConfirmModalOpen(false)}>
              Скасувати
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                alert('Видалено!');
                setConfirmModalOpen(false);
              }}
            >
              Видалити
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Композитні приклади
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevated">
            <Card.Header
              title="Профіль користувача"
              subtitle={
                <div className="flex gap-2 mt-2">
                  <Badge variant="success" size="sm">Активний</Badge>
                  <Badge variant="soft-primary" size="sm">Pro</Badge>
                </div>
              }
            />
            <Card.Body>
              <div className="space-y-3">
                <Input
                  label="Ім'я"
                  value="Іван Петренко"
                  size="sm"
                />
                <Input
                  label="Email"
                  type="email"
                  value="ivan@example.com"
                  size="sm"
                />
              </div>
            </Card.Body>
            <Card.Footer align="spaceBetween">
              <Button variant="ghost" size="sm">Скинути</Button>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Скасувати</Button>
                <Button size="sm">Зберегти</Button>
              </div>
            </Card.Footer>
          </Card>

          <Card variant="outlined">
            <Card.Header title="Статистика" />
            <Card.Body>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Перегляди</span>
                  <Badge variant="soft-primary">1,234</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Лайки</span>
                  <Badge variant="soft-success">567</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Коментарі</span>
                  <Badge variant="soft-info">89</Badge>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline" size="sm" fullWidth>
                Детальна статистика
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
}
