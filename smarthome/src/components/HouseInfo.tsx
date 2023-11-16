import React from 'react'
import HouseDashboard from './HouseDashboard'
import HouseHeader from './HouseHeader'

type Props = {
    name: string
}

const HouseInfo = ({ name }: Props) => {
    return (
        <div>
            <HouseHeader name={name} />
            <HouseDashboard />
        </div>
    )
}

export default HouseInfo