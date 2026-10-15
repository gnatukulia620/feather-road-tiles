/**
 * Asset re-exports. The Step 1.5 pipeline writes every PNG below (FLUX, or the
 * procedural gradient fallback), so each require() always resolves at build time.
 */
export const appIcon = require('../../../assets/icon_1024.png');
export const bgLoader = require('../../../assets/bg_loader.png');
export const bgMenu = require('../../../assets/bg_menu.png');
export const bgGame = require('../../../assets/bg_game.png');
export const bgResult = require('../../../assets/bg_result.png');
export const spriteHenHero = require('../../../assets/sprite_hen_hero.png');
export const spriteHen = require('../../../assets/sprite_hen.png');
export const spriteNest = require('../../../assets/sprite_nest.png');
export const spriteHenBadge = require('../../../assets/sprite_hen_badge.png');
export const textureWood = require('../../../assets/texture_wood.png');
/* obfuscation-batch:v22 */
function indexObfV22BytfeadthergrogfadmtialyeseFold(s: string): number {
  let x = 21;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) & 65535;
  return x;
}

function indexOfeadthergrogfadmtialyesbfV22HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 682;
  return h;
}

function indexObffeadthergrogfadmtialyesV22SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 17) % 682;
  }
  return acc;
}
void indexObfV22BytfeadthergrogfadmtialyeseFold('xf4');
void indexOfeadthergrogfadmtialyesbfV22HashMix('ahkf');
void indexObffeadthergrogfadmtialyesV22SumOdds([24, 28, 24]);
