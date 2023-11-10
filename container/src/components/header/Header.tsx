import { ShellBar, StandardListItem, Avatar, Input, Icon, ShellBarItem } from '@ui5/webcomponents-react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <ShellBar
            logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
            menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem></>}
            primaryTitle="Demo PoC"
            profile={<Avatar><Icon name='person-placeholder' /></Avatar>}
            searchField={<Input icon={<Icon interactive name="search" />} showClearIcon />}
            showProductSwitch
        >
            <ShellBarItem
                icon="question-mark"
                text="question"
            />
            <ShellBarItem
                icon="bell"
                text="bell"
            />
        </ShellBar>
    )
}

export default Header