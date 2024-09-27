import profilePic from './assets/brocodeimg.jpg';

function Card() {
    return <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Bro Code</h2>
        <p className="card-text">I make YT videos and I play Videogames</p>
        </div>;
}

export default Card