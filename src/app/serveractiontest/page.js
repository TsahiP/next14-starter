import { addPost, deletePost } from '@/lib/actions'
import React from 'react'

const serveractiontest = () => {
    return (
        <div>
            <form action={addPost}>
                <input type='text' placeholder='title' name='title' />
                <input type='text' placeholder='description' name='desc' />
                <input type='text' placeholder='slug' name='slug' />
                <input type='text' placeholder='userId' name='userId' />
                <input type='text' placeholder='Image link' name='img' />
                <button >Create</button>

            </form>


            <form action={deletePost}>
                <input type='text' placeholder='id' name='id' />
                <button >Delete</button>
            </form>
        </div>
    )
}

export default serveractiontest