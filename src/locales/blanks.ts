export const locale_blank = {
  ru: {
    activity_legend: "Активность | Toiminta",
    date: "Дата (День недели) | Päivämäärä (Viikonpäivä)",
    time: "Время (Длительность) | Aika (Kesto)",
    child_legend: "Ребенок | Lapsi",
    child_name_label: "Имя и фамилия | Nimi ja sukunimi",
    child_name_title: "Имя и фамилия (только на латинице!)",
    child_date_label: "День рождения | Syntymäpäivä",
    child_textarea_label: "Дополнительная информация | Lisätiedot",
    child_textarea_title:
      "Заполните поле, если ребенок имеет инвалидность или какие-то проблемы со здоровьем. Либо поставте знак прочерк, минус (-), что ребенок здоров.",
    parent_legend: "Родитель (плательщик) | Huoltajan (maksajan)",
    parent_name_label: "Имя и фамилия | Nimi ja sukunimi",
    parent_name_title: "Имя и фамилия (только на латинице!)",
    parent_hetu_label: "Персональный номер | Henkilötunnus",
    parent_hetu_title: "Ваш Henkilöstunnus (Например: 123456-457F)",
    parent_address_label: "Адрес | Osoite",
    parent_postcode_label: "Почтовый индекс | Postinumero",
    parent_postcode_title: "Ваш почтовый индекс должен содержать 5 цифр",
    parent_city_label: "Город | Kaupunki",
    parent_phone_label: "Телефон | Puhelinnumero",
    parent_phone_title: "Номер может содержать не менее 10 цифр, + и #",
    parent_email_label: "Эл. почта | Sähköposti",
    parent_email_title: "Например: example@example.com",
    parent_textarea_label: "Дополнительная информация | Lisätiedot",
    accept_rules:
      "Я ознакомлен(а) и согласен(а) с | Olen lukenut ja hyväksynyt",
    notification: "Отправляем вашу форму, подождите.",
    warning: "Возникли технические неполадки, пожалуйста, повторите попытку.",
  },
  fi: {
    activity_legend: "Toiminta",
    date: "Päivämäärä (Viikonpäivä)",
    time: "Aika (Kesto)",
    child_legend: "Lapsi",
    child_name_label: "Nimi ja sukunimi",
    child_name_title: "Nimi ja sukunimi",
    child_date_label: "Syntymäpäivä",
    child_textarea_label: "Lisätiedot",
    child_textarea_title:
      "Täytä ruutu, jos lapsella on vamma tai terveysongelmia. Merkitse joko viiva tai miinusmerkki (-) merkiksi siitä, että lapsi on terve.",
    parent_legend: "Huoltajan (maksajan) ",
    parent_name_label: "Nimi ja sukunimi",
    parent_name_title: "Nimi ja sukunimi",
    parent_hetu_label: "Henkilöstunnus",
    parent_hetu_title: "Henkilöstunnus (esim. 123456-457F)",
    parent_address_label: "Osoite",
    parent_postcode_label: "Postinumero",
    parent_postcode_title: "Postinumero voi sisältää 5 numeroa",
    parent_city_label: "Kaupunki",
    parent_phone_label: "Puhelinnumero",
    parent_phone_title: "Puhelinnumero voi sisältää 10 numeroa, + ja #",
    parent_email_label: "Sähköposti",
    parent_email_title: "Esimerkikä: example@example.com",
    parent_textarea_label: "Lisätiedot",
    accept_rules: "Olen lukenut ja hyväksynyt",
    notification: "Lähetämme lomakettasi, odota.",
    warning: "Teknisiä ongelmia on ilmennyt, yritä uudelleen.",
  },
} as const;

export const locale_camp_blank = {
  ru: {
    label: "Название лагеря | Leirin nimi",
    name: "Лагерь",
    select_all: "Выберите лагерь",
    rule_href: "правилами",
  },
  fi: {
    label: "Leirin nimi",
    name: "Лагерь", // То, что будет видно в анкете в письме
    select_all: "Valitse leiri",
    rule_href: "toimintasäännöt",
  },
} as const;

export const locale_club_blank = {
  ru: {
    label: "Название кружка | Kerhon nimi",
    name: "Кружок",
    select_all: "Выберите кружок",
    rule_href: "правилами",
  },
  fi: {
    label: "Kerhon nimi",
    name: "Кружок", // То, что будет видно в анкете в письме
    select_all: "Valitse kerho",
    rule_href: "toimintasäännöt",
  },
} as const;
