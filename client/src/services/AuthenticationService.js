import Api from '@/services/Api'

export default {
  scrape (Text) {
    return Api().post('scrape', Text)
  },
  // eslint-disable-next-line camelcase
  test (region_province, city_name) {
    return Api().post('test', region_province, city_name)
  }
}
