import Q    from '../Q/Q';

/**
 * Send DataOcean Event to Que
 */

export default function SendDataOceanEvent(eventId, attributes){

    var dataOceanEvent = {
        e: eventId,
        a: attributes
    };

    window.DataOcean.userEventCache.push(dataOceanEvent);

    Q.log("Q. BD Event " + eventId + " sent.");

};