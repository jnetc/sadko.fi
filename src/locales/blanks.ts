export const locale_blank = {
  ru: {
    activity_legend: 'Активность',
    child_legend: 'Ребенок',
    child_name_label: 'Имя ребенка (латиницей)',
    child_name_title: 'Имя и фамилия (только на латинице!)',
    child_date_label: 'Дата рождения',
    child_textarea_label: 'Дополнительная информация о ребёнке',
    child_textarea_title: 'Заполните поле, если ребенок имеет инвалидность или какие-то пробелы со здоровьем. Либо поставте знак прочерк, минус (-), что ребенок здоров.',
    parent_legend: 'Родитель',
    parent_name_label: 'Родитель / Опекун / Ответственный плательщик (латиницей)',
    parent_name_title: 'Имя и фамилия (только на латинице!)',
    parent_hetu_label: 'Ваш Henkilötunnus',
    parent_hetu_title: 'Ваш Henkilöstunnus (Например: 123456-457F)',
    parent_address_label: 'Адрес',
    parent_postcode_label: 'Почтовый индекс',
    parent_postcode_title: 'Ваш почтовый индекс должен содержать 5 цифр',
    parent_city_label: 'Город',
    parent_phone_label: 'Номер телефона',
    parent_phone_title: 'Номер может содержать не менее 10 цифр, + и #',
    parent_email_label: 'Электронная почта',
    parent_email_title: 'Например: example@example.com',
    parent_textarea_label: 'Дополнительная информация',
    accept_rules: 'Я ознакомлен(а) и согласен(а) с правилами и условиями проведения мероприятия.',
  },
  fi: {
    activity_legend: 'Toiminta',
    child_legend: 'Lapsi',
    child_name_label: 'Lapsun nimi',
    child_name_title: 'Nimi ja sukunimi',
    child_date_label: 'Syntymäpäivä',
    child_textarea_label: 'Lisätietoa lapsusta',
    child_textarea_title: 'Jos ei tarvitsa lisätietoa, anna tyhjä merkki, miinus (-)',
    parent_legend: 'Vanhempi',
    parent_name_label: 'Vanhempi / Huoltaja / Vastuullinen maksaja',
    parent_name_title: 'Nimi ja sukunimi',
    parent_hetu_label: 'Henkilöstunnus',
    parent_hetu_title: 'Henkilöstunnus (esim. 123456-457F)',
    parent_address_label: 'Osoite',
    parent_postcode_label: 'Postinumero',
    parent_postcode_title: 'Postinumero voi sisältää 5 numeroa',
    parent_city_label: 'Kaupunki',
    parent_phone_label: 'Puhelinnumero',
    parent_phone_title: 'Puhelinnumero voi sisältää 10 numeroa, + ja #',
    parent_email_label: 'Sähköposti',
    parent_email_title: 'Esimerkikä: example@example.com',
    parent_textarea_label: 'Lisätietoa',
    accept_rules: 'Olen lukenut tapahtuman ehdot ja hyväksyn ne.'
  },
} as const

export const locale_camp_blank = {
  ru: {
    label: 'Название лагеря',
    name: 'Лагерь',
    select_all: "Выберите лагерь",
    rule_href: 'Правила лагеря',
  },
  fi: {
    label: 'Leirin nimi',
    name: 'Лагерь', // То, что будет видно в анкете в письме
    select_all: "Valitse leiri",
    rule_href: 'Leirin säännöt',
  },
} as const;

export const locale_club_blank = {
  ru: {
    label: 'Название кружка',
    name: 'Кружок',
    select_all: "Выберите кружок",
    rule_href: 'Правила кружка',
  },
  fi: {
    label: 'Kerhon nimi',
    name: 'Кружок', // То, что будет видно в анкете в письме
    select_all: "Valitse kerho",
    rule_href: 'Kerhon säännöt',
  },
} as const;
