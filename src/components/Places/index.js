import './index.css'

const Places = props => {
  const {list} = props
  const {id, name, description, imageUrl} = list
  return (
    <li className="list-iitems">
      <img src={imageUrl} alt={name} className="image-style" />
      <h1 className="heading-card">{name}</h1>
      <p className="para-card">{description}</p>
    </li>
  )
}
export default Places
