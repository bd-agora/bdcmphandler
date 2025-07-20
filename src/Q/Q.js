/**
 * 20240307 / 20241004 v.0.2 
 */

import CookieRead		from "./CookieRead";
import Get				from "./Get";
import GetAll 			from "./GetAll";
import GetTld 			from "./GetTld";
import Log				from "./Log";

class QHelpers {
    
    constructor(){
        
		this.cookieRead		= CookieRead;

		this.get			= Get;
		
		this.getAll			= GetAll;

		this.getTld			= GetTld;

		this.log			= Log;

    }
}

let Q = new QHelpers();

export default Q;