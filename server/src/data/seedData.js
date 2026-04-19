export const seedUser = {
  _id: "demo-user",
  name: "Демо-пользователь",
  email: "demo@biologika.space",
  password: "$2a$10$yRxGlw5DcbxQ3G9T2h6mheM1ni1sHWoP9sI1TKoEt1TGVtC6zq9kC",
  level: 5,
  xp: 1120,
  xpToNext: 1500,
  streak: 12,
  title: "Архитектор траектории",
  currentMission: "Провести Люмена от капли воды до осознанного человека",
  achievements: [
    { id: "a1", title: "Капля старта", description: "Люмен появился на Протосе", unlocked: true },
    { id: "a2", title: "Метод есть", description: "Пройден блок научного метода", unlocked: true },
    { id: "a3", title: "Мембранный вайб", description: "Закрыт клеточный блок", unlocked: true },
    { id: "a4", title: "Гены не врут", description: "Решено 10 заданий по наследственности", unlocked: true },
    { id: "a5", title: "Вита замечает", description: "Добраться до Витариума", unlocked: false },
    { id: "a6", title: "Неловкий харизматик", description: "Открыть первый диалог с Витой", unlocked: false },
    { id: "a7", title: "Почти человек", description: "Дойти до Хоминиса", unlocked: false },
    { id: "a8", title: "Founder mode", description: "Открыть бизнес Люмена на Эволюсе", unlocked: false },
    { id: "a9", title: "Осознанность пошла", description: "Открыть Экосферу", unlocked: false },
    { id: "a10", title: "Финальная форма", description: "Довести Люмена до осознанного человека", unlocked: false }
  ],
  dailyChallenges: [
    { id: "d1", title: "Закрыть 1 блок по клетке", reward: 80, progress: 1, total: 1 },
    { id: "d2", title: "Решить 5 заданий ЕГЭ подряд", reward: 120, progress: 3, total: 5 },
    { id: "d3", title: "Набрать 250 XP эволюции", reward: 150, progress: 170, total: 250 }
  ]
};

export const seedLessons = [
  {
    id: "cell-1",
    planetId: "cell",
    title: "Клетка, генетический код и метаболизм",
    theory: [
      "Клетка — элементарная единица живого.",
      "Генетический код хранит информацию о белках, а метаболизм объединяет синтез и распад."
    ],
    rewardXp: 180,
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
    quiz: [
      {
        id: "q1",
        question: "Какой органоид называют энергетической станцией клетки?",
        options: ["Лизосома", "Митохондрия", "Комплекс Гольджи", "Ядро"],
        answer: "Митохондрия"
      },
      {
        id: "q2",
        question: "Что является триплетом генетического кода?",
        options: ["Кодон", "Липид", "Гистон", "Рибосома"],
        answer: "Кодон"
      }
    ]
  }
];
