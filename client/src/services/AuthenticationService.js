import Api from '@/services/Api'

export default {
  scrape (Text) {
    return Api().post('scrape', Text)
  },
  // eslint-disable-next-line camelcase
  searchData (region_province, city_name) {
    return Api().post('searchData', region_province, city_name)
  },
  WorldData () {
    return Api().post('WorldData')
  },
  LatestUpdate () {
    return Api().post('LatestUpdate')
  }
}
