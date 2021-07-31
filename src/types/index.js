/**
 * References:
 * - https://user.xmission.com/~trevin/DiabloIIv1.09_Item_Format.shtml
 */

/**
 * // Aliases (to be formalized)
 * @typedef {string} Enum
 *    An alias to explicitly indicate enums defined in ~/enums.
 *
 * @typedef {string} Id
 *    An alias to explicitly indicate ids defined in ~/db/ids.
 *    An item ID is the PascalCasing of the item's name.
 *    e.g. "Andariel's Visage" -> AndarielsVisage
 */

/**
 * @typedef Properties
 *    Items have properties defined as a map of enums to multi-variadic values.
 *    This mapping is resolved accordingly by its item property type enum.
 * @property {Object.<Enum, number[]>} [base]
 *    Base item properties.
 * @property {Object.<Enum, number[]>} [magic]
 *    Magic properties.
 * @property {Object.<number, Object.<Enum, number[]>>} [set]
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
 * @property {Enum} type
 *    e.g. Ring/Amulet/Gem/Rune.
 * @property {[number, number]} size
 *    e.g. The size of an item (by row and column).
 * @property {Description[]} [description]
 *    Additional description
 * @property {number} [clvl]
 *    Required character level.
 * @property {number} [qlvl]
 *    Quality level.
 * @property {Enum} [quality]
 *    Most items have qualities e.g. LowQuality/Normal/Magic/Unique/Set/Crafted
 * @property {number} [variant]
 *    Items with multiple image assets will apply the specified variant.
 * @property {Enum} [set]
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
 * @property {Enum} [prefix]
 *    For Magic items e.g. Prismatic/Jade.
 * @property {Enum} [suffix]
 *    For Magic items e.g. Greed/Leech.
 * @property {Enum} [firstName]
 *    For Rare items.
 *    See https://user.xmission.com/~trevin/DiabloIIv1.09_Magic_Names.html#rare_first_name
 * @property {Enum} [secondName]
 *    For Rare items.
 *    See https://user.xmission.com/~trevin/DiabloIIv1.09_Magic_Names.html#rare_first_name
 * @property {Enum} [container]
 *    e.g. Cube/Inventory/Stash/Belt/Mercenary.
 * @property {Enum} [equipped]
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
