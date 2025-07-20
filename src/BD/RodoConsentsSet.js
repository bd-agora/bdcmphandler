import Q    from '../Q/Q';
import GetBdConsentObj              from './GetBdConsentObj';
import TcfGetSpecialFeaturesOptins  from './TcfGetSpecialFeaturesOptins';
import TcfGetPublisherConsents      from './TcfGetPublisherConsents';

/**
 * Set rodoConsents Cookie Based On TCString
 */

export default function RodoConsentsSet(dataOwner, tcString, cmpProvider){

    /**
     * Decode TCSTring
     */

    Q.log("Q. Decoding TC String.");

    const consents      = TcfGetPublisherConsents(tcString);

    const features      = TcfGetSpecialFeaturesOptins(tcString);

    /**
     * Format as BD Consents
     */

    const bdConsentObj  = GetBdConsentObj(consents, features, dataOwner, cmpProvider);

    /**
     * Set rodoConsents Cookie
     */

    const oneYear = new Date(); oneYear.setMonth(oneYear.getMonth() + 12);

    document.cookie = "rodoConsents=" + JSON.stringify(bdConsentObj) + "; path=/; domain=" + Q.getTld() + "; expires=" + oneYear + ";secure; samesite=strict";

    /**
     * Return Obj
     */

    Q.log("Q. Cookie rodoConsents Set.");

    return bdConsentObj

};