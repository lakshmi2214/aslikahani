export default async function handler(req, res) {
    const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || "https://backend.aslikahani.com";
    
    // We get the host from the request headers to construct the absolute URL
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    
    // The request path will be something like /Home/slug
    const pathSegments = req.url.split('/').filter(Boolean);
    const slug = pathSegments[pathSegments.length - 1]; 
    
    try {
        // Fetch the built index.html from our own deployment
        // Vercel serverless functions can't reliably read the output file system in Create React App,
        // so we fetch it over HTTP from the same deployment.
        const htmlRes = await fetch(`${protocol}://${host}/index.html`);
        let htmlData = await htmlRes.text();
        
        // Fetch article data
        const articleRes = await fetch(`${BACKEND_HOST}/api/v1/articles/get?url=${slug}`);
        
        if (articleRes.ok) {
            const article = await articleRes.json();
            
            if (article && article.title) {
                const title = article.title.replace(/"/g, '&quot;');
                const description = article.description ? article.description.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;') : "Read this article on Aslikahani";
                const image = article.image || `https://aslikahani.com/logo_social.png`;
                const url = `${protocol}://${host}${req.url}`;
                
                // Replace default tags in the HTML string
                htmlData = htmlData.replace(
                    /<title>Asli Kahani<\/title>/gi, 
                    `<title>${title} - Aslikahani</title>`
                );
                
                htmlData = htmlData.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/gi, `<meta property="og:title" content="${title}" />`);
                htmlData = htmlData.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/gi, `<meta property="og:description" content="${description}" />`);
                htmlData = htmlData.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/gi, `<meta property="og:image" content="${image}" />`);
                htmlData = htmlData.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/gi, `<meta property="og:url" content="${url}" />`);
                
                htmlData = htmlData.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/gi, `<meta name="twitter:title" content="${title}" />`);
                htmlData = htmlData.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/gi, `<meta name="twitter:description" content="${description}" />`);
                htmlData = htmlData.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/gi, `<meta name="twitter:image" content="${image}" />`);
            }
        }
        
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(htmlData);
    } catch (error) {
        console.error("Error in OG function:", error);
        res.status(500).send("Error generating preview");
    }
}
