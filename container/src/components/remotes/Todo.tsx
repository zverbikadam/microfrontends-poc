import React, { useEffect, useRef } from 'react'
import { mount } from "todo/TodoApp";

type Props = {}

const Todo = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(ref.current!);
    })

    return (
        <div ref={ref} />
    )
}

export default Todo;