    import { useState, useEffect } from "react";
    import { landingStyles as styles } from "../styles/landing";
    import mapBg from "../assets/mapbg.png";
    //Full Screen Landing page

    export default function LandingPage({ onEnter, searchInput, setSearchInput }) {
    const [visible, setVisible] = useState(false);
    

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(timer);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchInput.trim()) {
        onEnter();
        }
    };

    return (
        <>
        <style>{`
         @keyframes shine {
        0% { background-position: 200% center; }
        100% { background-position: -200% center; }
        }
        `}</style>
        <div style={styles.page}>
            <img
                src={mapBg}
                alt=""
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.5,        
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
        <nav style={styles.nav}>
             <div style={styles.titleRibbon}>
                <div style={styles.titleBar} />
                <span style={styles.navLogo}>Third Space</span>
            </div>
            <span style={styles.navTag}>A Smart City Project</span>
        </nav>

        <main style={styles.main}>

            <p style={{ ...styles.label, opacity: visible ? 1 : 0 }}>
            Neighborhood Social Score
            </p>

            <h1 style={{ ...styles.headline, opacity: visible ? 1 : 0 }}>
            Find your<br /><span style={styles.shineText}>Third Space.</span>
            </h1>

            <p style={{ ...styles.description, opacity: visible ? 1 : 0 }}>
            Every city has places where people actually connect - cafés, parks,
            libraries, community centers. We map them, score them, and help you
            find where community thrives.
            </p>

            {/* Search bar */}
            <div style={{ ...styles.searchRow, opacity: visible ? 1 : 0 }}>
            <input
                style={styles.input}
                placeholder="Enter a neighborhood or city..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
            />
            <button
                style={styles.button}
                onClick={() => searchInput.trim() && onEnter()}
            >
                Explore →
            </button>
            </div>

            <p style={{ ...styles.hint, opacity: visible ? 1 : 0 }}>
            Try "Rolla, MO" or "Brooklyn, NY"
            </p>
            
            <footer style= {styles.footer}>
                <span>Powered by Google Places API</span>
                <span>Common Ground · Smart City Pickhacks 2026</span>
            </footer>

        </main>

        </div>
    </>
    );
    }