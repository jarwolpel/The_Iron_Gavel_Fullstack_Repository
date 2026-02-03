export interface Battle {
    id: string;
    name: string;
    description: string;
}

export const initialBattles: Battle[] = [
    {
        id: "1",
        name: "Battle of Gazumbo",
        description: "This was a doozy!",
    },
    {
        id: "2",
        name: "Azgard",
        description: "Holy smokes that wizard almost lived!"
    },
    {
        id: "3",
        name: "Night City",
        description: "See you in the afterlife..."
    }
];