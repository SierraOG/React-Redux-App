import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRange } from 'react-date-range';

import { setDateRange } from '../actions'
 
class Calendar extends Component {
    handleSelect(range){
        console.log(range);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
        setDateRange(range)
    }

    render(){
        return (
            <>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        dateRange: state.dateRange,
    };
};
export default connect(
    mapStateToProps,
    { setDateRange }
)(Calendar);