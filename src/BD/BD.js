/**
 * BD Handler
 */

import GetQueryParams		from "./GetQueryParams";
import RodoConsentsSet  from "./RodoConsentsSet";

class BDHandler {
    
    constructor(){
        
		this.params					  = GetQueryParams();

    this.rodoConsentsSet  = RodoConsentsSet;

    }

    init(){

        /**
         * DataOcean Properties
         */

        window.DataOcean = window.DataOcean || {};

        /**
         * Events Que
         */
        
        window.DataOcean.userEventCache = window.DataOcean.userEventCache || [];

    }
}

let BD = new BDHandler();

export default BD;