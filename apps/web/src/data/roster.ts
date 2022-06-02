interface Character {
    name: string;
    realm: string;
    region: string;
    thumbnail: string;
    class: WowClass;
    role: WowRole;
}
export type WowRole = "dps" | "healer" | "tank";
export type WowClass =
    | "druid"
    | "dh"
    | "monk"
    | "rogue"
    | "dk"
    | "mage"
    | "warrior"
    | "warlock"
    | "shaman"
    | "priest"
    | "hunter"
    | "paladin"
    | "evoker";

export const wowClassMap = {
    dh: {
        displayName: "Demon Hunter",
        color: "#A330C9",
    },
    druid: {
        displayName: "Druid",
        color: "#FF7C0A",
    },
    dk: {
        displayName: "Death Knight",
        color: "#C41E3A",
    },
    evoker: {
        displayName: "Evoker",
        color: "#33937F",
    },
    hunter: {
        displayName: "Hunter",
        color: "#AAD372",
    },
    mage: {
        displayName: "Mage",
        color: "#3FC7EB",
    },
    monk: {
        displayName: "Monk",
        color: "#00FF98",
    },
    paladin: {
        displayName: "Paladin",
        color: "#F48CBA",
    },
    priest: {
        displayName: "Priest",
        color: "#FFFFFF",
    },
    rogue: {
        displayName: "Rogue",
        color: "#FFF468",
    },
    shaman: {
        displayName: "Shaman",
        color: "#0070DD",
    },
    warlock: {
        displayName: "Warlock",
        color: "#8788EE",
    },
    warrior: {
        displayName: "Warrior",
        color: "#C69B6D",
    },
};
export const roster: Character[] = [
    // {
    //     name: "Caresseur",
    //     realm: "zuljin",
    //     region: "us",
    //     class: "paladin",
    //     role: "tank",
    //     thumbnail:
    //         "https://render-us.worldofwarcraft.com/character/zuljin/250/242088698-avatar.jpg?alt=wow/static/images/2d/avatar/31-0.jpg",
    // },
    {
        name: "Rothunda",
        realm: "zuljin",
        region: "us",
        class: "monk",
        role: "tank",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/250/242088698-avatar.jpg?alt=wow/static/images/2d/avatar/31-0.jpg",
    },
    {
        name: "GhostJester",
        realm: "zuljin",
        region: "us",
        class: "druid",
        role: "healer",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/46/246915374-avatar.jpg",
    },
    {
        name: "DadyTheresa",
        realm: "zuljin",
        region: "us",
        class: "priest",
        role: "healer",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/46/246915374-avatar.jpg",
    },
    {
        name: "Jahash",
        realm: "zuljin",
        region: "us",
        class: "rogue",
        role: "dps",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/109/246501229-avatar.jpg?alt=wow/static/images/2d/avatar/3-0.jpg",
    },
    {
        name: "WildImps",
        realm: "zuljin",
        region: "us",
        class: "warlock",
        role: "dps",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/100/246903908-avatar.jpg?alt=wow/static/images/2d/avatar/29-0.jpg",
    },
    {
        name: "Nainpossible",
        realm: "zuljin",
        region: "us",
        class: "mage",
        role: "dps",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/100/246903908-avatar.jpg?alt=wow/static/images/2d/avatar/29-0.jpg",
    },
    {
        name: "Dwarferino",
        realm: "zuljin",
        region: "us",
        class: "warrior",
        role: "dps",
        thumbnail:
            "https://render-us.worldofwarcraft.com/character/zuljin/100/246903908-avatar.jpg?alt=wow/static/images/2d/avatar/29-0.jpg",
    },
];
