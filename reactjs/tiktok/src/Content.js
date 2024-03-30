import { useEffect, useState } from 'react'


// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
//  - Ít dùng
// 2. useEffect(callback, [])
//  - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
//  - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// -----------------------------
// 1. Callback luôn được gọi sau khi component mounted


const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type])

    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            {tabs.map(tab => {
                return (<button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick = {() => setType(tab)}
                    >
                        {tab}
                    </button>)
            })}

            <ul>
                {posts.map(post => {
                    return (<li key={post.id}>{post.title  || post.name}</li>)
                })}
            </ul>
        </div>
    )
}

export default Content