import './App.css'
const Birthday=({person})=>{
    return(
        <section  >
            <div className='img-container' >
                  <img className='img' src={person.Pic}/>
            </div>
            <div className='title-con' >
              <h1>{person.name}</h1>
               <h3>{person.Age}</h3>
                <h2>{person.Professional}</h2>
            </div>
            
        </section>
    )
}
export default Birthday