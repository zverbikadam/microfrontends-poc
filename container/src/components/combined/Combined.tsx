import React from 'react'
import SmartHome from '../remotes/SmartHome'
import Todo from '../remotes/Todo'

type Props = {}

const Combined = (props: Props) => {
    return (
        <>
            <div>
                <SmartHome />
            </div>
            <div>
                <Todo />
            </div>
        </>
    )
}

export default Combined