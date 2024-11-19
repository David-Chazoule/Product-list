import emptyImg from '../../styles/icons/illustration-empty-cart.svg'

function Cart() {
  return (
    <div className="cart">
    <div className="cart-quantity">
    <h3>Your Cart (0)</h3>
    

    </div>

    <div className="cart-detail">
     <div className="cart-empty">
      <img src={emptyImg}alt=""/>
      <p>Your added items will appear here</p>
     </div>


    </div>


    </div>
  )
}

export default Cart