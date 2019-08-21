import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const LaunchCard = props => {
    return (
        <Card style={{margin: '10px 50px', width: '400px'}}>
            <Card.Content header={props.launch.name} />
            <img src={props.launch.rocket.imageURL} style={{maxHeight: '250px'}}/>
            <Card.Content description={`Launching on ${props.launch.net}.`} />
            {(props.launch.missions.length >= 1) ? <Card.Content description={`Mission Description: ${props.launch.missions[0].description}`} /> : <Card.Content description={`No mission description is available for this launch.`} />}
            <Card.Content extra>
            <Icon name='map marker alternate' />
            {props.launch.location.name}
            </Card.Content>
        </Card>
    )
}

export default LaunchCard;