import React , {useState} from 'react'

import noteContext from './noteContext'


const noteState = (props) => {
    const s1 = {
        "name" : 'Ali',
        "class" : 'BSCS'
     }
     const [state, setstate] = useState(s1)
        const update = () => {
            setTimeout(() => {
                setstate({
                    "name" : 'Ali',
                    "class" : 'BSCS'
                })
            }, 1000);
        }

        // console.log("I am NoteState")
        // console.log(state)
        // console.log(update)

    
    return(
        <noteContext.Provider value={{state : state, update : update}}>
            {props.children}
        </noteContext.Provider>   
    )
}



export default noteState