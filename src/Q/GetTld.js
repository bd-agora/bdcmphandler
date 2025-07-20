/**
 * v.0.1 20250718
 */

export default function GetTld(name){

    const hostname = location.hostname;

    const parts = hostname.split('.');

    if (parts.length >= 2) {

        return parts.slice(-2).join('.');
            
    }

    return hostname; // fallback (e.g., localhost)

};