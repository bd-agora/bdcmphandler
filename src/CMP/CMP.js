import Q    from '../Q/Q';

/**
 * CMP Handler v.20250718
 */

import GetTcString          from "./GetTcString";
import { OneTrustLsn }      from './OneTrust';

class CMPHandler {
    
    constructor(){

        this.cmp                    = null;

        this.getTcString            = GetTcString;

        this.oneTrustLsn            = OneTrustLsn;

        this.owner                  = null;

        this.params                 = {};
        
    }

    init(cmp, owner){
        
        Q.log("Q. Consent Management Platform Handler Init.");

        if(!cmp || !owner) {

            Q.log("Q. CMP or Owner is Missing. Aborting.", "color: red");

            return;
        }

        /**
         * Set CMP
         */

        this.cmp                    = cmp;

        this.owner                  = owner;

    }
    
    lsn(){

        if(!this.cmp) return;

        switch(this.cmp) {

            case "onetrust":

            default: this.oneTrustLsn(); Q.log("Q. Setting Listener for Consent Change (OneTrust).");
        }

    }
}

let CMP = new CMPHandler();

export default CMP;