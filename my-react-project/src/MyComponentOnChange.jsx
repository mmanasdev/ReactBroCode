import React, {useState} from 'react';

function MyComponentOnChange() {

    const [name, setName] = useState('Guest')
    const [quantity, setQuantity] = useState(1)
    const [comments, setComments] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handleCommentsChange(e) {
        setComments(e.target.value)
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }
    function handleShippingChange(e) {
        setShipping(e.target.value)
    }

  return (
    <div>
        <h1>MyComponentOnChange</h1>
        <input value={name} onChange={handleNameChange}/>    
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>    
        <p>Quantity: {quantity}</p>

        <textarea value={comments} onChange={handleCommentsChange} placeholder="Enter delivery instructions"></textarea>
        <p>Comments: {comments}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Payment: {payment}</p>

        <input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShippingChange}/>Standard
        <input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShippingChange}/>Express
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>Pick Up


        <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponentOnChange;