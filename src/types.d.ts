
interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

/** TOP ITEMS INTERFACE */
interface TopItems {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item[];
}

interface Item {
    external_urls: string;
    followers: string;
    genres: string;
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

/** SAVED TRACKS */
interface SavedTracks {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SavedItem[];
}

interface SavedItem {
    added_at: string;
    track: Track;
}

interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: string;
    external_urls: string;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string
    
}

interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string;
    external_urls: string;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: string;
    type: string;
    uri: string;
    artists: Artist[];
}

interface Artist {
    external_urls: string;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}