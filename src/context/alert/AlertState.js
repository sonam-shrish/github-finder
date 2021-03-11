import {useReducer} from 'react';
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
    REMOVE_ALERT,
    SET_ALERT 
} from '../types'

const AlertState = (props) => {
    const initialState =  null;

    const [state, dispatch] = useReducer(AlertReducer, initialState)


    //set Alert
    const setAlert = (msg, type) => {
    dispatch({type:SET_ALERT,
    payload: {msg, type}})
    // setState({alert:{msg, type}})//send the message and type of alert
    setTimeout(()=> dispatch({
        type: REMOVE_ALERT
    }), 4000)
    
}



    return <AlertContext.Provider 
    value= {{
        alert: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>//making it all available to the entire app
}

export default AlertState