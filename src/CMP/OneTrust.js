import RodoConsentsSet      from '../BD/RodoConsentsSet';
import SendDataOceanEvent   from '../BD/SendDataOceanEvent';
import Q    from '../Q/Q';

/**
 * Send DataOcean Event to Que
 */

export function OneTrustTcString(){

    Q.log("Q. Getting TC String (OneTrust).");

    const oneTrustCookie = Q.cookieRead("eupubconsent-v2");

    return oneTrustCookie;

};

export function OneTrustLsn(){

    if (typeof window.OptanonWrapper === 'function') {
    
        const originalOptanonWrapper = window.OptanonWrapper;
    }

    window.OptanonWrapper = function () {

        // Onload Event
    
        const event = new Event('oneTrustLoaded');
    
        document.dispatchEvent(event);
    
        window.OneTrustLoaded = true;

        // Existing function
        
        originalOptanonWrapper();

    };

    document.addEventListener('oneTrustLoaded', () => {
    
        Q.log("Q. OneTrust is ready.");
    
        window.OneTrust.OnConsentChanged((() => {
            
            Q.log("Q. BigData - OnConsentChanged");

            const tcString = this.getTcString();

            /**
             * Set Consent Cookie
             */
            
            const bdConsentObj = (tcString) ? RodoConsentsSet(this.owner, tcString, this.cmp) : null;

            Q.log("Q. Consent Data: " + JSON.stringify(bdConsentObj));

            /**
             * Send BD Event
             */

            SendDataOceanEvent(455, bdConsentObj);
                
        }));
    });
}

