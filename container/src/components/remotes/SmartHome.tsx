import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { mount } from "smarthome/SmartHomeApp";

type Props = {}

const SmartHome = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("mounting smarthome, current pathname is:")
        console.log(location.pathname)
        mount(ref.current!, {
            onNavigate: (pathname: string) => {
                console.log("Container noticed navigation for location:")
                console.log(location);
                if (location.pathname !== pathname) {
                    navigate(pathname)
                }
            }
        });
    }, [])

    return (
        <div ref={ref} />
    )
}

export default SmartHome;