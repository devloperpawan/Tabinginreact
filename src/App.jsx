import { useState } from 'react'
import './App.css'
import { tabs } from './tabs';

function App() {
  const [activeTab,setActiveTab] = useState([])
  const [activeContent,setActiveContent] = useState(tabs[0])

  let chagneData=(index)=>{
    setActiveTab(index)
    setActiveContent(tabs[index])
  }


  return (
    <div className="App">
    <div className="buttonEvent">
      <h1 style={{textAlign: 'left'}}>
      Law Prep Vision Mision and Values
      </h1>
      <ul>
      {tabs.map((value,index)=>{
        return(<>
        <li><button onClick={()=>chagneData(index)} className={activeTab == index?'activebutton':''}>{value.title}</button></li>
        </>
      )
      }
      )}
      </ul>
      {
        <p>{activeContent.description}</p>
      }
      
    </div>
    </div>
  )
}

export default App
