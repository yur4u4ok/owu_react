import {useEffect, useState} from "react";
import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const AlbumsPage = () => {
    let [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAll().then(value => value.data).then(value => setAlbums([...value]))
    }, [])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    )
}

export{
    AlbumsPage
}
