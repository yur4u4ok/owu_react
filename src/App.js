import './App.css';
import {Header} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";
import {AlbumsPage, CommentDetail, CommentsPage, HomePage, TodosPage} from "./components";


function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}>
                <Route path={':id'} element={<CommentDetail/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
