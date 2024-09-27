function ProfilePicture() {

    const imgUrl = "./src/assets/brocodeimg.jpg";

    const handleClick = (e) => {
        console.log('Profile picture clicked');
        e.target.style.display = 'none';
    }


  return (
    <img onClick={(e) => handleClick(e)} src={imgUrl} />
  );
}

export default ProfilePicture;