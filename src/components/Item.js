import Stars from "./Stars"

function Item(props) {
  const {id, title, image, price, rating, deleteProduct} = props
  const stars = Array.from({length: 5}, (_, i) => i < rating)
  
  return (
    <div className="item" onDoubleClick={(e) => deleteProduct(id)}>
      <img src={image}/>
      <h2>{title}</h2>
      <h3>Цена:{price}</h3>
      <Stars stars={stars}/>
    </div>
  )
}
export default Item