/**
 * References:
 * - https://user.xmission.com/~trevin/DiabloIIv1.09_Item_Format.shtml
 */

/**
 * // Enums
 * @typedef {import('../enums/index.js').ArmorType} ArmorType
 * @typedef {import('../enums/index.js').BasePropertyType} BasePropertyType
 * @typedef {import('../enums/index.js').ContainerType} ContainerType
 * @typedef {import('../enums/index.js').EquipSlotType} EquipSlotType
 * @typedef {import('../enums/index.js').GameVersionType} GameVersionType
 * @typedef {import('../enums/index.js').GemClassType} GemClassType
 * @typedef {import('../enums/index.js').GemQualityType} GemQualityType
 * @typedef {import('../enums/index.js').ItemFirstNameType} ItemFirstNameType
 * @typedef {import('../enums/index.js').ItemQualityType} ItemQualityType
 * @typedef {import('../enums/index.js').ItemSecondNameType} ItemSecondNameType
 * @typedef {import('../enums/index.js').ItemSetType} ItemSetType
 * @typedef {import('../enums/index.js').ItemTierType} ItemTierType
 * @typedef {import('../enums/index.js').ItemType} ItemType
 * @typedef {import('../enums/index.js').MagicPropertyType} MagicPropertyType
 * @typedef {import('../enums/index.js').PotionClassType} PotionClassType
 * @typedef {import('../enums/index.js').PrefixType} PrefixType
 * @typedef {import('../enums/index.js').RecipeType} RecipeType
 * @typedef {import('../enums/index.js').SocketCategoryType} SocketCategoryType
 * @typedef {import('../enums/index.js').SuffixType} SuffixType
 *
 * @typedef {import('../db/ids/index.js')} Id
 *    An item ID is the PascalCasing of the item's name.
 *    e.g. "Andariel's Visage" -> AndarielsVisage
 */

/**
 * @typedef Values
 *    Values are always represented as numbers.
 *    Specify min/max values to specify the range.
 *    @property {number[]} [min]
 *    @property {number[]} [max]
 *    @property {number[]} values
 *
 * @typedef Properties
 *    Items have properties defined as a map of enums to multi-variadic values.
 *    This mapping is resolved accordingly by its item property type enum.
 * @property {Object.<BasePropertyType, Values>} [base]
 *    Base item properties.
 * @property {Object.<MagicPropertyType, Values>} [magic]
 *    Magic properties.
 * @property {Object.<number, Object.<MagicPropertyType, Values>>} [set]
 *    Set properties.  The numeric keys represent the set bonus requirement.
 * @property {Object.<SocketCategoryType, Object.<MagicPropertyType, Values>>} [socket]
 *    Set properties.  The numeric keys represent the set bonus requirement.
 *
 * @typedef Description
 *    Item description that will be rendered in the item's tooltip.
 * @property {string} [text]
 *    Single-lined text description.
 * @property {string} [color]
 *    A color that exists under system.theme.colors.item.
 */

/**
 * // Item
 * @typedef ItemBase
 *    The inherent base properties of an (uninstanced) item.
 * @property {Id} id
 *    Required item ID.
 * @property {string} name
 *    The display name of an item.
 * @property {ItemType} type
 *    e.g. Ring/Amulet/Gem/Rune.
 * @property {[number, number]} size
 *    e.g. The size of an item (by row and column).
 * @property {Description[]} [description]
 *    Additional description
 * @property {number} [clvl]
 *    Required character level.
 * @property {number} [qlvl]
 *    Quality level.
 * @property {ItemQualityType} [quality]
 *    Most items have qualities e.g. LowQuality/Normal/Magic/Unique/Set/Crafted
 * @property {number} [variants]
 *    Items with multiple image assets will apply the specified variant.
 * @property {ItemSetType} [set]
 *    If the item belongs to an existing set e.g. AngelicRaiment.
 * @property {Properties} [properties]
 *    Item properties.
 *
 * @typedef ItemInstance
 *    An item is instanced if it is created and exists in the game.
 * @property {string} uuid
 *    A uuid for the instanced item.
 * @property {[number, number]} position
 *    A 2-sized array representing the row/column in a container.
 * @property {boolean} [isEthereal]
 *    Item is ethereal (cannot be repaired).
 * @property {boolean} [isUnidentified]
 *    Item is unidentified.
 * @property {string} [personalization]
 *    Personalization prefix for the item.
 * @property {PrefixType} [prefix]
 *    For Magic items e.g. Prismatic/Jade.
 * @property {SuffixType} [suffix]
 *    For Magic items e.g. Greed/Leech.
 * @property {ItemFirstNameType} [firstName]
 *    For Rare items.
 *    See https://user.xmission.com/~trevin/DiabloIIv1.09_Magic_Names.html#rare_first_name
 * @property {ItemSecondNameType} [secondName]
 *    For Rare items.
 *    See https://user.xmission.com/~trevin/DiabloIIv1.09_Magic_Names.html#rare_first_name
 * @property {ContainerType} [container]
 *    e.g. Cube/Inventory/Stash/Belt/Mercenary.
 * @property {EquipSlotType} [equipSlot]
 *    e.g. Head/Neck/Torso/MainHand/OffHand/Waist/Feet etc.
 * @property {Array<Id|null>} [sockets]
 *    Values can be null (empty socket) or item Id (socketed Gem/Jewel/Rune).
 *
 * @typedef {ItemBase & ItemInstance} Item
 *    An item can exist either:
 *      - as a base definition referenced in the app.
 *      - as an instance and created ("rolled") based on its definition.
 * @property {Properties} stats
 *    Stats are random rolls on a ItemBase.properties.
 */