export function onRequest(context) {
    if (context.env.ENVIRONMENT === 'development') {
        return new Response('This is a local environment!');
    } else {
        return new Response('This is a live environment');
    }
}

// export async function onRequest(context) {
//     const url = new URL(context.request.url);

//     context.env.ANALYTICS_ENGINE.writeDataPoint({
//         indexes: [],
//         blobs: [url.hostname, url.pathname],
//         doubles: [],
//     });

//     return new Response('Logged analytic');
// }