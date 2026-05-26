import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoColumn from '../Home/LogoColumn';
import Navbar from '../Utility/Navbar';
import Footer from '../Home/Footer/Footer';
import Topbar from '../Home/Topbar';
import '../css/latestPage.css';

const ARTICLES_PER_PAGE = 6;

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

function LatestPage() {
    const navigate = useNavigate();
    const [allArticles, setAllArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKEND_HOST}/api/v1/articles/list?category=10&format=json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data && data.locations) {
                    let articles = [];
                    Object.keys(data.locations).forEach(key => {
                        if (key !== 'trendingTags' && Array.isArray(data.locations[key])) {
                            articles = [...articles, ...data.locations[key]];
                        }
                    });
                    // Deduplicate by article_id
                    const unique = Array.from(
                        new Map(articles.map(a => [a.article_id, a])).values()
                    );
                    // Sort by date descending
                    unique.sort((a, b) => {
                        const dA = new Date(a.time || a.created_at || 0).getTime();
                        const dB = new Date(b.time || b.created_at || 0).getTime();
                        return dB - dA;
                    });
                    setAllArticles(unique);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
    const startIdx = (currentPage - 1) * ARTICLES_PER_PAGE;
    const currentArticles = allArticles.slice(startIdx, startIdx + ARTICLES_PER_PAGE);

    const handleNavigation = (item) => {
        const { slug } = getCategoryDetails(item);
        navigate(`/${slug}/${item.url}`, { state: { item } });
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Build page numbers array
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <>
            <Topbar />
            <LogoColumn />
            <Navbar />

            <section className="latest-page-section">
                <div className="container">
                    {/* Page Header */}
                    <div className="latest-page-header">
                        <h1 className="latest-page-title" style={{ color: '#d32415', textTransform: 'none', fontSize: '32px' }}>
                            Latest Article
                        </h1>
                        <p className="latest-page-subtitle">Stay updated with the most recent articles</p>
                    </div>

                    {loading ? (
                        <div className="latest-page-loading">
                            <div className="latest-loader"></div>
                            <p>Loading articles...</p>
                        </div>
                    ) : (
                        <>
                            <div className="latest-articles-list">
                                {currentArticles.map((item, index) => {
                                    const { name, slug } = getCategoryDetails(item);
                                    return (
                                        <article key={index} className="latest-article-row">
                                            <a
                                                href={`${process.env.REACT_APP_DOMAIN_NAME}/${slug}/${item.url}`}
                                                className="latest-article-link"
                                                onClick={(e) => { e.preventDefault(); handleNavigation(item); }}
                                            >
                                                <div className="latest-article-img-wrap">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="latest-article-img"
                                                    />
                                                    <span className="latest-cat-badge">{name}</span>
                                                </div>
                                            </a>
                                            <div className="latest-article-body">
                                                <div className="latest-article-meta-top">
                                                    <span className="latest-cat-label">{name}</span>
                                                    <span className="latest-dot">·</span>
                                                    <span className="latest-date">{item.created_at}</span>
                                                </div>
                                                <h2 className="latest-article-title">
                                                    <a
                                                        href={`${process.env.REACT_APP_DOMAIN_NAME}/${slug}/${item.url}`}
                                                        onClick={(e) => { e.preventDefault(); handleNavigation(item); }}
                                                    >
                                                        {item.title}
                                                    </a>
                                                </h2>
                                                {item.description && (
                                                    <p className="latest-article-desc">
                                                        {typeof item.description === 'string'
                                                            ? item.description.replace(/<[^>]+>/g, '').slice(0, 180) + '...'
                                                            : ''}
                                                    </p>
                                                )}
                                                <div className="latest-article-footer">
                                                    <span className="latest-author">
                                                        By <strong>{item.authored_by}</strong>
                                                    </span>
                                                    <button
                                                        className="latest-read-more-btn"
                                                        onClick={() => handleNavigation(item)}
                                                    >
                                                        READ MORE
                                                    </button>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="latest-pagination">
                                    <button
                                        className="latest-page-btn nav-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        aria-label="Previous page"
                                    >
                                        &lsaquo;
                                    </button>

                                    {getPageNumbers().map((page, idx) =>
                                        page === '...' ? (
                                            <span key={`ellipsis-${idx}`} className="latest-page-ellipsis">...</span>
                                        ) : (
                                            <button
                                                key={page}
                                                className={`latest-page-btn${currentPage === page ? ' active' : ''}`}
                                                onClick={() => handlePageChange(page)}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}

                                    <button
                                        className="latest-page-btn nav-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        aria-label="Next page"
                                    >
                                        &rsaquo;
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default LatestPage;
