import React from 'react'

import LaunchCard from './LaunchCard'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getLaunch } from '../actions';

const LaunchList = props => {
    return (
        <>
        <h1>Find Launches!</h1>
        <button onClick={props.getLaunch}>
          {props.isLoading ? (
            <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
          ) : (
            'Get The Next 5 Launches'
          )}
        </button>
        {props.launches &&
          props.launches.map(launch => <LaunchCard launch={launch} />)}
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