import './App.css';
import SimpsonComponent from "./components/SimpsonsComponent";
import RickAndMortyCharacter from "./components/RickAndMortyCharacters";

function App() {
    return (
        <div className='App'>
            <div className="Simpsons">
                <SimpsonComponent name={"Bart"} img={"https://i.pinimg.com/originals/7e/56/46/7e564626fd81ea7f0580d59d16609ec5.png"}/>
                <SimpsonComponent name={"Homer"} img={"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"}/>
                <SimpsonComponent name={"Lisa"} img={"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"}/>
                <SimpsonComponent name={"Marge"} img={"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"}/>
            </div>
            <div className='rickAndMorty'>
                <RickAndMortyCharacter/>
            </div>
        </div>
    );
}

export default App;
