export interface CharacterResponse {
    name: string;
    race: string;
    class: string;
    active_spec_name: string;
    active_spec_role: string;
    gender: string;
    faction: string;
    achievement_points: number;
    honorable_kills: number;
    thumbnail_url: string;
    region: string;
    realm: string;
    last_crawled_at: Date;
    profile_url: string;
    profile_banner: string;
}
