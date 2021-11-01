first add this:
- npm config set registry http://registry.npmjs.org/

If your organization use proxy , add proxy :

- npm config set proxy "http://username:password@proxy-url:proxy-port"

- npm config set https-proxy "http://username:password@proxy-url:proxy-port"