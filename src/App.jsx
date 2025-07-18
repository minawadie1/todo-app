import React from 'react'
import Todo from './components/Todo'

export const App = () => {
  return (
    <div className='w-full h-[100vh] bg-stone-900 flex justify-center items-center overflow-hidden'>
      <Todo />
    </div>
  )
}
export default App 