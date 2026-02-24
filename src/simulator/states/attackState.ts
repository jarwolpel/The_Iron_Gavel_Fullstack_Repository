

export function attackState(attack: number, defense: number, distanceBetween: number): number {
    // Calculate chance to miss
    if((Math.random() * (100 - 1)) <= distanceBetween) {
        return 0;
    } else {
        return attack - (defense/2);
    }
}