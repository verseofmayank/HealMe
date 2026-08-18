/* ===========================================================
   HealMe — lightweight client-side auth (demo only)
   NOTE: This is a front-end-only demo. Accounts are stored in
   the browser's localStorage, not on a real server/database.
   Good enough to make the Login/Signup flow actually work while
   this project has no backend yet.
   =========================================================== */

const HealMeAuth = (function () {
    const USERS_KEY = "healme_users";
    const SESSION_KEY = "healme_current_user";

    function getUsers() {
        try {
            return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    // NOT real hashing/security — just avoids storing raw passwords in plain sight.
    function obfuscate(pass) {
        let hash = 0;
        for (let i = 0; i < pass.length; i++) {
            hash = (hash << 5) - hash + pass.charCodeAt(i);
            hash |= 0;
        }
        return "h" + hash;
    }

    function signup(fullName, username, password) {
        username = username.trim().toLowerCase();
        if (!fullName || !username || !password) {
            return { ok: false, message: "Please fill in every field." };
        }
        const users = getUsers();
        if (users.some((u) => u.username === username)) {
            return { ok: false, message: "That username is already taken." };
        }
        users.push({ fullName: fullName.trim(), username: username, password: obfuscate(password) });
        saveUsers(users);
        return { ok: true, message: "Account created! You can log in now." };
    }

    function login(username, password) {
        username = username.trim().toLowerCase();
        const users = getUsers();
        const user = users.find((u) => u.username === username);
        if (!user || user.password !== obfuscate(password)) {
            return { ok: false, message: "Incorrect username or password." };
        }
        localStorage.setItem(SESSION_KEY, JSON.stringify({ fullName: user.fullName, username: user.username }));
        return { ok: true, message: "Welcome back, " + user.fullName + "!" };
    }

    function logout() {
        localStorage.removeItem(SESSION_KEY);
    }

    function currentUser() {
        try {
            return JSON.parse(localStorage.getItem(SESSION_KEY));
        } catch (e) {
            return null;
        }
    }

    return { signup, login, logout, currentUser };
})();

// Fill in the nav user-info block (name + logout wiring) on pages that have it.
document.addEventListener("DOMContentLoaded", function () {
    const user = HealMeAuth.currentUser();
    const nameEl = document.getElementById("navUserName");
    if (nameEl) {
        nameEl.textContent = user ? user.fullName : "Guest";
    }
    const logoutLink = document.getElementById("logoutLink");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            HealMeAuth.logout();
            window.location.href = "index.html";
        });
    }
});
