import { useReducer, useRef } from 'react'
import logger from './logger'

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch


// // Init state
// const initState = 0

// // Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // Reducer
// const reducer = (state, action) => {
//   switch(action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }

// Todo app
// 1. Init state

// 2. Actions
import {addJob, setJob, deleteJob} from './actions'

// 3. Reducer
import reducer, {initState} from './reducer'

// Dispatch
function TodoApp() {
  // const [count, setCount] = useState(0)
  // const [count, dispatch] = useReducer(reducer, initState)
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const {job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))  // Clear input

    inputRef.current.focus()
  }

  return (
    <div>
      {/* <h1>{count}</h1>
      <button
        // onClick={() => setCount(count - 1)}
          onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
      <button
        // onClick={() => setCount(count + 1)}
          onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button> */}

      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}
            <span onClick={() => {dispatch(deleteJob(index))}}> 
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default TodoApp;
