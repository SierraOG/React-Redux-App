import axios from 'axios';

export const FETCH_LAUNCH_START = 'FETCH_LAUNCH_START';
export const FETCH_LAUNCH_SUCCESS = 'FETCH_LAUNCH_SUCCESS';
export const FETCH_LAUNCH_FAIL = 'FETCH_LAUNCH_FAIL';

export const getLaunch = () => dispatch => {
  dispatch({ type: FETCH_LAUNCH_START });
  axios
    .get('https://launchlibrary.net/1.3/launch/next/5')
    .then(res =>
        {
        console.log(res.data.launches)
        dispatch({ type: FETCH_LAUNCH_SUCCESS, payload: res.data.launches })
    }
    )
    .catch(err => dispatch({ type: FETCH_LAUNCH_FAIL, payload: err }));
};