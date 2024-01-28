import React , {useContext , useEffect} from 'react'
import DataPass from '../components/DataPass'
import noteContext from '../context/notes/noteContext'

const Q3 = () => {
  const dummy = useContext(noteContext)
  useEffect(() => {
    dummy.update()
  }, [])
  console.log(dummy)
  return (
    <div>
     <DataPass/>
    </div>
  )
}

export default Q3
