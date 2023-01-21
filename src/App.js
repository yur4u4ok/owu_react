//вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)

import './App.css';
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {useState} from "react";

function App() {
    let [userId, setUserId] = useState(null)

    return (
        <div className="App">
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
