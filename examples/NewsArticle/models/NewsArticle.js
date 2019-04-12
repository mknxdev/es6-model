import Model from  '@/model'

export default class NewsArticle extends Model {
  title = null
  description = null
  publishedAt = null
  media = null

  constructor(title, description, publishedAt, media) {
    super({
      title: [title, String, true],
      description: [description, String, true],
      publishedAt: [publishedAt, Date, true],
      media: [media, String, true]
    })

    this.title = title
    this.description = description
    this.publishedAt = publishedAt
  }
}
