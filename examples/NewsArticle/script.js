import '../highlightjs-loader.js'
import NewsArticle from './models/NewsArticle'

let article = new NewsArticle(
  'Hallelujah! Google Assistant finally has access to your G Suite calendar',
  'Some useful description about the article.',
  (new Date('April 12, 2019 21:00:00')),
  'The Next Web'
)

console.log(article)
