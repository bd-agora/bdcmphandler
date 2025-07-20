import Q    from '../Q/Q';

/**
 * Get Data Ownership
 */

export default function GetQueryParams(){

    let params = {};

    /**
     * Script Query Params
     */

    const currentScript = Q.get("#bdcmphandler");

    const srcUrl = new URL(currentScript.src);

    for (const [key, value] of srcUrl.searchParams.entries()) {

        params[key] = value;

    }

    /**
     * Named Params
     */

    params.dataOwner    = params.o ? params.o + ',ago' : 'ago'; /** Business Data Owner */

    params.cmpProvider  = params.cmp ? params.cmp : 'onetrust'; /** Consent Management Platform */

    return params;

};