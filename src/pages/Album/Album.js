import React, {useState, useEffect} from 'react';
import {Loader} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/firestore";
import "firebase/storage";

import "./Album.scss";

const db = firebase.firestore(firebase);

function Album(props) {
    const {match} = props;
    const [album, setAlbum] = useState(null);
    const [albumImg, setAlbumImg] = useState(null);
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        db.collection("albums")
            .doc(match?.params?.id)
            .get()
            .then(response => {
                setAlbum(response.data());
            })
    }, [match])

    useEffect(() => {
        if(album){
            firebase
                .storage()
                .ref(`album/${album?.banner}`)
                .getDownloadURL()
                .then(url => {
                    setAlbumImg(url);
                })
        }
    }, [album])

    useEffect(() => {
        if(album){
            db.collection("artists")
                .doc(album?.artist)
                .get()
                .then(response => {
                    const data = response.data();
                    data.id = response.id;
                    setArtist(data);

                    //setArtist(response.data());
                })
        }
    }, [album])
    
    if(!album || !artist){
        return <Loader active>Cargando...</Loader>
    }

    return (
        <div className="album">
            <div className="album_header">
                <HeaderAlbum 
                    album={album} 
                    albumImg={albumImg} 
                    artist={artist}
                />
            </div>
            <div className="album_songs">
                <p>Lista de canciones...</p>
            </div>
        </div>
    )
}

export default withRouter(Album);

function HeaderAlbum(props) {
    const {album, albumImg, artist} = props;

    return (
        <>
            <div
                className="image"
                style={{backgroundImage: `url('${albumImg}')`}}
            />
            <div className="info">
                <h1>{album.name}</h1>
                    <p>
                        De 
                        <Link to={`/artist/${artist.id}`}>
                            <span> {artist.name}</span>
                        </Link>
                    </p>
            </div>
        </>
    )
}