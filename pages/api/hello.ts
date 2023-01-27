export default function handler(req, res) {
    res.headers.set('Cache-Control', 's-maxage=1, stale-while-revalidate=999')
    return { hello: 'world' }
}
