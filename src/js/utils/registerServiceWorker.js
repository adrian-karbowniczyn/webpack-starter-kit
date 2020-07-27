const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').then(
        (registration) => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope,
          );
        },
        (err) => {
          console.err('ServiceWorker registration failed: ', err);
        },
      );
    });
  }
};

export default registerServiceWorker;
