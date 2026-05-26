import React from 'react';
import { useNavigate } from "react-router-dom";

// Helper to resolve actual category name and slug from article data
const getCategoryDetails = (item) => {
    if (!item) return { name: "General", slug: "Home" };

    let name = item.category_name || item.category || "General";

    // If it's "Home" or empty, resolve it by keywords in title/url
    if (name.trim().toLowerCase() === 'home' || !name) {
        const url = (item.url || "").toLowerCase();
        const title = (item.title || "").toLowerCase();

        if (url.includes('earth-day') || url.includes('education') || title.includes('earth day') || title.includes('education')) {
            name = "Education";
        } else if (url.includes('artemis') || url.includes('moon') || url.includes('technology') || url.includes('science') || title.includes('artemis') || title.includes('moon') || title.includes('technology')) {
            name = "Technology";
        } else if (url.includes('india-are-unstoppable') || url.includes('sports') || url.includes('champion') || title.includes('unstoppable') || title.includes('champion') || title.includes('sports')) {
            name = "Sports";
        } else if (url.includes('lifestyle') || title.includes('lifestyle')) {
            name = "Lifestyle";
        } else if (url.includes('business') || title.includes('business')) {
            name = "Business";
        } else if (url.includes('travel') || title.includes('travel')) {
            name = "Travel";
        } else if (url.includes('entertainment') || title.includes('entertainment')) {
            name = "Entertainment";
        } else if (url.includes('health') || title.includes('health')) {
            name = "Health";
        } else if (url.includes('art') || url.includes('culture') || title.includes('art') || title.includes('culture')) {
            name = "Art & Culture";
        } else {
            name = "General";
        }
    }

    // Standardize slug matching Router.js routes
    let slug = name;
    if (name === "Art & Culture" || name === "Art-and-Culture" || name.toLowerCase().includes('art')) {
        name = "Art & Culture";
        slug = "Art-and-Culture";
    } else {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        slug = name;
    }

    return { name, slug };
};

function LatestStories(props) {
    const navigate = useNavigate();

    const handleNavigation = (item) => {
        const { slug } = getCategoryDetails(item);
        navigate(`/${slug}/${item.url}`, { state: { item } });
    };

    const handleSeeAll = (e) => {
        e.preventDefault();
        navigate('/latest');
    };

    // Take the first 3 items from LatestPost for the Latest Stories preview
    const stories = props.dataObject?.locations?.LatestPost?.slice(0, 3) || [];

    return (
        <div className="updt-content-wrapper">
            <div className="updt-section">
                <div className='arctl-headings'>
                    <h2 className="updt-section-title" style={{ color: '#d32415', textTransform: 'none', fontSize: '28px' }}>
                        Latest Article
                    </h2>
                    <button onClick={handleSeeAll}>View All</button>
                </div>
                <div className="updt-articles">
                    {stories.map((item, index) => {
                        const { name, slug } = getCategoryDetails(item);
                        return (
                            <a className='mst-anchor' key={index} href={process.env.REACT_APP_DOMAIN_NAME + '/' + slug + '/' + item.url} onClick={(e) => { e.preventDefault(); handleNavigation(item); }}>
                                <div className="updt-article">
                                    <div className='updt-artcl' style={{ position: 'relative' }}>
                                        <img alt={item.title} className="img-fluid" src={item.image} />
                                        <span className="category-badge">{name}</span>
                                    </div>
                                    <div className="updt-article-text">
                                        <h3 style={{ color: '#111' }}>{item.title}</h3>
                                        <p>{item.authored_by}</p>
                                        <p>{item.created_at}</p>
                                        <a href={process.env.REACT_APP_DOMAIN_NAME + '/' + slug + '/' + item.url} onClick={(e) => { e.preventDefault(); handleNavigation(item); }}>READ MORE</a>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LatestStories;
