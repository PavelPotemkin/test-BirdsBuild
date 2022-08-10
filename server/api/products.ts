import { defineEventHandler } from 'h3'

const products = [
  {
    id: 1,
    type: 'Аукцион',
    name: 'Пиломатериалы брус доска',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 2,
    type: 'Прямые продажи',
    name: 'Пиломатериалы бревна',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 3,
    type: 'Прямы продажи',
    name: 'Бетон',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 4,
    type: 'Аукцион',
    name: 'Стекло',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 5,
    type: 'Прямые продажи',
    name: 'Красный кирпич',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 6,
    type: 'Аукцион',
    name: 'Желтый кирпич',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 7,
    type: 'Прямые продажи',
    name: 'Грунтовка',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 8,
    type: 'Прямы продажи',
    name: 'Щебенка',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 9,
    type: 'Аукцион',
    name: 'Песок',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  },
  {
    id: 10,
    type: 'Прямы продажи',
    name: 'Пенопласт',
    city: 'Санкт-Петербург, Красное Село',
    seller: 'Торговый Дом ГОСТ',
    category: 'Стройматериалы',
    description: 'Пиломатериалы брус доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ! Успeйте приобрести пиломатериал со скидками до закрытия 01.06.2022 !Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим - доставка бесплатно за наш счет. Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если материал не соответствует заявленному качеству - бесплатно меняем его.',
    price: 11000,
    count: 3,
    image: '/img.png',
    status: 'DEFAULT',
    favorite: false
  }
]

export default defineEventHandler(() => {
  return products
})
