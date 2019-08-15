import React from 'react'

import LaunchCard from './LaunchCard'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getLaunch } from '../actions';

const LaunchList = props => {
    return (
        <>
        <h1>Find Launches!</h1>
        <button onClick={props.getLaunch}> Get the next 5 rocket launches</button>
        {props.isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height="100" width="100" />
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