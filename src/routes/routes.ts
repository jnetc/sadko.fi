import type { ISubMenu } from "@Types";

const classes: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "clubs",
    slug: "clubs",
    hrefName: {
      ru: "Кружки",
      fi: "Kerhot"
    },
    hrefDesc: {
      ru: "27 различных кружков",
      fi: "27 erilaista ympyrää"
    }
  },
  {
    iconBorder: "cookie",
    icon: "camps",
    slug: "camps",
    hrefName: {
      ru: "Лагеря",
      fi: "Leirit"
    },
    hrefDesc: {
      ru: "Походы и отдых на природе",
      fi: "Vaellus ja ulkoilu"
    }
  },
  {
    iconBorder: "cookie",
    icon: "masters",
    slug: "masters",
    hrefName: {
      ru: "Мастер класс",
      fi: "Mestariluokka"
    },
    hrefDesc: {
      ru: "Перенимаем опыт мастеров",
      fi: "Otamme käyttöön mestareiden kokemuksen"
    }
  },
  {
    iconBorder: "cookie",
    icon: "courses",
    slug: "courses",
    hrefName: {
      ru: "Курсы",
      fi: "Kurssit"
    },
    hrefDesc: {
      ru: "Для разных возрастов",
      fi: "Eri ikäisille"
    }
  },
];

const events: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "festivals",
    slug: "festivals",
    hrefName: {
      ru: "Фестивали",
      fi: "Festivaalit"
    },
    hrefDesc: {
      ru: "Проводим ежегодно",
      fi: "Teemme sen joka vuosi"
    }
  },
  {
    iconBorder: "cookie",
    icon: "celebrations",
    slug: "celebrations",
    hrefName: {
      ru: "Праздники",
      fi: "Juhlat"
    },
    hrefDesc: {
      ru: "А так же утренники",
      fi: "Ja myös matinees"
    },
  },
  {
    iconBorder: "cookie",
    icon: "concerts",
    slug: "concerts",
    hrefName: {
      ru: "Концерты",
      fi: "Konsertit"
    },
    hrefDesc: {
      ru: "Посещаем и сами ставим",
      fi: "Käymme ja asennamme itse"
    },
  },
  {
    iconBorder: "cookie",
    icon: "travels",
    slug: "travels",
    hrefName: {
      ru: "Поездки",
      fi: "Matkat"
    },
    hrefDesc: {
      ru: "Путешествуем вместе",
      fi: "Matkustetaan yhdessä"
    },
  },
];

const others: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "projects",
    slug: "projects",
    hrefName: {
      ru: "Проекты",
      fi: "Projektit"
    },
    hrefDesc: {
      ru: "Текущие и будущие",
      fi: "Nykyisyys ja tulevaisuus"
    },
  },
  {
    iconBorder: "cookie",
    icon: "useful",
    slug: "useful",
    hrefName: {
      ru: "Полезное",
      fi: "Hyödyllinen"
    },
    hrefDesc: {
      ru: "Советы и лайфхаки",
      fi: "Vinkkejä ja pelastusvinkkejä"
    },
  },
  {
    iconBorder: "cookie",
    icon: "parents",
    slug: "parents",
    hrefName: {
      ru: "Для взрослых",
      fi: "Aikuisille"
    },
    hrefDesc: {
      ru: "Тут только 18+",
      fi: "Täällä vain 18+"
    }
  },
  // {
  //   iconBorder: "cookie",
  //   icon: "info",
  //   slug: "info",
  //   hrefName: {
  //     ru: "О лагерях",
  //     fi: "Leireistä"
  //   },
  //   hrefDesc: {
  //     ru: "Подробно обо всём",
  //     fi: "Yksityiskohdat kaikesta"
  //   }
  // },
];

const blanks: Array<ISubMenu> = [
  // {
  //   iconBorder: "list",
  //   icon: "pen",
  //   slug: "blank-hobby",
  //   hrefName: {
  //     ru: "Кружки",
  //     fi: "Kerhot"
  //   },
  //   hrefDesc: {
  //     ru: "Выбери и запишись к нам",
  //     fi: "Valitse ja ilmoittaudu meille"
  //   }
  // },
  // {
  //   iconBorder: "list",
  //   icon: "pen",
  //   slug: "blank-camp",
  //   hrefName: {
  //     ru: "Лагеря",
  //     fi: "Leirit"
  //   },
  //   hrefDesc: {
  //     ru: "Записывайся заранее",
  //     fi: "Ilmoittaudu etukäteen"
  //   }
  // },
  // {
  //   iconBorder: "list",
  //   icon: "pen",
  //   slug: "blank-membership",
  //   hrefName: {
  //     ru: "Членство",
  //     fi: "Jäsenyys"
  //   },
  //   hrefDesc: {
  //     ru: "Стань одним из нас",
  //     fi: "Ryhdy yhdeksi meistä"
  //   }
  // },
  {
    iconBorder: "cookie",
    icon: "blanks",
    slug: "blanks",
    hrefName: {
      ru: "Анкеты",
      fi: "Lomakeet"
    },
    hrefDesc: {
      ru: "Формы для записи",
      fi: "Ilmoittamis- ja lomakkeet"
    }
  },
];

const rules_and_payments: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "rules-and-payments",
    slug: "rules-and-payments",
    hrefName: {
      ru: "Оплата",
      fi: "Maksu"
    },
    hrefDesc: {
      ru: "Правила записи и платы",
      fi: "Ilmoittautumis- ja maksusäännöt"
    }
  },
];

const aboutus: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "about",
    slug: "about",
    hrefName: {
      ru: "Клуб",
      fi: "Klubi"
    },
    hrefDesc: {
      ru: "Кто мы есть",
      fi: "Keitä olemme"
    },
  },
  {
    iconBorder: "cookie",
    icon: "teachers",
    slug: "teachers",
    hrefName: {
      ru: "Преподаватели",
      fi: "Opettajat"
    },
    hrefDesc: {
      ru: "Опыт и биография",
      fi: "Kokemus ja elämäkerta"
    }
  },
  {
    iconBorder: "cookie",
    icon: "membership",
    slug: "membership",
    hrefName: {
      ru: "Членство",
      fi: "Jäsenyys"
    },
    hrefDesc: {
      ru: "Права и обязанности",
      fi: "Oikeudet ja velvollisuudet"
    }
  },
  {
    iconBorder: "cookie",
    icon: "feedbacks",
    slug: "feedbacks",
    hrefName: {
      ru: "Отзывы",
      fi: "Suosittelut"
    },
    hrefDesc: {
      ru: "Что о нас говорят",
      fi: "Mitä meistä sanotaan"
    }
  },
];

const gallery: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "gallery",
    slug: "gallery",
    hrefName: {
      ru: "Галерея",
      fi: "gallery"
    },
    hrefDesc: {
      ru: "История в картинках",
      fi: "Historia kuvissa",
    },
  },
];

export const headerLinks = {
  ru: {
    activities: {
      name: 'Активности',
      submenu: [
        { columnName: "Занятия", columns: classes },
        { columnName: "События", columns: events },
        { columnName: "Разное", columns: others },
      ],
    },
    signup: {
      name: 'Записаться',
      submenu: [
        { columnName: "Анкеты", columns: blanks },
        { columnName: "Оплата", columns: rules_and_payments },
      ],
    },
    schedule: 'Расписание',
    articles: 'Статьи',
    about: {
      name: 'О Sadko',
      submenu: [
        { columnName: "О нас", columns: aboutus },
        { columnName: "Фотогалерея", columns: gallery },
      ],
    },
  },
  fi: {
    activities: {
      name: 'Toiminnot',
      submenu: [
        { columnName: "Toiminnot", columns: classes },
        { columnName: "Tapahtumat", columns: events },
        { columnName: "Sekalaista", columns: others },
      ],
    },
    signup: {
      name: 'Ilmoittautua',
      submenu: [
        { columnName: "Lomakeet", columns: blanks },
        { columnName: "Maksu", columns: rules_and_payments },
      ],
    },
    schedule: 'Aikataulu',
    articles: 'Artikkelit',
    about: {
      name: 'Sadko:sta',
      submenu: [
        { columnName: "Meistä", columns: aboutus },
        { columnName: "Kuvagallery", columns: gallery },
      ],
    },
  },
};
