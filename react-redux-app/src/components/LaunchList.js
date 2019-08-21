import React from 'react'

import LaunchCard from './LaunchCard'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Button, Modal } from 'semantic-ui-react'

import { getLaunch } from '../actions'

import Calendar from './Calendar'

const LaunchList = props => {
    return (
        <>
        <header style={{backgroundColor: 'black', color: 'white', borderRadius: '0 0 10px 10px'}}>
            <h1 style={{ height: '100px', padding: '25px'}}>Find Rocket Launches!</h1>
            <div style={{display: 'flex'}}>
                <Button style={{margin: '20px auto'}} onClick={props.getLaunch}> Find the next 5 upcoming rocket launches ></Button>
                {/*<h2>- or -</h2>
                 <Modal trigger={<Button style={{margin: '20px auto'}}>Search for launches by date range ></Button>}>
                    <Modal.Header>Select a Date Range</Modal.Header>
                    <Modal.Content> 
                        <Calendar/> 
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='green'>Submit
                    </Button>
                    </Modal.Actions>
                </Modal> */}
            </div>
        </header>
        {props.isLoading ? (
            <Loader type="TailSpin" color="#686868" height="100" width="100" />
          ) : (
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap'}}>
            {props.launches &&
                props.launches.map(launch => <LaunchCard key={launch.id} launch={launch} />)}
            </div>
          )}
      </>
    );
};
  
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        launches: state.launches
    };
};
export default connect(
    mapStateToProps,
    { getLaunch }
)(LaunchList);