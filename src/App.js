import { useState } from 'react';
import './App.css';
import data from './Data'
import Cards from './Cards'
function App() {
  
  const [lists,setLists]= useState(data)
  const [showdata , setShowdata] = useState(true)  // visible the button
  
  const Delete=()=>{
    setLists([])
    setShowdata(false)
  }
  const RefreshHan=()=>{
    setLists(data)
    setShowdata(true)
  }
  
  return (

    <section className='sec-middle' >
          
          <h1 className='Title'>'{lists.length}' Birthday's Today</h1>
    
         <Cards name={lists} />
    
    {showdata ?(<button onClick={Delete}  className='close-btn'>Close</button>): (<button className='Refrsh-btn'  onClick={RefreshHan} >Refresh</button>  )  }
    
      
    </section>
    
  );

}
export default App;
