export async function onRequest(context) {
    const url = new URL(context.request.url);

    context.env.TEST.writeDataPoint({
        indexes: [],
        blobs: [url.hostname, url.pathname],
        doubles: [],
    });

    return new Response('Logged analytic');
}