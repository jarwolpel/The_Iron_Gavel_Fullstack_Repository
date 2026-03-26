export interface Character {
    id: number;
    name: string;
    health: number;
    damage: number;
    armor: number;
    image: string;        // main image
    healthimg?: string;   // health stat icon
    swordimg?: string;    // sword stat icon
    shieldimg?: string;   // shield stat icon
}