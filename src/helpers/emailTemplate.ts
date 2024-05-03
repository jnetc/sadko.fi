import type { IFormData } from '@Types';

export function htmlTemplate(req: IFormData) {
  return `
  <div style="max-width: 600px; margin: 0 auto; border-radius: 24px; padding: 36px 0; border: 1px solid #ece5ff; font-family: sans-serif">
    <h1 style="text-align: center; margin: 0 0 36px 0">Анкета с сайта Sadko.fi</h1>
    <div style="width: 100%;  margin: 0 auto">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #704fe6; color: #fff">
        <h2 style="font-size: 18px; text-align: center; margin: 0">${req.activity}</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 36px; text-align: left">
        <tbody>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Название</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.title}</td>
          </tr>
          <tr style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Дата / День недели</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.DateOrDayweek}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Время / Длительность</th>
            <td style="padding: 12px 12px 12px 0">${req.TimeOrDuration}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align: left; margin: 36px auto">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #feef79">
        <h2 style="font-size: 18px; text-align: center; margin: 0">Ребенок</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 36px; text-align: left">
        <tbody>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Имя Фамилия</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.childName}</td>
          </tr>
          <tr style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Дата рождения</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.childDate}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Доп. информация о ребенке</th>
            <td style="padding: 12px 12px 12px 0">${req.childInfo}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align: left">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #daff7c">
        <h2 style="font-size: 18px; text-align: center; margin: 0">Родитель / Опекун</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; text-align: left">
        <tbody>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Имя Фамилия</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.name}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Henkilötunnus</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.henkilotunnus}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Адрес</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.address}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Почтовый индекс</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.postcode}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Город</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.city}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Телефон</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.phone}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Эл. почта</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.email}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Доп. информация</th>
            <td style="padding: 12px 12px 12px 0">${req.message}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Правила Садко</th>
            <td style="padding: 12px 12px 12px 0">Я ознакомлен(а) и согласен(а) с правилами и условиями проведения мероприятия.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `
}
