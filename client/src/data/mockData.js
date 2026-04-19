export const mascotStages = [
  {
    id: "science",
    form: "Люмен: искра жизни",
    block: "Биология как наука",
    subtitle: "Появляется в капле воды и впервые учится не просто существовать, а наблюдать и задавать вопросы.",
    motto: "Сначала был хаос. Потом появился метод.",
    progressLabel: "Форма 1 из 7"
  },
  {
    id: "cell",
    form: "Люмен: архитектура клетки",
    block: "Клетка как биологическая система",
    subtitle: "Разбирается в мембране, органоидах и энергии и впервые чувствует, что внутри жизни есть порядок.",
    motto: "Я больше не капля. Я живая система.",
    progressLabel: "Форма 2 из 7"
  },
  {
    id: "organism",
    form: "Люмен: код будущего",
    block: "Организм как биологическая система",
    subtitle: "Открывает гены, наследственность и понимает, что развитие можно читать как инструкцию жизни.",
    motto: "Будущее уже записано. Осталось научиться его понимать.",
    progressLabel: "Форма 3 из 7"
  },
  {
    id: "diversity",
    form: "Люмен: взгляд шире",
    block: "Система и многообразие органического мира",
    subtitle: "На Витариуме встречает Виту и впервые видит, насколько огромен и разнообразен живой мир.",
    motto: "Чтобы впечатлить, пришлось начать реально расти.",
    progressLabel: "Форма 4 из 7"
  },
  {
    id: "human",
    form: "Люмен: человеческая сборка",
    block: "Организм человека и его здоровье",
    subtitle: "Изучает тело, мозг, здоровье и собирает из знаний более зрелую и уверенную версию себя.",
    motto: "Красота красотой, но без мозга и сна далеко не уедешь.",
    progressLabel: "Форма 5 из 7"
  },
  {
    id: "evolution",
    form: "Люмен: траектория роста",
    block: "Эволюция живой природы",
    subtitle: "Понимает, как жизнь меняется во времени, и на этой энергии запускает свой первый проект на Эволюсе.",
    motto: "Если природа смогла усложниться, значит и я смогу вырасти.",
    progressLabel: "Форма 6 из 7"
  },
  {
    id: "ecosystems",
    form: "Люмен: человек разумный",
    block: "Экосистемы и их закономерности",
    subtitle: "Финальная форма: видит связи между всем живым, понимает своё место в системе и становится осознанным человеком.",
    motto: "Я хотел стать лучше. В итоге научился понимать мир.",
    progressLabel: "Форма 7 из 7"
  }
];

export const lessonReactions = {
  perfect: [
    "Люмен доволен. Это уже уровень осознанного организма.",
    "Красиво. Вита бы молча кивнула с уважением.",
    "Наука сегодня на твоей стороне. Продолжаем эволюцию."
  ],
  good: [
    "Нормально. Это не провал, это естественный отбор знаний.",
    "Почти идеально. Люмен бы сказал: уже солидно.",
    "Прогресс есть. Мозг эволюционирует без суеты."
  ]
};

export const missionStages = [
  { minXp: 0, title: "Капля в космосе", description: "Разобраться, что вообще происходит на Протосе." },
  { minXp: 600, title: "Охотник за органоидами", description: "Освоить клетку и перестать путать мембрану с магией." },
  { minXp: 1200, title: "Шептун генов", description: "Понять наследственность и начать решать генетические задачи уверенно." },
  { minXp: 1900, title: "Впечатлить Виту", description: "Добраться до Витариума и звучать умно без лишнего пафоса." },
  { minXp: 2700, title: "Собрать человека", description: "Прокачать анатомию, здоровье и нормальный режим сна." },
  { minXp: 3600, title: "Founder of Evolution", description: "Дойти до Эволюса и запустить свой эволюционный бизнес-план." },
  { minXp: 4600, title: "Осознанность unlocked", description: "Выйти на Экосферу и увидеть, как всё связано." },
  { minXp: 5800, title: "Человек разумный+", description: "Закрыть всю траекторию и стать финальной версией себя." }
];

export function getMissionTrack(user) {
  const totalXp = (Math.max(user.level, 1) - 1) * 1000 + user.xp;
  const currentIndex = missionStages.reduce((bestIndex, stage, index) => {
    return totalXp >= stage.minXp ? index : bestIndex;
  }, 0);
  const current = missionStages[currentIndex];
  const next = missionStages[Math.min(currentIndex + 1, missionStages.length - 1)];

  return {
    totalXp,
    current,
    next: next.minXp === current.minXp ? null : next
  };
}

const blockDefinitions = [
  {
    id: "science",
    name: "Протос",
    theme: "Биология как наука",
    summary: "Люмен только появился и честно признаёт: вообще ничего не понятно.",
    dialogue: "Ладно. Сначала наблюдаем, потом делаем умный вид.",
    color: "from-cyan-400 to-blue-500",
    orbit: "Планета 01",
    evolution: mascotStages[0],
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: как работает научный метод",
    videoPlaceholder:
      "Сюда можно вставить видео-разбор про наблюдение, гипотезу, эксперимент и вывод.",
    lessonTitles: [
      "Что вообще изучает биология",
      "Уровни организации жизни",
      "Признаки живого",
      "Научное наблюдение",
      "Гипотеза и её проверка",
      "Эксперимент без паники",
      "Сравнение и описание",
      "Биологические модели",
      "Методы ЕГЭ по науке",
      "Финальный маршрут Протоса"
    ],
    theory: [
      "Биология изучает живые системы на разных уровнях организации: от молекул и клеток до экосистем и биосферы.",
      "Наблюдение, эксперимент, моделирование и сравнение помогают строить и проверять биологические гипотезы."
    ],
    quizBank: [
      {
        question: "Какой метод позволяет проверить гипотезу в контролируемых условиях?",
        options: ["Эксперимент", "Описание", "Классификация", "Мониторинг"],
        answer: "Эксперимент"
      },
      {
        question: "Что относится к уровню организации живой природы?",
        options: ["Популяционно-видовой", "Геометрический", "Текстовый", "Числовой"],
        answer: "Популяционно-видовой"
      },
      {
        question: "Что является обязательной частью научного метода?",
        options: ["Проверка гипотезы", "Интуиция", "Личная вера", "Случайность"],
        answer: "Проверка гипотезы"
      }
    ],
    rewardXp: 120
  },
  {
    id: "cell",
    name: "Цитара",
    theme: "Клетка как биологическая система",
    summary: "Люмен понимает, что внутри жизни есть структура, энергия и порядок.",
    dialogue: "Я не хаос. Я биосистема с амбициями.",
    color: "from-sky-400 to-cyanGlow",
    orbit: "Планета 02",
    evolution: mascotStages[1],
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: клетка без боли и перегруза",
    videoPlaceholder:
      "Сюда можно вставить видео про строение клетки, органоиды, ATP и генетический код.",
    lessonTitles: [
      "Клеточная теория",
      "Строение мембраны",
      "Органоиды и их роли",
      "Ядро и хранение информации",
      "Митохондрии и энергия",
      "Рибосомы и синтез белка",
      "Генетический код",
      "Обмен веществ",
      "Деление клетки",
      "Финал Цитары"
    ],
    theory: [
      "Клетка — элементарная единица живого. Её строение связано с функциями: мембраны разделяют процессы, органоиды специализируются на синтезе, транспорте и энергетике.",
      "Генетический код хранит информацию о белках, а метаболизм объединяет реакции синтеза и распада веществ."
    ],
    quizBank: [
      {
        question: "Какой органоид называют энергетической станцией клетки?",
        options: ["Лизосома", "Митохондрия", "Комплекс Гольджи", "Ядро"],
        answer: "Митохондрия"
      },
      {
        question: "Что является триплетом генетического кода?",
        options: ["Кодон", "Липид", "Гистон", "Рибосома"],
        answer: "Кодон"
      },
      {
        question: "Где происходит синтез белка?",
        options: ["На рибосомах", "В вакуолях", "В центриолях", "В лизосомах"],
        answer: "На рибосомах"
      }
    ],
    rewardXp: 140
  },
  {
    id: "organism",
    name: "Генезис",
    theme: "Организм как биологическая система",
    summary: "Гены включаются, признаки собираются, Люмен смотрит на будущее с амбициями.",
    dialogue: "Мой генотип уже работает на будущее.",
    color: "from-pinkGlow to-fuchsia-500",
    orbit: "Планета 03",
    evolution: mascotStages[2],
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: генетика и наследственность",
    videoPlaceholder:
      "Сюда можно вставить видео с объяснением генотипа, фенотипа, наследования и изменчивости.",
    lessonTitles: [
      "Организм как система",
      "Размножение организмов",
      "Митоз и мейоз",
      "Генотип и фенотип",
      "Законы Менделя",
      "Решение генетических задач",
      "Изменчивость",
      "Наследственные болезни",
      "Селекция и биотехнологии",
      "Финал Генезиса"
    ],
    theory: [
      "Организм существует как целостная биологическая система, в которой гены, клетки, ткани и органы работают согласованно.",
      "Наследственность обеспечивает передачу признаков, а изменчивость создаёт разнообразие, необходимое для отбора и адаптации."
    ],
    quizBank: [
      {
        question: "Как называют совокупность всех генов организма?",
        options: ["Генотип", "Фенотип", "Кариотип", "Биом"],
        answer: "Генотип"
      },
      {
        question: "Какой тип изменчивости связан с рекомбинацией генов?",
        options: ["Комбинативная", "Модификационная", "Возрастная", "Ритмическая"],
        answer: "Комбинативная"
      },
      {
        question: "Какой процесс уменьшает набор хромосом вдвое?",
        options: ["Мейоз", "Митоз", "Репликация", "Трансляция"],
        answer: "Мейоз"
      }
    ],
    rewardXp: 150
  },
  {
    id: "diversity",
    name: "Витариум",
    theme: "Система и многообразие органического мира",
    summary: "Тут Люмен встречает Виту и внезапно решает стать лучше по-настоящему.",
    dialogue: "Спокойно, Люмен. Просто не перепутай царство при Вите.",
    color: "from-violet-400 to-pinkGlow",
    orbit: "Планета 04",
    evolution: mascotStages[3],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: царства, типы и классификация",
    videoPlaceholder:
      "Сюда можно вставить видео про систематику, царства живой природы и признаки таксонов.",
    lessonTitles: [
      "Систематика без боли",
      "Бактерии и прокариоты",
      "Простейшие организмы",
      "Грибы и их мир",
      "Растения: база",
      "Животные беспозвоночные",
      "Позвоночные и эволюция",
      "Вирусы и их особенности",
      "Как распознавать таксоны",
      "Финал Витариума"
    ],
    theory: [
      "Классификация помогает упорядочить живые организмы по общим признакам и происхождению.",
      "Для ЕГЭ важно уметь сравнивать представителей разных царств, типов и классов по строению, размножению и жизнедеятельности."
    ],
    quizBank: [
      {
        question: "Какой таксон является самым крупным из перечисленных?",
        options: ["Царство", "Вид", "Род", "Семейство"],
        answer: "Царство"
      },
      {
        question: "К какой группе относят бактерии?",
        options: ["Прокариоты", "Эукариоты", "Грибы", "Вирусы"],
        answer: "Прокариоты"
      },
      {
        question: "Кто не имеет клеточного строения?",
        options: ["Вирусы", "Бактерии", "Грибы", "Растения"],
        answer: "Вирусы"
      }
    ],
    rewardXp: 160
  },
  {
    id: "human",
    name: "Хоминис",
    theme: "Организм человека и его здоровье",
    summary: "Чтобы стать привлекательным, пришлось разобраться в мозге, теле и режиме сна.",
    dialogue: "Оказывается, харизма связана с нервной системой. Кто бы мог подумать.",
    color: "from-emerald-400 to-limeGlow",
    orbit: "Планета 05",
    evolution: mascotStages[4],
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: анатомия и здоровье человека",
    videoPlaceholder:
      "Сюда можно вставить видео по системам органов, гигиене, первой помощи и гомеостазу.",
    lessonTitles: [
      "Ткани и органы",
      "Опорно-двигательная система",
      "Кровь и кровообращение",
      "Дыхательная система",
      "Пищеварение",
      "Нервная система",
      "Эндокринная система",
      "Иммунитет",
      "Гигиена и первая помощь",
      "Финал Хоминиса"
    ],
    theory: [
      "Организм человека состоит из систем органов, которые работают согласованно и поддерживают гомеостаз.",
      "Для ЕГЭ нужно уверенно ориентироваться в анатомии, физиологии, гигиене и принципах первой помощи."
    ],
    quizBank: [
      {
        question: "Какая часть ЦНС отвечает за координацию движений?",
        options: ["Мозжечок", "Желудок", "Печень", "Трахея"],
        answer: "Мозжечок"
      },
      {
        question: "Что помогает предупредить инфекционные заболевания?",
        options: ["Вакцинация", "Недосып", "Гиподинамия", "Обезвоживание"],
        answer: "Вакцинация"
      },
      {
        question: "Какая система переносит кислород по организму?",
        options: ["Кровеносная", "Выделительная", "Половая", "Покровная"],
        answer: "Кровеносная"
      }
    ],
    rewardXp: 170
  },
  {
    id: "evolution",
    name: "Эволюс",
    theme: "Эволюция живой природы",
    summary: "Люмен понимает эволюцию и тут же решает открыть свой мемный бизнес.",
    dialogue: "Если виды смогли адаптироваться, мой проект тоже вывезет.",
    color: "from-amber-300 to-orange-500",
    orbit: "Планета 06",
    evolution: mascotStages[5],
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: эволюция простыми словами",
    videoPlaceholder:
      "Сюда можно вставить видео про естественный отбор, адаптации, дивергенцию и видообразование.",
    lessonTitles: [
      "Что такое вид",
      "Критерии вида",
      "Изменчивость и отбор",
      "Борьба за существование",
      "Адаптации",
      "Направления эволюции",
      "Дивергенция и конвергенция",
      "Видообразование",
      "Доказательства эволюции",
      "Финал Эволюса"
    ],
    theory: [
      "Эволюция объясняет происхождение приспособлений, разнообразия видов и общих черт организмов.",
      "Естественный отбор, борьба за существование и наследственная изменчивость образуют связку движущих сил эволюции."
    ],
    quizBank: [
      {
        question: "Что является результатом естественного отбора?",
        options: ["Приспособленность", "Фотосинтез", "Мейоз", "Диффузия"],
        answer: "Приспособленность"
      },
      {
        question: "Как называют расхождение признаков у родственных форм?",
        options: ["Дивергенция", "Конъюгация", "Редупликация", "Транскрипция"],
        answer: "Дивергенция"
      },
      {
        question: "Что относится к движущим силам эволюции?",
        options: ["Наследственная изменчивость", "Осмос", "Митоз", "Гликолиз"],
        answer: "Наследственная изменчивость"
      }
    ],
    rewardXp: 180
  },
  {
    id: "ecosystems",
    name: "Экосфера",
    theme: "Экосистемы и закономерности",
    summary: "Финал. Люмен уже видит связи, а не только себя в центре истории.",
    dialogue: "Осознанность — это когда понимаешь всю систему, а не только свой вайб.",
    color: "from-teal-300 to-green-500",
    orbit: "Планета 07",
    evolution: mascotStages[6],
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    videoTitle: "Видео: экология и связи в биосфере",
    videoPlaceholder:
      "Сюда можно вставить видео про экосистемы, цепи питания, круговороты и саморегуляцию.",
    lessonTitles: [
      "Экосистема как система",
      "Продуценты и консументы",
      "Редуценты",
      "Цепи питания",
      "Экологические пирамиды",
      "Круговорот веществ",
      "Саморегуляция",
      "Искусственные экосистемы",
      "Человек и биосфера",
      "Финал Экосферы"
    ],
    theory: [
      "Экосистема объединяет живые организмы и среду их обитания, связанные потоками энергии и круговоротом веществ.",
      "Устойчивость экосистем зависит от разнообразия, саморегуляции и баланса между продуцентами, консументами и редуцентами."
    ],
    quizBank: [
      {
        question: "Кто создаёт органические вещества из неорганических?",
        options: ["Продуценты", "Консументы", "Редуценты", "Паразиты"],
        answer: "Продуценты"
      },
      {
        question: "Что обеспечивает относительную устойчивость экосистемы?",
        options: ["Саморегуляция", "Случайность", "Изоляция от среды", "Отсутствие связей"],
        answer: "Саморегуляция"
      },
      {
        question: "Кто разлагает органические остатки до минеральных веществ?",
        options: ["Редуценты", "Продуценты", "Травоядные", "Хищники"],
        answer: "Редуценты"
      }
    ],
    rewardXp: 190
  }
];

function createLesson(block, title, index) {
  const quizA = block.quizBank[index % block.quizBank.length];
  const quizB = block.quizBank[(index + 1) % block.quizBank.length];

  return {
    id: `${block.id}-${index + 1}`,
    planetId: block.id,
    title,
    videoTitle: block.videoTitle,
    videoPlaceholder: block.videoPlaceholder,
    image: block.image,
    theory: [
      `${title}. ${block.theory[0]}`,
      block.theory[1]
    ],
    quiz: [
      { ...quizA, id: "q1" },
      { ...quizB, id: "q2" }
    ],
    rewardXp: block.rewardXp + index * 5
  };
}

export const lessonCatalog = Object.fromEntries(
  blockDefinitions.flatMap((block) =>
    block.lessonTitles.map((title, index) => {
      const lesson = createLesson(block, title, index);
      return [lesson.id, lesson];
    })
  )
);

const completedLessons = [
  ...Array.from({ length: 10 }, (_, index) => `science-${index + 1}`),
  "cell-1",
  "cell-2",
  "cell-3"
];

export const initialUser = {
  id: "pilot-001",
  name: "Ученик",
  email: "",
  level: 3,
  xp: 980,
  xpToNext: 1500,
  streak: 12,
  currentMission: "Охотник за органоидами",
  title: "Архитектор траектории",
  completedLessons,
  achievements: [
    { id: "a1", title: "Капля старта", description: "Люмен появился на Протосе", unlocked: true },
    { id: "a2", title: "Протос закрыт", description: "Пройдена первая планета целиком", unlocked: true },
    { id: "a3", title: "Цитара запущена", description: "Открыта вторая планета", unlocked: true },
    { id: "a4", title: "Первые 10 XP-рывков", description: "Завершено 10 занятий", unlocked: true },
    { id: "a5", title: "Гены на горизонте", description: "Открыть Генезис", unlocked: false },
    { id: "a6", title: "Вита замечает", description: "Добраться до Витариума", unlocked: false },
    { id: "a7", title: "Хоминис unlocked", description: "Полностью пройти 4 планету", unlocked: false },
    { id: "a8", title: "Founder mode", description: "Добраться до Эволюса", unlocked: false },
    { id: "a9", title: "Экосфера online", description: "Открыть финальную планету", unlocked: false },
    { id: "a10", title: "Осознанный человек", description: "Пройти все 70 занятий", unlocked: false }
  ],
  dailyChallenges: [
    { id: "d1", title: "Пройти 2 занятия подряд", reward: 80, progress: 1, total: 2 },
    { id: "d2", title: "Ответить на 6 вопросов без ошибок", reward: 120, progress: 3, total: 6 },
    { id: "d3", title: "Собрать 300 XP за день", reward: 150, progress: 170, total: 300 }
  ]
};

export function generatePlanets(userCompletedLessons) {
  return blockDefinitions.map((block, blockIndex) => {
    const previousBlock = blockDefinitions[blockIndex - 1];
    const previousCompleted = !previousBlock
      ? true
      : previousBlock.lessonTitles.every((_, lessonIndex) =>
          userCompletedLessons.includes(`${previousBlock.id}-${lessonIndex + 1}`)
        );

    const levels = block.lessonTitles.map((title, lessonIndex) => {
      const lessonId = `${block.id}-${lessonIndex + 1}`;
      const isCompleted = userCompletedLessons.includes(lessonId);
      const isUnlocked = previousCompleted;
      const earlierLessonsDone = block.lessonTitles
        .slice(0, lessonIndex)
        .every((_, idx) => userCompletedLessons.includes(`${block.id}-${idx + 1}`));

      let status = "locked";
      if (isCompleted) {
        status = "done";
      } else if (isUnlocked && earlierLessonsDone) {
        status = lessonIndex === 0 ? "current" : "available";
      }

      return {
        id: lessonId,
        title,
        status,
        xp: lessonCatalog[lessonId].rewardXp
      };
    });

    const completedCount = levels.filter((item) => item.status === "done").length;

    return {
      id: block.id,
      name: block.name,
      theme: block.theme,
      summary: block.summary,
      dialogue: block.dialogue,
      color: block.color,
      orbit: block.orbit,
      progress: Math.round((completedCount / levels.length) * 100),
      evolution: block.evolution,
      isUnlocked: previousCompleted,
      levels
    };
  });
}

export function getRecommendedLessonId(userCompletedLessons) {
  const planets = generatePlanets(userCompletedLessons);
  const nextLesson = planets
    .flatMap((planet) => planet.levels)
    .find((level) => level.status === "current" || level.status === "available");

  return nextLesson?.id || "science-1";
}

export const planets = generatePlanets(initialUser.completedLessons);
export const featuredLesson = lessonCatalog[getRecommendedLessonId(initialUser.completedLessons)];
