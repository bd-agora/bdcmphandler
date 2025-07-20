import Q    from '../Q/Q';
import { OneTrustTcString }     from './OneTrust';

/**
 * Send DataOcean Event to Que
 */

export default function GetTcString(cmp){

    if(!this.cmp) return;

    /**
     * CMP Specific Logic
     */
    
    let tcString = null;
    
    switch(this.cmp) {

        case "onetrust":

        default: tcString = OneTrustTcString()
    }

    return tcString;

};