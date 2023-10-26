import profilePic from './assets/simon.jpg'

function Card(){

return(
    <div className="card">
        <br></br>
    <img src={profilePic} style={{ display: 'block', margin: '0 auto', border:'solid 2px', borderRadius: '10px'}}  height="200px" width="260px"></img>
    <h2 style={{textAlign:'center'}}>Duhak</h2>
    <p style={{textAlign:'center'}}>I am a amateur programmer and WoW addicted gamer</p>

    </div>
);

}

export default Card