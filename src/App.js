import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import Screen from './components/screen';
import Buttonbox from './components/buttonbox';
import Button from './components/button';

const BtnValues=[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <div className="App">
      <b>
        
     <Wrapper>
     <Screen/>
     <Buttonbox>
      {BtnValues.flat().map((btn,i)=>(
        <Button
        value={btn}
        key={i}/>
      )
      )}
     </Buttonbox>
     <div>APP</div>
     </Wrapper></b>
      
   
    </div>
  );
}

export default App;
