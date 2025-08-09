# Генератор заклинаний - Клиентское приложение

Клиентское приложение для генератора заклинаний, построенное с использованием FSD архитектуры,
React, TypeScript, Redux Toolkit и модульного SCSS.

## 🏗️ Архитектура

Приложение построено по принципам Feature-Sliced Design (FSD):

```
src/
├── app/           # Конфигурация приложения
│   ├── store/     # Redux store
│   └── styles/    # Глобальные стили
├── shared/        # Переиспользуемый код
│   ├── api/       # API клиент
│   ├── hooks/     # Общие хуки
│   ├── schemas/   # Zod схемы валидации
│   ├── services/  # Бизнес-логика
│   ├── types/     # TypeScript типы
│   ├── ui/        # UI компоненты
│   └── utils/     # Утилиты
├── entities/      # Бизнес-сущности
├── features/      # Функциональные модули
├── widgets/       # Композитные компоненты
└── pages/         # Страницы приложения
```

## 🚀 Технологии

- **React 19** - UI библиотека
- **TypeScript** - Типизация
- **Redux Toolkit** - Управление состоянием
- **React Router** - Маршрутизация
- **Zod** - Валидация данных
- **Axios** - HTTP клиент
- **SCSS Modules** - Стилизация
- **Vite** - Сборщик

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview
```

## 🔧 Основные возможности

### 1. Генерация заклинаний

- Создание уникальных заклинаний из латинских корней
- Валидация комбинаций по правилам
- Настройка параметров генерации

### 2. Управление словами/корнями

- CRUD операции для слов
- Фильтрация по типу, категории, языку
- Поиск по названию и значению

### 3. Управление заклинаниями

- Просмотр всех заклинаний
- Создание и редактирование
- Фильтрация по типу и сложности

### 4. Система правил

- Управление правилами комбинирования
- Валидация комбинаций слов
- Настройка ограничений

## 🎨 UI компоненты

### Button

Многофункциональная кнопка с различными вариантами стилизации:

```tsx
import { Button } from '@/shared/ui';

<Button variant="primary" size="large" loading={isLoading}>
  Сгенерировать заклинание
</Button>;
```

Варианты:

- `variant`: primary, secondary, danger, success
- `size`: small, medium, large
- `loading`: состояние загрузки
- `fullWidth`: на всю ширину

## 🔄 Redux Store

### Слайсы

- `spells` - управление заклинаниями
- `words` - управление словами/корнями
- `spellEffects` - управление эффектами
- `rules` - управление правилами

### Хуки

```tsx
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

const dispatch = useAppDispatch();
const spells = useAppSelector((state) => state.spells.spells);
```

## 📝 Валидация

### Zod схемы

Все формы используют Zod для валидации:

```tsx
import { createSpellSchema } from '@/shared/schemas';
import { useValidation } from '@/shared/hooks';

const validation = useValidation({
  schema: createSpellSchema,
  onValidationSuccess: (data) => {
    // Обработка успешной валидации
  },
});
```

### Хуки валидации

- `useValidation` - базовая валидация
- `useRealtimeValidation` - валидация в реальном времени
- `useFormValidation` - валидация с отправкой формы

## 🌐 API

### Конфигурация

API клиент настроен для работы с сервером на `http://localhost:3000/api`

### Основные эндпоинты

- `/spells` - заклинания
- `/words` - слова/корни
- `/spell-effects` - эффекты заклинаний
- `/rules` - правила комбинирования

## 🎯 Сервисы

### SpellGeneratorService

Основной сервис для генерации заклинаний:

```tsx
import { SpellGeneratorService } from '@/shared/services';

// Генерация случайного заклинания
const spell = await SpellGeneratorService.generateRandomSpell();

// Генерация с параметрами
const customSpell = await SpellGeneratorService.generateCustomSpell({
  includePrefix: true,
  preferredType: 'attack',
  preferredDifficulty: 'intermediate',
});
```

### Другие сервисы

- `SpellsService` - управление заклинаниями
- `WordsService` - управление словами
- `SpellEffectsService` - управление эффектами
- `RulesService` - управление правилами

## 🎨 Стилизация

### CSS переменные

```scss
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #10b981;
  --danger-color: #ef4444;
  // ... другие переменные
}
```

### Утилитарные классы

- `.card` - карточки
- `.grid` - сетка
- `.flex` - flexbox
- `.text-center` - центрирование текста
- `.shadow` - тени

## 🔍 Поиск и фильтрация

Все списки поддерживают:

- Поиск по тексту
- Фильтрацию по различным параметрам
- Сортировку
- Пагинацию

## 📱 Адаптивность

Приложение полностью адаптивно и работает на:

- Десктопах
- Планшетах
- Мобильных устройствах

## 🚀 Развертывание

### Продакшен сборка

```bash
npm run build
```

### Docker (опционально)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Разработка

### Структура коммитов

```
feat: добавлена генерация заклинаний
fix: исправлена валидация форм
docs: обновлена документация
style: улучшен дизайн кнопок
refactor: рефакторинг сервисов
```

### Линтинг

```bash
npm run lint
```

## 📄 Лицензия

MIT License
