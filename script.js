// AroLinks Integration for Get Key
function openAroLinks() {
    const apiToken = "828c34db80ec53e94e7174f5f52e0b274a38ab2d";
    const targetUrl = "https://madxrohitbihari.github.io/MADX-KEY/";
    const apiUrl = `https://arolinks.com/api?api=${apiToken}&url=${encodeURIComponent(targetUrl)}`;

    const msgDiv = document.getElementById("status-msg");
    msgDiv.style.color = "var(--accent-gold)";
    msgDiv.innerText = "Generating Link...";
    showToast("Generating Access Link...");
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success" && data.shortenedUrl) {
                window.location.href = data.shortenedUrl;
            } else {
                msgDiv.style.color = "#ff4444";
                msgDiv.innerText = "Error generating link!";
                showToast("Error generating link!");
            }
        })
        .catch(() => {
            msgDiv.style.color = "#ff4444";
            msgDiv.innerText = "Network Error!";
            showToast("Network Error!");
        });
}

// Open YouTube Shorts directly to avoid embedding/configuration errors
function openVideoModal() {
    window.open("https://youtube.com/shorts/pUzO0qK8Pf8?si=DXpOKDWrX9HFbpyp", "_blank");
}

// High Security Key Verification Logic (33 Characters + MAD prefix & APN suffix)
function verifyUserKey() {
    const userKey = document.getElementById("accessKeyInput").value.trim().toUpperCase();
    const msgDiv = document.getElementById("status-msg");
    
    const targetLen = 33; 
    if (userKey.length !== targetLen || !userKey.startsWith("MAD") || !userKey.endsWith("APN")) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠ Invalid key format!";
        showToast("⚠️ Invalid key format!");
        return;
    }

    let usedKeys = JSON.parse(localStorage.getItem("usedKeysRegistry")) || {};
    const currentTime = new Date().getTime();

    if (usedKeys[userKey]) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠️ This key has already been used! Please get a new key.";
        showToast("⚠️ Key already used! Get a new key");
        return;
    }

    usedKeys[userKey] = currentTime;
    localStorage.setItem("usedKeysRegistry", JSON.stringify(usedKeys));

    const keyExpiryDuration = 24 * 60 * 60 * 1000;
    const globalExpiryTime = currentTime + keyExpiryDuration; 
    localStorage.setItem("appAuthExpiry", globalExpiryTime);
    
    msgDiv.style.color = "var(--neon-green)";
    msgDiv.innerText = "Portal Unlocked Successfully!";
    showToast("Portal Unlocked Successfully!");

    setTimeout(() => {
        document.getElementById("authScreenWrapper").style.display = "none";
    }, 600);
}

const activeApps = [  
    { id: 58, name: "APNA COLLEGE", tag: "Coding & tech", img: "https://i.postimg.cc/jS76CFc0/image-search-1783748117436.png", link: "https://madxrohitbihar-app.github.io/Apna-collgeg-pro/" },  
    { id: 1, name: "CAREER WILL", tag: "Competitive exams", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYE_faasYwfAs0rQKDf4GcuoV7_Ws6ZUqWwmIpuHVSw&s", link: "https://madxrohitbihar-app.github.io/Careerwill-2pro/" },  
    { id: 70, name: "CAREERWILL 2", tag: "Advanced live batches", img: "https://i.postimg.cc/fW3pxXNF/image-search-1791302510366.png", link: "https://madxrohitbihar-app.github.io/Careerwill/" },
    { id: 19, name: "CDS JOURNEY", tag: "Defence exam study", img: "https://i.postimg.cc/tRKNBNTh/image-search-1787230401173.webp", link: "https://cds.streamfiles.eu.org/" },
    { id: 9, name: "CW CTET", tag: "Teaching exam courses", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB_URIwHn37n8wv-FR6lhXAS7clYsz2wD_VbdNlJlGVj6S3KVb1i0cXbi&s=10", link: "https://sangam.free.nf/CW/course_index.html" },  
    { id: 66, name: "DISHA ONLINE CLASSES", tag: "Bihar board & comp", img: "https://i.postimg.cc/nL9SkYrp/image-search-1790939575363.png", link: "https://disha-studyapkmod.vercel.app/" },
    { id: 6, name: "FUTUREKUL", tag: "Expert faculty classes", img: "https://i.postimg.cc/CK0zWrN0/image-search-1784218678678.png", link: "https://madxrohitbihar-app.github.io/futurekul-pro/" },  
    { id: 16, name: "GS VISION", tag: "General studies modules", img: "https://i.postimg.cc/YSLHMFjS/image-search-1785250907310.png", link: "https://nexthope.pages.dev/gsvision/" },  
    { id: 10, name: "IFAS ACADEMY", tag: "CSIR NET & GATE", img: "https://i.postimg.cc/XJdZmMRz/image-search-1784219774648.png", link: "https://sangam.free.nf/IFAS/" },  
    { id: 68, name: "KD LIVE", tag: "Govt job test prep", img: "https://i.postimg.cc/brWTQYdG/image-search-1791011692951.jpg", link: "https://madxrohitbihar-app.github.io/Kd-Live/" },
    { id: 2, name: "KHAN GLOBAL STUDIES", tag: "GS & competitive", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCiwfy76ica73byqKIURXqN2Zi2h2Sdw0VJooGkXsyg&s", link: "https://studymate-v14-13-07-11-17.onrender.com/batches" },
    { id: 60, name: "MAGNET BRAIN", tag: "Free school education", img: "https://i.postimg.cc/J4VMkfDz/image-search-1788171765952.png", link: "https://www.magnetbrains.com/" },  
    { id: 72, name: "MISSION JEET", tag: "Targeted exam batches", img: "https://i.postimg.cc/V6j70XqJ/image-search-1792039762960.png", link: "https://madxrohitbihar-app.github.io/Mission-Jeet/" },
    { id: 13, name: "NEXT TOPPERS", tag: "Focused fast batches", img: "https://i.postimg.cc/PqjZCyfr/image-search-1785225080041.jpg", link: "https://madxrohitbihar-app.github.io/Next-Toppers-pro/" },  
    { id: 101, name: "PARMAR ACADEMY", tag: "SSC & Railway prep", img: "https://i.postimg.cc/sxYz6q2p/image-search-1792562519230.webp", link: "https://madxrohitbihar-app.github.io/Parmar-/" },
    { id: 100, name: "PHYSICS WALLAH", tag: "Premium batches & tests", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "https://madxrohitbihar-app.github.io/Physics-pro/" },
    { id: 102, name: "PHYSICS PI", tag: "Conceptual courses", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "http://pi.studyparcham.site" },
    { id: 20, name: "RG VIKRAMJEET", tag: "Maths & reasoning", img: "https://i.postimg.cc/cLqhCJVD/image-search-1791011678203.png", link: "https://madxrohitbihar-app.github.io/Rg-Vikramjeet/" },
    { id: 4, name: "ROJGAR WITH ANKIT", tag: "Affordable exam prep", img: "https://i.postimg.cc/fTfdSHbT/image-search-1783668281136.png", link: "https://madxrohitbihar-app.github.io/RWA-Pro/" },  
    { id: 3, name: "SELECTION WAY", tag: "Dedicated selection classes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquIqVyakcgsPuAsFkSm34nPLKZ_IY2W0-Rj5sd1-T-g&s=10", link: "https://old-meadow-c959.madxrohitbihar.workers.dev/" },  
    { id: 59, name: "STUDY IQ", tag: "UPSC & Civil services", img: "https://i.postimg.cc/850xN6Wz/image-search-1788171724038.jpg", link: "https://spidyiq.vercel.app/" },  
    { id: 8, name: "TEST SERIES", tag: "Mock tests & practice", img: "https://i.postimg.cc/Bb9C4KYz/image-search-1785225815998.png", link: "https://repeatermock.com/" },  
    { id: 67, name: "THE OFFICERS ACADEMY", tag: "BPSC & state PCS", img: "https://i.postimg.cc/4y0hBtmy/image-search-1790939587430.webp", link: "https://studyapkmod-live.vercel.app/?view=courses" },  
    { id: 65, name: "TOPPER'S WISDOM", tag: "Expert guidance courses", img: "https://i.postimg.cc/4x6z4BFq/image-search-1788787742041.jpg", link: "https://studyapkmod-toperwis.vercel.app/" },  
    { id: 12, name: "UNACADEMY", tag: "Comprehensive learning", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://madxrohitbihar-app.github.io/Unacdemy-pro/" },  
    { id: 71, name: "UNACADEMY ONLINE", tag: "Live interactive classes", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://madxrohitbihar-app.github.io/Unacdemy-pro-/" },
    { id: 17, name: "VIBRANT ACADEMY", tag: "JEE advanced coaching", img: "https://i.postimg.cc/mgx3mfCs/image-search-1785251111107.png", link: "https://learnbyakp.site/vibrant" },  
    { id: 61, name: "VIDYAKHUL", tag: "Online school boards", img: "https://i.postimg.cc/9Qr5MJ2g/image-search-1787482867101.png", link: "https://vidyakool.streamfiles.eu.org/" },
    { id: 21, name: "VIDYAGRAM", tag: "School & board studies", img: "https://i.postimg.cc/SNG4r8cJ/image-search-1793448195795.png", link: "https://madxrohitbihar-app.github.io/Vidyagram-pro/" }
];  

let favorites = JSON.parse(localStorage.getItem('userFavs')) || [];  
let currentFilter = 'all';

function openExternal(url) {
    window.open(url, '_blank');
}

function showToast(msg) {  
    const toast = document.getElementById('toast');  
    toast.innerText = msg;  
    toast.classList.add('show');  
    setTimeout(() => toast.classList.remove('show'), 2000);  
}  

function renderApps() {  
    const activeContainer = document.getElementById('active-apps-list');  
    document.getElementById('active-count').innerText = `${activeApps.length} Available`;  

    activeContainer.innerHTML = activeApps.map(app => `  
        <div class="app-card" onclick="openExternal('${app.link}')" data-name="${app.name.toLowerCase()}" data-category="${getAppCategory(app.name)}">  
            <button class="fav-btn ${favorites.includes(app.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${app.id})">  
                <i class="fa-${favorites.includes(app.id) ? 'solid' : 'regular'} fa-heart"></i>  
            </button>  
            <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
            <div class="app-details">  
                <span class="app-name">${app.name}</span>  
                <span class="app-tag">${app.tag}</span>  
            </div>  
        </div>  
    `).join('');  
      
    renderFavorites();  
    filterApps();
}  

function getAppCategory(name) {
    const n = name.toUpperCase();
    if (n.includes('PHYSICS') || n.includes('APNA') || n.includes('VIBRANT') || n.includes('IFAS')) return 'jee';
    if (n.includes('CAREER') || n.includes('KD') || n.includes('PARMAR') || n.includes('RG') || n.includes('STUDY IQ') || n.includes('OFFICERS') || n.includes('KHAN')) return 'govt';
    if (n.includes('DISHA') || n.includes('MAGNET') || n.includes('VIDYAKHUL') || n.includes('VIDYAGRAM')) return 'board';
    return 'govt';
}

function filterCategory(category, element) {
    currentFilter = category;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
    filterApps();
}

function toggleFavorite(id) {  
    if (favorites.includes(id)) {  
        favorites = favorites.filter(favId => favId !== id);  
        showToast("Removed from Favorites");  
    } else {  
        favorites.push(id);  
        showToast("Added to Favorites");  
    }  
    localStorage.setItem('userFavs', JSON.stringify(favorites));  
    renderApps();  
}  

function renderFavorites() {  
    const favContainer = document.getElementById('favorites-apps-list');  
    const favApps = activeApps.filter(app => favorites.includes(app.id));  
      
    if (favApps.length === 0) {  
        favContainer.innerHTML = `<div class="no-data">No favorite apps saved yet.</div>`;  
        return;  
    }  

    favContainer.innerHTML = favApps.map(app => `  
        <div class="app-card" onclick="openExternal('${app.link}')">  
            <button class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite(${app.id})">  
                <i class="fa-solid fa-heart"></i>  
            </button>  
            <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
            <div class="app-details">  
                <span class="app-name">${app.name}</span>  
                <span class="app-tag">${app.tag}</span>  
            </div>  
        </div>  
    `).join('');  
}  

function switchTab(tabName, element) {  
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));  
    if(element) element.classList.add('active');  

    ['apps', 'favorites'].forEach(tab => {  
        document.getElementById(`tab-${tab}`).classList.add('hidden');  
    });  

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
    
    sessionStorage.setItem('currentActiveTab', tabName);
}  

function filterApps() {  
    const query = document.getElementById('searchInput').value.toLowerCase();  
    document.querySelectorAll('#active-apps-list .app-card').forEach(card => {  
        const name = card.getAttribute('data-name');  
        const category = card.getAttribute('data-category');
        const matchesQuery = name && name.includes(query);
        const matchesCategory = (currentFilter === 'all' || category === currentFilter);
        
        card.style.display = (matchesQuery && matchesCategory) ? 'flex' : 'none';  
    });
}  

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
});

function checkAuthStatus() {
    const expiryTime = localStorage.getItem("appAuthExpiry");
    const currentTime = new Date().getTime();
    const isVerified = expiryTime && currentTime < expiryTime;

    if (isVerified) {
        document.getElementById('authScreenWrapper').style.display = 'none';
    } else {
        document.getElementById('authScreenWrapper').style.display = 'flex';
    }
}

window.addEventListener('pageshow', function(event) {
    checkAuthStatus();
});

document.addEventListener("DOMContentLoaded", () => {  
    const splash = document.getElementById("splash-screen");  
      
    if (!sessionStorage.getItem('splashShown')) {  
        setTimeout(() => {  
            splash.classList.add("hide-splash");  
            sessionStorage.setItem('splashShown', 'true');  
        }, 4000);  
    } else {  
        splash.style.display = 'none';  
    }  

    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {  
            document.getElementById('popupModal').style.display = 'flex';  
        }, 500);
    }

    checkAuthStatus();

    const savedTab = sessionStorage.getItem('currentActiveTab');
    if (savedTab) {
        const targetNav = document.getElementById(`nav-${savedTab}`);
        if (targetNav) {
            switchTab(savedTab, targetNav);
        }
    }
});  

function closePopupAndShowAuth() {  
    document.getElementById('popupModal').style.display = 'none';  
    sessionStorage.setItem('popupShown', 'true'); 

    checkAuthStatus();
}  

renderApps();
