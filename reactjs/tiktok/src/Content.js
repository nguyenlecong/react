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
// 2. Cleanup function luôn được gọi trước khi component unmounted


const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = title
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {setShowGoToTop(window.scrollY >= 200)}

        window.addEventListener('scroll', handleScroll)
        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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

            <h1>
                {width}
            </h1>

            <ul>
                {posts.map(post => {
                    return (<li key={post.id}>{post.title  || post.name}</li>)
                })}
            </ul>

            {showGoToTop && (
                <button 
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go To Top
                </button>
            )}
        </div>
    )
}

export default Content