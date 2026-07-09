document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("username");
    const stateContainer = document.getElementById("state-container");
    const resultContainer = document.getElementById("result-container");

//return true and false based on regex
    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example regex for LeetCode usernames
        return usernameRegex.test(username);

    }

    async function fetchLeetCodeData(username) {
        try {
            const response = await fetch(`https://leetcode.com/${username}/`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Unable to fetch user data:", error);
            throw error;
        }
    }

    searchButton.addEventListener("click", function () {

        const username = usernameInput.value.trim();

        if (username === "") {
            alert("Please enter a username.");
            return;
        }

        console.log("Username:", username);

        // Later you'll fetch LeetCode data here
    });

});