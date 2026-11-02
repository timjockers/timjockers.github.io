const languageStorageKey = "preferredLanguage";
const supportedLanguages = ["de", "en"];

function getPreferredLanguage() {
    try {
        const language = localStorage.getItem(languageStorageKey);
        return supportedLanguages.includes(language) ? language : null;
    } catch (error) {
        console.warn("Could not read the saved language preference.", error);
        return null;
    }
}

const preferredLanguage = getPreferredLanguage() ?? "en";

if (document.body.hasAttribute("data-language-entry")) {
    window.location.replace(`/${preferredLanguage}/`);
} else if (document.body.dataset.legacyPath) {
    window.location.replace(`/${preferredLanguage}${document.body.dataset.legacyPath}`);
}

document.querySelectorAll("[data-language]").forEach((link) => {
    link.addEventListener("click", () => {
        try {
            localStorage.setItem(languageStorageKey, link.dataset.language);
        } catch (error) {
            console.warn("Could not save the language preference.", error);
        }
    });
});
