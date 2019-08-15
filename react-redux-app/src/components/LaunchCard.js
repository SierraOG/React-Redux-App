import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const LaunchCard = props => {
    return (
        <Card style={{margin: '10px 50px'}}>
            <Card.Content header={props.launch.name} />
            <Image src={props.launch.rocket.imageURL} wrapped ui={false} />
            <Card.Content description={`Launching on ${props.launch.net}.`} />
            <Card.Content description={`Mission Description: ${props.launch.missions[0].description}`} />
            <Card.Content extra>
            <Icon name='map marker alternate' />
            {props.launch.location.name}
            </Card.Content>
        </Card>
    )
}

export default LaunchCard;