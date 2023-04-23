const herder = document.querySelector("header");
const bottom = document.querySelector("footer");

function setHeader() {
    herder.innerHTML += /*html*/ `
        <div class="navbar-format-display">
            <div class="navbar-button-format">
                <a href="./main.html">
                    <span class="navbar-title">CHANGE</span>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>Electronics</span>
                    </div>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>Fashion</span>
                    </div>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>Services</span>
                    </div>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>Cars</span>
                    </div>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>Property</span>
                    </div>
                </a>
                <a href="./main.html">
                    <div class="navbar-button">
                        <span>All Property</span>
                    </div>
                </a>
                <div class="login-function">
                    <a href="profile.html">
                        <div class="login-icon">
                            <img src="../images/cat.png">
                        </div>
                    </a>
                    <a href="chat.html">
                        <i class="login-button fa-regular fa-comment"></i>
                    </a>
                    <a href="index.html">
                        <i class="login-button fa-solid fa-right-to-bracket"></i>
                    </a>
                </div>
            </div>
            <div class="search-bar-display">
                <div class="search-bar">
                <select id="location" class="location-select" required>
                <option value="HK">Hong Kong</option>
                <option value="TW">Tai Wan</option>
                <option value="JP">Japan</option>
                <option value="MU">Macau</option>
            </select>

                    <input class="text-input" type="text" placeholder="🔍 Search for anything and everything">
                    <input class="search-button" type="button" value="Search">                
                </div>
            </div>
        </div>
    `
}
function setFooter() {
    bottom.innerHTML += /*html*/ `
    <div class="copyright-container">
        © 2023 CHANGE
    </div> 
    `
}

setHeader();
setFooter();