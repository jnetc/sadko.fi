import type { IFormData } from '@Types';

export function htmlTemplate(req: IFormData) {
  const activity = req.activity ===  'club' ? 'Кружок | Kerho' : 'Лагерь | Leiri'
  const text = req.activity === 'club' ? 'Hyvät huoltajat , valitse kerho ja täytä sopimus! Täytä kaikki tiedot SUOMEKSI! | Уважаемые родители, выберите, пожалуйста, кружок и заполните договор! Пожалуйста, все данные заполнять на ФИНСКОМ языке!' : 'Hyvät huoltajat, valitse leiri ja täytä sopimus! Täytä kaikki tiedot SUOMEKSI! | Уважаемые родители, выберите, пожалуйста, лагерь и заполните договор! Пожалуйста, все данные заполняйте на ФИНСКОМ языке!'
  const text2 = req.activity === 'club' ? 'Обратите внимание! Если кружок для взрослого, вы заполняете свои данные вместо ребенка | Huomio! Jos kerho on aikuisille, täytä tietosi lapsen sijaan.' : null

  return `
  <div style="max-width: 600px; margin: 0 auto; border-radius: 24px; padding: 36px 0; border: 1px solid #ece5ff; font-family: sans-serif">
    <h1 style="text-align: center; margin: 0 0 36px 0; font-size: 28px">Договор | Sopimus</h1>
    <p style="text-align: center; padding: 12px; font-size: 16px">Helsingin Monipuolinen Toimintakeskus Sadko ry | Центр развития и творчества "Садко" Хельсинки.</p>
    <p style="text-align: center; padding: 12px; font-size: 16px">${text}</p>
    <p style="text-align: center; padding: 12px; font-size: 16px; display: ${text2 ? 'block' : 'none'}">${text2}</p>
    <div style="width: 100%;  margin: 32px auto 0">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #704fe6; color: #fff">
        <h2 style="font-size: 18px; text-align: center; margin: 0">${activity}</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 36px; text-align: left">
        <tbody>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Название | Nimi</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.title}</td>
          </tr>
          <tr style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Дата (День недели) | Päivämäärä (Viikonpäivä)</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.DateOrDayweek}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Время (Длительность) | Aika (Kesto)</th>
            <td style="padding: 12px 12px 12px 0">${req.TimeOrDuration}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align: left; margin: 36px auto">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #feef79">
        <h2 style="font-size: 18px; text-align: center; margin: 0">Ребенок | Lapsi</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 36px; text-align: left">
        <tbody>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Имя и фамилия | Nimi ja sukunimi</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.childName}</td>
          </tr>
          <tr style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Дата рождения | Syntymäpäivä</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.childDate}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Доп. информация | Lisätiedot</th>
            <td style="padding: 12px 12px 12px 0">${req.childInfo}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align: left">
      <div style="padding: 12px; border-radius: 16px 16px 0 0; background-color: #daff7c">
        <h2 style="font-size: 18px; text-align: center; margin: 0">Родитель (плательщик) | Huoltajan (maksajan)</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; text-align: left">
        <tbody>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff; width: 128px">Имя и фамилия | Nimi ja sukunimi</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.name}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Персональный номер | Henkilötunnus</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.henkilotunnus}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Адрес | Osoite</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.address}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Почтовый индекс | Postinumero</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.postcode}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Город | Kaupunki</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.city}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Телефон | Puhelinnumero</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.phone}</td>
          </tr>
          <tr  style="background-color: #fcfbff">
            <th scope="row" style="padding: 12px; border-bottom: 1px solid #ece5ff">Эл. почта | Sähköposti</th>
            <td style="padding: 12px 12px 12px 0; border-bottom: 1px solid #ece5ff">${req.email}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Доп. информация | Lisätiedot</th>
            <td style="padding: 12px 12px 12px 0">${req.message}</td>
          </tr>
          <tr>
            <th scope="row" style="padding: 12px">Правила | Toimintasäännöt</th>
            <td style="padding: 12px 12px 12px 0">Я ознакомлен(а) и согласен(а) с правилами | Olen lukenut ja hyväksynyt toimintasäännöt</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `
}
