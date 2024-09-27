import PropTypes from 'prop-types';

function List(props) {

    const category = props.category
    const itemList = props.items

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //alphabetical order reversed
    // fruits.sort((a, b) => a.calories - b.calories) //numerical order
    // fruits.sort((a, b) => b.calories - a.calories) //numerical order reversed

    // const lowCaloriesFruits = fruits.filter((fruit) => {
    //     return fruit.calories < 100
    // })

    // const highCaloriesFruits = fruits.filter((fruit) => {
    //     return fruit.calories >= 100
    // })

    const listitems = itemList.map((item) => {
        return <li key={item.id}>
            {item.name}: &nbsp; 
            <b>{item.calories}</b></li>
    })

    return (    
        <div>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listitems}</ol>
        </div>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}



export default List