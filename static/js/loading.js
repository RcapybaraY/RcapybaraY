let html = `<div class="fix-front"
                style="display:block;animation: fadeIn 1s ease-in-out forwards; padding: 1rem; background-color: var(--bg-2); border:1rem solid var(--shadow-color); border-radius:2.5rem; text-align:center; top: 50%; left: 50%;">
                <div style="background-color: transparent;width:fit-content">
                    <i class="fa-solid fa-hammer fa-1x" style="background-color: transparent;"></i>
                    This page is still work in progress
                    <i class="fa-solid fa-screwdriver-wrench fa-1x" style="background-color: transparent;"></i>
                </div>
                <img id="loading" alt="loading" src="./assets/loading.gif" width="200vw"
                    style="background-color: transparent;">
            </div>`;

document.getElementById('cover').innerHTML = html;

