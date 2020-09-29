# ut-port-infobip

Sending SMS with infobip system

## In order to use the module you need to add the following configuration

```json
"infobip": {
        "logLevel": "error",
        "url": "https://yg66g.api.infobip.com",
        "uri": "/sms/2/text/single",
        "method": "POST",
        "raw": {
            "headers": {
                "Authorization": "App 123...."
            }
        }
    }
```

and then call it with

```js
await importMethod('infobip.send')({
    from: '',
    to: '',
    text: ''
});
```
