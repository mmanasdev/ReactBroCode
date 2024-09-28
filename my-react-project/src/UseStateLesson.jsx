/*
React Hooks = functions that let you use state and other React 
features in function components. 
(useState, useEffect, useContext, useReducer, useRef, useMemo, and more...)

useState = A React Hook that allows the creation of a statefull variable AND 
setter function to update its value in the Virtual DOM.
[name, setName] = useState('John Doe')
*/
// import MyComponent from "./MyComponent"
import Counter from "./Counter"

function UseStateLesson() {

  return <div>
    <Counter />
  </div>

}

export default UseStateLesson
