/**
 * v.0.2 20241005
 */

export default function Log(msg, prop = null){

	/**
	 * Return Debug is Off
	 */
	
	if(!window.debugOn) return;

	/**
	 * Write Message
	 */

	if(prop) { 
		
		console.log('%c' + msg, prop);
	
	} else { 
		
		console.log(msg); 
	
	}

};