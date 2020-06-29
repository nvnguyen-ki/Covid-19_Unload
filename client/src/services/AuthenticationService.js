import Api from '@/services/Api'

export default {
  scrape (Text) {
    return Api().post('scrape', Text)
  }
}
