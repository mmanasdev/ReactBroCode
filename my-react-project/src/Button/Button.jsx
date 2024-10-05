
// import styles from './Button.module.css' // 2. modules

function Button() {

    const styles = {// 3. inline
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    
    return (
        <button style={styles}>Click me</button>
    )
}

export default Button;