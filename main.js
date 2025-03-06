const songForm = document.getElementById('song_form');
const PlayList = document.getElementById('play_list');
 
function AddSong(SongName, SongArtist, SongLink){
        const ListItem = document.createElement('li');
 
        ListItem.innerHTML = `
        <strong>${SongName}</strong> - ${SongArtist}
 
        <a href = "${SongLink}">Reproducir</a>
        <button class="delete-btn"></button>
 
`;
 
PlayList.appendChild(ListItem);
}
 
 
songForm.addEventListener('submit', (e) => {
e.preventDefault()
 
const SongName = document.getElementById('song_name').value;
const SongArtist = document.getElementById('song_artist').value;
const SongUrl = document.getElementById('song_url').value;
 
AddSong(SongName,SongArtist,SongUrl)
songForm.reset();
})
 