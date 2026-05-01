"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

const avatarUrl =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&face";

const favorites = [
  {
    id: 1,
    category: "Marble",
    name: "Carrara Lumina",
    spec: "60×60cm • Polished Finish",
    color: "#E8854A",
    bg: "linear-gradient(135deg, #f5f0ea 0%, #e8ddd0 40%, #d4c4b0 100%)",
    pattern: "marble",
    liked: true,
  },
  {
    id: 2,
    category: "Ceramic",
    name: "Emerald Glaze",
    spec: "10×30cm • Artisan Texture",
    color: "#E8854A",
    bg: "linear-gradient(135deg, #2d5a45 0%, #1a3d2e 50%, #0f2920 100%)",
    pattern: "ceramic",
    liked: true,
  },
];

const collections = [
  {
    id: 1,
    name: "Kitchen Renovation",
    meta: "12 items • Updated 2d ago",
    bg: "linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)",
    accent: "#c8b89a",
  },
  {
    id: 2,
    name: "Master Ensuite Spa",
    meta: "8 items • Updated 1w ago",
    bg: "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #f0c040 100%)",
    accent: "#8b6914",
  },
  {
    id: 3,
    name: "Outdoor Patio 2024",
    meta: "0 items • New Project",
    bg: "linear-gradient(135deg, #d0d0d0 0%, #e8e8e8 100%)",
    accent: "#888",
  },
];

function MarblePattern() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0 }}
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="turbulence">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02 0.05"
            numOctaves="4"
            seed="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>
      </defs>
      <rect width="300" height="200" fill="#ede5d8" />
      {[...Array(8)].map((_, i) => (
        <path
          key={i}
          d={`M ${-20 + i * 40} 0 Q ${10 + i * 40} ${60 + i * 10} ${i * 40} 200`}
          stroke={`rgba(180,155,120,${0.15 + i * 0.05})`}
          strokeWidth={1 + i * 0.3}
          fill="none"
        />
      ))}
    </svg>
  );
}

function CeramicPattern() {
  const tileW = 60;
  const tileH = 36;
  const gap = 3;
  const cols = 5;
  const rows = 6;
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0 }}
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="300" height="200" fill="#1a3d2e" />
      {[...Array(rows)].map((_, r) =>
        [...Array(cols)].map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * (tileW + gap) + gap / 2}
            y={r * (tileH + gap) + gap / 2}
            width={tileW - gap}
            height={tileH - gap}
            rx="1"
            fill={`rgba(${30 + c * 3}, ${90 + r * 4}, ${60 + c * 2}, 1)`}
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="0.5"
          />
        )),
      )}
      {[...Array(rows)].map((_, r) =>
        [...Array(cols)].map((_, c) => (
          <rect
            key={`shine-${r}-${c}`}
            x={c * (tileW + gap) + gap / 2 + 3}
            y={r * (tileH + gap) + gap / 2 + 3}
            width={16}
            height={6}
            rx="2"
            fill="rgba(255,255,255,0.08)"
          />
        )),
      )}
    </svg>
  );
}

export default function Dashboard() {
  const { data } = authClient.useSession();
  const user = data?.user;
  const [liked, setLiked] = useState({ 1: true, 2: true });

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* Profile */}
      <div style={styles.profileSection}>
        <div style={styles.avatarWrap}>
          <Image
            src={user?.image || "/helo"}
            alt="Elena Thorne"
            // style={styles.avatar}
            width={600}
            height={600}
            className="w-24 h-24 rounded-full "
          />
          <button style={styles.editBadge} aria-label="Edit profile photo">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>

        <h1 style={styles.name}>Elena Thorne</h1>
        <p style={styles.email}>elena.thorne@architecturalstudio.com</p>

        <button style={styles.updateBtn} className="update-btn">
          Update Profile
        </button>
      </div>

      {/* Main content */}
      <div style={styles.mainGrid}>
        {/* Saved Favorites */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Saved Favorites</h2>
            <a href="#" style={styles.viewAll}>
              View All
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: 4 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div style={styles.favGrid}>
            {favorites.map((tile) => (
              <div key={tile.id} style={styles.tileCard} className="tile-card">
                <div style={styles.tileImageWrap}>
                  {tile.pattern === "marble" ? (
                    <MarblePattern />
                  ) : (
                    <CeramicPattern />
                  )}
                  <button
                    style={styles.heartBtn}
                    className="heart-btn"
                    onClick={() => toggleLike(tile.id)}
                    aria-label="Toggle favorite"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={liked[tile.id] ? "#e53935" : "none"}
                      stroke={liked[tile.id] ? "#e53935" : "#666"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
                <div style={styles.tileInfo}>
                  <span style={{ ...styles.tileCategory, color: tile.color }}>
                    {tile.category}
                  </span>
                  <p style={styles.tileName}>{tile.name}</p>
                  <p style={styles.tileSpec}>{tile.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* My Collections */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>My Collections</h2>
            <button style={styles.addBtn} aria-label="Add collection">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>

          <div style={styles.collectionList}>
            {collections.map((col, idx) => (
              <div
                key={col.id}
                style={styles.collectionRow}
                className="collection-row"
              >
                <div style={{ ...styles.collectionThumb, background: col.bg }}>
                  {idx === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "40%",
                          background: "rgba(0,0,0,0.4)",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  )}
                </div>
                <div style={styles.collectionInfo}>
                  <p style={styles.collectionName}>{col.name}</p>
                  <p style={styles.collectionMeta}>{col.meta}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bbb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f2f8",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    padding: "40px 24px",
    boxSizing: "border-box",
  },
  profileSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "48px",
  },
  avatarWrap: {
    position: "relative",
    marginBottom: "16px",
  },
  avatar: {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid white",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    display: "block",
  },
  editBadge: {
    position: "absolute",
    bottom: "2px",
    right: "2px",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "#2563eb",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
  },
  name: {
    margin: "0 0 6px",
    fontSize: "26px",
    fontWeight: "700",
    color: "#111",
    letterSpacing: "-0.5px",
  },
  email: {
    margin: "0 0 20px",
    fontSize: "14px",
    color: "#666",
  },
  updateBtn: {
    padding: "9px 28px",
    borderRadius: "24px",
    border: "1.5px solid #d0d4e0",
    background: "white",
    fontSize: "14px",
    fontWeight: "500",
    color: "#2563eb",
    cursor: "pointer",
    letterSpacing: "0.01em",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
    letterSpacing: "-0.3px",
  },
  viewAll: {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: "500",
    color: "#2563eb",
    textDecoration: "none",
    gap: "2px",
  },
  addBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#555",
    padding: "2px",
    display: "flex",
    alignItems: "center",
  },
  favGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  tileCard: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    cursor: "pointer",
  },
  tileImageWrap: {
    position: "relative",
    height: "160px",
    overflow: "hidden",
  },
  heartBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "white",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 2,
    padding: 0,
  },
  tileInfo: {
    padding: "14px 14px 16px",
  },
  tileCategory: {
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  tileName: {
    margin: "4px 0 4px",
    fontSize: "15px",
    fontWeight: "700",
    color: "#111",
    letterSpacing: "-0.2px",
  },
  tileSpec: {
    margin: 0,
    fontSize: "12px",
    color: "#888",
  },
  collectionList: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  collectionRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
  collectionThumb: {
    width: "52px",
    height: "52px",
    borderRadius: "10px",
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
  },
  collectionInfo: {
    flex: 1,
    minWidth: 0,
  },
  collectionName: {
    margin: "0 0 3px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#111",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  collectionMeta: {
    margin: 0,
    fontSize: "12px",
    color: "#999",
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

  .update-btn:hover {
    background: #f0f4ff;
    border-color: #2563eb;
    transition: all 0.2s ease;
  }

  .tile-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .tile-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
  }

  .heart-btn:hover {
    transform: scale(1.1);
    transition: transform 0.15s ease;
  }

  .collection-row:hover {
    background: #f8f9ff;
    padding-left: 6px;
    transition: all 0.2s ease;
  }
  .collection-row:last-child {
    border-bottom: none;
  }
`;
