import Q    from '../Q/Q';
import { TCString } from '@iabtcf/core';

/**
 * TCF Consents
 */

export default function TcfGetPublisherConsents(tcString){

    /**
     * Decode TCSTring
     */

    Q.log("Q. TCF Consents...");

    const decoded   = TCString.decode(tcString);

    const publisherConsents = decoded.publisherConsents;

    const consents = {

        map: {}, bd: [], tcfVersion: decoded.version_

    };

    for (let id = 1; id <= publisherConsents.maxId_; id++) {

        consents.map[id] = publisherConsents.has(id);

        if(publisherConsents.has(id)) consents.bd.push(id);

    }

    /**
     * Return result
     */

    return consents;
};