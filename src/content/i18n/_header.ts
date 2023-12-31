import type { ISubMenu } from "@Types";

export const headerLinks = {
  ru: {
    // home: 'Главная',
    activities: 'Активности',
    signup: 'Записаться',
    schedule: 'Расписание',
    articles: 'Статьи',
    about: 'О Sadko',
  },
  fi: {
    // home: 'Etusivu',
    activities: 'Toiminnot',
    signup: 'Ilmoittautua',
    schedule: 'Aikataulu',
    articles: 'Artikkelit',
    about: 'Sadko:sta',
  },
};



const classes: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "clubs",
    slug: "clubs",
    hrefName: "Кружки",
    hrefDesc: "27 различных кружков",
  },
  {
    iconBorder: "cookie",
    icon: "camps",
    slug: "camps",
    hrefName: "Лагеря",
    hrefDesc: "Походы и отдых на природе",
  },
  {
    iconBorder: "cookie",
    icon: "masters",
    slug: "masters",
    hrefName: "Мастер класс",
    hrefDesc: "Перенимаем опыт мастеров",
  },
  {
    iconBorder: "cookie",
    icon: "courses",
    slug: "courses",
    hrefName: "Курсы",
    hrefDesc: "Для разных возрастов",
  },
];
const events: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "festivals",
    slug: "festivals",
    hrefName: "Фестивали",
    hrefDesc: "Проводим ежегодно",
  },
  {
    iconBorder: "cookie",
    icon: "celebrations",
    slug: "celebrations",
    hrefName: "Праздники",
    hrefDesc: "А так же утренники",
  },
  {
    iconBorder: "cookie",
    icon: "concerts",
    slug: "concerts",
    hrefName: "Концерты",
    hrefDesc: "Посещаем и сами ставим",
  },
  {
    iconBorder: "cookie",
    icon: "travels",
    slug: "travels",
    hrefName: "Поездки",
    hrefDesc: "Путишествуем вместе",
  },
];
const others: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "projects",
    slug: "projects",
    hrefName: "Проекты",
    hrefDesc: "Текущие и будущие",
  },
  {
    iconBorder: "cookie",
    icon: "useful",
    slug: "useful",
    hrefName: "Полезное",
    hrefDesc: "Советы и лайфхаки",
  },
  {
    iconBorder: "cookie",
    icon: "parents",
    slug: "parents",
    hrefName: "Для взрослых",
    hrefDesc: "Тут только 18+",
  },
];

const activities = [
  {
    columnName: "Занятия",
    columns: classes,
  },
  {
    columnName: "События",
    columns: events,
  },
  {
    columnName: "Разное",
    columns: others,
  },
];

const blanks: Array<ISubMenu> = [
  {
    iconBorder: "list",
    icon: "pen",
    slug: "blank-hobby",
    hrefName: "Кружки",
    hrefDesc: "Выбири и запишись к нам",
  },
  {
    iconBorder: "list",
    icon: "pen",
    slug: "blank-camp",
    hrefName: "Лагеря",
    hrefDesc: "Зписывайся заранее",
  },
  {
    iconBorder: "list",
    icon: "pen",
    slug: "blank-membership",
    hrefName: "Членство",
    hrefDesc: "Стань одним из нас",
  },
];

const payments: Array<ISubMenu> = [
  {
    iconBorder: "list",
    icon: "payments",
    slug: "payments",
    hrefName: "",
    hrefDesc: "Правила записи и платы",
  },
];

const aboutus: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "about",
    slug: "about",
    hrefName: "Клуб",
    hrefDesc: "Кто мы есть",
  },
  {
    iconBorder: "cookie",
    icon: "teachers",
    slug: "teachers",
    hrefName: "Преподаватели",
    hrefDesc: "Опыт и биография",
  },
  {
    iconBorder: "cookie",
    icon: "membership",
    slug: "membership",
    hrefName: "Членство",
    hrefDesc: "Права и обязаности",
  },
];

const galleria: Array<ISubMenu> = [
  {
    iconBorder: "cookie",
    icon: "galleria",
    slug: "galleria",
    hrefName: "Галерея",
    hrefDesc: "История в картинках",
  },
  {
    iconBorder: "cookie",
    icon: "info",
    slug: "info",
    hrefName: "О лагерях",
    hrefDesc: "Подробно обо всём",
  },

];

const signup = [
  {
    columnName: "Анкеты",
    columns: blanks,
  },
  {
    columnName: "Оплата",
    columns: payments,
  },
];
const about = [
  {
    columnName: "О нас",
    columns: aboutus,
  },
  {
    columnName: "Картинки",
    columns: galleria,
  },
];

export const routes = {
  activities,
  signup,
  about
};
