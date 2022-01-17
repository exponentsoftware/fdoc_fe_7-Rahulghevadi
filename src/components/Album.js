import React from 'react'
// import { FaGithub } from './react-icons/fa'


function Album(props) {
    const { album_title, artist, album_cover, } = props;
    return (
        <div className='main'>



            <img src={album_cover} alt='alubu-poster' />
            <h1>{album_title}</h1>
            <div className='anchor'>
                <p>{artist}</p>
            </div>


        </div>
    )
}

export default Album;
