import Q    from '../Q/Q';
import { TCString } from '@iabtcf/core';

/**
 * TCF Special Features Opt-ins
 */

export default function TcfGetSpecialFeaturesOptins(tcString){

    /**
     * Decode TCSTring
     */

    Q.log("Q. TCF Features...");

    const decoded   = TCString.decode(tcString);

    const features = decoded.specialFeatureOptins;

    const optIns = {

        map: {}, bd: [], tcfVersion: decoded.version_
    };

    for (let id = 1; id <= features.maxId_; id++) {

        optIns.map[id] = features.has(id);

        if(features.has(id)) optIns.bd.push(id);

    }

    /**
     * Return result
     */

    return optIns;
};