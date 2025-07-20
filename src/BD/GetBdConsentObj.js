import Q    from '../Q/Q';

/**
 * TCF Consents
 */

export default function GetBdConsentObj(consents, features, dataOwner, cmpProvider){

    /**
     * Big Data Consent Object
     */

    Q.log("Q. BD Consents Object...");


    const bdConsentObj = {

        "tcf_r"     : true,

        "tcf_pr"    : cmpProvider,

        "tcf_v"     : consents.tcfVersion,

        "tcf_c"     : consents.bd.toString(),

        "tcf_sf"    : features.bd.toString(),

        "tcf_pa"    : dataOwner

    };

    /**
     * Return result
     */

    return bdConsentObj;
};