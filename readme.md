# d2cube

An interactive D2 Cube and Runeword companion.

---

## TODO
So much to do, so little time, so much fun.

- [ ] Check/verify recipes
- [ ] Create item instances (rolls)
- [ ] Cleanup code (share utils/transforms/mappers/predicates)
- [ ] Document all affixes
- [ ] Mercenary
- [ ] Larzuk
- [ ] Stats Page
- [ ] Rare name page
- [ ] Personalization
- [ ] Runewords page
- [ ] Tests
- [ ] Docs
- [ ] Contribution
- [ ] Civerb's Vestments set has unique set bonus behaviors.

## Calculation edge cases

The following are edge case calculations that are not immediately obvious
- Always round down.
- ResolvedEnhancedDefense = Math.floor((MaxDefense + 1) * EnhancedDefense)
- If MinDamage exceeds MaxDamage, set max damage to MinDamage + 1

## Cube Checklist

Reference: https://diablo.fandom.com/wiki/Horadric_Cube

- [x] 3 Magic Rings = 1 Random Magic Amulet
- [x] 3 Magic Amulets = 1 Random Magic Ring
- [x] 3 Small Rejuvenation Potions = 1 Full Rejuvenation Potion
- [x] 3 Gems of the Same Type and Grade (lower than Perfect) = 1 Higher Grade Gem of the Same Type
- [x] 2 Quivers of Bolts = 1 Quiver of Arrows
- [x] 2 Quivers of Arrows = 1 Quiver of Bolts
- [x] 1 Spear + 1 Quiver of Arrows = 1 Stack of Javelins
- [x] 1 Axe + 1 Dagger = Throwing Axe
- [x] Strangling Gas Potion + any type of Healing Potion = 1 Antidote Potion
- [x] Runes
- [x] 3 Perfect Skulls + 1 Rare Item + Stone of Jordan = Add 1 Socket To a Rare Item
- [x] 1 Perfect Skull + 1 Rare Item + Stone of Jordan = 1 High Quality New Rare Item of the same type
- [x] 6 Perfect Skulls + 1 Rare Item = 1 Random Low Quality Rare Item of the same type
- [x] 4 Health Potions (of any type) + Ruby (any type) + Magical Sword = A Magic Sword of the Leech
- [x] 3 Perfect Gems (of any type) + 1 Magic Item = 1 New Random Magic Item of the Same Type
- [x] 6 Perfect Gems (1 of each type) + 1 Amulet (Magic) = Prismatic Amulet
- [x] 1 Magic Ring + 1 Perfect Emerald + 1 Antidote Potion = 1 Jade Ring
- [x] 1 Magic Ring + 1 Perfect Ruby + 1 Exploding Potion = 1 Garnet Ring
- [x] 1 Magic Ring + 1 Perfect Topaz + 1 Rejuvenation Potion = 1 Coral Ring
- [x] 1 Magic Ring + 1 Perfect Sapphire + 1 Thawing Potion = 1 Cobalt Ring
- [ ] 1 Magic Shield (any type) + 1 Spiked Club (any quality) + 2 Skulls (any quality) = Magic Shield of Spikes
- [ ] Diamond (any quality) + 1 Staff (any type and quality) + 1 Kris (any quality) + 1 Belt (any type and quality) = Savage Polearm Class Weapon
- [x] 3 Health Potions + 3 Mana Potions + 1 Chipped Gem = 1 Rejuvenation Potion
- [x] 3 Health Potions + 3 Mana Potions + 1 Gem (normal) = 1 Full Rejuvenation Potion
- [x] 3 Standard Gems (normal) and 1 Socketed Weapon (Any Type) = 1 Socketed Magic Weapon (of same type)
- [x] 3 Chipped Gems + 1 Magic Weapon = Socketed Magic Weapon
- [x] 3 Flawless Gems + 1 Magic Weapon = Socketed Magic Weapon
- [x] 1 Tal Rune + 1 Thul Rune + 1 Perfect Topaz + Normal Body Armor = Socketed Body Armor of same type
- [x] 1 Ral Rune + 1 Amn Rune + 1 Perfect Amethyst + Normal Weapon = Socketed Weapon of same type
- [x] 1 Ral Rune + 1 Thul Rune + 1 Perfect Sapphire + Normal Helm = Socketed Helm of same type
- [x] 1 Tal Rune + 1 Amn Rune + 1 Perfect Ruby + Normal Shield = Socketed Shield of same type
- [x] 1 Ral Rune + 1 Sol Rune + 1 Perfect Emerald + Normal Unique Weapon = Exceptional Version of Weapon
- [x] 1 Tal Rune + 1 Shael Rune + 1 Perfect Diamond + Normal Unique Armor = Exceptional Version of Armor
- [x] 1 Lum Rune + 1 Pul Rune + 1 Perfect Emerald + Exceptional Unique Weapon = Elite Version of Weapon (Single Player and Ladder Only)
- [x] 1 Ko Rune + 1 Lem Rune + 1 Perfect Diamond + Exceptional Unique Armor = Elite Version of Armor (Single Player and Ladder Only)
- [x] 1 Ort Rune + 1 Amn Rune + 1 Perfect Sapphire + Normal (Basic) Rare Weapon = Exceptional Rare Weapon
- [x] 1 Ral Rune + 1 Thul Rune + 1 Perfect Amethyst + Normal (Basic) Rare Armor = Exceptional Rare Armor
- [x] 1 Fal Rune + 1 Um Rune + 1 Perfect Sapphire + Exceptional Rare Weapon = Elite Rare Weapon
- [x] 1 Ko Rune + 1 Pul Rune + 1 Perfect Amethyst + Exceptional Rare Armor = Elite Rare Armor
- [x] 1 Ort Rune + Weapon = Fully Repaired Weapon
- [x] 1 Ort Rune + 1 Chipped Gem (any kind) + Weapon = Fully Repaired and Recharged Weapon
- [x] 1 Ral Rune + Armor = Fully Repaired Armor
- [x] 1 Ral Rune + 1 Flawed Gem (any kind) + Armor = Fully Repaired and Recharged Armor
- [x] 1 Hel Rune + Scroll of Town Portal + Any Socketed Item = Remove items from sockets
- [x] 1 Twisted Essence of Suffering + 1 Charged Essence of Hatred + 1 Burning Essence of Terror + 1 Festering Essence of Destruction = Token of Absolution
- [x] Key of Terror + Key of Hate + Key of Destruction + Mephisto's Brain + Diablo's Horn + Baal's Eye = Pandemonium Event
- [x] Wirt's Leg + A Tome of Town Portal = Secret Cow Level


## Runewords Checklist

## Credits

This project would not be possible without the resources built and shared by the D2 community over the decades.

- [Arreat Summit]
- [Fandom Diabllo Archive]
- [D2 Item Format]

### Assets

#### Cursors
- [ENWSGAMESANDTUSCURSORS]

#### D2 Images
- [Fandom Diablo Archive]

#### Videos
- [Blizzard]

<!-- refs -->
- [Arreat Summit]: http://classic.battle.net/diablo2exp/
- [Blizzard]: https://diablo2.blizzard.com/en-us/
- [Fandom Diablo Archive]: https://diablo-archive.fandom.com
- [D2 Item Format]: https://squeek502.github.io/d2itemreader/
- [ENWSGAMESANDTUSCURSORS]: http://www.rw-designer.com/cursor-set/diablo-2-cursor-set-zip
