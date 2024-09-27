function Button() {

    const styles = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    /* ---------------- */

    // const handleClick = () => {console.log('Button clicked')}
    

    // const handleClick2 = (name) => {console.log(`Hello, ${name}`)}

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
        
    // }

    const handleClick = (e) => {
        e.target.textContent = 'Clicked';
    }
    
    return (
        <button style={styles} onDoubleClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Button;