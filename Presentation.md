# Vue CLI Genearted App

## BEFORE YOU START PRESENTATION

```bash
yarn build
npx serve dist
```

Open developer tools `Application` tab and clear out

Storage/Local Storage

- Storage/Session Storage
- Storage/IndexdDB
- Cache/Cache Storage/pwa-app-vue-precache
- Serive worker for localhost:5000
- Delete dist folder

## Branch 1-cli-created

### Out of the box (CLI)

All the bits and pieces are there.

- Workbox has been added as part of Vue Plugin `@vue/cli-plugin-pwa`
- A build that auto generates a service worker `yarn build`

However running `yarn serve` will not create a service worker as the Vue CLI plugin only runs up a service worker for production.

See `src/registerServiceWorker.js`

Also this shows various hooks and logs out thier purpose.

Try the following at the command line

```bash
yarn build
npx serve dist
```

You should be prompted that your application is running on <http://localhost:5000>

Open the developer tools `Application` tab and show

1. Service worker

   - Status
   - Lifecycle

1. Cache/Cache Storage

   - HTML
   - JS
   - CSS
   - Images
   - Manifest (see PWA manifest) <https://developer.mozilla.org/en-US/docs/Web/Manifest>

Take offline... you now have an offline web page. While a purely offline experience may not be what you want, it does give you the opportunity to support some features when a user has limited connectivity.

> NOTE: No logic to determine whether or not our application runs totally offline. The hooks in registerServieWorker can be used to augment this behaviour.
