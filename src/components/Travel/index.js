import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Places from '../Places'

import './index.css'

class Travel extends Component {
  state = {list: [], isLoader: true}

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const updateList = data.packages.map(each => {
        return {
          description: each.description,
          id: each.id,
          imageUrl: each.image_url,
          name: each.name,
        }
      })
      this.setState({list: updateList, isLoader: false})
    }
  }

  render() {
    const {list, isLoader} = this.state
    const resultPage = isLoader ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <ul className="list-container">
        {list.map(each => (
          <Places list={each} key={each.id} />
        ))}
      </ul>
    )
    return (
      <div className="background-container">
        <h1 className="heading-text-main">Travel Guide</h1>
        <hr className="harizontal-line" />
        {resultPage}
      </div>
    )
  }
}
export default Travel
