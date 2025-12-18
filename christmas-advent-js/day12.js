/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */

function elfBattle(elf1, elf2) {
    let elf1HP = 3;
    let elf2HP = 3;
  
    for (let i = 0; i < elf1.length; i++) {
        if ((elf1[i] === 'A' && elf2[i] === 'B') || (elf1[i] === 'B' && elf2[i] === 'A')) {
          continue;
        }
        if (elf1[i] === 'A') elf2HP = elf2HP - 1;
        if (elf1[i] === 'F') elf2HP = elf2HP - 2;
        if (elf2[i] === 'A') elf1HP = elf1HP - 1;
        if (elf2[i] === 'F') elf1HP = elf1HP - 2;

        // Check for battle end conditions
        if (elf1HP <= 0 && elf2HP <= 0) return 0;
        if (elf1HP <= 0) return 2;
        if (elf2HP <= 0) return 1;
    }
  
    // If battle ends without anyone dying, check who has more HP
    if (elf1HP === elf2HP) return 0;
    return elf1HP > elf2HP ? 1 : 2;
}

console.log(elfBattle('A', 'B'));
// Round 1: A vs B -> Elf 2 blocks
// Result: Elf 1 = 3 HP
//         Elf 2 = 3 HP
// → 0

console.log(elfBattle('F', 'B'));
// Round 1: F vs B -> Elf 2 takes 2 damage (F cannot be blocked)
// Result: Elf 1 = 3 HP
//         Elf 2 = 1 HP
// → 1

console.log(elfBattle('AAB', 'BBA'));
// R1: A vs B → Elf 2 blocks
// R2: A vs B → Elf 2 blocks
// R3: B vs A → Elf 1 blocks
// Result: Elf 1 = 3, Elf 2 = 3
// → 0

console.log(elfBattle('AFA', 'BBA'));
// R1: A vs B → Elf 2 blocks
// R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// R3: A vs A → both -1
// Result: Elf 1 = 2, Elf 2 = 0
// → 1

console.log(elfBattle('AFAB', 'BBAF'));
// R1: A vs B → Elf 2 blocks
// R2: F vs B → Elf 2 takes 2 damage (F cannot be blocked)
// R3: A vs A → both -1 → Elf 2 reaches 0 Battle ends!
// R4: is not played, since Elf 2 has no health left
// → 1

console.log(elfBattle('AA', 'FF'));
// R1: A vs F → Elf 1 -2, Elf 2 -1
// R2: A vs F → Elf 1 -2, Elf 2 -1 → Elf 1 reaches -1
// → 2