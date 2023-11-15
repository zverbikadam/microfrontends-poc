import React, { useEffect, useRef } from 'react'
import { mount } from "smarthome/SmartHomeApp";

type Props = {}

const SmartHome = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(ref.current!);
    })

    return (
        <div ref={ref} />
    )
}

export default SmartHome;