function createRulesDialog() {
    if (document.querySelector(".pp-rules")) return;

    const dialog = document.createElement("dialog");
    dialog.classList.add("pp-rules");
    dialog.open = true;
    dialog.style.zIndex = "1000"; 

    const rulesContainer = document.createElement("div");
    rulesContainer.classList.add("rules");

    const rulesDiv = document.createElement("div");
    rulesDiv.classList.add("rules-div");

    const titleRules = document.createElement("div");
    titleRules.classList.add("title-rules");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("l-style");
    titleSpan.textContent = "RULES";
    titleRules.appendChild(titleSpan);

    const txtRules = document.createElement("div");
    txtRules.classList.add("txt-rules");

    const objectiveSpan = document.createElement("span");
    objectiveSpan.classList.add("s-style", "purple-span");
    objectiveSpan.textContent = "OBJECTIVE";
    txtRules.appendChild(objectiveSpan);

    const objectiveP = document.createElement("p");
    objectiveP.textContent = "Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).";
    txtRules.appendChild(objectiveP);

    const howToPlaySpan = document.createElement("span");
    howToPlaySpan.classList.add("s-style", "purple-span");
    howToPlaySpan.textContent = "HOW TO PLAY";
    txtRules.appendChild(howToPlaySpan);

    const rulesList = document.createElement("ol");
    const rulesTexts = [
        "Red goes first in the first game.",
        "Players must alternate turns, and only one disc can be dropped in each turn.",
        "The game ends when there is a 4-in-a-row or a stalemate.",
        "The starter of the previous game goes second on the next game."
    ];

    rulesTexts.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        rulesList.appendChild(li);
    });

    txtRules.appendChild(rulesList);

    const closeButton = document.createElement("img");
    closeButton.classList.add("btn-check-rules");
    closeButton.src = "/assets/icon-check.svg";
    closeButton.alt = "Check Rules";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", () => {
        dialog.close();
        document.body.removeChild(dialog);

        const menuDialog = document.querySelector(".pp-menu");
        if (menuDialog) {
            menuDialog.close();
        }
    });

    rulesDiv.appendChild(titleRules);
    rulesDiv.appendChild(txtRules);
    rulesDiv.appendChild(closeButton);
    rulesContainer.appendChild(rulesDiv);
    dialog.appendChild(rulesContainer);
    document.body.appendChild(dialog);
}

function openMenuDialog() {
    const menuDialog = document.querySelector(".pp-menu");

    if (menuDialog) {
        menuDialog.showModal();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btn-nav-menu");
    if (btnMenu) {
        btnMenu.addEventListener("click", openMenuDialog);
    }

    const btnGameRules = document.getElementById("btn-menu-rules");
    if (btnGameRules) {
        btnGameRules.addEventListener("click", createRulesDialog);
    }
});
