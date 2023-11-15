import React, { useEffect, useRef } from 'react';
import { mount } from "welcomePage/WelcomePageApp";

type Props = {}

const WelcomePage = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(ref.current!);
    })

    return (
        <div ref={ref} />
    )
}

export default WelcomePage;