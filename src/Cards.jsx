import Birthday from './Birthday'
const Cards=({name})=>{
    return(
        <section>
         {name.map((person)=>{
            return(
                <div key={person.id}  >
         <Birthday person={person} />    
                </div>
            )
            
         })}
         
        </section>
        
    )
}
export default Cards