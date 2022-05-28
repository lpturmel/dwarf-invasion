export interface ThumbnailResponse {
    _links: Links;
    character: Character;
    assets: Asset[];
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Asset {
    key: string;
    value: string;
}

export interface Character {
    key: Self;
    name: string;
    id: number;
    realm?: Character;
    slug?: string;
}
