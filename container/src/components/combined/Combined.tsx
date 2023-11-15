import React from 'react'
import SmartHome from '../remotes/SmartHome'
import Todo from '../remotes/Todo'

type Props = {}

const Combined = (props: Props) => {
    return (
        <div>
            <div>
                <SmartHome />
            </div>
            <div>
                <Todo />
            </div>
        </div>
    )
}

export default Combined