import BD   from '../src/BD/BD';
import CMP  from '../src/CMP/CMP'
import Q    from '../src/Q/Q';

/**
 * BigData Consent Data Handler. 20250711.
 */

//window.debugOn = true;

Q.log("Q. Debug On.");

/**
 * DataOcean Handler
 */

BD.init();

const owner = BD.params.dataOwner, cmp = BD.params.cmpProvider;  Q.log("Q. Data Owner ID: " + owner +". CMP: " + cmp + ".");

/**
 * CMP Handler & Listener
 */

CMP.init(cmp, owner); CMP.lsn();

/**
 * Set or Update rodoConsents Cookie
 */

const tcString = CMP.getTcString(), bdConsentObj = (tcString) ? BD.rodoConsentsSet(owner, tcString, cmp) : null;

/**
 * Consent Data
 */

Q.log("Q. Consent Data: " + JSON.stringify(bdConsentObj));

