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
                    <a href="./main.html">
                        <div class="login-icon">
                            <img src="../images/cat.png">
                        </div>
                    </a>
                    <a href="./main.html">
                        <i class="login-button fa-regular fa-comment"></i>
                    </a>
                    <a href="./main.html">
                        <i class="login-button fa-solid fa-right-to-bracket"></i>
                    </a>
                </div>
            </div>
            <div class="search-bar-display">
                <div class="search-bar">
                    <input class="location-button" type="button" value="Location">
                    <input class="text-input" type="text" placeholder="🔍 Search for anything and everything">
                    <input class="search-button" type="button" value="Search">                
                </div>
            </div>
        </div>
    `
}
function setFooter() {
    bottom.innerHTML += /*html*/ `
    <div class="Bottom">
        <div class="Bottom-Introduce">
            <img src="../images/Xiaoyuan.png">
            <div class="Bottom-button">
                <div>
                    <a href="./index.html">最新消息</a>
                </div>
                <div>
                    <a href="./character.html">角色設定</a>
                </div>
            </div>
            <div class="Bottom-button">
                <div>
                    <a href="./strategy.html">遊戲攻略</a>
                </div>
                <div>
                    <a href="./forums.html">討論區</a>
                </div>
            </div>
            <div class="Bottom-button">
                <div>
                    <a href="./download.html">遊戲下載</a>
                </div>
                <div>
                    <a href="./contact.html">聯絡我們</a>
                </div>
            </div>
        </div>
        <div class="Bottom-Regulations">© 2022 Xiaoyuan’ Adventures All rights reserved.</div>
    </div>
    `
}

setHeader();