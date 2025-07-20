/**
 * v.0.1 20250718
 */

export default function CookieRead(name){

    const result = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');

    return result ? result.pop() : null;

};