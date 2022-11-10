import './styles/App.css';
import {useRef,useState} from 'react'

function App() {
  
  const [circlearray,setArray]=useState([130,252,50.3])

  const maincircle = useRef(null)

  return (
    <div className="App"> 
      <svg className='circle1' width="1" height="1">
        <circle className='og-circle' ref={maincircle}  cx="0" cy="0" r="20" stroke="#FFAD38" strokeLinecap='round' strokeWidth="0.5" strokeDashoffset={circlearray[0]} strokeDasharray={circlearray[1]} transform={"rotate("+circlearray[2]+")"} fillOpacity='0'/>
        <circle className='og-circle2' cx="14.2" cy="14.2" r="0.4" stroke="#FFAD38" strokeWidth="1" onMouseOver={(event)=>{event.target.setAttribute('r', '3');setArray([145,260,60])}} onMouseLeave={(event)=>{event.target.setAttribute('r', '0.4');setArray([130,252,50.3])}}  fill="#FFAD38"/>
      </svg>
      <div className='text'>Portfolio</div>
    </div>
  );
}

export default App;
