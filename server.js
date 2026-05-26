const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;
const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || "https://backend.aslikahani.com";

// Article categories matching the React Router paths
const articleCategories = [
    'Home', 'Entertainment', 'Education', 'Technology', 
    'Business', 'Travel', 'Lifestyle', 'Health', 
    'Sports', 'Art-and-Culture'
];

// Serve static assets from the build folder without sending index.html for root (index: false)
app.use(express.static(path.join(__dirname, 'build'), { index: false }));

// Catch-all route to serve index.html
app.get('*', async (req, res) => {
    const indexPath = path.join(__dirname, 'build', 'index.html');
    
    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error reading index.html', err);
            return res.status(500).send('An error occurred');
        }

        const pathSegments = req.path.split('/').filter(Boolean);
        
        // Check if this looks like an article route (e.g. /Home/some-slug)
        if (pathSegments.length === 2 && articleCategories.some(cat => cat.toLowerCase() === pathSegments[0].toLowerCase())) {
            const slug = pathSegments[1];
            
            try {
                // Fetch article data
                const response = await fetch(`${BACKEND_HOST}/api/v1/articles/get?url=${slug}`);
                
                if (response.ok) {
                    const article = await response.json();
                    
                    if (article && article.title) {
                        // Inject OG meta tags
                        const title = article.title.replace(/"/g, '&quot;');
                        const description = article.description ? article.description.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;') : "Read this article on Aslikahani";
                        const image = article.image || "https://aslikahani.com/logo_social.png";
                        const url = `https://aslikahani.com${req.path}`;
                        
                        // Replace default tags
                        htmlData = htmlData.replace(
                            /<title>Asli Kahani<\/title>/gi, 
                            `<title>${title} - Aslikahani</title>`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/gi,
                            `<meta property="og:title" content="${title}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/gi,
                            `<meta property="og:description" content="${description}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/gi,
                            `<meta property="og:image" content="${image}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/gi,
                            `<meta property="og:url" content="${url}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/gi,
                            `<meta name="twitter:title" content="${title}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/gi,
                            `<meta name="twitter:description" content="${description}" />`
                        );
                        
                        htmlData = htmlData.replace(
                            /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/gi,
                            `<meta name="twitter:image" content="${image}" />`
                        );
                    }
                }
            } catch (error) {
                console.error("Error fetching article for OG tags:", error);
                // If fetching fails, we just send the unmodified htmlData (default tags)
            }
        }
        
        return res.send(htmlData);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
