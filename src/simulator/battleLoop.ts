import { useState } from "react";
import { attackState } from "./states/attackState";


// main state
export async function battleLoop(
    characterLeftHP: number,
    characterRightHP: number,

    leftDamage: number,
    rightDamage: number,

    leftArmor: number,
    rightArmor: number,

    leftName: string,
    rightName: string
) {
    /**
     *  state
     *  delay
     *  state
     *  delay
     *  repeat
     * 
     *  each state should take in some variable and return some output
     *  
     * attack state:
     *   takes in a characters attack power and the others defense power and distance
     *   returns the outcome
     * 
     * move state:
     *   takes in the characters move distance and current distance from other and their preference
     *   returns new distance
     */

    const [leftHealth, updateLeftHealth] = useState<number>(characterLeftHP);
    const [rightHealth, updateRightHealth] = useState<number>(characterRightHP);

    const [turnDamage, updateTurnDamage] = useState<number>(0);

    const [battleLog, updateBatteLog] = useState<string[]>([]);


    while (leftHealth > 0 || rightHealth > 0){

        await setTimeout(Promise, 1000);
        updateTurnDamage(attackState(leftDamage, rightArmor, 3));
        updateRightHealth(rightHealth - turnDamage);
        updateBatteLog([...battleLog, `${leftName} attacks ${rightName} for ${turnDamage} damage`]);
        
        await setTimeout(Promise, 1000);
        updateTurnDamage(attackState(rightDamage, leftArmor, 3));
        updateLeftHealth(leftHealth - turnDamage);
        updateBatteLog([...battleLog, `${rightName} attacks ${leftName} for ${turnDamage} damage`]);
    }
}