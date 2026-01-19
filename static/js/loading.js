function display(show) {
    let displayMode = show ? 'block' : 'none';

    let html = `<div id="popup" class="fix-front"
                style="display:${displayMode};animation: fadeIn 1s ease-in-out forwards; padding: 1rem; background-color: var(--bg-2); border:1rem solid var(--shadow-color); border-radius:2.5rem; text-align:center; top: 50%; left: 50%; position:fixed; transform:translate(-50%, -50%); z-index:9999;">
                <div style="background-color: transparent;width:fit-content">
                    <i class="fa-solid fa-hammer fa-1x" style="background-color: transparent;"></i>
                    This page is still work in progress
                    <i class="fa-solid fa-screwdriver-wrench fa-1x" style="background-color: transparent;"></i>
                </div>
                <img id="loading" alt="loading" src="./assets/loading.gif" width="200vw"
                    style="background-color: transparent;">
                <br>
                <button id="close-btn" style="margin-top:1rem; padding:0.5rem 1rem; border-radius:0.5rem; background:var(--shadow-color); color:white; border:none; cursor:pointer;"onmouseover="this.style.background='var(--bg-2)'; this.style.color='var(--text-color-1)';"
        onmouseout="this.style.background='var(--shadow-color)'; this.style.color='var(--text-color-2)';">
                    I understand there could be any error on this page
                </button>
            </div>`;

    document.getElementById('cover').innerHTML = html;

    // Theme handling
    const theme = localStorage.getItem('theme');
    document.getElementById('loading').classList.remove('invert');
    if (theme === 'dark') {
        document.getElementById('loading').classList.add('invert');
    }

    // Close button handler
    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });
}