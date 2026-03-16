/* 前端口令验证 - AI考古课程网站 */
(function() {
    const PASSCODE = 'ai4a';
    const AUTH_KEY = 'ai4a_auth';

    // 如果已经验证过，直接放行
    if (sessionStorage.getItem(AUTH_KEY) === 'true') return;

    // 隐藏页面主体内容
    document.body.style.overflow = 'hidden';

    // 创建登录遮罩
    const overlay = document.createElement('div');
    overlay.id = 'authOverlay';
    overlay.innerHTML = `
        <div style="
            position: fixed; inset: 0; z-index: 99999;
            background: linear-gradient(135deg, #094FA3 0%, #2C5AA0 50%, #4A7BA7 100%);
            display: flex; align-items: center; justify-content: center;
            font-family: 'Noto Sans SC', sans-serif;
        ">
            <div style="
                background: white; border-radius: 1rem; padding: 2.5rem 2rem;
                box-shadow: 0 25px 50px rgba(0,0,0,0.3);
                max-width: 380px; width: 90%; text-align: center;
            ">
                <div style="margin-bottom: 1.5rem;">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: #094FA3;"></i>
                </div>
                <h2 style="font-size: 1.4rem; font-weight: 700; color: #1f2937; margin-bottom: 0.5rem;">
                    AI考古课程
                </h2>
                <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem;">
                    请输入访问口令以查看内容
                </p>
                <input id="authInput" type="password" placeholder="请输入口令"
                    style="
                        width: 100%; padding: 0.75rem 1rem; border: 2px solid #e5e7eb;
                        border-radius: 0.5rem; font-size: 1rem; outline: none;
                        box-sizing: border-box; transition: border-color 0.2s;
                    "
                    onfocus="this.style.borderColor='#094FA3'"
                    onblur="this.style.borderColor='#e5e7eb'"
                >
                <p id="authError" style="
                    color: #ef4444; font-size: 0.8rem; margin-top: 0.5rem;
                    min-height: 1.2em; transition: opacity 0.2s;
                "></p>
                <button id="authBtn" style="
                    width: 100%; padding: 0.75rem; margin-top: 0.75rem;
                    background: #094FA3; color: white; border: none;
                    border-radius: 0.5rem; font-size: 1rem; font-weight: 600;
                    cursor: pointer; transition: opacity 0.2s;
                " onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                    进入网站
                </button>
                <p style="font-size: 0.75rem; color: #9ca3af; margin-top: 1rem;">
                    <i class="fas fa-university" style="margin-right: 0.25rem;"></i>复旦大学
                </p>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    function tryAuth() {
        const input = document.getElementById('authInput');
        const error = document.getElementById('authError');
        if (input.value === PASSCODE) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            overlay.remove();
            document.body.style.overflow = '';
        } else {
            error.textContent = '口令错误，请重试';
            input.value = '';
            input.style.borderColor = '#ef4444';
            setTimeout(() => { input.style.borderColor = '#e5e7eb'; }, 1500);
        }
    }

    // 按钮点击
    document.getElementById('authBtn').addEventListener('click', tryAuth);
    // Enter 键提交
    document.getElementById('authInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') tryAuth();
    });
    // 自动聚焦
    setTimeout(() => document.getElementById('authInput').focus(), 100);
})();
