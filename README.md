# Inline Consent Script Integration

This project includes a custom inline JavaScript snippet used to manage user consent information and dynamically load a module script based on specific configuration parameters. It is designed to integrate with privacy compliance tools such as OneTrust.

## 🚀 Overview

The inline script performs the following tasks:
- Parses a `rodoConsents` cookie to retrieve consent settings.
- Extends the global `window.site_details` object with consent data.
- Loads a module script (`bdCmpHandler.js`) with query parameters indicating the data owner and CMP provider.

## 🔧 Script Details

```html
<script>
(function(){
    const url = "https://storage.googleapis.com/bd-ago/bdCmpHandler.js";
    const dataOwner = "hel";
    const cmp = "onetrust";
    const rodoCookie = document.cookie.match('(^|;)\\s*rodoConsents\\s*=\\s*([^;]+)');
    window.site_details = window.site_details || {};

    if (rodoCookie) {
        try {
            const rodoConsents = JSON.parse(rodoCookie.pop());
            window.site_details = { ...window.site_details, ...rodoConsents };
        } catch(e){}
    } else {
        window.site_details.tcf_r = false;
    }

    let h = document.head;
    let s = document.createElement("script");
    s.type = 'module';
    s.id = "bdcmphandler";
    s.src = url + '?o=' + dataOwner + '&cmp=' + cmp;
    h.appendChild(s);
})();
</script>
```

## Configuration

- dataOwner: Identifier for the organization or entity responsible for the data (e.g. "hel").

- cmp: The Consent Management Platform in use (e.g. "onetrust").

## 📦 Usage

Include the script in your HTML:
- in <head> section
- before the <script data-n-head="ssr" type="text/javascript" data-hid="squid" src="https://squid.gazeta.pl/bdtrck/getScript/bluewhale?src=15"></script>

Ensure the rodoConsents cookie is being set properly.

Host or proxy the bdCmpHandler.js module to serve it from the correct location.

## ⚠️ Notes

Replace {_SERVER_LOCATION_} with your production server URL when deploying to a live environment.


## 📜 License

This project is licensed under the MIT License.