// import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react'

function AddAlbum() {
    return (
        <div className='add_album' >
            <form>
                <input type='text' placeholder='Album Title' />
                <input type='text' placeholder='Artist' />
                <input type='file' />
                <button>upload</button>
            </form>
        </div>
    )
}

export default AddAlbum
