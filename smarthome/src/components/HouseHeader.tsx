import { Card, CardHeader, Form, FormItem, Link, Text } from '@ui5/webcomponents-react'

type Props = {
    name: string,
}

const HouseHeader = ({ name }: Props) => {

    const getCardHeader = (): JSX.Element => {
        return (
            <>
                <CardHeader titleText="Details"></CardHeader>
            </>
        )
    }

    return (
        <Card
            header={getCardHeader()}
            style={{
                width: '100%',
                marginBottom: "1rem"
            }}
        >
            <Form
                columnsL={2}
                columnsM={2}
                columnsS={2}
                columnsXL={2}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                style={{
                    alignItems: 'start',
                    padding: '1rem'
                }}
            >
                <FormItem label="Name">
                    <Text>My {name} House</Text>
                </FormItem>
                <FormItem label="Location">
                    <Text>Brno</Text>
                </FormItem>
                <FormItem label="Main door">
                    <Text>Locked</Text>
                </FormItem>
                <FormItem label="Windows">
                    <Text>Locked</Text>
                </FormItem>
                <FormItem label="Avg. temperature">
                    <Text>21</Text>
                </FormItem>
                <FormItem label="Last update">
                    <Text>10/16/2023</Text>
                </FormItem>
            </Form>
        </Card>
    )
}

export default HouseHeader