let friends = [];

function addFriend() {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if (name === "" || email === "") {
        alert("Please enter both name and email.");
        return;
    }

    // Check if this email is already in the list
    if (friends.some(friend => friend.email === email)) {
        alert("This email is already associated with a friend.");
        return;
    }

    friends.push({ name, email });
    nameInput.value = "";
    emailInput.value = "";
    updateList();
}

function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let friend of friends) {
        let li = document.createElement("li");
        li.textContent = `${friend.name} - ${friend.email}`;
        list.appendChild(li);
    }
}

function drawSecretSanta() {
    if (friends.length < 2) {
        alert("You need at least two friends to draw Secret Santa!");
        return;
    }

    let shuffledFriends = [...friends].sort(() => Math.random() - 0.5);
    let pairs = {};

    for (let i = 0; i < shuffledFriends.length; i++) {
        let giver = shuffledFriends[i];
        let receiver = shuffledFriends[(i + 1) % shuffledFriends.length];
        pairs[giver.email] = receiver.name;  // We store the receiver's name by giver's email
    }

    // Optionally display the result on the page
    if (document.getElementById("showResults").checked) {
        let resultText = "Secret Santa Pairs:\n";
        for (let giverEmail in pairs) {
            let giverName = friends.find(friend => friend.email === giverEmail).name;
            resultText += `${giverName} → ${pairs[giverEmail]}\n`;
        }
        document.getElementById("resultado").innerText = resultText;
    }

    // Call the function to send real emails to the users
    sendEmails(pairs);
}

function sendEmails(pairs) {
    for (let giverEmail in pairs) {
        let receiverName = pairs[giverEmail];
        let giver = friends.find(friend => friend.email === giverEmail);

        // Sending the email using fetch to your backend (server.js)
        fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                to: giver.email,
                subject: "Seu Amigo Secreto",
                body: `Olá ${giver.name},\n\nSeu amigo secreto é ${receiverName}.`
            })
        })
        .then(response => {
            if (response.ok) {
                console.log(`E-mail enviado para ${giver.email}`);
            } else {
                console.error("Erro ao enviar e-mail:", response);
            }
        })
        .catch(error => {
            console.error("Erro ao enviar o e-mail:", error);
        });
    }
}

function toggleResults() {
    const resultElement = document.getElementById("resultado");
    const checkbox = document.getElementById("showResults");

    if (checkbox.checked) {
        resultElement.style.display = "block";
    } else {
        resultElement.style.display = "none";
    }
}
