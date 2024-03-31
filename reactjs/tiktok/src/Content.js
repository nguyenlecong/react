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
// Cleanup:
//  - Remove listener / Unsubcirbe
//  - Clear timers: setInterval, setTimout, clearInterval, clearTimeout

// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)


const tabs = ['posts', 'comments', 'albums']
const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'HTML CSS'
    },
    {
        id: 3,
        name: 'NodeJS'
    },
]

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [countdown, setCountdown] = useState(180)
    const [avatar, setAvatar] = useState()
    const [lessonId, setLessonId] = useState(1)

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

    useEffect(() => {
        const timerId =  setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        // Cleanup function
        return () => clearInterval(timerId)
    }, [])

    useEffect(() => {
        // Cleanup function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview =  URL.createObjectURL(file)
        setAvatar(file)

        e.target.value = null  // Slect multiple times one image
    }

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // Cleanup function
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <div>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>

            <div>
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
            </div>

            <div>
                <h1>
                    {width}
                </h1>
            </div>
            
            <div>
                <h1>
                    {countdown}
                </h1>
            </div>

            <div>
                <input
                    type='file'
                    onChange={handlePreviewAvatar}
                />
                {avatar && (<img src={avatar.preview} alt='' width='80%'/>)}
            </div>

            <div>
                <ul>
                    {lessons.map(lesson => (
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ? 'red' : '#333'
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                <ul>
                    {posts.map(post => {
                        return (<li key={post.id}>{post.title  || post.name}</li>)
                    })}
                </ul>
            </div>
            
            <div>
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
        </div>
    )
}

export default Content