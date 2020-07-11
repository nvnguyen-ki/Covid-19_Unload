import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://covid-19-unload.herokuapp.com/'
  })
}
