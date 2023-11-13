import React, { useEffect, useRef } from 'react'
import { mount } from "shoppingList/ShoppingListApp";

type Props = {}

const ShoppingList = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(ref.current);
    })

    return (
        <div ref={ref} />
    )
}

export default ShoppingList;