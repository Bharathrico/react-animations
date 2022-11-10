import './styles/App.css';

function App() {
  return (
    <div className="App">
      <svg className='circle1'  width="100" height="100">
        <circle  cx="50" cy="50" r="20" stroke="#FFAD38" stroke-width="0.1"  fillOpacity='0'/>
        <circle  cx="64" cy="64" r="0.4" stroke="#FFAD38" stroke-width="1"  fill="#FFAD38"/>
      </svg>
      <div className='text'>Portfolio</div>
    </div>
  );
}

export default App;
