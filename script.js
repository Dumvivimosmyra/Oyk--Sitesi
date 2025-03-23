// Aydınlık/Karanlık Modu değiştir
function toggleMode() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
}

// Müzik araması için API çağrısı
function searchMusic() {
    const query = document.getElementById("search").value;
    if (query !== "") {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=AIzaSyAwZ-jhy-8Sm4D7i3rUZkQFHy-uMzm-NqI`)
        .then(response => response.json())
        .then(data => {
            const musicList = document.getElementById("musicList");
            musicList.innerHTML = "";
            data.items.forEach(item => {
                const musicItem = document.createElement("div");
                musicItem.innerHTML = `
                    <h3>${item.snippet.title}</h3>
                    <button onclick="playMusic('${item.id.videoId}')">Dinle</button>
                `;
                musicList.appendChild(musicItem);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
    }
}

// Seçilen müziği oynat
function playMusic(videoId) {
    const player = document.createElement("iframe");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    player.width = "100%";
    player.height = "400px";
    document.body.appendChild(player);
}
