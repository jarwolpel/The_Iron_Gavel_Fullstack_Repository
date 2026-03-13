// This interface interacts with the schema.prisma model Characters
export interface Character{
    id: string;
    name: string;
    health: number;
    damage: number;
    armor: number;
    image: string;
    healthimg: string;
    shieldimg:string;
    swordimg:string;
    isFavorite?:boolean;
}