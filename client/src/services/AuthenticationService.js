import Api from '@/services/Api'

export default {
  
  // eslint-disable-next-line camelcase
  searchData (region_province, city_name) {
    return Api().get('searchData', region_province, city_name)
  },
  WorldData () {
    return Api().get('WorldData')
  },
  LatestUpdate () {
    return Api().get('LatestUpdate')
  },
  countriesDaily () {
    return Api().get('countriesDaily')
  }
}
