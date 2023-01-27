export default function handler(req, res) {
    res.setHeaders('Cache-Control', 'max-age=0, s-maxage=5, stale-while-revalidate=999')
    return { hello: 'world' }
}
