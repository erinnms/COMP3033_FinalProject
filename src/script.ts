import { redirectToAuthCodeFlow, getAccessToken } from "./authCodeWithPkce.js";

/** authorization */
const clientId = "96f894c46fd04a8386a6009215b0a9f7";//must be changed in order to function
const params = new URLSearchParams(window.location.search);
const code = params.get("code");


if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    /** get access token */
    const accessToken = await getAccessToken(clientId, code);
    /** retrieve top songs */

    /** retrieve top artists */
    const topArtists = await getTopArtists(accessToken);
    
    /** retrieve top songs */
    const topTracks = await getTopTracks(accessToken);

    /** retrieve saved tracks */
    const savedTracks = await getSavedTracks(accessToken, 50, 0);
    /** get all of them bitch */
    console.log(savedTracks);

    /** fill webpage with data */
    populateUI(topArtists, topTracks, savedTracks);
    
    /** downdload button for database stuff **/
    document.getElementById('downloadButton')!.addEventListener('click', () => {
        writeToDataFile(topArtists, topTracks, savedTracks);
    });
}



/** TOP ARTISTS */
async function getTopArtists(code: string): Promise<TopItems> {
    const result = await fetch("https://api.spotify.com/v1/me/top/artists", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

/** TOP SONG */
async function getTopTracks(code: string): Promise<TopItems> {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

/** SAVED TRACKS */
async function getSavedTracks(code: string, limit: number, offset: number): Promise<SavedTracks> {
    var link = "https:api.spotify.com/v1/me/tracks?limit=" + String(limit) + "&offset=" + String(offset);
    const result = await fetch(link, {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}
function writeToDataFile(artists: TopItems, tracks: TopItems, saved: SavedTracks) {
    let data = clientId;

    // Format top artists into a string
    artists.items.forEach(artist => {
        data += `${artist.name},`; // Append artist names to the data string
    });

    data+='\n' + clientId;

    // Format top tracks into a string
    tracks.items.forEach(track => {
        data += `${track.name},`; // Append track names to the data string
    });

    data+='\n' + clientId;

    // Format saved tracks into a string
    saved.items.forEach(savedTrack => {
        data += `${savedTrack.track.name},`; // Append saved track names to the data string
    });

    data+='\n';

    // Create a Blob with the data
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a link element to trigger the file download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'spotify_data.txt'; // Set the name of the file to download

    // Programmatically click the link to trigger the download
    link.click();
}


/** fill webpage w/ info */
function populateUI(artists: TopItems, tracks: TopItems, saved: SavedTracks) {
    /** fill top artists */
    document.getElementById("a1")!.innerText = artists.items[0].name;
    document.getElementById("a2")!.innerText = artists.items[1].name;
    document.getElementById("a3")!.innerText = artists.items[2].name;
    document.getElementById("a4")!.innerText = artists.items[3].name;
    document.getElementById("a5")!.innerText = artists.items[4].name;

    /** fill top tracks */
    document.getElementById("t1")!.innerText = tracks.items[0].name;
    document.getElementById("t2")!.innerText = tracks.items[1].name;
    document.getElementById("t3")!.innerText = tracks.items[2].name;
    document.getElementById("t4")!.innerText = tracks.items[3].name;
    document.getElementById("t5")!.innerText = tracks.items[4].name;

    /** fill saved tracks */
    document.getElementById("s1")!.innerText = saved.items[0].track.name;
    document.getElementById("s2")!.innerText = saved.items[1].track.name;
    document.getElementById("s3")!.innerText = saved.items[2].track.name;
    document.getElementById("s4")!.innerText = saved.items[3].track.name;
    document.getElementById("s5")!.innerText = saved.items[4].track.name;
    document.getElementById("s6")!.innerText = saved.items[5].track.name;
    document.getElementById("s7")!.innerText = saved.items[6].track.name;
    document.getElementById("s8")!.innerText = saved.items[7].track.name;
    document.getElementById("s9")!.innerText = saved.items[8].track.name;
    document.getElementById("s10")!.innerText = saved.items[9].track.name;
    document.getElementById("s11")!.innerText = saved.items[10].track.name;
    document.getElementById("s12")!.innerText = saved.items[11].track.name;
    document.getElementById("s13")!.innerText = saved.items[12].track.name;
    document.getElementById("s14")!.innerText = saved.items[13].track.name;
    document.getElementById("s15")!.innerText = saved.items[14].track.name;
    document.getElementById("s16")!.innerText = saved.items[15].track.name;
    document.getElementById("s17")!.innerText = saved.items[16].track.name;
    document.getElementById("s18")!.innerText = saved.items[17].track.name;
    document.getElementById("s19")!.innerText = saved.items[18].track.name;
    document.getElementById("s20")!.innerText = saved.items[19].track.name;

}


