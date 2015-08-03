//string.latinize: used to convert accended characters in normal characters

var Latinise = {};
Latinise.latin_map = {
	"Á": "A",
	"Ă": "A",
	"Ắ": "A",
	"Ặ": "A",
	"Ằ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ǎ": "A",
	"Â": "A",
	"Ấ": "A",
	"Ậ": "A",
	"Ầ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ä": "A",
	"Ǟ": "A",
	"Ȧ": "A",
	"Ǡ": "A",
	"Ạ": "A",
	"Ȁ": "A",
	"À": "A",
	"Ả": "A",
	"Ȃ": "A",
	"Ā": "A",
	"Ą": "A",
	"Å": "A",
	"Ǻ": "A",
	"Ḁ": "A",
	"Ⱥ": "A",
	"Ã": "A",
	"Ꜳ": "AA",
	"Æ": "AE",
	"Ǽ": "AE",
	"Ǣ": "AE",
	"Ꜵ": "AO",
	"Ꜷ": "AU",
	"Ꜹ": "AV",
	"Ꜻ": "AV",
	"Ꜽ": "AY",
	"Ḃ": "B",
	"Ḅ": "B",
	"Ɓ": "B",
	"Ḇ": "B",
	"Ƀ": "B",
	"Ƃ": "B",
	"Ć": "C",
	"Č": "C",
	"Ç": "C",
	"Ḉ": "C",
	"Ĉ": "C",
	"Ċ": "C",
	"Ƈ": "C",
	"Ȼ": "C",
	"Ď": "D",
	"Ḑ": "D",
	"Ḓ": "D",
	"Ḋ": "D",
	"Ḍ": "D",
	"Ɗ": "D",
	"Ḏ": "D",
	"ǲ": "D",
	"ǅ": "D",
	"Đ": "D",
	"Ƌ": "D",
	"Ǳ": "DZ",
	"Ǆ": "DZ",
	"É": "E",
	"Ĕ": "E",
	"Ě": "E",
	"Ȩ": "E",
	"Ḝ": "E",
	"Ê": "E",
	"Ế": "E",
	"Ệ": "E",
	"Ề": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ḙ": "E",
	"Ë": "E",
	"Ė": "E",
	"Ẹ": "E",
	"Ȅ": "E",
	"È": "E",
	"Ẻ": "E",
	"Ȇ": "E",
	"Ē": "E",
	"Ḗ": "E",
	"Ḕ": "E",
	"Ę": "E",
	"Ɇ": "E",
	"Ẽ": "E",
	"Ḛ": "E",
	"Ꝫ": "ET",
	"Ḟ": "F",
	"Ƒ": "F",
	"Ǵ": "G",
	"Ğ": "G",
	"Ǧ": "G",
	"Ģ": "G",
	"Ĝ": "G",
	"Ġ": "G",
	"Ɠ": "G",
	"Ḡ": "G",
	"Ǥ": "G",
	"Ḫ": "H",
	"Ȟ": "H",
	"Ḩ": "H",
	"Ĥ": "H",
	"Ⱨ": "H",
	"Ḧ": "H",
	"Ḣ": "H",
	"Ḥ": "H",
	"Ħ": "H",
	"Í": "I",
	"Ĭ": "I",
	"Ǐ": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"İ": "I",
	"Ị": "I",
	"Ȉ": "I",
	"Ì": "I",
	"Ỉ": "I",
	"Ȋ": "I",
	"Ī": "I",
	"Į": "I",
	"Ɨ": "I",
	"Ĩ": "I",
	"Ḭ": "I",
	"Ꝺ": "D",
	"Ꝼ": "F",
	"Ᵹ": "G",
	"Ꞃ": "R",
	"Ꞅ": "S",
	"Ꞇ": "T",
	"Ꝭ": "IS",
	"Ĵ": "J",
	"Ɉ": "J",
	"Ḱ": "K",
	"Ǩ": "K",
	"Ķ": "K",
	"Ⱪ": "K",
	"Ꝃ": "K",
	"Ḳ": "K",
	"Ƙ": "K",
	"Ḵ": "K",
	"Ꝁ": "K",
	"Ꝅ": "K",
	"Ĺ": "L",
	"Ƚ": "L",
	"Ľ": "L",
	"Ļ": "L",
	"Ḽ": "L",
	"Ḷ": "L",
	"Ḹ": "L",
	"Ⱡ": "L",
	"Ꝉ": "L",
	"Ḻ": "L",
	"Ŀ": "L",
	"Ɫ": "L",
	"ǈ": "L",
	"Ł": "L",
	"Ǉ": "LJ",
	"Ḿ": "M",
	"Ṁ": "M",
	"Ṃ": "M",
	"Ɱ": "M",
	"Ń": "N",
	"Ň": "N",
	"Ņ": "N",
	"Ṋ": "N",
	"Ṅ": "N",
	"Ṇ": "N",
	"Ǹ": "N",
	"Ɲ": "N",
	"Ṉ": "N",
	"Ƞ": "N",
	"ǋ": "N",
	"Ñ": "N",
	"Ǌ": "NJ",
	"Ó": "O",
	"Ŏ": "O",
	"Ǒ": "O",
	"Ô": "O",
	"Ố": "O",
	"Ộ": "O",
	"Ồ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ö": "O",
	"Ȫ": "O",
	"Ȯ": "O",
	"Ȱ": "O",
	"Ọ": "O",
	"Ő": "O",
	"Ȍ": "O",
	"Ò": "O",
	"Ỏ": "O",
	"Ơ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ȏ": "O",
	"Ꝋ": "O",
	"Ꝍ": "O",
	"Ō": "O",
	"Ṓ": "O",
	"Ṑ": "O",
	"Ɵ": "O",
	"Ǫ": "O",
	"Ǭ": "O",
	"Ø": "O",
	"Ǿ": "O",
	"Õ": "O",
	"Ṍ": "O",
	"Ṏ": "O",
	"Ȭ": "O",
	"Ƣ": "OI",
	"Ꝏ": "OO",
	"Ɛ": "E",
	"Ɔ": "O",
	"Ȣ": "OU",
	"Ṕ": "P",
	"Ṗ": "P",
	"Ꝓ": "P",
	"Ƥ": "P",
	"Ꝕ": "P",
	"Ᵽ": "P",
	"Ꝑ": "P",
	"Ꝙ": "Q",
	"Ꝗ": "Q",
	"Ŕ": "R",
	"Ř": "R",
	"Ŗ": "R",
	"Ṙ": "R",
	"Ṛ": "R",
	"Ṝ": "R",
	"Ȑ": "R",
	"Ȓ": "R",
	"Ṟ": "R",
	"Ɍ": "R",
	"Ɽ": "R",
	"Ꜿ": "C",
	"Ǝ": "E",
	"Ś": "S",
	"Ṥ": "S",
	"Š": "S",
	"Ṧ": "S",
	"Ş": "S",
	"Ŝ": "S",
	"Ș": "S",
	"Ṡ": "S",
	"Ṣ": "S",
	"Ṩ": "S",
	"Ť": "T",
	"Ţ": "T",
	"Ṱ": "T",
	"Ț": "T",
	"Ⱦ": "T",
	"Ṫ": "T",
	"Ṭ": "T",
	"Ƭ": "T",
	"Ṯ": "T",
	"Ʈ": "T",
	"Ŧ": "T",
	"Ɐ": "A",
	"Ꞁ": "L",
	"Ɯ": "M",
	"Ʌ": "V",
	"Ꜩ": "TZ",
	"Ú": "U",
	"Ŭ": "U",
	"Ǔ": "U",
	"Û": "U",
	"Ṷ": "U",
	"Ü": "U",
	"Ǘ": "U",
	"Ǚ": "U",
	"Ǜ": "U",
	"Ǖ": "U",
	"Ṳ": "U",
	"Ụ": "U",
	"Ű": "U",
	"Ȕ": "U",
	"Ù": "U",
	"Ủ": "U",
	"Ư": "U",
	"Ứ": "U",
	"Ự": "U",
	"Ừ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ȗ": "U",
	"Ū": "U",
	"Ṻ": "U",
	"Ų": "U",
	"Ů": "U",
	"Ũ": "U",
	"Ṹ": "U",
	"Ṵ": "U",
	"Ꝟ": "V",
	"Ṿ": "V",
	"Ʋ": "V",
	"Ṽ": "V",
	"Ꝡ": "VY",
	"Ẃ": "W",
	"Ŵ": "W",
	"Ẅ": "W",
	"Ẇ": "W",
	"Ẉ": "W",
	"Ẁ": "W",
	"Ⱳ": "W",
	"Ẍ": "X",
	"Ẋ": "X",
	"Ý": "Y",
	"Ŷ": "Y",
	"Ÿ": "Y",
	"Ẏ": "Y",
	"Ỵ": "Y",
	"Ỳ": "Y",
	"Ƴ": "Y",
	"Ỷ": "Y",
	"Ỿ": "Y",
	"Ȳ": "Y",
	"Ɏ": "Y",
	"Ỹ": "Y",
	"Ź": "Z",
	"Ž": "Z",
	"Ẑ": "Z",
	"Ⱬ": "Z",
	"Ż": "Z",
	"Ẓ": "Z",
	"Ȥ": "Z",
	"Ẕ": "Z",
	"Ƶ": "Z",
	"Ĳ": "IJ",
	"Œ": "OE",
	"ᴀ": "A",
	"ᴁ": "AE",
	"ʙ": "B",
	"ᴃ": "B",
	"ᴄ": "C",
	"ᴅ": "D",
	"ᴇ": "E",
	"ꜰ": "F",
	"ɢ": "G",
	"ʛ": "G",
	"ʜ": "H",
	"ɪ": "I",
	"ʁ": "R",
	"ᴊ": "J",
	"ᴋ": "K",
	"ʟ": "L",
	"ᴌ": "L",
	"ᴍ": "M",
	"ɴ": "N",
	"ᴏ": "O",
	"ɶ": "OE",
	"ᴐ": "O",
	"ᴕ": "OU",
	"ᴘ": "P",
	"ʀ": "R",
	"ᴎ": "N",
	"ᴙ": "R",
	"ꜱ": "S",
	"ᴛ": "T",
	"ⱻ": "E",
	"ᴚ": "R",
	"ᴜ": "U",
	"ᴠ": "V",
	"ᴡ": "W",
	"ʏ": "Y",
	"ᴢ": "Z",
	"á": "a",
	"ă": "a",
	"ắ": "a",
	"ặ": "a",
	"ằ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ǎ": "a",
	"â": "a",
	"ấ": "a",
	"ậ": "a",
	"ầ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ä": "a",
	"ǟ": "a",
	"ȧ": "a",
	"ǡ": "a",
	"ạ": "a",
	"ȁ": "a",
	"à": "a",
	"ả": "a",
	"ȃ": "a",
	"ā": "a",
	"ą": "a",
	"ᶏ": "a",
	"ẚ": "a",
	"å": "a",
	"ǻ": "a",
	"ḁ": "a",
	"ⱥ": "a",
	"ã": "a",
	"ꜳ": "aa",
	"æ": "ae",
	"ǽ": "ae",
	"ǣ": "ae",
	"ꜵ": "ao",
	"ꜷ": "au",
	"ꜹ": "av",
	"ꜻ": "av",
	"ꜽ": "ay",
	"ḃ": "b",
	"ḅ": "b",
	"ɓ": "b",
	"ḇ": "b",
	"ᵬ": "b",
	"ᶀ": "b",
	"ƀ": "b",
	"ƃ": "b",
	"ɵ": "o",
	"ć": "c",
	"č": "c",
	"ç": "c",
	"ḉ": "c",
	"ĉ": "c",
	"ɕ": "c",
	"ċ": "c",
	"ƈ": "c",
	"ȼ": "c",
	"ď": "d",
	"ḑ": "d",
	"ḓ": "d",
	"ȡ": "d",
	"ḋ": "d",
	"ḍ": "d",
	"ɗ": "d",
	"ᶑ": "d",
	"ḏ": "d",
	"ᵭ": "d",
	"ᶁ": "d",
	"đ": "d",
	"ɖ": "d",
	"ƌ": "d",
	"ı": "i",
	"ȷ": "j",
	"ɟ": "j",
	"ʄ": "j",
	"ǳ": "dz",
	"ǆ": "dz",
	"é": "e",
	"ĕ": "e",
	"ě": "e",
	"ȩ": "e",
	"ḝ": "e",
	"ê": "e",
	"ế": "e",
	"ệ": "e",
	"ề": "e",
	"ể": "e",
	"ễ": "e",
	"ḙ": "e",
	"ë": "e",
	"ė": "e",
	"ẹ": "e",
	"ȅ": "e",
	"è": "e",
	"ẻ": "e",
	"ȇ": "e",
	"ē": "e",
	"ḗ": "e",
	"ḕ": "e",
	"ⱸ": "e",
	"ę": "e",
	"ᶒ": "e",
	"ɇ": "e",
	"ẽ": "e",
	"ḛ": "e",
	"ꝫ": "et",
	"ḟ": "f",
	"ƒ": "f",
	"ᵮ": "f",
	"ᶂ": "f",
	"ǵ": "g",
	"ğ": "g",
	"ǧ": "g",
	"ģ": "g",
	"ĝ": "g",
	"ġ": "g",
	"ɠ": "g",
	"ḡ": "g",
	"ᶃ": "g",
	"ǥ": "g",
	"ḫ": "h",
	"ȟ": "h",
	"ḩ": "h",
	"ĥ": "h",
	"ⱨ": "h",
	"ḧ": "h",
	"ḣ": "h",
	"ḥ": "h",
	"ɦ": "h",
	"ẖ": "h",
	"ħ": "h",
	"ƕ": "hv",
	"í": "i",
	"ĭ": "i",
	"ǐ": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ị": "i",
	"ȉ": "i",
	"ì": "i",
	"ỉ": "i",
	"ȋ": "i",
	"ī": "i",
	"į": "i",
	"ᶖ": "i",
	"ɨ": "i",
	"ĩ": "i",
	"ḭ": "i",
	"ꝺ": "d",
	"ꝼ": "f",
	"ᵹ": "g",
	"ꞃ": "r",
	"ꞅ": "s",
	"ꞇ": "t",
	"ꝭ": "is",
	"ǰ": "j",
	"ĵ": "j",
	"ʝ": "j",
	"ɉ": "j",
	"ḱ": "k",
	"ǩ": "k",
	"ķ": "k",
	"ⱪ": "k",
	"ꝃ": "k",
	"ḳ": "k",
	"ƙ": "k",
	"ḵ": "k",
	"ᶄ": "k",
	"ꝁ": "k",
	"ꝅ": "k",
	"ĺ": "l",
	"ƚ": "l",
	"ɬ": "l",
	"ľ": "l",
	"ļ": "l",
	"ḽ": "l",
	"ȴ": "l",
	"ḷ": "l",
	"ḹ": "l",
	"ⱡ": "l",
	"ꝉ": "l",
	"ḻ": "l",
	"ŀ": "l",
	"ɫ": "l",
	"ᶅ": "l",
	"ɭ": "l",
	"ł": "l",
	"ǉ": "lj",
	"ſ": "s",
	"ẜ": "s",
	"ẛ": "s",
	"ẝ": "s",
	"ḿ": "m",
	"ṁ": "m",
	"ṃ": "m",
	"ɱ": "m",
	"ᵯ": "m",
	"ᶆ": "m",
	"ń": "n",
	"ň": "n",
	"ņ": "n",
	"ṋ": "n",
	"ȵ": "n",
	"ṅ": "n",
	"ṇ": "n",
	"ǹ": "n",
	"ɲ": "n",
	"ṉ": "n",
	"ƞ": "n",
	"ᵰ": "n",
	"ᶇ": "n",
	"ɳ": "n",
	"ñ": "n",
	"ǌ": "nj",
	"ó": "o",
	"ŏ": "o",
	"ǒ": "o",
	"ô": "o",
	"ố": "o",
	"ộ": "o",
	"ồ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ö": "o",
	"ȫ": "o",
	"ȯ": "o",
	"ȱ": "o",
	"ọ": "o",
	"ő": "o",
	"ȍ": "o",
	"ò": "o",
	"ỏ": "o",
	"ơ": "o",
	"ớ": "o",
	"ợ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ȏ": "o",
	"ꝋ": "o",
	"ꝍ": "o",
	"ⱺ": "o",
	"ō": "o",
	"ṓ": "o",
	"ṑ": "o",
	"ǫ": "o",
	"ǭ": "o",
	"ø": "o",
	"ǿ": "o",
	"õ": "o",
	"ṍ": "o",
	"ṏ": "o",
	"ȭ": "o",
	"ƣ": "oi",
	"ꝏ": "oo",
	"ɛ": "e",
	"ᶓ": "e",
	"ɔ": "o",
	"ᶗ": "o",
	"ȣ": "ou",
	"ṕ": "p",
	"ṗ": "p",
	"ꝓ": "p",
	"ƥ": "p",
	"ᵱ": "p",
	"ᶈ": "p",
	"ꝕ": "p",
	"ᵽ": "p",
	"ꝑ": "p",
	"ꝙ": "q",
	"ʠ": "q",
	"ɋ": "q",
	"ꝗ": "q",
	"ŕ": "r",
	"ř": "r",
	"ŗ": "r",
	"ṙ": "r",
	"ṛ": "r",
	"ṝ": "r",
	"ȑ": "r",
	"ɾ": "r",
	"ᵳ": "r",
	"ȓ": "r",
	"ṟ": "r",
	"ɼ": "r",
	"ᵲ": "r",
	"ᶉ": "r",
	"ɍ": "r",
	"ɽ": "r",
	"ↄ": "c",
	"ꜿ": "c",
	"ɘ": "e",
	"ɿ": "r",
	"ś": "s",
	"ṥ": "s",
	"š": "s",
	"ṧ": "s",
	"ş": "s",
	"ŝ": "s",
	"ș": "s",
	"ṡ": "s",
	"ṣ": "s",
	"ṩ": "s",
	"ʂ": "s",
	"ᵴ": "s",
	"ᶊ": "s",
	"ȿ": "s",
	"ɡ": "g",
	"ᴑ": "o",
	"ᴓ": "o",
	"ᴝ": "u",
	"ť": "t",
	"ţ": "t",
	"ṱ": "t",
	"ț": "t",
	"ȶ": "t",
	"ẗ": "t",
	"ⱦ": "t",
	"ṫ": "t",
	"ṭ": "t",
	"ƭ": "t",
	"ṯ": "t",
	"ᵵ": "t",
	"ƫ": "t",
	"ʈ": "t",
	"ŧ": "t",
	"ᵺ": "th",
	"ɐ": "a",
	"ᴂ": "ae",
	"ǝ": "e",
	"ᵷ": "g",
	"ɥ": "h",
	"ʮ": "h",
	"ʯ": "h",
	"ᴉ": "i",
	"ʞ": "k",
	"ꞁ": "l",
	"ɯ": "m",
	"ɰ": "m",
	"ᴔ": "oe",
	"ɹ": "r",
	"ɻ": "r",
	"ɺ": "r",
	"ⱹ": "r",
	"ʇ": "t",
	"ʌ": "v",
	"ʍ": "w",
	"ʎ": "y",
	"ꜩ": "tz",
	"ú": "u",
	"ŭ": "u",
	"ǔ": "u",
	"û": "u",
	"ṷ": "u",
	"ü": "u",
	"ǘ": "u",
	"ǚ": "u",
	"ǜ": "u",
	"ǖ": "u",
	"ṳ": "u",
	"ụ": "u",
	"ű": "u",
	"ȕ": "u",
	"ù": "u",
	"ủ": "u",
	"ư": "u",
	"ứ": "u",
	"ự": "u",
	"ừ": "u",
	"ử": "u",
	"ữ": "u",
	"ȗ": "u",
	"ū": "u",
	"ṻ": "u",
	"ų": "u",
	"ᶙ": "u",
	"ů": "u",
	"ũ": "u",
	"ṹ": "u",
	"ṵ": "u",
	"ᵫ": "ue",
	"ꝸ": "um",
	"ⱴ": "v",
	"ꝟ": "v",
	"ṿ": "v",
	"ʋ": "v",
	"ᶌ": "v",
	"ⱱ": "v",
	"ṽ": "v",
	"ꝡ": "vy",
	"ẃ": "w",
	"ŵ": "w",
	"ẅ": "w",
	"ẇ": "w",
	"ẉ": "w",
	"ẁ": "w",
	"ⱳ": "w",
	"ẘ": "w",
	"ẍ": "x",
	"ẋ": "x",
	"ᶍ": "x",
	"ý": "y",
	"ŷ": "y",
	"ÿ": "y",
	"ẏ": "y",
	"ỵ": "y",
	"ỳ": "y",
	"ƴ": "y",
	"ỷ": "y",
	"ỿ": "y",
	"ȳ": "y",
	"ẙ": "y",
	"ɏ": "y",
	"ỹ": "y",
	"ź": "z",
	"ž": "z",
	"ẑ": "z",
	"ʑ": "z",
	"ⱬ": "z",
	"ż": "z",
	"ẓ": "z",
	"ȥ": "z",
	"ẕ": "z",
	"ᵶ": "z",
	"ᶎ": "z",
	"ʐ": "z",
	"ƶ": "z",
	"ɀ": "z",
	"ﬀ": "ff",
	"ﬃ": "ffi",
	"ﬄ": "ffl",
	"ﬁ": "fi",
	"ﬂ": "fl",
	"ĳ": "ij",
	"œ": "oe",
	"ﬆ": "st",
	"ₐ": "a",
	"ₑ": "e",
	"ᵢ": "i",
	"ⱼ": "j",
	"ₒ": "o",
	"ᵣ": "r",
	"ᵤ": "u",
	"ᵥ": "v",
	"ₓ": "x"
};

function getUmlauteMappings(inputRegex) { // creates mappings like hamm => h(ä|a)mm
	var mappings = {ä: ['a', 'ae'], a: ['ä'], ö: ['o', 'oe'], o: ['ö'], ü: ['u', 'ue'], u: ['ü'], s: ['ß'], ß: ['ss']};
	Object.each(mappings, function (value, key) {
		value.push(key);
		inputRegex = inputRegex.replace(key, '(' + value.join('|') + ')');
	});
	return inputRegex;
}

String.prototype.latinise = function () {
	return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
		return Latinise.latin_map[a] || a
	})
};
String.prototype.latinize = String.prototype.latinise;
String.prototype.isLatin = function () {
	return this == this.latinise()
}
String.prototype.highlightMatches = function (keywords) {
	var text = this;
	keywords.unique().each(function (keyword) {
		if (keyword.length < 3) return;
		text = text.replace(RegExp('(' + getUmlauteMappings(keyword) + ')', 'i'), '<span class="highlight">$1</span>');
	});
	return text;
}
//end latinize

$extend(Element.NativeEvents, {
	'paste': 2, 'input': 2
});
Element.Events.paste = {
	base: (Browser.Engine.presto || (Browser.Engine.gecko && Browser.Engine.version < 19)) ? 'input' : 'paste',
	condition: function (e) {
		this.fireEvent('paste', e, 1);
		return false;
	}
};

Element.Events.outerClick = {
	base: 'click',
	condition: function (event) {
		event.stopPropagation();
		return false;
	},

	onAdd: function (fn) {
		$(document.body).addEvent('click', fn);
	},

	onRemove: function (fn) {
		$(document.body).removeEvent('click', fn);
	}
};

Element.Events.keyupDelayed = {
	base: 'keyup',

	condition: function (event) {
		var test = (event.code == 8 || event.code == 46); // backspace, enter & delete
		test = test || (event.code >= 48 && event.code <= 90); // letters & numbers;
		test = test || (event.code >= 96 && event.code <= 111); // numpads
		test = test || event.code >= 186; // other symbols
		if (!test) return;

		if (!this.retrieve('refreshInterval'))
			this.store('refreshInterval', 0);
		this.store('refreshInterval', this.retrieve('refreshInterval') + 1);
		(function () {
			this.store('refreshInterval', this.retrieve('refreshInterval') - 1);
			if (this.retrieve('refreshInterval') == 0) {
				this.retrieve('keyupfunction').attempt(event, this);
			}
		}.bind(this)).delay(350);
		//event.stopPropagation();
	},

	onAdd: function (fn) {
		this.store('refreshInterval', 0);
		this.store('keyupfunction', fn);
	},

	onRemove: function (fn) {
		this.store('keyupfunction', null);
	}
};

Element.Events.blurDelayed = {
	base: 'blur',

	condition: function (event) {
		(function () {
			console.log('blurdelayed');
			this.retrieve('blurfunction').attempt(event, this);
		}.bind(this)).delay(3500);
	},

	onAdd: function (fn) {
		this.store('blurfunction', fn);
	},

	onRemove: function (fn) {
		this.store('blurfunction', null);
	}
}

$extend(Element.NativeEvents, {
	'paste': 2, 'input': 2
});


Form.Validator.implement({
	validateField: function (field, force) {
		if (this.paused) return true;
		field = document.id(field);
		try {
			if (!(field.get('tag') === 'input' && field.get('type') === 'file'))
				field.value = field.value.trim();
			var passed = !field.hasClass('validation-failed');
			var failed, warned;
			if (this.options.serial && !force) {
				failed = this.element.getElement('.validation-failed');
				warned = this.element.getElement('.warning');
			}
			if (field && (!failed || force || field.hasClass('validation-failed') || (failed && !this.options.serial))) {
				var validators = field.className.split(' ').some(function (cn) {
					return this.getValidator(cn);
				}, this);
				var validatorsFailed = [];
				field.className.split(' ').each(function (className) {
					if (className && !this.test(className, field)) validatorsFailed.include(className);
				}, this);
				passed = validatorsFailed.length === 0;
				if (validators && !field.hasClass('warnOnly')) {
					if (passed) {
						if (field.getParent('[rel=input]'))
							field.getParent('[rel=input]').addClass('validation-passed').removeClass('validation-failed');
						field.addClass('validation-passed').removeClass('validation-failed');

						if (field.retrieve('ui_checkbox') && typeof field.retrieve('ui_checkbox').checkBox.detachTooltip != 'undefined')
							field.retrieve('ui_checkbox').checkBox.detachTooltip();
						if (typeof field.detachTooltip != 'undefined')
							field.detachTooltip();
						this.fireEvent('elementPass', field);
					} else {
						if (field.getParent('[rel=input]'))
							field.getParent('[rel=input]').addClass('validation-failed').removeClass('validation-passed');
						field.addClass('validation-failed').removeClass('validation-passed');
						this.fireEvent('elementFail', [field, validatorsFailed]);
					}
				}
				if (!warned) {
					var warnings = field.className.split(' ').some(function (cn) {
						if (cn.test('^warn-') || field.hasClass('warnOnly'))
							return this.getValidator(cn.replace(/^warn-/, ''));
						else return null;
					}, this);
					field.removeClass('warning');
					var warnResult = field.className.split(' ').map(function (cn) {
						if (cn.test('^warn-') || field.hasClass('warnOnly'))
							return this.test(cn.replace(/^warn-/, ''), field, true);
						else return null;
					}, this);
				}
			}
		}
		catch (e) {
			console.log(field);
			console.log(e)
			return true;
		}
		return passed;
	},

	validationMonitor: function () {
		clearTimeout(this.timer);
		this.timer = this.validateField.delay(500, this, arguments);
	},

	test: function (className, field, warn) {
		field = document.id(field);
		this.element.store('ui_checkbox', this);
		if ((this.options.ignoreHidden && !field.isVisible() && !(field.retrieve('ui_checkbox') && field.retrieve('ui_checkbox').checkBox.isVisible()))   /* add check for UICheckBoxes */
				|| (this.options.ignoreDisabled && field.get('disabled'))) return true;
		var validator = this.getValidator(className);
		if (warn != null) warn = false;
		if (this.hasValidator(field, 'warnOnly')) warn = true;
		var isValid = this.hasValidator(field, 'ignoreValidation') || (validator ? validator.test(field) : true);
		if (validator && (field.isVisible()
				|| (field.retrieve('ui_checkbox') && field.retrieve('ui_checkbox').checkBox.isVisible())
				)) {
			this.fireEvent('elementValidate', [isValid, field, className, warn]);
		}
		if (warn) return true;
		return isValid;
	}

});


Form.Validator.Inline.implement({
	hideAdvice: function (className, field) {
		var advice = this.getAdvice(className, field);
		advice = document.id(advice);

		if (advice && field.retrieve('$moo:' + this.getPropName(className))) {
			field.store('$moo:' + this.getPropName(className), false);
			this.options.hideError(advice);
			this.fireEvent('hideAdvice', [field, advice, className]);
		}
	},

	initialize: function (form, options) {
		this.parent(form, options);
		if (typeof this.options.showAsTooltip == 'undefined')
			this.options.showAsTooltip = true;
		this.addEvent('onElementValidate', function (isValid, field, className, warn) {
			if (field.retrieve('ui_checkbox')) { //Fire Event on UICheckbox for validation gighlight
				field.fireEvent('elementValidate', [isValid, field, className, warn]);
			}
			var validator = this.getValidator(className);
			if (!isValid && validator.getError(field)) {
				if (warn) field.addClass('warning');
				var advice = this.makeAdvice(className, field, validator.getError(field), warn);
				this.insertAdvice(advice, field);
				this.showAdvice(className, field);
			} else {
				this.hideAdvice(className, field);
			}
		});
	},

	insertAdvice: function (advice, field) {
		if (this.options.showAsTooltip && !field.hasClass('showAdviceWithoutTooltip')) {
			/*
			 if ($defined(field.addText) && false){
			 field.addText(advice);
			 }
			 else {*/
			if (field.retrieve('ui_checkbox') && field.retrieve('ui_checkbox').options.validation_tooltip)
				new UITooltip(field.retrieve('ui_checkbox').checkBox, {
					y_position: 'bottom',
					x_position: 'center',
					content: advice,
					y_distance: 5,
					width: field.getSize().x > 150 ? field.getSize().x : 0
				});
			else {
				if (typeof field.detachTooltip != 'undefined')
					field.detachTooltip();
				new UITooltip(field, {
					y_position: 'bottom',
					x_position: 'center',
					content: advice,
					y_distance: 5,
					width: field.getSize().x > 150 ? field.getSize().x : 0
				});
			}
		}
		//}
		else {
			var props = field.get('validatorProps');
			//Build advice
			if (!props.msgPos || !document.id(props.msgPos)) {
				if (field.type && field.type.toLowerCase() == 'radio') field.getParent().adopt(advice);
				else {
					if (field.getParent('[rel=input]'))
						advice.inject(field.getParent('[rel=input]'), 'after');
					else
						advice.inject(document.id(field), 'after');
				}
			} else {
				document.id(props.msgPos).grab(advice);
			}
		}
	},


	resetField: function (field) {
		field = document.id(field);
		if (!field) return this;
		this.parent(field);
		field.get('validators').each(function (className) {
			this.hideAdvice(className, field);
		}, this);
		return this;
	},


	makeAdvice: function (className, field, error, warn) {
		var errorMsg = (warn) ? this.warningPrefix : this.errorPrefix;
		errorMsg += (this.options.useTitles) ? field.title || error : error;
		var cssClass = (warn) ? 'warning-advice' : 'validation-advice';
		var advice = this.getAdvice(className, field);
		if (advice) {
			if (document.id(advice).set != 'undefined')
				advice = document.id(advice).set('html', errorMsg);
		} else {
			advice = new Element('span', {
				html: errorMsg,
				styles: {
					display: 'none',
					'margin-left': this.options.showAsTooltip && !field.hasClass('showAdviceWithoutTooltip') ? 'auto' : field.getPosition(field.getParent()).x
				},
				id: 'advice-' + className.split(':')[0] + '-' + this.getFieldId(field)
			}).addClass(cssClass);
		}
		field.store('$moo:advice-' + className, advice);
		return advice;
	},

	/**
	 * Displays an error into MooTools Form Validator for a specific field
	 * @param {String} key The of the field in KO3 ORM validator errors
	 * @param {String} message The error message corresponding to `key`
	 * @param {Function} key_change The function that produces the id attribute of element to show error
	 */
	displayError: function (key, message) {
		if (!(key && message)) return;
		var input = this.element.getElement('input[name="' + key + '"]');
		if (!input)
			input = this.element.getElement('select[name="' + key + '"]');
		if (!input) return;
		if (input.getParent() && input.getParent().hasClass('input')) {
			input.getParent().removeClass('validation-passed');
			input.getParent().addClass('validation-failed');
		}
		input.removeClass('validation-passed');
		input.addClass('validation-failed');
		input.getParent().getElements('.validation-advice').each(function (element, index) {
			element.destroy();
		});
		this.insertAdvice(this.makeAdvice('', input, message, false), input);
		this.showAdvice('', input);
	},
	/**
	 * Displays errors returned from KO3 ORM Validation as hash into MooTools Form Validator
	 * @param {Object} Errors object {field_key: error_message}
	 * @param {Function} key_change The function that creates the id attribute of elements to display error
	 */
	displayErrors: function (errors) {
		this.element.getElements('.validation-advice').each(function (element, index) {
			element.destroy();
		});
		if (!$defined(errors) || !Object.getLength(errors)) return;
		for (var key in errors)
			this.displayError(key, errors[key]);

		//scroll to first error
		if (this.options.scrollToErrorsOnSubmit) {
			var failed = document.id(this).getElement('.validation-failed');
			if (!failed)
				return;
			var par = document.id(this).getParent();
			while (par != document.body && par.getScrollSize().y == par.getSize().y) {
				par = par.getParent();
			}
			var fx = par.retrieve('$moo:fvScroller');
			if (!fx && window.Fx && Fx.Scroll) {
				fx = new Fx.Scroll(par, this.options.scrollFxOptions);
				par.store('$moo:fvScroller', fx);
			}
			if (failed) {
				if (fx) fx.toElement(failed);
				else par.scrollTo(par.getScroll().x, failed.getPosition(par).y - 20);
			}
		}

	}
});

Form.Request.implement({
	send: function () {
		var str = this.element.toQueryString().trim(), data = Object.toQueryString(this.options.extraData);
		if (str) str += "&" + data;
		else str = data;
		this.fireEvent('send', [this.element, str.parseQueryString()]);
		var str = this.element.toQueryString().trim(), data = Object.toQueryString(this.options.extraData);
		if (str) str += "&" + data;
		else str = data;
		this.request.send({
			data: str,
			url: this.options.requestOptions.url || this.element.get('action')
		});
		this.clickedCleaner();
		return this;
	}
});

UILocalStorage = {};
UILocalStorage.setItem = function (key, value, lifetime) {
	if (typeof(Storage) !== "undefined") {
		var actTime = Math.round(new Date().getTime() / 1000);
		if (!(typeof lifetime != 'undefined' && lifetime))
			var lifetime = null;
		else lifetime += actTime;
		try {
			localStorage.setItem(key, JSON.encode({data: value, lifetime: lifetime}));
		}
		catch (e) {
			localStorage.clear();
			localStorage.setItem(key, JSON.encode({data: value, lifetime: lifetime}));
		}
		return true;
	}
	else return false;
}

UILocalStorage.deleteItem = function (key) {
	if (typeof(Storage) !== "undefined") {
		var item = localStorage.getItem(key);
		if (item)
			delete  localStorage[key];
	}
};

UILocalStorage.getItem = function (key) {
	if (typeof(Storage) !== "undefined") {
		var item = localStorage.getItem(key);
		var actTime = Math.round(new Date().getTime() / 1000);
		if (item) {
			try {
				item = JSON.decode(item);
			}
			catch (e) {
				return null;
			}
			if (typeof item.lifetime != 'undefined') {
				if (item.lifetime === null || item.lifetime > actTime)
					return item.data;
				if (item.lifetime < actTime)
					return null;
			}
			else
				return null;
		}
		else return false;
	}
	return false;
}

Locale.define('de-DE', 'FormValidator', {
	required: 'Dieses Eingabefeld muss ausgef&uuml;llt werden.',
	minLength: 'Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben nur {length} Zeichen eingegeben).',
	maxLength: 'Geben Sie bitte nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).',
	integer: 'Geben Sie in diesem Eingabefeld bitte eine ganze Zahl ein. Dezimalzahlen (z.B. &quot;1.25&quot;) sind nicht erlaubt.',
	numeric: 'Geben Sie in diesem Eingabefeld bitte nur Zahlenwerte (z.B. &quot;1&quot;, &quot;1.1&quot;, &quot;-1&quot; oder &quot;-1.1&quot;) ein.',
	digits: 'Geben Sie in diesem Eingabefeld bitte nur Zahlen und Satzzeichen ein (z.B. eine Telefonnummer mit Bindestrichen und Punkten ist erlaubt).',
	alpha: 'Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) ein. Leerzeichen und andere Zeichen sind nicht erlaubt.',
	alphanum: 'Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) und Zahlen (0-9) ein. Leerzeichen oder andere Zeichen sind nicht erlaubt.',
	dateSuchAs: 'Geben Sie bitte ein g&uuml;ltiges Datum ein (z.B. &quot;{date}&quot;).',
	dateInFormatMDY: 'Geben Sie bitte ein g&uuml;ltiges Datum im Format TT.MM.JJJJ ein (z.B. &quot;31.12.1999&quot;).',
	email: 'Geben Sie bitte eine g&uuml;ltige E-Mail-Adresse ein.',
	url: 'Geben Sie bitte eine g&uuml;ltige URL ein (z.B. &quot;http://www.google.de&quot;).',
	urlCanonical: 'Geben Sie bitte eine g&uuml;ltige URL ein (z.B. &quot;www.meineseite.de&quot;).',
	currencyDollar: 'Geben Sie bitte einen g&uuml;ltigen Betrag in EURO ein (z.B. 100.00&#8364;).',
	oneRequired: 'Bitte f&uuml;llen Sie mindestens ein Eingabefeld aus.',
	errorPrefix: 'Fehler: ',
	warningPrefix: 'Warnung: ',

	// Form.Validator.Extras
	noSpace: 'Es darf kein Leerzeichen in diesem Eingabefeld sein.',
	reqChkByNode: 'Es wurden keine Elemente gew&auml;hlt.',
	requiredChk: 'Dieses Feld muss ausgef&uuml;llt werden.',
	reqChkByName: 'Bitte w&auml;hlen Sie ein {label}.',
	match: 'Dieses Eingabefeld muss mit dem {matchName} Eingabefeld &uuml;bereinstimmen.',
	startDate: 'Das Anfangsdatum',
	endDate: 'Das Enddatum',
	currendDate: 'Das aktuelle Datum',
	afterDate: 'Das Datum sollte zur gleichen Zeit oder sp&auml;ter sein als {label}.',
	beforeDate: 'Das Datum sollte zur gleichen Zeit oder fr&uuml;her sein als {label}.',
	startMonth: 'W&auml;hlen Sie bitte einen Anfangsmonat',
	sameMonth: 'Diese zwei Datumsangaben m&uuml;ssen im selben Monat sein - Sie m&uuml;ssen eines von beiden ver&auml;ndern.',
	creditcard: 'Die eingegebene Kreditkartennummer ist ung&uuml;ltig. Bitte &uuml;berpr&uuml;fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben.'

});

Form.Validator.add('IsEmpty', {

	errorMsg: false,
	test: function (element) {
		if (element.type == 'select-one' || element.type == 'select')
			return !(element.selectedIndex >= 0 && element.options[element.selectedIndex].value != '');
		else {
			return ((element.get('value') == null) || (element.get('value').length == 0) || (element.hasClass('non-changed') && element.hasClass('ui_edit_text')));
		}
	}

});

FormValidator.addAllThese([
	['validate-match', {
		errorMsg: function (element, props) {
			return Translation.get('validation_match').substitute({matchName: props.matchName || document.id(props.matchInput).get('name')});
			//return Form.Validator.getMsg('match').substitute({matchName:props.matchName || document.id(props.matchInput).get('name')});
		},
		test: function (element, props) {
			var eleVal = element.get('value');
			var matchVal = document.id(props.matchInput) && document.id(props.matchInput).get('value');
			return eleVal && matchVal ? eleVal == matchVal : true;
		}
	}],
	["validate-email",
		{
			errorMsg: function (element, props) {
				return Translation.get('validation_email')
			},
			test: function (a) {
				var domain = a.get("value").split("@");
				if (domain[1] == 'trash-mail.com') {
					return false;
				}
				return Form.Validator.getValidator("IsEmpty").test(a) || (/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]\.?){0,63}[a-z0-9!#$%&'*+\/=?^_`{|}~-]@(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/i).test(a.get("value"));

			}
		}],
	['validate-address_autocomplete', {
		errorMsg: function (element, props) {
			//Form.Validator.getMsg('address_autocomplete'),
			if ($defined(element.UIAutocomplete)) {
				var addressAutocompleter = element.UIAutocomplete;
				if (addressAutocompleter.options.addressAutocomplete.fillAddress && addressAutocompleter.addressFilled) {
					var msg = Translation.get('The address you entered is incomplete. The following elements are missing') + ':<br />';
					addressAutocompleter.componentsMissing.each(function (el, index) {
						if (index > 0)
							msg += ', ';
						msg += Translation.get(el);
					});
					return msg;
				}
				else {
					return Translation.get('The address you entered is not correct. Please select one of the proposed results while you are typing') + '.<br />';
				}
			}
		},
		test: function (element, props) {
			if (element.value.length > 0) {
				if ($defined(element.UIAutocomplete)) {
					var addressAutocompleter = element.UIAutocomplete;
					if (addressAutocompleter.options.addressAutocomplete.fillAddress && addressAutocompleter.addressFilled) {
						if (!addressAutocompleter.componentsMissing || addressAutocompleter.componentsMissing.length == 0)
							return true;
						else
							return false;
					}
					else return addressAutocompleter.geocoded;
				}
			}
			return true;
		}
	}],
	['validate-Text', {
		errorMsg: function () {
			return Translation.get('validation_validate-Text')
		},
		test: function (element, props) {
			element = element.value.latinise();
			if (element > 0) {
				regxp = /^[a-zA-Z\s\xDC\xFC\xF6\xD6\xC4\xE4\xDF\xC9\xE8\xE9\-\/\_\&\+\.\,0-9-\(-\)]{2,}$/;
				if (element.match(regxp))
					return true;
				else
					return false;
			}
			return true;
		}
	}],
	['validate-integer', {
		errorMsg: Form.Validator.getMsg.pass('integer'),
		test: function (element) {
			return Form.Validator.getValidator('IsEmpty').test(element) || (/^(-?[0-9]\d*|0)$/).test(element.get('value'));
		}
	}],
	['validate-domain', {
		errorMsg: function () {
			return Form.Validator.getMsg('urlCanonical');
		},
		test: function (element) {
			// return field.get('value').test(/(http:\/\/)?(www\.)?(.+)\.(de|at|ch|com|net|org|fr|es|info)/, 'i');
			if (element.value.length > 0) {
				var website = element.value.trim();
				if (website.indexOf('http://') < 0 && website.indexOf('https://') < 0)
					website = 'http://' + website;
				if (!(/^((https?|ftp|rmtp|mms):\/\/)?(([ÄÖÜA-Z0-9][ÄÖÜA-Z0-9_-]*)(\.[ÄÖÜA-Z0-9][ÄÖÜA-Z0-9_-]*)+)(:(\d+))?\/?/i).test(website))
					return false;
				else {
					var resourceURI = new URI(website);
					var website = resourceURI.get('host');
				}
				element.set('value', website.toLowerCase().trim());
				element.set('value', element.get('value').replace(/\s+/g, ""));
				return element.get('value').test(/(http:\/\/)?(www\.)?([a-zA-Z0-9_äöüéß\-]+)\.(\w{2,50})$/, 'i');
			}
			return true;
		}
	}],
	['validate-url-canonical', {
		errorMsg: function () {
			return Form.Validator.getMsg('urlCanonical');
		},
		test: function (element) {

			// return field.get('value').test(/(http:\/\/)?(www\.)?(.+)\.(de|at|ch|com|net|org|fr|es|info)/, 'i');
			if (element.value.length > 0) {
				element.set('value', element.get('value').toLowerCase().trim());
				element.set('value', element.get('value').replace(/\s+/g, ""));
				return element.get('value').test(/(http:\/\/)?(www\.)?([a-zA-Z0-9_äöüéß\-]+)\.(\w{2,50})$/, 'i');
			}
			return true;
		}
	}],
	['required', {
		errorMsg: function () {
			return Translation.get('validation_required');
		},
		test: function (element) {
			return !Form.Validator.getValidator('IsEmpty').test(element);
		}
	}],

	['length', {
		errorMsg: function (element, props) {
			if (typeOf(props.length) != 'null')
				return Form.Validator.getMsg('length').substitute({
					length: props.length,
					elLength: element.get('value').length
				});
			else return '';
		},
		test: function (element, props) {
			if (typeOf(props.length) != 'null') return (element.get('value').length == props.length || element.get('value').length == 0);
			else return true;
		}
	}],
	['minLength', {
		errorMsg: function (element, props) {
			if (typeOf(props.minLength) != 'null')
				return Translation.get('validation_minLength', {
					minLength: props.minLength,
					length: element.get('value').length
				})
			else return '';
		},
		test: function (element, props) {
			if (typeOf(props.minLength) != 'null') {
				if (element.get('value').length == 0 || element.get('value').length >= props.minLength) return true;
				//return (element.get('value').length >= (props.minLength || 0));
			}
			else return true;
		}
	}],

	['maxLength', {
		errorMsg: function (element, props) {
			//props is {maxLength:10}
			if (typeOf(props.maxLength) != 'null')
				return Translation.get('validation_maxLength', {
					maxLength: props.maxLength,
					length: element.get('value').length
				})
			else return '';
		},
		test: function (element, props) {
			return element.get('value').length <= (props.maxLength || 10000);
		}
	}]
]);

Asset.javascripts = function (sources, options) {
	// load an array of js dependencies and fire events as it walks through
	options = Object.merge({
		onComplete: Function.from,
		onProgress: Function.from
	}, options);
	var counter = 0, todo = sources.length;

	var loadNext = function () {
		if (sources[0])
			source = sources[0];

		Asset.javascript(source, {
			onload: function () {
				counter++;
				options.onProgress.call(this, counter, source);
				sources.erase(source);

				if (counter == todo)
					options.onComplete.call(this, counter);
				else
					loadNext();
			}
		});
	};

	loadNext();
};

/*solve problems with external scripts and request.html */
Request.HTML = Class.refactor(Request.HTML, {
	options: {
		loadExternalScripts: true
	},
	success: function (text) {
		if (this.options.loadExternalScripts) {
			var regex = /<script.*src="([^>"\r\n]*)"[^>]*><\/script>/gi;
			var matches = scripts = [];
			while (matches = regex.exec(text)) {
				scripts.push(matches[1]);
			}
			var fn = this.previous;
			if (!scripts.length) {
				this.previous(text);
			}
			else {
				Asset.javascripts(scripts, {
					onComplete: function () {
						fn.apply(this, [text]);
					}.bind(this)
				});
				//group.addEvent('load', function() {fn.apply(this,[text]);}.bind(this));
			}
		} else {
			this.previous(text);
		}
		if (this.options.update)
			new UITermhighlighter(this.options.update);
	}
});


Element.implement({
	evalScripts: function () {
		this.getElements('script[type=text/javascript]').each(function (element) {
			if (!element.retrieve('eval')) {
				if (element.get('src')) new Asset.javascript(element.get('src'));
				eval(element.get('html'));
				element.store('eval', true);
			}
		});
	},

	setFocus: function (index) {
		this.setAttribute('tabIndex', index || 0);
		this.focus();
	},

	disable: function () {
		this.addClass('disabled');
		if (this.getProperty('href') || this.getProperty('onclick')) {
			if (!this.retrieve('href_backup')) this.store('href_backup', this.getProperty('href'));
			this.setProperty('href', 'javascript: void(0)');
			if (!this.retrieve('onbclick_backup')) this.store('onbclick_backup', this.getProperty('onclick'));
			this.setProperty('onclick', '');
		}
		if (!this.retrieve('event_backup')) this.store('event_backup', (new Element('div', {})).cloneEvents(this));
		this.removeEvents();
		var enableFX = this.retrieve('enableFX') ? this.retrieve('enableFX') : new Fx.Morph(this, {
			duration: 400,
			link: 'cancel'
		});
		this.store('enableFX', enableFX);
		enableFX.start({opacity: 0.3}).chain(function () {
			this.store('enableFX', null);
			//console.log(this.get('class'));console.log('enable finished');
		}.bind(this));
	},

	enable: function () {
		//console.log(this.get('class'));
		if (this.hasClass('disabled') || this.retrieve('href_backup') || this.retrieve('onbclick_backup')) {
			var enableFX = this.retrieve('enableFX') ? this.retrieve('enableFX') : new Fx.Morph(this, {
				duration: 400,
				link: 'cancel'
			});
			enableFX.start({opacity: 1}).chain(function () {
			}.bind(this));
			this.removeClass('disabled');
			//console.log('enable inner');
			this.setProperty('href', this.retrieve('href_backup'));
			this.setProperty('onclick', this.retrieve('onbclick_backup'));
			//this.store('href_backup', null);
			//this.store('onbclick_backup', null);
			if (this.retrieve('event_backup')) {
				this.cloneEvents(this.retrieve('event_backup'));
				//this.store('event_backup', null);
			}
			this.store('enableFX', null);
		}
	},

	//Adaption of Mootools to Query String
	toQueryString: function () {
		var queryString = [];
		//end ui_inline_editor for having an actual value
		this.getElements('.ui_inline_edit').each(function (el, index) {
			if (typeof  el.endEdit != 'undefined')
				el.endEdit();
		});
		this.getElements('.ui_textarea').each(function (el, index) {
			if (typeof  el.blur != 'undefined')
				el.blur();
		});

		this.getElements('input, select, textarea').each(function (el) {
			var type = el.type;
			if ((!el.name && !el.get('rel')) || el.disabled || type == 'submit' || type == 'reset' || type == 'file' || type == 'image') return;
			var value = (el.get('tag') == 'select') ? el.getSelected().map(function (opt) {
				// IE
				return document.id(opt).get('value');
			}) : ((type == 'radio' || type == 'checkbox') && !el.checked) ? null : el.get('value');
			if (el.get('value') == el.get('title')) value = '';
			var name = el.get('name');
			//if (!el.get('name') && el.get('rel'))
			//name = el.get('rel');
			if (el.hasClass('ui_taginput')) { // special handling of UITaginput
				var actValues = JSON.decode(el.get('value'));
				if (el.get('value') && typeof actValues == 'object' && actValues.length) {
					actValues.each(function (val) {
						queryString.push(encodeURIComponent(name + '[]') + '=' + encodeURIComponent(val));
					});
				}
				else {
					queryString.push(encodeURIComponent(name) + '=');
				}
			}
			else {
				Array.from(value).each(function (val) {
					if (typeof val != 'undefined') queryString.push(encodeURIComponent(name) + '=' + encodeURIComponent(val));
				});
			}
		});
		return queryString.join('&');
	},
	isHidden: function () {
		var w = this.offsetWidth, h = this.offsetHeight,
				force = (this.tagName === 'TR');
		return (w === 0 && h === 0 && !force) ? true : (w !== 0 && h !== 0 && !force) ? false : this.getStyle('display') === 'none';
	},

	isVisible: function () {
		return !this.isHidden();
	},
	measureRelative: function (fn) {
		var vis = function (el) {
			return !!(!el || el.offsetHeight || el.offsetWidth);
		};
		if (vis(this)) return fn.apply(this);
		var parent = this.getParent(),
				restorers = [],
				toMeasure = [];
		while (!vis(parent) && parent != document.body) {
			toMeasure.push(parent.exposeRelative());
			parent = parent.getParent();
		}
		var restore = this.exposeRelative();
		var result = fn.apply(this);
		restore();
		toMeasure.each(function (restore) {
			restore();
		});
		return result;
	},

	setTextNatural: function (text, minTime, maxTime) {
		this.focus();
		if (typeof minTime == 'undefined' || minTime) minTime = 50;
		if (typeof maxTime == 'undefined' || maxTime) maxTime = 150;
		var offset = 0;
		for (var i = 0; i <= (text.length); i++) {
			offset += minTime + (Math.random() * (maxTime - minTime));
			(function (index) {
				var fieldToSet = (this.tagName.toLowerCase() == 'input' || this.tagName.toLowerCase() == 'textarea') ? 'value' : 'text';
				this.set(fieldToSet, text.substr(0, index));
				this.fireEvent('keydown');
				this.fireEvent('keyup');
				this.focus();
			}.bind(this)).delay(offset, this, i);
		}
		;
	},

	restoreHTML: function (chars) {
		if (!this.retrieve('truncated_text')) return;
		var truncatedTextArray = this.retrieve('truncated_text');
		truncatedTextArray.each(function (el, index) {
			if ($defined(el.reveal))
				el.node.reveal();
			else
				el.node.nodeValue = el.text;
		});
		this.eliminate('truncated_text');
	},

	shortenHTML: function (chars, caller, instant) {
		var usedChars = 0;
		var limitExeeded = chars < usedChars;
		for (var i = 0; i < this.childNodes.length; i++) {
			var node = this.childNodes[i];
			var nodeText = '';
			if (node.nodeType == 3) {
				nodeText = node.nodeValue.clean();
				if (limitExeeded) {
					if (caller) {
						var truncatedTextArray = [];
						if (caller.retrieve('truncated_text'))
							truncatedTextArray = caller.retrieve('truncated_text');
						truncatedTextArray.push({
							'node': node,
							'text': nodeText
						})
						caller.store('truncated_text', truncatedTextArray);
					}
					node.nodeValue = '';
				}
				else if (nodeText.length + usedChars > chars) {
					limitExeeded = true;
					if (caller) {
						var truncatedTextArray = [];
						if (caller.retrieve('truncated_text'))
							truncatedTextArray = caller.retrieve('truncated_text');
						truncatedTextArray.push({
							'node': node,
							'text': nodeText
						})
						caller.store('truncated_text', truncatedTextArray);
					}
					node.nodeValue = nodeText.truncate(chars - usedChars, "\u2026", ' ');
				}
			}
			else {
				nodeText = document.id(node).get('text').clean();
				if (limitExeeded) {
					//node.shortenHTML(-1,caller);
					if (instant)
						node.hide();
					else
						node.dissolve();
					var truncatedTextArray = [];
					if (caller.retrieve('truncated_text'))
						truncatedTextArray = caller.retrieve('truncated_text');
					truncatedTextArray.push({
						'node': node,
						'text': null,
						'reveal': true
					})
					caller.store('truncated_text', truncatedTextArray);
				}
				else if (nodeText.length + usedChars > chars) {
					node.shortenHTML(chars - usedChars, caller, instant);
					limitExeeded = true;
				}
			}
			usedChars += nodeText.length;
		}
		;
		if (limitExeeded)
			return true;
		else
			return false;
	},

	exposeRelative: function () {
		if (this.getStyle('display') != 'none') return $empty;
		var before = this.style.cssText;
		this.setStyles({
			display: 'block',
			visibility: 'hidden'
		});
		return function () {
			this.style.cssText = before;
		}.bind(this);
	},

	getStylesForTags: function (tags, attributes) {
		if (!attributes)
			attributes = ['font-size', 'font-weight', 'font-family', 'font-style', 'color', 'line-height', 'background-color', 'margin-left', 'margin-right', 'margin-bottom', 'margin-top', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom', 'border', 'list-style', 'float'];
		if (!tags)
			tags = ['element', 'p', 'b', 'span', 'ul', 'ol', 'li', 'a', 'h1', 'h2', 'h3'];
		var returnTags = [];
		tags.each(function (elem) {
			var tagStyles = {
				'name': elem,
				'styles': []
			};
			if (!elem != 'element')
				var actElement = new Element(elem, {
					style: 'display:none'
				}).inject(this);
			else
				actElement = this;
			attributes.each(function (attribute, index) {
				if (actElement.getComputedStyle(attribute)) {
					var tagStyle = {
						'name': attribute,
						'style': actElement.getComputedStyle(attribute)
					};
					tagStyles.styles.push(tagStyle);
				}
			});
			returnTags.push(tagStyles);
			actElement.destroy();
		}.bind(this))
		return returnTags;
	},

	applyStylesFromOtherElement: function (tagStyles) {
		var stylesString = '';
		var tClassName = 'tclass';
		var stylescount = 0;
		tagStyles.each(function (tag) {
			stylesString += '.' + tClassName + ' ' + ((tag.name == 'element') ? '' : tag.name) + ' {';
			tag.styles.each(function (style) {
				stylescount++;
				stylesString += style.name + ':' + style.style + ';';
			});
			stylesString += '}; '
		});
		stylesString = stylesString.replace(/tclass/gi, this.tagName + stylescount);
		this.addClass(this.tagName + stylescount);
		var styleelement = new Element('style', {
			'type': 'text/css'
		}).inject(this.getParent('html').getElement('head'));
		if (Browser.ie && Browser.version < 9) { //not working in ie
			//var styleText = document.createTextNode(stylesString);
			//styleelement.appendChild(styleText);
		}
		else
			styleelement.set('html', stylesString);
	},

	getCSSPath: function () {
		if (this.get('id'))
			return '#' + this.get('id');

		if (this == document.body)
			return 'body';
		var prev_equal_siblings_length = this.getAllPrevious(this.get('tag')).length;
		var part = this.get('tag') + ':nth-of-type(' + (prev_equal_siblings_length + 1) + ')';
		return this.getParent().getCSSPath() + ' > ' + part;
	}
});

/*
 ---

 name: History

 description: History Management via popstate or hashchange.

 authors: Christoph Pojer (@cpojer)

 license: MIT-style license.

 requires: [Core/Events, Core/Element.Event, Class-Extras/Class.Binds]

 provides: History

 ...
 */

Class.Binds = new Class({

	$bound: {},

	bound: function (name) {
		return this.$bound[name] ? this.$bound[name] : this.$bound[name] = this[name].bind(this);
	}

});

(function () {

	var events = Element.NativeEvents,
			location = window.location,
			history = window.history,
			hasPushState = ('pushState' in history),
			event = hasPushState ? 'popstate' : 'hashchange';

	this.History = new new Class({

		Implements: [Class.Binds, Events],

		initialize: hasPushState ? function () {
			events[event] = 2;
			window.addEvent(event, this.bound('pop'));
		} : function () {
			events[event] = 1;
			window.addEvent(event, this.bound('pop'));

			this.hash = location.hash;

			if ('onhashchange' in window) return;
			this.timer = this.periodical.periodical(200, this);
		},

		push: hasPushState ? function (url, title, state) {
			if (this.previous == url) return;

			history.pushState(state || null, title || null, url);
			this.previous = url;
		} : function (url) {
			location.hash = url;
		},

		replace: hasPushState ? function (url, title, state) {
			history.replaceState(state || null, title || null, url);
		} : function (url) {
			this.hash = '#' + url;
			this.push(url);
		},

		pop: hasPushState ? function (event) {
			this.onChange(location.pathname, event.event.state);
		} : function () {
			var hash = location.hash;
			if (this.hash == hash) return;

			this.hash = hash;
			this.onChange(hash.substr(1));
		},

		onChange: function (url, state) {
			this.fireEvent('change', [url, state]);
		},

		back: function () {
			history.back();
		},

		forward: function () {
			history.forward();
		},

		hasPushState: function () {
			return hasPushState;
		},

		periodical: function () {
			if (this.hash != location.hash) this.pop();
		}

	});

})();


var UIBase = '/scripts/ui/'

var UIComponent = new Class({
	Implements: [Events, Options],

	initialize: function (elements, options) {
		if (elements === null) {
			this.setOptions(options);
			return;
		}
		if ((typeof elements == 'object' && elements && $defined(elements.length) && elements.length && !elements.options && typeOf(elements) == 'elements') || typeof elements == 'string' || !elements) {
			if (typeof elements == 'string' && elements)
				elements = $$(elements);
			if (!elements)
				elements = $$('.' + this.options.className);
			if (!elements.length) return;
			elements.each(function (element, index) {
				if (typeof element[this.classType] == 'undefined') {
					if (typeof options != 'object') options = {};
					options.initSequence = true;
					eval('var instance = new ' + this.classType + '(element,options)');
				}
				else {
					if (typeof element[this.classType].reloadComponent != 'undefined')
						element[this.classType].reloadComponent(options);
				}
			}, this);
			return false;
		}
		if (typeof elements == 'object' && elements && $defined(elements.length) && !elements.length)
			return;
		//Initialization of ONLY ONE certain Object e.g. #unique
		if (typeof elements[this.classType] != 'undefined' && (typeof options != 'object' || (typeof options == 'object' && typeof options.initSequence != 'boolean'))) {
			if (typeof elements[this.classType].reloadComponent != 'undefined') {
				if ($defined(options) && $defined(options.events))
					elements[this.classType].addEvents(options.events);
				if ($defined(options))
					elements[this.classType].setOptions(options);
				elements[this.classType].reloadComponent(options);
			}
			return false;
		}
		if (typeof options == 'object' && typeof options.initSequence == 'boolean')
			delete options.initSequence;
		//NORMAL INITIALIZATION OF INSTANCE
		this.element = elements;
		this.element[this.classType] = this;
		if ($defined(options) && $defined(options.events))
			this.addEvents(options.events);
		this.setOptions(options);
		try {
			this.setOptions(JSON.decode(this.element.get('rel')));
		}
		catch (e) {
		}
		return true;
	},

	removeComponent: function (elements) {
		delete this.element[this.classType];
		delete this.element[reloadComponent];
	}

});

window.focused = true;
window.onblur = function () {
	window.focused = false;
}
window.onfocus = function () {
	window.focused = true;
}


Number.implement({
	numberFormat: function (decimals, dec_point, thousands_sep) {
		decimals = Math.abs(decimals) + 1 ? decimals : 2;
		dec_point = dec_point || '.';
		thousands_sep = thousands_sep || ',';

		var matches = /(-)?(\d+)(\.\d+)?/.exec((isNaN(this) ? 0 : this) + ''); // returns matches[1] as sign, matches[2] as numbers and matches[3] as decimals
		var remainder = matches[2].length > 3 ? matches[2].length % 3 : 0;
		return (matches[1] ? matches[1] : '') + (remainder ? matches[2].substr(0, remainder) + thousands_sep : '') + matches[2].substr(remainder).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep) +
		(decimals ? dec_point + (+matches[3] || 0).toFixed(decimals).substr(2) : '');
	}
});

var UITextArea = this.UITextArea = new Class({
	Extends: UIComponent,
	classType: 'UITextArea',

	options: {
		className: 'ui_textarea',
		minHeightFactor: 1,
		margin: 0
	},
	wrapper: new Element('div').setStyles({overflowX: 'hidden', position: 'absolute', top: 0, left: -9999}),

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		return this.setup();
	},

	escapeHTML: function (string) {
		if (!string) return '';
		return string.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	},

	setup: function () {
		this.attach().focus().resize();
	},

	toElement: function () {
		return this.element;
	},

	attach: function () {
		this.element.addEvents({
			focus: this.focus.bind(this),
			keydown: this.keydown.bind(this),
			scroll: this.scroll.bind(this)
		});
		return this;
	},

	detach: function () {
		this.element.removeEvents({
			focus: this.focus.bind(this),
			keydown: this.keydown.bind(this),
			scroll: this.scroll.bind(this)
		});
		return this;
	},

	focus: function () {
		this.wrapper.setStyles(this.element.getStyles('fontSize', 'fontFamily', 'width', 'lineHeight', 'padding')).inject(document.body);
		this.minHeight = (this.wrapper.set('html', 'A').getHeight() + this.options.margin) * this.options.minHeightFactor;
		return this;
	},

	keydown: function () {
		this.resize.delay(15, this);
	},

	resize: function () {
		var html = this.escapeHTML(this.element.get('value')).replace(/\n|\r\n/g, '<br/>A');
		if (this.wrapper.get('html') == html) return this;

		this.wrapper.set('html', html);
		var height = this.wrapper.getHeight() + this.options.margin;
		if (this.element.getHeight() != height) {
			this.element.setStyle('height', this.minHeight.max(height));
			this.element.fireEvent('resize', [this]);
		}
		return this;
	},

	scroll: function () {
		this.element.scrollTo(0, 0);
	}

});

this.UIMultiColumn = new Class({
	Implements: [Events, Options],
	options: {},
	element: {},
	children: new Array(),
	columns: new Array(),
	oldColumns: new Array(),
	multiColumns: {},

	initialize: function (element, multiColumns) {
		document.id(this);
		this.element = element;
		this.multiColumns = multiColumns;
		this.attach();
	},

	attach: function () {
		this.options = JSON.decode(this.element.get('rel'));
		var i = 0;
		this.element.getChildren().each(function (actElement) {
			actElement.multiColID = this.element.multiColID + '_' + i;
			var actElementWrapper = new Element('div', {
				'id': actElement.multiColID,
				'style': 'overflow:hidden'
			});
			actElementWrapper.wraps(actElement);
			var size = actElementWrapper.measure(function () {
				return this.getSize();
			});
			actElementWrapper.actHeight = size.y;
			this.children.push(actElementWrapper);
			i++;
		}, this);
		if (this.children.length < this.options.maxcol)
			this.options.maxcol = this.children.length;
		if (this.children.length < this.options.mincol)
			this.options.mincol = this.children.length;
	},

	refresh: function () {
		this.children.each(function (element, index) {
			var size = element.measure(function () {
				return this.getSize();
			});
			element.actHeight = size.y;
		}, this);
		this.onResize();
	},

	onResize: function () {
		var parent = this.element.getParent();
		//when parent is not defined, then the column element has been deleted from the dom, so disposse this object...
		if (parent == null) {
			this.multiColumns.deleteColumn(this);
		}
		var size = this.element.measureRelative(function () {
			return this.getSize();
		});
		var width = size.x - this.element.getStyle('padding-left').toInt() - this.element.getStyle('padding-right').toInt() - this.element.getStyle('border-left-width').toInt() - this.element.getStyle('border-right-width').toInt();
		var colcount = this.getActColumnCount(width);
		this.columns = new Array();
		for (var i = 0; i < colcount; i++) {
			var t = new Object();
			t.actHeight = 0;
			t.elements = new Array();
			this.columns.push(t);
		}

		var totalHeight = this.getTotalHeight();
		var avgHeight = Math.round(totalHeight / colcount);
		var actCol = 0;
		if (this.columns.length == 0) return;
		var consumedHeight = 0;
		this.children.each(function (element) {
			//if (this.columns[actCol].actHeight > avgHeight && actCol< colcount-1)
			//actCol++;
			if (actCol < colcount - 1) {
				if (this.columns[actCol].actHeight > 0 && (this.columns[actCol].actHeight + element.actHeight) > 1.1 * avgHeight) {
					//console.log(element);
					//console.log('toalHeight: '+ totalHeight + ' consumedHeight '+consumedHeight +' avgHeight:'+avgHeight+'result: '+((totalHeight - consumedHeight)/(colcount-1-actCol)) + ' colcount-1-actCol:'+(colcount-1-actCol));
					//console.log('val a:'+((totalHeight - consumedHeight)/(colcount-1-actCol))+' val b: '+(consumedHeight/(actCol+1)));
					if ((totalHeight - consumedHeight) / (colcount - 1 - actCol) <= (consumedHeight / (actCol + 1))) {
						//console.log(element);
						//console.log('toalHeight: '+ totalHeight + ' consumedHeight '+consumedHeight +' avgHeight:'+avgHeight+'result: '+((totalHeight - consumedHeight)/(colcount-1-actCol)) + ' colcount-1-actCol:'+(colcount-1-actCol));
						actCol++;
					}
				}
				else {

				}
			}
			consumedHeight += element.actHeight;
			this.columns[actCol].elements.push(element);
			this.columns[actCol].actHeight += element.actHeight;
		}, this);
		this.setContent(width);
		if (typeof (this.options.execfunction) != 'undefined')
			eval(this.options.execfunction);
	},

	setContent: function (width) {
		var margins = this.getMarginWidth();
		var colwidth = Math.floor((width - (this.columns.length - 1) * margins) / this.columns.length);
		var colDivs = [];
		var i = 0;
		this.columns.each(function (actCol) {
			var styles = {
				'width': colwidth + 'px',
				'float': 'left'
			};
			if (i < this.columns.length - 1) {
				if (this.options.margin)
					styles['margin-right'] = this.options.margin + 'px';
			}
			var actColDiv = new Element('div', {
				'styles': styles
			}).inject(this.element);
			;
			actCol.elements.each(function (actElement) {
				actElement.inject(actColDiv);
			}, this);
			colDivs.push(actColDiv);
			i++;
		}, this);
		this.oldColumns.each(function (oldCol) {
			oldCol.dispose();
		}, this);
		this.oldColumns = colDivs;
	},

	getActColumnCount: function (width) {
		var margins = this.getMarginWidth();
		var returnCols = Math.floor(width / (this.options.mincolwidth + margins));
		if (returnCols > this.options.maxcol)
			returnCols = this.options.maxcol;
		if (returnCols < this.options.mincol)
			returnCols = this.options.mincol;
		return returnCols;
	},

	getMarginWidth: function () {
		if (typeof (this.options.margin) == 'undefined')
			return 0;
		var margins = this.options.margin;
		if (typeof (this.options.border) != 'undefined')
			margins = margins * 2 + this.options.border.width;
		return margins;
	},

	getTotalHeight: function () {
		var height = 0;
		this.children.each(function (element) {
			height += element.actHeight;
		});
		return height;
	}
});

this.UIMultiColumns = new Class({
	Implements: [Events, Options],

	options: {},
	colGroups: [],
	initialize: function () {
		var params = Array.link(arguments, {
			options: Object.type,
			elements: $defined
		});
		document.id(this);
		window.resizeProcesses = 0;
		if (params.elements) this.attach(params.elements);

	},

	attach: function (elements) {
		var i = 0;
		$$(elements).each(function (element) {
			element.multiColID = i;
			var actMulticol = new UIMultiColumn(element, this);
			this.colGroups.push(actMulticol);
			i++;
		}, this);
		var multicol = this;
		window.addEvent('resize', function () {
			multicol.onResize();
		});
		this.resize();
		return this;
	},

	onResize: function () {
		window.startresize = true;
		window.resizeProcesses++;
		var _this = this;
		(function () {
			window.startresize = false
		}).delay(200);
		(function () {
			window.resizeProcesses--;
			if (window.resizeProcesses == 0 && window.startresize == false) {
				_this.resize();
			}
		}).delay(250);
	},

	resize: function () {
		this.colGroups.each(function (colGroup, index) {
			colGroup.onResize();
		}, this);
	},

	deleteColumn: function (colGroup) {
		this.colGroups.erase(colGroup);
	},

	refresh: function () {
		var multicolObj = this;
		(function () {
			multicolObj.colGroups.each(function (multicol, index) {
				multicol.refresh();
			}, multicolObj);
			multicolObj.resize();
		}).delay(500);
	}
});

var UIAjaxContainer = new Class({
	Extends: UIComponent,
	classType: 'UIAjaxContainer',
	options: {
		className: 'ui_ajax_container',
		loaderClassName: 'blue',
		loadJustIfVisible: false,
		removeMinHeight: false,
		autoload: true
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		if (!this.options.loadJustIfVisible && this.options.autoload)
			this.loadAjaxContainer();
		else {
			if (this.options.autoload) {
				this.scrollEvent = this.checkForVisibility.bind(this)
				document.id(window).addEvent('scroll', this.scrollEvent);
				this.checkForVisibility();
			}
		}
		['loadAjaxContainer'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
	},

	checkForVisibility: function () {
		if (this.element.getPosition().y > document.id(window).getSize().y + document.id(window).getScroll().y)
			return false;
		if (this.element.getPosition().y + this.element.getSize().y < document.id(window).getScroll().y)
			return false;
		this.loadAjaxContainer();
		document.id(window).removeEvent('scroll', this.scrollEvent);
	},

	loadAjaxContainer: function () {
		if (this.element.get('ajax_src'))
			this.options.ajax_src = this.element.get('ajax_src');
		if (this.options.ajax_src) {
			new UIOverlay(this.element, {
				/*loaderClassName:this.options.loaderClassName,*/
				/*ajax_loader_static:true,*/
				ajax_loader: true
			});
			new Request.HTML({
				url: this.options.ajax_src,
				method: 'post',
				noCache: true,//ie crap
				timeout: 80000,
				update: this.element,
				onSuccess: function (responseJSON) {
					this.element.detachOverlay();
					if (this.options.removeMinHeight)
						this.element.setStyle('min-height', null);
				}.bind(this)
			}).send();
		}
	}
});

var UIScroll = new Class({
	Extends: UIComponent,
	classType: 'UIScroll',
	scrollFX: null,
	actStep: 0,

	options: {
		className: 'ui_scroll',
		horizontal: true,
		scrollElement: null,
		scrollbuttons: {left: null, right: null},
		transition: Fx.Transitions.Quad.easeOut,
		stepSize: null,
		duration: 250
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		if (!this.options.scrollbuttons.left) return;
		if (!this.options.scrollbuttons.right) return;
		if (!this.options.scrollElement) return;
		this.scrollFX = new Fx.Scroll(this.element, {
			transition: this.options.transition,
			duration: this.options.duration,
			link: 'chain',
			wait: false
		});
		var scrollMax = this.options.horizontal ? this.options.scrollElement.getSize().x - this.element.getSize().x : this.options.scrollElement.getSize().y - this.element.getSize().y;
		this.options.stepSize = this.options.stepSize ? this.options.stepSize : this.element.getSize().x;
		this.options.scrollbuttons.left.addEvent('click', function () {
			this.actStep = Math.max(0, this.actStep - 1);
			var scrollSize = this.actStep * this.options.stepSize;
			this.scrollFX.start(this.options.horizontal ? scrollSize : 0, this.options.horizontal ? 0 : scrollSize);
		}.bind(this));
		this.options.scrollbuttons.right.addEvent('click', function () {
			this.actStep = Math.min(Math.ceil(scrollMax / this.options.stepSize), this.actStep + 1);
			var scrollSize = this.actStep * this.options.stepSize;
			this.scrollFX.start(this.options.horizontal ? scrollSize : 0, this.options.horizontal ? 0 : scrollSize);
		}.bind(this));
	}
});


var UITitlePane = new Class({
	Extends: UIComponent,
	classType: 'UITitlePane',
	running: false,
	active: true,

	options: {
		className: 'ui_titlepane',
		loaderClassName: 'blue'
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;

		var children = this.element.getChildren();
		var html = "";
		if (!children.length) {
			html = this.element.get('html');
			this.element.set('html', '');
		}

		this.contentPane = new Element('div', {
			'class': 'content'
		}).inject(this.element);
		this.contentPaneInner = new Element('div', {
			'class': 'content_inner',
			'id': this.element.get('id')
		}).inject(this.contentPane);
		this.element.set('id', '');
		/*remove id from element, after setting the id to inner content*/
		this.contentPaneInner.set('style', this.element.get('style'));
		this.element.set('style', '');
		this.titlePane = new Element('div', {
			'class': 'title',
			'html': this.element.get('title')
		}).inject(this.element, 'top');
		if (this.element.get('ajax_src'))
			this.options.ajax_src = this.element.get('ajax_src');
		if (this.options.ajax_src) {
			new UIAjaxContainer(this.contentPaneInner, {
				loaderClassName: this.options.loaderClassName,
				ajax_src: this.options.ajax_src
			});
		}
		else {
			if (children.length)
				this.contentPaneInner.adopt(children);
			else
				this.contentPaneInner.set('html', html);
		}
		this.effectInstance = new Fx.Morph(this.contentPaneInner, {
			duration: 'short',
			transition: Fx.Transitions.Sine.easeOut
		});
		this.titlePane.addEvent('click', function (titlePane) {
			this.openTitlePane(titlePane);
		}.bind(this));
	},

	openTitlePane: function () {
		if (!this.running) {
			this.running = true;
			if (this.contentPaneInner.getSize().y > 0 && this.active)
				this.height = this.contentPaneInner.getSize().y;
		}
		if (!this.active) {
			this.effectInstance.start({
				'height': this.height
			}).chain(
					function () {
						this.running = false;
						this.contentPaneInner.setStyle('height', '');
						if (typeof window.fireEvent != 'undefined')
							window.fireEvent('resize');
						this.active = true;
					}.bind(this)
			);
		}
		else {
			this.height = this.contentPaneInner.getSize().y;
			this.effectInstance.start({
				'height': 0
			}).chain(
					function () {
						this.running = false;
						this.active = false;
						if (typeof window.fireEvent != 'undefined')
							window.fireEvent('resize');
					}.bind(this)
			);
		}
	}
});


var UIInlineEdit = new Class({
	Extends: UIComponent,
	classType: 'UIInlineEdit',

	options: {
		className: 'ui_inline_edit',
		textarea: false,
		editor: false,
		autosave: false,
		editor_autostyle: true
	},
	element: null,
	editorStarted: false,

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.element.addEvent('dblclick', function () {
			this.startEdit()
		}.bind(this));
		this.element.addEvent('mouseenter', function () {
			this.mouseEnterEdit()
		}.bind(this));
		this.name = this.element.get('name');
		this.element.set('name', '');
		this.hiddenfield = new Element('input', {
			type: 'hidden',
			style: 'display:none',
			'name': this.name,
			value: this.cleanText(this.element.get('html'))
		}).inject(this.element, 'after');
		if (!this.cleanText(this.element.get('html')).length)
			this.element.set('html', '...');

		this.element['endEdit'] = function () {
			//console.log('endEdit');
			if (typeof this.mooeditable != 'undefined' && this.mooeditable)
				this.mooeditable.detach();
			this.endEdit();
		}.bind(this);

		//this.element.addEvent('focus', function(){this.startEdit()}.bind(this));
		//this.element.addEvent('blur', function(){this.endEdit()}.bind(this));
	},

	cleanText: function (text) {
		return text.clean().tidy().stripScripts().stripTags('style');
	},

	mouseEnterEdit: function () {
		if (typeof this.hoverElement != 'undefined' || this.editorStarted)
			return;
		if (!(window.ui_inline_edit_container && typeof window.ui_inline_edit_container.destroy != 'undefined'))
			this.hoverElement = new Element('div', {
				'class': this.options.className + '_hover',
				style: 'position:absolute;z-index:999'
			}).inject(this.element, 'before');
		else {
			window.ui_inline_edit_container.destroy();
			this.hoverElement = new Element('div', {
				'class': this.options.className + '_hover',
				style: 'position:absolute;z-index:999'
			}).inject(this.element, 'before');
		}
		window.ui_inline_edit_container = this.hoverElement;
		this.hoverElement.addEvent('click', function () {
			(function () {
				this.startEdit();
				this.mouseExitEdit(true)
			}).delay(100, this)
		}.bind(this));
		this.hoverElement.addEvent('mouseleave', function () {
			(function () {
				this.mouseExitEdit()
			}).delay(100, this)
		}.bind(this));
		this.hoverElement.setStyle('height', this.element.getSize().y);
		this.hoverElement.setStyle('width', this.element.getSize().x);
		this.hoverElement.position({
			relativeTo: this.element
		});
		//this.hoverElement.hide();
	},

	mouseExitEdit: function (immediate) {
		if (typeof this.hoverElement == 'undefined')
			return;
		if (immediate || true) {
			this.hoverElement.destroy();
			delete this.hoverElement
		}
		else
			this.hoverElementFx.start({
				'opacity': 0
			}).chain(function () {
				this.hoverElement.destroy();
				delete this.hoverElement
			}.bind(this));
		//this.hoverElement.hide();
	},

	startEdit: function () {
		if (this.editorStarted) return;
		this.editorStarted = true;
		var value = this.element.get('html').clean();
		if (value == '...')
			value = '';
		if (!this.options.textarea)
			value = value.replace(/<br\s?\/?>/gi, "\n");
		var dimensions = this.element.getSize();
		this.element.set('html', '');
		var styles = this.element.getStyles('font-size', 'font-weight', 'font-family', 'margin-top', 'margin-bottom');
		this.editBox = null;
		if (this.options.textarea) {
			this.editBox = new Element('textarea', {
				'class': 'text',
				'type': 'text',
				'name': this.element.get('name') ? this.element.get('name') : ''
			}).inject(this.element);
			if (Browser.ie && Browser.version < 9)
				this.editBox.set('text', value);
			else
				this.editBox.set('html', value);

			new UITextArea(this.editBox, {
				'delayedLoading': false
			});
			if (this.options.editor) {
				this.mooeditable = this.editBox.mooEditable({
					paragraphise: true,
					rootElement: null,
					autostyle: this.options.editor_autostyle
				});
			}
		}
		else {
			this.editBox = new Element('input', {
				'class': 'text',
				'type': 'text',
				'value': value,
				'name': this.element.get('name')
			}).inject(this.element);
			this.editBox.setStyle('width', dimensions.x);
			this.editBox.setStyle('height', dimensions.y);
			this.editBox.setStyle('float', this.element.getStyle('float') ? this.element.getStyle('float') : 'none');
		}
		this.hidenfield = this.hiddenfield.dispose();
		this.editBox.setStyles(styles);
		this.editBox.focus();
		if (this.options.editor && this.options.textarea)
			this.mooeditable.focus();

		this.editBox.addEvent('keydown', function (event) {
			if (this.options.textarea && event.key == 'esc') this.endEdit(this.element);
			if (!this.options.textarea && event.key == 'enter' || event.key == 'esc') this.endEdit(this.element);
		}.bind(this));


		//this.editBox.addEvent('outerClick', function(){this.endEdit()}.bind(this));
		if (this.options.editor && this.options.textarea) {
			this.mooeditable.container.addEvent('outerClick', function () {
				if (!this.editorStarted) return;
				this.mooeditable.detach();
				this.endEdit();
			}.bind(this));
			(function () {
				this.mooeditable.container.addEvent('blur', function () {
					this.mooeditable.detach();
					this.endEdit();
				}.bind(this));
			}).delay(200, this)
		}
		else {
			(function () {
				this.editBox.addEvent('blur', function () {
					this.endEdit()
				}.bind(this));
			}).delay(200, this);
			this.editBox.addEvent('outerClick', function () {
				this.endEdit()
			}.bind(this));
		}

	},

	endEdit: function () {
		if (!this.editorStarted) return;
		this.editorStarted = false;
		var input = this.element.getElement('input.text');
		if (this.options.textarea)
			input = this.element.getElement('textarea.text');
		if (!input)
			return;
		var value = input.get('value');
		if (!this.options.editor)
			value = value.replace(/\n/gi, "<br />");
		value = this.cleanText(value);
		this.element.set('html', value);
		this.hiddenfield.set('value', value);
		this.hidenfield.inject(this.element, 'after');
		this.hiddenfield.set('name', this.name);
		if (this.options.autosave && this.element.getParent('form'))
			this.element.getParent('form').send();
		input.destroy();
		if (!this.cleanText(this.element.get('html')).length)
			this.element.set('html', '...');
	}
});

window.ui_inline_edit_container = null;

var UIAccordeon = new Class({
	Extends: UIComponent,
	classType: 'UIAccordeon',
	options: {
		className: 'ui_accordeon',
		titleSelector: '.title',
		contentSelector: '.content',
		locked: false,
		autoActivate: true,
		activationOptions: {
			duration: 250
		},
		classBefore: 'before',
		classAfter: 'after',
		classBeforeActive: 'before_active',
		classAfterActive: 'after_active',
		hideContent: false,
		allowBackwardsActivation: true,
		manualActivation: true,
		initialExecute: true
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.activeTitle = null;
		this.titles = this.element.getElements(this.options.titleSelector);
		var lastActive = null;
		if (!this.titles.length)
			return;
		this.titleNames = {};
		['getTitle', 'activate', 'activateContent', 'deactivateContent', 'getActive', 'activateNext', 'activatePrevious', 'getContent'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);

		this.titles.each(function (element, index) {
			if (index > 0)
				element.store('prevTitle', this.titles[index - 1]);
			if (index < this.titles.length - 1)
				element.store('nextTitle', this.titles[index + 1]);
			element.store('ui_accordeon', this);
			var content = element.getNext(this.options.contentSelector);
			if (content) {
				element.store('content', content);
				content.dissolve({
					duration: 0
				});
			}
			if (element.hasClass('active'))
				lastActive = element;
			if (element.name)
				this.titleNames[element.name] = element;

			element.addEvent('click', function (actTitle) {
				if ((!this.options.allowBackwardsActivation && (element.hasClass(this.options.classBefore) || element.hasClass('active'))) || !this.options.manualActivation) {
					return;
				}
				else {
					this.activate(element);
				}
			}.bind(this));


		}, this);
		if (this.options.autoActivate || lastActive) {
			if (!lastActive)
				lastActive = 0;
			var t = this.options.activationOptions.duration;
			this.options.activationOptions.duration = 0;
			this.activate(lastActive, this.options.initialExecute);
			this.options.activationOptions.duration = t;
		}
	},

	getTitle: function (title) {
		if (typeof title == 'number') {
			if (this.titles.length < title + 1)
				return null;
			title = this.titles[title];
		}
		else if (typeof title == 'string') {
			if (!$defined(this.titleNames[title]))
				return null;
			title = this.titleNames[title];
		}
		return title;
	},

	activateContent: function (title) {
		title = this.getTitle(title);
		if (!title) return;
		if (title.retrieve('content'))
			title.retrieve('content').reveal(this.options.activationOptions);
	},

	deactivateContent: function (title) {
		title = this.getTitle(title);
		if (!title) return;
		if (title.retrieve('content'))
			title.retrieve('content').dissolve(this.options.activationOptions);
	},

	getContent: function (title) {
		if (this.getTitle(title))
			return this.getTitle(title).retrieve('content');
		else return null;
	},

	activateNext: function () {
		if (!this.activeTitle) return;
		if (!this.activeTitle.retrieve('nextTitle')) return;
		this.activate(this.activeTitle.retrieve('nextTitle'));
	},

	activatePrevious: function () {
		if (!this.activeTitle) return;
		if (!this.activeTitle.retrieve('prevTitle')) return;
		this.activate(this.activeTitle.retrieve('prevTitle'));
	},

	activate: function (title) {
		title = this.getTitle(title);
		if (!title) return;
		this.activeTitle = title;
		title.reveal(this.options.activationOptions);
		if (title.get('onactivation') && (arguments.length < 2 || arguments[1] == true)) {
			eval(title.get('onactivation'));
		}
		if ((!this.options.hideContent || title.get('hidecontent') == 'true') && title.retrieve('content')) {
			title.retrieve('content').reveal(this.options.activationOptions);
		}
		var actElementPassed = false
		this.titles.each(function (actTitle, index) {
			if (actTitle == title) {
				actElementPassed = true;
				if (this.options.classBefore)
					actTitle.removeClass(this.options.classBefore);
				if (this.options.classAfter)
					actTitle.removeClass(this.options.classAfter);
				actTitle.addClass('active');
				if ((this.options.hideContent || actTitle.get('hidecontent') == 'true') && title.retrieve('content'))
					actTitle.retrieve('content').dissolve(this.options.activationOptions);
				if (index > 0)
					this.titles[index - 1].addClass(this.options.classBeforeActive);
				if (index < this.titles.length - 1)
					this.titles[index + 1].addClass(this.options.classAfterActive);
			}
			else {
				actTitle.removeClass('active');
				actTitle.removeClass(this.options.classBeforeActive);
				actTitle.removeClass(this.options.classAfterActive);
				if (title.retrieve('content'))
					actTitle.retrieve('content').dissolve(this.options.activationOptions);
				if (actTitle.getStyle('display') == 'block')
					actTitle.setStyle('display', '');

			}
			if (actTitle != title && !actElementPassed && this.options.classBefore)
				actTitle.addClass(this.options.classBefore);
			if (actTitle != title && actElementPassed)
				if (actTitle != title && actElementPassed && this.options.classAfter)
					actTitle.addClass(this.options.classAfter);
		}, this);
	},

	getActive: function () {
		return this.activeTitle;
	}
});

var UIWizard = new Class({
	Extends: UIComponent,
	classType: 'UIWizard',
	options: {
		className: 'ui_wizard',
		direction: 'horizontal',
		buttonPane: true,
		cancelFunction: null,
		allowJumpSteps: false,
		finishFunction: null,
		texts: {
			'next': '',
			'previous': '',
			'cancel': '',
			'finish': ''
		}
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		['activatePane', 'gotoStep', 'gotoNextStep', 'allowFinish'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		this.allowFinished = false;
		var children = this.element.getChildren();
		this.contentPane = new Element('div', {
			'class': 'content'
		}).inject(this.element).adopt(children);
		if ($defined(this.options.content_height)) this.contentPane.setStyle('height', this.options.content_height);
		this.titlePane = new Element('div', {
			'class': 'title',
			'html': this.element.get('title')
		}).inject(this.element, 'top');
		var someIsActive = false;
		children.each(function (pane, index) {
			pane.setStyle('display', 'none');
			var params = {
				"cssClass": pane.get('class'),
				"active": pane.hasClass('active'),
				"img": false,
				"onclick": pane.get('onclick'),
				"onactivation": pane.get('onactivation'),
				'button': false,
				'foldable': false,
				'autostep': false
			};
			if (pane.get('img')) params.img = pane.get('img');
			if (pane.get('required')) params.required = true;
			if (pane.get('autostep')) params.autostep = true;
			if (pane.get('ajax_src')) params.ajax_src = pane.get('ajax_src');
			var paneHTML = '';
			if (pane.getChildren().length)
				paneHTML = pane.getChildren();
			else
				paneHTML = pane.get('html');
			this.addPane(pane.get('title'), pane.get('name'), paneHTML, params, index);
			if (pane.hasClass('active')) someIsActive = true;
			pane.destroy();
		}, this);
		this.stepCount = this.titlePane.getChildren('a').length;
		if (this.options.buttonPane) {
			this.buttonPane = new Element('div', {
				'class': 'buttons'
			}).inject(this.element);
			this.previousButton = new Element('a', {
				'html': '<span>' + this.options.texts.previous + '</span>',
				'class': 'button previous'
			}).inject(this.buttonPane);
			this.nextButton = new Element('a', {
				'html': '<span>' + this.options.texts.next + '</span>',
				'class': 'button next'
			}).inject(this.buttonPane);
			this.cancelButton = new Element('a', {
				'html': '<span>' + this.options.texts.cancel + '</span>',
				'class': 'button cancel'
			}).inject(this.buttonPane);
			this.finishButton = new Element('a', {
				'html': '<span>' + this.options.texts.finish + '</span>',
				'class': 'button finish'
			}).inject(this.buttonPane);
			this.nextButton.addEvent('click', function () {
				if (!this.nextButton.hasClass('disabled'))
					this.gotoStep(this.step + 1);
			}.bind(this));
			this.previousButton.addEvent('click', function () {
				if (!this.previousButton.hasClass('disabled'))
					this.gotoStep(this.step - 1);
			}.bind(this));
			this.finishButton.addEvent('click', function () {
				if (!this.finishButton.hasClass('disabled'))
					this.finish();
			}.bind(this));
			this.cancelButton.addEvent('click', function () {
				if (!this.cancelButton.hasClass('disabled'))
					this.cancel();
			}.bind(this));
		}
		if (!someIsActive) {
			this.activatePane(0);
		}
	},

	cancel: function () {
		if (this.options.cancelFunction)
			eval(this.options.cancelFunction);
		else
			OverlayBox.closeOverlay();
	},

	getTitle: function (title) {
		if (typeof title == 'number' || !isNaN(parseInt(this.element.get('value')))) {
			var titleElements = this.titlePane.getChildren();
			if (titleElements.length < title + 1)
				return null;
			title = titleElements[title];
		}
		else if (typeof title == 'string')
			title = this.titlePane.getElement("a[name=" + title + "]");
		return title;
	},

	allowFinish: function (allow) {
		this.allowFinished = allow;
		this.setButtonActivationState();
	},

	gotoNextStep: function () {
		this.activatePane(this.step + 1);
	},

	finish: function () {
		if (this.options.finishFunction)
			eval(this.options.finishFunction);
		else {
			var actTitle = this.getTitle(this.stepCount - 1);
			eval(actTitle.params.onclick);
		}
	},

	gotoStep: function (step, executeScripts) {
		if (executeScripts == null) executeScripts = true;
		//if (this.step<step){
		if (!this.options.allowJumpSteps && this.step + 1 < step)
			step = this.step + 1;
		var actTitle = this.getTitle(this.step);
		if (executeScripts) {
			eval(actTitle.params.onclick);
		}
		if (actTitle.params.autostep)
			this.activatePane(step);
		return;
		//}
		//this.activatePane(step);
	},

	activatePane: function (title, executeScripts) {
		title = this.getTitle(title);
		if (executeScripts == null) executeScripts = true;
		if (title.params.onactivation && executeScripts) {
			eval(title.params.onactivation);
		}
		if (!title) return;
		this.titlePane.getChildren('a').each(function (element, index) {
			if (element != title) {
				element.removeClass('active');
				if (element.retrieve('panecontent')) {
					if (this.options.animateActivation)
						element.retrieve('panecontent').dissolve();
					else
						element.retrieve('panecontent').removeClass('active');
				}
			}
			else {
				this.step = index;
				if (element.retrieve('initialActivation'))
					element.store('initialActivation', false);
				element.addClass('active');
				element.retrieve('panecontent').addClass('active');
				if (this.options.animateActivation)
					element.retrieve('panecontent').reveal();
				if ($defined(title.params.ajax_src) && title.params.ajax_src) {
					this.loadFromAjax(title, title.params.ajax_src);
				}
			}
		}, this);
		if (this.options.buttonPane) {
			this.setButtonActivationState();
		}
	},

	setButtonActivationState: function () {
		this.activateButtons();
		if (this.step == 0) {
			this.previousButton.addClass('disabled');
		}
		if (this.step == this.stepCount - 1) {
			this.nextButton.addClass('disabled');
			if (!this.allowFinished)
				this.finishButton.removeClass('disabled');
		}
		else {
			if (!this.allowFinished)
				this.finishButton.addClass('disabled');
		}
	},

	activateButtons: function () {
		this.previousButton.removeClass('disabled');
		this.nextButton.removeClass('disabled');
		this.cancelButton.removeClass('disabled');
		this.finishButton.removeClass('disabled');
	},

	disablePane: function (title) {
		this.enablePane(title, true);
	},

	enablePane: function (title, disable) {
		title = this.getTitle(title);
		if (!title) return;
		if (disable)
			title.removeClass('disabled');
		else
			title.addClass('disabled');
	},

	loadFromAjax: function (titleElement, ajax_src) {
		var content = titleElement.retrieve('panecontent');
		new Request.HTML({
			method: 'get',
			url: ajax_src,
			noCache: true,//ie crap
			onRequest: function () {
				content.set('html', '');
				new Element('div', {
					'class': 'ajax_loader'
				}).inject(content);
			},
			update: content
		}).send();
	},

	addPane: function (paneTitle, paneName, paneContent, params, index) {
		var aparams = {
			"cssClass": "",
			"active": true,
			"img": false,
			"onclick": "",
			'index': index
		}
		if (!$defined(params) || !params || typeof params != "object") {
			params = aparams;
		}
		else {
			params = Object.merge(aparams, params);
		}
		var title = this.titlePane.getElement('a[name=' + paneName + ']');
		if (!title) {
			var active = '';
			title = new Element('a', {
				'class': active + params.cssClass,
				'text': paneTitle,
				'name': paneName,
				'id': paneName
			}).inject(this.titlePane);
			if (params.img)
				var img = new Element('img', {
					'src': params.img
				}).inject(title, 'top');
			var content_inner = new Element('div', {
				'class': 'content_inner' + active
			}).inject(this.contentPane);
			title.store('panecontent', content_inner);
			title.params = params;
			title.addEvent('click', function (title) {
				if ($defined(title.target) && typeof title.target == "object") {
					title = title.target;
					if (title.tagName.toLowerCase() != 'a')
						title = title.getParent('a');
				}
				if (!$defined(title.hasClass))
					return;
				if (!title.hasClass('disabled')) {
					this.gotoStep(index);
				}
			}.bind(this));
		} else {
			title.set('html', paneTitle); // update the pane title
		}
		if (typeof paneContent == 'string')
			title.retrieve('panecontent').set('html', paneContent);
		else
			title.retrieve('panecontent').adopt(paneContent);
		if (params.active) {
			title.store('initialActivation', true);
			this.activatePane(title);
		}
	}
});

var UISelect = new Class({
	Extends: UIComponent,
	classType: 'UISelect',
	options: {
		className: 'ui_select',
		indicator: true
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.options_elements = this.element.getElements('li');
		var active = 0;
		this.options_elements.each(function (option, index) {
			active = option.getAttribute('selected') ? index : active;
			option.addEvent('click', function () {
				this.select(index)
			}.bind(this));
			if (this.options.indicator) {
				(function () {
					new Element('div', {
						'class': 'indicator',
						styles: {'margin-left': (option.getSize().x - parseInt(option.getStyle('padding-left')) - parseInt(option.getStyle('padding-right'))) / 2 - 14}
					}).inject(option, 'top');
				}.bind(this)).delay(100, this);
			}
		}.bind(this), this);
		['getValue'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		this.select_element = new Element('input', {
			'name': this.element.get('name'),
			id: this.element.get('id') + '_input',
			styles: {display: 'none'}
		}).inject(this.element, 'after');
		this.initalSelect = true;
		this.select(active);
		this.initalSelect = false;
	},

	getValue: function () {
		return this.select_element.get('value');
	},

	select: function (index) {
		index = parseInt(index);
		if (!(index < this.options_elements.length && index >= 0)) return;
		this.element.getElements('li').removeClass('active');
		this.element.getElements('li').removeClass('before');
		this.element.getElements('li')[index].addClass('active');
		this.select_element.set('value', this.element.getElements('li')[index].getAttribute('value'));
		if (index > 0)
			this.element.getElements('li')[index - 1].addClass('before');
		if (!this.initalSelect)
			this.fireEvent('select');
		if (this.element.getElements('li')[index].get('onselect'))
			eval(this.element.getElements('li')[index].get('onselect'));
	}
});

var UITabPane = new Class({
	Extends: UIComponent,
	classType: 'UITabPane',
	options: {
		className: 'ui_tabpane',
		animateActivation: false,
		autoActivate: true,
		title_class: '',
		fireOnClickOnInitialActivation: true,
		hashLinks: true,
		cookieState: false
	},
	activePane: null,

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		['activatePane', 'closePane', 'enablePane', 'disablePane', 'addPane', 'getContent', 'unfoldPanes', 'changePaneAjaxSrc', 'reloadActivePane'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		var children = this.element.getChildren('div');
		this.contentPaneUpper = new Element('div', {
			'class': 'content_upper'
		}).inject(this.element);
		this.contentPaneUpperElement = new Element('span').inject(this.contentPaneUpper);
		this.contentPaneUpperElement.hide();
		this.contentPane = new Element('div', {
			'class': 'content',
			'style': this.element.get('content_style')
		}).inject(this.element).adopt(children);
		this.titlePane = new Element('div', {
			'class': 'title' + (this.options.title_class ? ' ' + this.options.title_class : ''),
			'html': this.element.get('title') ? this.element.get('title') : '',
			'style': this.element.get('title_style')
		}).inject(this.element, 'top');
		var offset = 0;
		var someIsActive = false;
		var firstNotDisabeledTab = -1;
		children.each(function (pane, index) {
			if (pane.hasClass('active')) someIsActive = true;
			var params = {
				cssClass: pane.get('class'),
				active: pane.hasClass('active'),
				img: false,
				onclick: pane.get('onclick'),
				button: false,
				foldable: false,
				id: '',
				style: '',
				title_style: '',
				nolink: pane.get('nolink') ? true : false
			};
			['img', 'href', 'img_inactive', 'rel', 'ajax_src', 'content_id', 'id', 'style', 'title_style'].each(function (index) {
				if (pane.get(index))
					params[index] = pane.get(index);
			});
			pane.setStyle('display', 'none');
			pane.store('ui_tabpane', this);

			if (pane.get('tab_disabled')) params.disabled = true;
			else if (firstNotDisabeledTab < 0) firstNotDisabeledTab = index;
			if (pane.get('reload_on_activation')) params.reload_on_activation = true;
			if (pane.get('foldable')) params.foldable = true;
			if (pane.get('tab_button')) params.button = true;

			var paneHTML = '';
			if (pane.childNodes.length)
				paneHTML = pane.childNodes;
			else
				paneHTML = pane.get('html');
			this.addPane(pane.get('title'), pane.get('name'), paneHTML, params, true);
			pane.destroy();
		}, this);
		var fragmentTab = null;

		var uri = new URI(document.location.href);

		if (uri.get('fragment') && this.getTitle(uri.get('fragment') + '_tab') && !(this.getTitle(uri.get('fragment') + '_tab').hasClass('disabled'))) {
			var title = this.getTitle(uri.get('fragment') + '_tab');
			if (title)
				title.store('initialActivation', true);
			fragmentTab = uri.get('fragment') + '_tab';
		}
		if (this.options.cookieState && this.element.get('id') && Cookie.read(this.element.get('id') + '_tabstate')) {
			fragmentTab = Cookie.read(this.element.get('id') + '_tabstate') + '_tab';
		}
		if (firstNotDisabeledTab < 0) firstNotDisabeledTab = 0;
		if (!someIsActive && this.options.autoActivate) {
			var title = this.getTitle(firstNotDisabeledTab);
			if (title)
				title.store('initialActivation', true);
			this.activatePane(fragmentTab ? fragmentTab : firstNotDisabeledTab);
		}
		else if (this.options.autoActivate) {
			this.activatePane(fragmentTab ? fragmentTab : firstNotDisabeledTab);
		}
		if (this.options.autoActivate) {

		}
		this.titlePaneBottom = new Element('div', {
			'class': 'title_bottom'
		}).inject(this.titlePane);
		//titlePaneBottom.setStyle('width',this.element.getSize().x);
		window.addEvent('resize', function () {
			this.titlePaneBottom.setStyle('width', this.element.getSize().x)
		}.bind(this));
	},

	getTitle: function (title) {
		if (typeof title == 'number' || !isNaN(parseInt(this.element.get('value')))) {
			var titleElements = this.titlePane.getChildren();
			if (titleElements.length < title + 1)
				return null;
			title = titleElements[title];
		}
		else if (typeof title == 'string') {
			title = this.titlePane.getElement("a[name=" + title + "]");
		}
		return title;
	},

	getContent: function (title) {
		title = this.getTitle(title);
		if (!title) return null;
		return title.retrieve('panecontent');
	},

	closePane: function (title) {
		title = this.getTitle(title);
		if (!title) return;

		if (title.hasClass('active')) {
			var previous_pane = title.getPrevious('a');
			if (previous_pane)
				this.activatePane(previous_pane);
			else {
				var next_pane = title.getNext('a');
				if (next_pane)
					this.activatePane(next_pane);
			}
		}
		var content = title.retrieve('panecontent');
		content.destroy();
		title.destroy();
		return false;
	},

	unfoldPanes: function () {
		this.titlePane.getChildren('a').each(function (element, index) {
			var params = element.retrieve('params');
			element.removeClass('active');
			if (element.retrieve('panecontent')) {
				if (this.options.animateActivation)
					element.retrieve('panecontent').dissolve();
				else
					element.retrieve('panecontent').removeClass('active');
			}
			if (params.img_inactive)
				element.getElement('img').set('src', params.img_inactive);
			if (this.contentPaneUpperElement) {
				if (this.options.animateActivation)
					this.contentPaneUpperElement.dissolve();
				else
					this.contentPaneUpperElement.hide();
			}
		}, this);
	},

	changePaneAjaxSrc: function (title, src) {
		title = this.getTitle(title);
		if (!title) return;
		var params = title.retrieve('params');
		params.ajax_src = src;
		title.store('params', params);
	},

	reloadActivePane: function () {
		if (!this.activePane) return false;
		title = this.getTitle(this.activePane);
		if (!title) return false;
		var params = title.retrieve('params');
		if ($defined(params.ajax_src) && params.ajax_src) {
			this.activatePane(title, true);
			return true;
		}
		return false;
	},

	activatePane: function (title, reload, params, callback) {
		title = this.getTitle(title);
		if (!title) return;
		this.activePane = title;
		var lastElement = null;
		var aParams = title.retrieve('params');
		if (!aParams.button && this.options.hashLinks) {//modify the actual hashtag
			var actURI = new URI(window.location.href);
			var finalURI = actURI.get('directory');
			if (actURI.get('file'))
				finalURI += actURI.get('file');
			if (actURI.get('query'))
				finalURI += '?' + actURI.get('query');
			finalURI += '#' + aParams.paneName;
			location.href = finalURI;
		}
		if (this.options.cookieState && this.element.get('id'))
			Cookie.write(this.element.get('id') + '_tabstate', aParams.paneName);

		this.titlePane.getChildren('a').each(function (element, index) {
			var params = element.retrieve('params');
			if (element != title) {
				element.removeClass('active');
				element.removeClass('before');
				if (element.retrieve('panecontent')) {
					if (this.options.animateActivation)
						element.retrieve('panecontent').dissolve();
					else
						element.retrieve('panecontent').removeClass('active');
				}
				if (params.img_inactive)
					element.getElement('img').set('src', params.img_inactive);
			}
			else {
				element.removeClass('before');
				if (lastElement)
					lastElement.addClass('before');
				if (params.img)
					element.getElement('img').set('src', params.img);
				if (element.hasClass('active') && element.retrieve('foldable') && !element.retrieve('initialActivation')) {
					element.removeClass('active');
					if (this.contentPaneUpperElement) {
						if (this.options.animateActivation)
							this.contentPaneUpperElement.dissolve();
						else
							this.contentPaneUpperElement.hide();
					}
					if (this.options.animateActivation)
						element.retrieve('panecontent').dissolve();
					else
						element.retrieve('panecontent').removeClass('active');
				}
				else {
					element.addClass('active');

					//reveal Pane Content
					element.retrieve('panecontent').addClass('active');
					if (this.options.animateActivation)
						element.retrieve('panecontent').reveal();
					//Move Arrow Element to correct Position
					(function () {
						if (this.contentPaneUpperElement.getStyle('display') == 'none')
							this.contentPaneUpperElement.show();
						var leftPos = element.getPosition(element.getParent()).x + this.titlePane.getCoordinates(this.element).left;
						leftPos += Math.round((element.getSize().x - this.contentPaneUpperElement.getSize().x) / 2);
						if (this.options.animateActivation) {
							var content_upperFX = new Fx.Morph(this.contentPaneUpperElement, {
								duration: 'short',
								transition: Fx.Transitions.Sine.easeOut
							});
							content_upperFX.start({
								'margin-left': leftPos
							});
						}
						else
							this.contentPaneUpperElement.setStyle('margin-left', leftPos);
					}).delay(element.retrieve('initialActivation') ? 100 : 0, this);

					var params = title.retrieve('params');
					{
						if (element.retrieve('initialActivation'))
							element.store('initialActivation', false);
					}
					if ($defined(params.ajax_src) && params.ajax_src) {
						this.loadFromAjax(title, params.ajax_src, reload, callback);
					}
					else {
						if ((element.retrieve('initialActivation') && this.options.fireOnClickOnInitialActivation) || !element.retrieve('initialActivation')) {
							(function () {
								eval(params.onclick);
								if (typeof callback == 'function')
									callback.apply();
							}).delay(100);
						}
					}
					if (typeof window.fireEvent != 'undefined')
						window.fireEvent('resize');
				}
			}
			lastElement = element;
		}, this);
	},

	disablePane: function (title) {
		this.enablePane(title, true);
	},

	enablePane: function (title, disable) {
		title = this.getTitle(title);
		if (!title) return;

		if ($defined(disable) && disable) {
			title.addClass('disabled');
			title.removeClass('active');
		}
		else {
			title.removeClass('disabled');
		}
	},

	loadFromAjax: function (titleElement, ajax_src, reload, callback) {
		var content = titleElement.retrieve('panecontent');
		if (content.retrieve('tab_content_loaded') && ((typeof reload != 'undefined' && !reload) || typeof reload == 'undefined'))
			return;
		new UIOverlay(content, {ajax_loader: true});
		new Request.HTML({
			method: 'get',
			url: ajax_src,
			evalScripts: true,
			update: content,
			noCache: true,//ie crap
			onComplete: function () {
				if (typeof content.detachOverlay != 'undefined') content.detachOverlay();
				content.store('tab_content_loaded', true);
				if ((titleElement.retrieve('initialActivation') && this.options.fireOnClickOnInitialActivation) || !titleElement.retrieve('initialActivation')) {
					(function () {
						eval(titleElement.retrieve('params').onclick);
						if (typeof callback == 'function')
							callback.apply();
					}).delay(100);
				}
			}.bind(this)
		}).send();
	},

	addPane: function (paneTitle, paneName, paneContent, params, initial) {
		var aparams = {
			cssClass: "",
			active: false,
			img: false,
			img_inactive: false,
			onclick: "",
			button: false,
			disabled: false,
			reload_on_activation: false,
			deletable: false,
			href: '',
			rel: '',
			content_id: '',
			id: '',
			style: '',
			title_style: '',
			nolink: false,
			paneName: paneName
		}
		if (!$defined(params) || !params || typeof params != "object") params = aparams;
		else params = Object.merge(aparams, params);

		var title = this.getTitle(paneName + ((!params.button && !params.nolink) ? '_tab' : ''));
		if (!title) {
			var active = '';
			title = new Element('a', {
				'class': active + params.cssClass,
				html: paneTitle,
				name: paneName + ((!params.button && !params.nolink) ? '_tab' : ''),
				style: params.title_style,
				id: paneName + ((!params.button && !params.nolink) ? '_tab' : '')
			}).inject(this.titlePane);
			if (!params.button && this.options.hashLinks) title.set('href', '#' + paneName);
			title.store('params', params);
			if (!params.disabled)
				new Element('span', {'class': 'right'}).inject(title, 'top');
			if (params.disabled) title.addClass('disabled');
			if (params.foldable) title.store('foldable', true);
			if (params.foldable) title.store('foldable', true)
			if (params.href) title.set('href', params.href);
			if (params.rel) title.set('rel', params.rel);
			if (!params.button) {
				var contentClass = '';
				if (params.cssClass)
					contentClass = ' ' + params.cssClass;
				var content_inner = new Element('div', {
					'class': 'content_inner' + active + contentClass, id: params.id, style: params.style
				}).inject(this.contentPane);
				if (params.content_id) content_inner.set('id', params.content_id);

			}
			else if (params.button) title.addClass('tab_button');
			title.store('panecontent', content_inner);
			title.addEvent('click', function (title) {
				if ($defined(title.target) && typeof title.target == "object") {
					title = title.target;
					if (title.tagName.toLowerCase() != 'a')
						title = title.getParent('a');
				}
				if (!$defined(title.hasClass))
					return;
				if (!title.hasClass('disabled')) {
					if (!params.button) {
						this.activatePane(title, title.retrieve('params').reload_on_activation);
					}
					else {
						eval(params.onclick);
					}
				}
			}.bind(this));
		} else {
			title.set('html', paneTitle); // update the pane title
		}


		title.store('params', params);

		if (params.img) {
			var img = new Element('img', {
				'src': params.img
			}).inject(title, 'top');
			if (params.img_inactive && !params.active)
				img.set('src', params.img_inactive);
		}
		if (params.deletable) {
			var close = new Element('span', {
				'class': "close"
			}).inject(title);
			close.addEvent('click', function () {
				this.closePane(title)
			}.bind(this));
		}
		if (!params.button) {
			if (typeof paneContent == 'string')
				title.retrieve('panecontent').set('html', paneContent);
			else
				title.retrieve('panecontent').adopt(paneContent);
		}
		if (params.active) {
			title.store('initialActivation', true);
		}
		if (typeof initial == 'undefined' || !initial) {
			this.activatePane(title);
		}
	}
});

var UIEditText = new Class({
	Extends: UIComponent,
	classType: 'UIEditText',

	options: {
		className: 'ui_edit_text',
		editClassName: "non-changed",
		title: null
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.element.addEvents({
			focus: this.focusElement.bind(this),
			blur: this.blurElement.bind(this),
			outerClick: this.blurElement.bind(this),
			keyup: this.keyUpElement.bind(this)
			//change: this.blurElement.bind(this)
		});
		if (this.element.get('title')) this.options.title = this.element.get('title');
		this.container = new Element('div', {'class': 'text ' + this.element.get('class')}).inject(this.element, 'after');
		this.container.removeClass('ui_textarea');
		this.container.setProperty('style', this.element.getProperty('style'));
		this.container.setStyles(this.element.getStyles('margin-top', 'float'));
		this.element.setStyles({'margin-top': 0, 'margin-left': 0});
		this.container.removeClass('ui_edit_text');
		this.label = new Element('span', {'class': 'ui_edit_text_label', text: this.options.title}).inject(this.container);
		this.label.addEvent('click', function () {
			this.element.fireEvent('focus');
			this.element.focus()
		}.bind(this));
		this.container.adopt(this.element);
		this.element.fireEvent('blur');
	},

	focusElement: function (evt) {
		this.label.addClass('focus');
		this.element.focus();
	},

	blurElement: function (evt) {
		this.label.removeClass('focus');
		//this.element.set('title',)
		if (this.element.get('value').toLowerCase().trim() == '') {
			this.label.show();
		}
		else {
			this.label.hide();
		}
	},

	reloadComponent: function () {
		if (this.element.get('value').toLowerCase().trim() == '') {
			this.label.show();
		}
		else {
			this.label.hide();
		}
	},

	keyUpElement: function (evt) {
		if (this.element.get('value').toLowerCase().trim() == '') {
			this.label.show();
		}
		else {
			this.label.hide();
		}
	}
});

var UIComboBox = new Class({

	Implements: [Events, Options],

	options: {
		/*
		 onAttach: $empty(element),
		 onDetach: $empty(element),
		 */
		className: 'ui_combobox'
	},

	initialize: function () {
		var params = Array.link(arguments, {
			options: Object.type,
			elements: $defined
		});
		this.setOptions(params.options);
		document.id(this);

		if (params.elements) {
			if ($defined(params.elements.length) && params.elements.length) {
				this.attach(params.elements);
			}
			else {
				this.attach(new Array(params.elements));
			}
		}
		else {
			this.attach($$('.' + this.options.className));
		}
	},

	attach: function (elements) {
		$$(elements).each(function (element) {
			//make real selectbox invisible
			var selectBox = new Element('div', {
				'class': 'combobox_element ' + element.get('class'),
				style: element.get('style'),
				'events': {
					'mouseenter': function () {
						selectBox.addClass('active');
					},
					'mouseleave': function () {
						selectBox.removeClass('active');
					},
					'click': function () {
						selectBox.toggleClass('active');
					}
				}
			}).inject(element, 'after');
			selectBox.store('default', {
				'title': element.get('title'),
				'img': element.get('img')
			});
			selectBox.store('onChangeFunction', element.get('function'));
			var input = new Element('input', {
				'name': element.get('name'),
				'id': element.get('id'),
				'type': 'hidden'
			});
			input.store('dropdown', selectBox);
			var _this = this;
			input.setSelection = function (value) {
				_this.setSelection(input, value);
			};
			input.setDefault = function () {
				_this.setDefault(input);
			};
			element.setStyle('display', 'none');
			var selectBox_selected = new Element('div', {
				'class': 'combobox_element_selected'
			}).inject(selectBox);
			var selectBox_text = new Element('span', {
				'class': 'combobox_element_text noborder'
			}).inject(selectBox_selected);
			var selectBox_ul = new Element('ul', {
				'class': 'combobox_element_list'
			}).inject(selectBox);
			var withborder = ' noborder';
			var hasSelectedElement = false;
			element.getChildren().each(function (actElement, index) {
				var li = new Element('li', {
					'class': 'combobox_element_item',
					'rel': actElement.get('value'),
					'events': {
						'click': function () {
							_this.setSelection(input, this.get('rel'));
						}
					}
				}).inject(selectBox_ul);
				if (actElement.get('img')) {
					new Element('img', {
						'src': actElement.get('img'),
						'class': 'combobox_element_image'
					}).inject(li);
				}
				new Element('span', {
					'class': 'combobox_element_text' + withborder,
					'html': actElement.get('html').trim(),
					'value': actElement.get('value')
				}).inject(li);

				if (actElement.get('value') && actElement.get('value') == element.get('default')) {
					hasSelectedElement = true;
					selectBox_text.set('html', actElement.get('html').trim());
					input.set('value', actElement.get('value'));
					if (actElement.get('img')) {
						new Element('img', {
							'src': actElement.get('img'),
							'class': 'combobox_element_image'
						}).inject(selectBox_text, 'before');
					}
				}
				withborder = '';
			}, this);
			//nothing selected, use default text...
			if (!hasSelectedElement) {
				this.setDefault(input);
			}
			element.destroy();
			input.inject(selectBox, 'before');
		}, this);

		return this;
	},

	setDefault: function (input) {
		var dropdown = input.retrieve('dropdown');
		dropdown.getElement('.combobox_element_selected .combobox_element_text').set('html', dropdown.retrieve('default').title);
		input.set('value', '');
		if (dropdown.getElement('.combobox_element_selected .combobox_element_image'))
			dropdown.getElement('.combobox_element_selected .combobox_element_image').set('src', dropdown.retrieve('default').img);
		else
			new Element('img', {
				'src': dropdown.retrieve('default').img,
				'class': 'combobox_element_image'
			}).inject(dropdown.getElement('.combobox_element_selected .combobox_element_text'), 'before');
	},

	setSelection: function (trigger, value) {
		var dropdown = trigger.retrieve('dropdown');
		if (!dropdown) return;
		var li = dropdown.getElement('li[rel=' + value.toLowerCase() + ']');
		if (!li) return;
		if (dropdown.retrieve('onChangeFunction')) {
			eval(dropdown.retrieve('onChangeFunction'));
		}
		trigger.set('value', value.toLowerCase());
		dropdown.getElement('.combobox_element_selected .combobox_element_text').set('html', li.getElement('.combobox_element_text').get('html').trim());
		if (li.getElement('.combobox_element_image')) {
			if (dropdown.getElement('.combobox_element_selected .combobox_element_image'))
				dropdown.getElement('.combobox_element_selected .combobox_element_image').set('src', li.getElement('.combobox_element_image').get('src'));
			else
				new Element('img', {
					'src': li.getElement('.combobox_element_image').get('src'),
					'class': 'combobox_element_image'
				}).inject(dropdown.getElement('.combobox_element_selected .combobox_element_text'), 'before');
		}
	}
});

var UICheckBox = new Class({
	Extends: UIComponent,
	classType: 'UICheckBox',
	options: {
		className: 'ui_checkbox',
		animateActivation: false,
		tristate: false,
		valueChecked: 1,
		valueUnChecked: 0,
		validation_tooltip: false
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		//this.element.set('type','hidden');
		this.element.store('ui_checkbox', this);
		this.checkBox = new Element('span', {
			'class': this.element.get('class'),
			'style': this.element.get('style')
		}).inject(this.element, 'before')
		if (this.element.get('id'))
			this.checkBox.set('id', "uicb_" + this.element.get('id'));
		this.element.setStyle('display', 'none');
		this.checkBox[this.classType] = this;
		this.checkOuter = new Element('span', {
			'class': 'ui_check_outer'
		}).inject(this.checkBox);
		this.checkInner = new Element('span', {
			'class': 'ui_check_inner'
		}).inject(this.checkOuter);
		if (this.element.get('title'))
			this.text = new Element('span', {
				'class': 'ui_checkbox_text',
				'html': this.element.get('title')
			}).inject(this.checkBox);
		//this.element.addEvent('change', function(){this.setValue()}.bind(this));
		this.checkBox.addEvent('click', this.onClick.bind(this));
		this.element.addEvent('elementValidate', function (isValid, field, className, warn) {
			if (!isValid)
				this.checkBox.addClass('validation-failed');
			else
				this.checkBox.removeClass('validation-failed');
		}.bind(this));
		this.setValue(null, false);
		['setValue'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);

		if (!this.options.tristate)
			this.checkInner.addClass('icon-check');
	},

	onClick: function () {
		switch (this.state) {
			case 1:
				this.state = -1;
				break;
			case -1:
			{
				if (this.options.tristate)
					this.state = 0;
				else
					this.state = 1;
				break;
			}
			case 0:
				this.state = 1;
				break;
		}
		if (this.state == 1) {
			this.element.set('value', this.options.valueChecked);
			if (this.options.tristate) {
				this.element.set('name', this.element.get('rel'));
			}
		}
		if (this.state == -1) {
			this.element.set('value', this.options.valueUnChecked);
		}
		if (this.state == 0) this.element.set('value', '');
		this.setValue();
		this.element.fireEvent('click');
		if (this.element.get('onclick')) {
			eval(this.element.get('onclick'));
		}
		this.element.fireEvent('click', this.element);
		this.fireEvent('click', this.element);
	},

	setValue: function (value, executeScripts) {

		var actValue = (typeof value == 'undefined') || value === null ? this.element.get('value') : value;

		if (!isNaN(parseInt(this.element.get('value'))))
			actValue = this.element.get('value').toInt();
		this.element.removeProperty('checked');
		if (actValue === this.options.valueChecked) {
			this.checkBox.removeClass('unchecked');
			this.checkInner.removeClass('icon-cross');
			this.checkBox.addClass('checked');
			this.checkInner.addClass('icon-check');
			this.checkBox.removeClass('validation-failed');
			if (typeof this.checkBox.detachTooltip != 'undefined')
				this.checkBox.detachTooltip();
			this.element.checked = 'checked';
			this.state = 1;
			if ((typeof executeScripts == 'undefined' || executeScripts == true) && this.element.get('oncheck'))
				eval(this.element.get('oncheck'));
			if (typeof executeScripts == 'undefined' || executeScripts == true) {
				this.element.fireEvent('change', this.element);
				this.fireEvent('check', this.element);
			}
		}
		else if (actValue === this.options.valueUnChecked) {
			if (this.options.tristate) {
				if (this.state == 0) this.element.set('name', this.element.get('rel'));
				this.checkBox.addClass('unchecked');
				this.checkInner.addClass('icon-cross');
			}
			this.state = -1;
			if ((typeof executeScripts == 'undefined' || executeScripts == true) && this.element.get('onuncheck'))
				eval(this.element.get('onuncheck'));
			this.checkBox.removeClass('checked');
			if (this.options.tristate) {
				this.checkInner.removeClass('icon-check');
			}
			this.element.set('value', this.options.valueUnChecked);
			this.element.fireEvent('change', this.element);
			this.fireEvent('uncheck', this.element);
		}
		else {

			if (this.options.tristate) {
				this.element.set('rel', this.element.get('name'));
				this.element.set('name', '');
				this.element.removeProperty('name');
				this.state = 0;
			}
			else {
				this.state = -1;
				if ((typeof executeScripts == 'undefined' || executeScripts == true) && this.element.get('onuncheck'))
					eval(this.element.get('onuncheck'));
				this.element.set('value', this.options.valueUnChecked);
				if (typeof executeScripts == 'undefined' || executeScripts == true) {
					this.element.fireEvent('change', this.element);
					this.fireEvent('uncheck', this.element);
				}
			}
			this.checkBox.removeClass('checked');
			this.checkBox.removeClass('unchecked');
			this.checkInner.removeClass('icon-cross');
			this.checkInner.addClass('icon-check');
		}
	}
});

var UIAutoscroll = new Class({
	Extends: UIComponent,
	classType: 'UIAutoscroll',
	options: {
		className: 'ui_autoscroll',
		topoffset: 10,
		fixedClass: 'fixed',
		useWrapperPlaceholder: true
	},
	oldStyles: null,
	oldCoordinates: null,
	fixedState: false,
	fixedOffset: 0,
	wrapperElement: null,
	lastVisibile: false,

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.oldStyles = this.element.getStyles('position', 'margin-top', 'top');
		this.oldCoordinates = this.element.getCoordinates();
		window.addEvent('scroll', function () {
			this.moveToScroll();
		}.bind(this));
	},

	moveToScroll: function () {
		if (window.ui_autoscroll_disabled != 'undefined' && window.ui_autoscroll_disabled)
			return;
		if (!this.element.isVisible()) {
			this.lastVisible = false;
			return;
		}
		else {
			if (!this.lastVisible) {
				this.oldStyles = this.element.getStyles('position', 'margin-top', 'top');
				this.oldCoordinates = this.element.getCoordinates();
			}
			this.lastVisible = true;
		}

		if (window.getScroll().y > this.oldCoordinates.top - this.options.topoffset + this.fixedOffset) {
			if (!this.fixedState) {
				if (!this.fixedOffset) {
					var oldPaddingTop = this.element.getStyle('padding-top').toInt() ? this.element.getStyle('padding-top').toInt() : 0;
					this.element.addClass(this.options.fixedClass);
					var newPaddingTop = this.element.getStyle('padding-top').toInt() ? this.element.getStyle('padding-top').toInt() : 0;
					this.fixedOffset = oldPaddingTop - newPaddingTop;
				}
				else this.element.addClass(this.options.fixedClass);
				//create a container an inject into place of the element for keeping floats ok.
				if (this.options.useWrapperPlaceholder) {
					this.wrapperElement = new Element(this.element.tagName.toLowerCase(), {
						styles: this.element.getStyles('margin', 'float', 'display', 'clear')
					});
					this.wrapperElement.setStyles({
						height: this.oldCoordinates.height,
						width: this.oldCoordinates.width
					}).inject(this.element, 'before');
				}
				this.element.setStyles({
					'position': 'fixed',
					'margin-top': this.options.topoffset + this.fixedOffset,
					top: 0
				});

				this.fixedState = true;
			}
		}
		else {
			if (this.fixedState) {
				this.element.setStyles(this.oldStyles);
				this.element.removeClass(this.options.fixedClass);
				if (this.options.useWrapperPlaceholder) {
					this.wrapperElement.destroy();
					this.wrapperElement = null;
				}
				this.fixedState = false;
			}
		}
	}
});

var OverlayBox = new Class({
	Extends: UIComponent,
	classType: 'OverlayBox',

	options: {
		'className': 'ui_overlaybox',
		'window_margin': 20,
		'bg_fadein_time': 0,
		'window_fadein_time': 100,
		'bg_fadeout_time': 100,
		'window_fadeout_time': 100,
		'cssType': '',
		'scrollable': false,
		size: {x: 0, y: 0},
		offset: {x: 0, y: 0},
		css: null,
		'overlaystyle': 'popup',
		'inlineClassName': 'inline',
		'content_class': '',
		'scroll': false,
		'postvars': {},
		'insetClassName': 'inset',
		'insert_after': null,
		'onOpen': null,
		'title': null,
		'onClose': null,
		'singleInstance': true,
		'closeOnOutsideClick': false,
		openDelay: 0,
		jsDelay: 150,
		showOnRequestSuccess: true,
		'scrollToBox': false,
		'scrollTo': null,
		'closeOlderInstances': false,
		'overlayBoxPath': '/',
		'fixed': false,
		'blur_bg': false,
		transition: Fx.Transitions.Expo.easeOut
	},

	params: {},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.element.addEvent('click', function () {
			if (!this.options.singleInstance) {
				if (!this.element.retrieve('overlaybox_open')) {
					this.element.store('overlaybox_open', true);
					this.showOverlay(this.element.get('title') ? this.element.get('title') : this.options.title, this.element.get('href'));
				}
			}
			else {
				if (this.options.closeOlderInstances && OverlayBox.instances.length) {
					var alreadyInQueue = false;
					OverlayBox.instances.each(function (instance, index) {
						if (instance.element == this.element)
							alreadyInQueue = true;
					}.bind(this));
					if (!alreadyInQueue) {
						this.showOverlay(this.element.get('title') ? this.element.get('title') : this.options.title, this.element.get('href'));
						OverlayBox.instances[0].closeOverlay();
					}
				}
				else
					this.showOverlay(this.element.get('title') ? this.element.get('title') : this.options.title, this.element.get('href'));
			}
			return false;
		}.bind(this));
		['closeOverlay'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
	},

	onresize: function () {
		if ($defined(this.bg_overlay) && this.bg_overlay)
			this.bg_overlay.setStyle('height', document.id(document.body).getSize().y);
		if ($defined(this.overlay_window) && this.overlay_window) {
			this.overlay_window.setStyle('left', parseInt((document.id(document.body).getSize().x - this.overlay_window.getSize().x) / 2));
			this.overlay_window.setStyle('top', parseInt((document.id(document.body).getSize().y - this.overlay_window.getSize().y) / 2));
		}
	},

	changeLocation: function (newLocation, dataElem) {
		var req = new Request.HTML({
			url: newLocation,
			method: 'post',
			data: dataElem,
			noCache: true,//ie crap
			update: document.id('overlay_content'),
			onSuccess: function (responseTree, responseElements, responseHTML, responseJavaScript) {
				this.overlay_content.setStyle('background-image', 'none');
			}.bind(this),
			evalScripts: true,
			onFailure: function () {
				this.overlay_content.set('text', 'Seite konnte nicht geladen werden.');
			}.bind(this)
		});
		req.send();
	},

	closeOverlay: function () {
		this.visible = false;
		if (!this.options.singleInstance)
			this.element.store('overlaybox_open', false);

		if (this.overlay_close)
			this.overlay_close.removeEvents('click');
		if (this.options.overlaystyle == 'popup') {
			if (this.options.overlaystyle == 'popup') {
				document.id(window).removeEvent('resize', this.onresize);
				var window_top = this.overlay_window ? this.overlay_window.getPosition().y : 0;
				//var content_offset = this.overlay_content.getPosition().y - window_top;
				var content_height = this.overlay_content.getSize().y;
				var newPosition = window_top + parseInt(content_height / 2);
			}
			var morphObjectContent = new Fx.Morph(this.overlay_content, {
				duration: this.options.window_fadeout_time,
				transition: this.options.transition
			});
			var morphObjectWindow = new Fx.Morph(this.overlay_window, {
				duration: this.options.window_fadeout_time,
				transition: this.options.transition,
				onComplete: function (passes_tween_element) {
					//Content was adopted from other element and has to be putted back before destruction
					if (typeof this.params.href != 'undefined' && document.id(this.params.href) && this.overlay_content.childNodes.length)
						document.id(this.params.href).adopt(this.overlay_content.childNodes);
					//
					this.overlay_window.destroy();
					if (this.options.overlaystyle == 'popup')
						this.bg_overlay.destroy();
					if (this.options.onClose)
						Browser.exec(this.options.onClose);
					if (this.options.singleInstance) {
						OverlayBox.instances.shift();
						if (OverlayBox.instances.length)
							OverlayBox.instances[0].showInstance();
					}
				}.bind(this)
			});
			this.overlay_window.removeClass('open');
			new Fx.Morph(this.bg_overlay, {
				link: 'chain',
				duration: this.options.bg_fadeout_time,
				transition: this.options.transition
			}).start('.bg_overlay_closed');
			morphObjectContent.start({'opacity': 0}).chain(function () {
				morphObjectContent.start({'height': 0, width: this.overlay_content.getSize().x * 0.8});
				morphObjectWindow.start({
					top: newPosition,
					left: parseInt((document.id(document.body).getSize().x - this.overlay_window.getSize().x * 0.8) / 2),
					opacity: 0
				}).chain(function () {
					this.fireEvent('closed');
				}.bind(this));
			}.bind(this));
			if (this.options.blur_bg) {
				$$('.ui_blur').removeClass('active');
			}
		}
		else if (this.options.overlaystyle == 'inset') {
			this.overlay_window.setStyles({'overflow': 'hidden', 'height': this.overlay_window.getSize().y});
			new Fx.Morph(this.overlay_content, {
				duration: this.options.bg_fadeout_time,
				transition: this.options.transition
			}).start({opacity: 0}).chain(
					function () {
						new Fx.Morph(this.overlay_window, {
							duration: this.options.window_fadeout_time,
							transition: this.options.transition
						}).start({height: 0, opacity: 0}).chain(function () {
							//Content was adopted from other element and has to be putted back before destruction
							if (typeof this.params.href != 'undefined' && document.id(this.params.href) && this.overlay_content.childNodes.length)
								document.id(this.params.href).adopt(this.overlay_content.childNodes);
							this.overlay_window.destroy();
							if (this.options.onClose)
								Browser.exec(this.options.onClose);
							this.fireEvent('closed');
							if (this.options.singleInstance) {
								OverlayBox.instances.shift();
								if (OverlayBox.instances.length)
									OverlayBox.instances[0].showInstance();
							}
						}.bind(this));
					}.bind(this)
			);
		}
		else {
			this.overlay_window.destroy();
			if (this.options.onClose)
				Browser.exec(this.options.onClose);
			if (this.options.singleInstance) {
				OverlayBox.instances.shift();
				if (OverlayBox.instances.length)
					OverlayBox.instances[0].showInstance();
			}
			this.fireEvent('closed');
		}
	},

	showMessage: function (title, message, properties) {
		this.showOverlay(title, message, true, properties, true);
	},

	showNotification: function (message, properties) {
		if (!$defined(properties))
			properties = {};
		properties.cssType = 'notification';
		properties.type = 'normal';
		if (!$defined(properties.size))
			properties.size = {
				'x': 400,
				'y': 0
			};
		if (!$defined(properties.duration))
			properties.duration = 2000;
		this.showMessage('', '<h1>' + message + '</h1>', properties);
	},

	showConfirm: function (title, yesFunction, cancelFunction) {

	},

	showModal: function (title, content, options) {
		var container = new Element('div');
		(new Element('h1', {'html': title})).inject(container);
		if (content)(new Element('p', {'html': content})).inject(container);
		var modalContainer = new Element('div', {'class': 'modal'}).inject(container);
		options.each(function (option) {
			var button = new Element('a', {
				'class': typeof option.type != 'undefined' ? option.type : '',
				'html': option.title
			}).inject(modalContainer);
			if (typeof option.action == 'string')
				button.set('onclick', option.action);
			else
				button.addEvent('click', option.action);
		});
		var properties = {cssType: 'notification', type: 'normal', size: {'x': 600, 'y': 200}, duration: 0};
		this.showOverlay('', container, true, properties, true);
		//window.ovBox.showMessage('','<h1>'+'Ihre Eingaben werden überprüft</h1><h2>Bitte haben Sie einige Sekunden Geduld</h2><div class="loader_dark"></div>',properties);
	},

	showInstance: function () {
		this.showOverlay(this.params.title, this.params.href, this.params.properties, this.params.isMessage, true);
	},

	setContent: function (content) {
		if (this.overlay_content)
			this.overlay_content.set('html', content);
	},

	showOverlay: function (title, href, isMessage, properties, isQueued) {
		this.params = {title: title, href: href, properties: this.options.properties, isMessage: isMessage};
		if (!(!$defined(properties) || !properties || typeof properties != "object" ))
			this.setOptions(properties);
		if (this.options.singleInstance) {
			if (!($defined(isQueued) && isQueued)) {
				OverlayBox.instances.push(this);
				if (OverlayBox.instances.length > 1) return;
			}
			OverlayBox.instance = this;
		}
		this.fireEvent('open');
		if (this.options.onOpen)
			Browser.exec(this.options.onOpen);
		if (this.options.duration) this.closeOverlay.delay(this.options.duration, this);
		if (this.options.overlaystyle == 'popup') {
			document.id(window).addEvent('resize', this.onresize);
			this.bg_overlay = new Element('div', {
				'class': 'bg_overlay',
				'styles': {'height': document.id(document.body).getSize().y}
			}).inject(document.id(document.body), 'top');
			new Fx.Morph(this.bg_overlay, {
				link: 'chain',
				duration: this.options.bg_fadein_time,
				transition: this.options.transition
			}).start('.bg_overlay_open');
			//for adding transition effect
		}
		this.overlay_window = new Element('div', {
			'class': 'overlay_window ' + this.options.cssType + (this.options.content_class ? ' ' + this.options.content_class : ''),
			'styles': {'opacity': 0}
		});
		this.overlay_window.store('overlaybox', this);
		if (this.options.fixed && this.options.overlaystyle == 'popup')
			this.overlay_window.setStyle('position', 'fixed');
		if (this.options.css)
			this.overlay_window.set('style', this.overlay_window.get('styles') + ';' + this.options.css);

		if (['popup', 'inline'].contains(this.options.overlaystyle))
			this.overlay_window.inject(document.id(document.body), 'top');
		['closeOverlay'].each(function (method) {
			this.overlay_window[method] = this[method].bind(this);
		}, this);
		this.overlay_header = new Element('div', {
			'class': 'overlay_header'
		}).inject(this.overlay_window);
		this.overlay_content = new Element('div', {'class': 'overlay_content' + ((this.options.overlaystyle == 'popup' && this.options.scrollable) ? ' scrollable' : '')}).inject(this.overlay_window);
		if (this.options.scroll)
			this.overlay_content.setStyle('overflow-y', 'scroll');
		this.overlay_title = new Element('h1', {html: title}).inject(this.overlay_header);
		this.overlay_close = new Element('a', {
			'class': 'overlay_close', html: '', events: {
				click: function () {
					this.closeOverlay();
				}.bind(this)
			}
		}).inject(this.overlay_header, 'top');

		this.morphObjectWindow = new Fx.Morph(this.overlay_window, {
			duration: this.options.window_fadein_time,
			transition: this.options.transition
		});
		if ($defined(isMessage) && isMessage) {
			this.setContentHtml(href, null);
			this['open' + this.options.overlaystyle.capitalize() + 'Overlay']();
			this.overlay_content.evalScripts();
		}
		else {
			//if href is an element id in the page, then load the content of the element, otherwise it is ment as an url, which is loaded through ajax request
			if (document.id(href)) {
				this.setContentHtml(document.id(href), null);
				this['open' + this.options.overlaystyle.capitalize() + 'Overlay']();
			}
			else {
				if (!this.options.showOnRequestSuccess) {
					this['open' + this.options.overlaystyle.capitalize() + 'Overlay']();
				}
				var req = new Request.HTML({
					url: href,
					method: 'post',
					noCache: true,
					data: this.options.postvars,
					evalScripts: false,
					loadExternalScripts: true,
					onSuccess: function onSuccess(responseTree, responseElements, responseHTML, responseJavaScript) {
						//this.overlay_content.setStyle('background-image','none');
						this.setContentHtml(responseHTML, responseJavaScript, this.options.jsDelay);
						if (this.options.showOnRequestSuccess) {
							this['open' + this.options.overlaystyle.capitalize() + 'Overlay'].delay(this.options.openDelay, this);
						}
						else {
							if ($defined(this.overlay_window.detachOverlay))
								this.overlay_window.detachOverlay();
						}
					}.bind(this),
					onFailure: function () {
						this.overlay_content.set('text', 'Seite konnte nicht geladen werden.');
					}.bind(this)
				});
				req.send();
			}
		}
		if (this.options.closeOnOutsideClick) {
			this.overlay_window.addEvent('outerClick', function () {
				this.closeOverlay();
				return false;
			}.bind(this));
		}
		this.visible = true;
	},

	openInlineOverlay: function () {
		this.overlay_window.setStyles({
			'left': parseInt(this.element.getPosition().x),
			'top': parseInt(this.element.getPosition().y + this.element.getSize().y)
		});
		this.overlay_window.addClass(this.options.inlineClassName);
		this.morphObjectWindow.start({
			'opacity': 1
		});
	},

	openPopupOverlay: function () {
		var topOffset = 0;
		this.overlay_window.addClass('popup');
		var window_top = this.overlay_window.getPosition().y;
		var content_offset = this.overlay_content.getPosition().y - window_top;
		var contentHeight = this.overlay_content.getDimensions().y + this.overlay_content.getStyle('padding-top').toInt() + this.overlay_content.getStyle('padding-bottom').toInt();
		var window_content_height_delta = this.overlay_window.getSize().y - this.overlay_content.getDimensions().y;
		var position = this.overlay_window.getStyle('position');
		var initPosition = parseInt((document.id(document.body).getSize().y - window_content_height_delta) / 2 + topOffset + (position != 'fixed' ? document.id(window).getScroll().y : 0));
		var newPosition = parseInt((document.id(document.body).getSize().y - (this.options.size.y ? (this.options.size.y + window_content_height_delta) : position != 'fixed' ? (contentHeight + window_content_height_delta) + content_offset + this.options.window_margin : (window_content_height_delta + contentHeight) + this.options.window_margin)) / 2 + topOffset + (position != 'fixed' ? document.id(window).getScroll().y : 0));
		this.overlay_content.setStyles({
			width: this.options.size.x ? this.options.size.x + this.overlay_content.getStyle('padding-left').toInt() + this.overlay_content.getStyle('padding-right').toInt() : 'auto',
			height: 0,
			opacity: 0
		});
		//this.overlay_window.setStyle('opacity',1);
		(function () {
			var initRealContentWidth = this.overlay_content.getSize().x;
			var initRealOverlayLeft = parseInt((document.id(document.body).getSize().x - this.overlay_window.getSize().x) / 2);
			this.overlay_content.setStyles({width: initRealContentWidth * 0.9});
			this.overlay_window.setStyles({
				left: parseInt((document.id(document.body).getSize().x - this.overlay_window.getSize().x) / 2),
				top: initPosition
			});
			var morphObjectContent = new Fx.Morph(this.overlay_content, {
				duration: this.options.window_fadein_time,
				transition: this.options.transition
			});
			this.morphObjectWindow.start({opacity: 1, top: newPosition, left: initRealOverlayLeft}).chain(function () {
				this.overlay_window.addClass('open');
			}.bind(this));
			var heightSet = this.options.size.y ? this.options.size.y + this.overlay_content.getStyle('padding-top').toInt() + this.overlay_content.getStyle('padding-bottom').toInt() : contentHeight;
			morphObjectContent.start({height: heightSet, width: initRealContentWidth}).chain(
					function () {
						this.overlay_content.style.height = 'inherit'
						this.overlay_content.setStyle('min-height', heightSet);
						new Element('div', {'class': 'clear'}).inject(this.overlay_content);
						morphObjectContent.start({opacity: 1});
						if (this.options.blur_bg) {
							(function () {
								$$('.ui_blur').addClass('active');
							}).delay(200);
						}
						this.fireEvent('opened');
					}.bind(this));
		}).delay(20, this);
	},

	setContentHtml: function (responseHTML, responseJavaScript, delay) {
		if (typeof responseHTML == 'string')
			this.overlay_content.set('html', responseHTML);
		else {
			if (!responseHTML.childNodes.length)
				this.overlay_content.set('html', responseHTML.get('html'));
			else
				this.overlay_content.adopt(responseHTML.childNodes);
		}
		this.htmlSet = true;
		if (typeof responseJavaScript != 'undefined' && responseJavaScript) {
			if (typeof delay != 'undefined' && delay) {
				(function () {
					Browser.exec(responseJavaScript);
				}.bind(this)).delay(delay, this);
			}
			else {
				Browser.exec(responseJavaScript);
			}
		}
		this.fireEvent('content_set');
	},

	openInsetOverlay: function () {
		this.overlay_window.inject(this.options.insert_after ? this.options.insert_after : this.element, 'after');
		this.overlay_window.addClass(this.options.insetClassName);
		this.overlay_window.setStyles({position: 'absolute', visibility: 'hidden'});
		this.overlay_pointer = new Element('div', {
			'class': 'overlay_pointer',
			'styles': {}
		}).inject(this.overlay_window, 'top');
		this.overlay_pointer.setStyles({'margin-left': this.element.getPosition(this.overlay_pointer).x - Math.round(this.overlay_pointer.getSize().x / 2) + Math.round(this.element.getSize().x / 2)});
		if (this.options.scrollToBox)
			new Fx.Scroll(document.id(document.body)).start(0, this.options.scrollTo ? this.options.scrollTo.getPosition().y : this.overlay_window.getPosition().y);
		var contentHeight = this.options.size.y ? this.options.size.y : this.overlay_window.getDimensions().y;
		this.overlay_content.setStyles({'opacity': this.options.showOnRequestSuccess ? 0 : 1, 'display': 'none'});
		this.overlay_window.setStyles({
			'height': 0,
			'overflow': 'hidden',
			'opacity': 1,
			position: 'relative',
			visibility: 'visible',
			'margin-top': this.overlay_window.getStyle('margin-top').toInt() + this.options.offset.y
		});

		this.morphObjectWindow.setOptions({duration: 200});
		this.morphObjectWindow.start({height: contentHeight}).chain(function () {
			this.overlay_window.setStyles({'overflow': 'visible', 'height': 'auto'});
			this.overlay_content.setStyles({'display': 'block'});
			if (!this.options.showOnRequestSuccess && !$defined(this.htmlSet)) {
				new UIOverlay(this.overlay_window, {ajax_loader: true});
			}
			else {
				new Fx.Morph(this.overlay_content, {
					duration: 200,
					transition: Fx.Transitions.Expo.easeOut
				}).start({opacity: 1}).chain(function () {
					this.fireEvent('opened');
				}.bind(this));
			}
		}.bind(this));
	},

	isVisible: function () {
		return this.visible;
	}
});

OverlayBox.changeLocation = function (newLocation, dataElem) {
	OverlayBox.instance.changeLocation(newLocation, dataElem);
};

OverlayBox.closeOverlay = function () {
	if ($defined(OverlayBox.instance.closeOverlay))
		OverlayBox.instance.closeOverlay();
	else if (OverlayBox.instances.length)
		OverlayBox.instances[0].closeOverlay();
};

OverlayBox.showMessage = function (title, message, properties) {
	if (!OverlayBox.instance || !$defined(OverlayBox.instance.makeNotification)) {
		(new OverlayBox()).showMessage(title, message, properties);
	}
	else
		OverlayBox.instance.showNotification(message, properties);
};

OverlayBox.showNotification = function (message, properties) {
	if (!OverlayBox.instance || !$defined(OverlayBox.instance.makeNotification)) {
		(new OverlayBox()).showNotification(message, properties);
	}
	else
		OverlayBox.instance.showNotification(message, properties);
};

OverlayBox.showModal = function (title, content, options, properties) {
	if (!OverlayBox.instance || !$defined(OverlayBox.instance.makeNotification)) {
		(new OverlayBox()).showModal(title, content, options, properties);
	}
	else
		OverlayBox.instance.showModal(title, content, options, properties);
};

OverlayBox.showOverlay = function (title, href, properties, isMessage) {
	if (typeof (isMessage) == 'undefined' || !isMessage) isMessage = false;
	else isMessage = true;
	if (!OverlayBox.instance || !$defined(OverlayBox.instance.makeNotification)) {
		if (typeof properties != 'undefined' && typeof properties.element != 'undefined')
			(new OverlayBox(properties.element)).showOverlay(title, href, isMessage, properties, true);
		else
			(new OverlayBox()).showOverlay(title, href, isMessage, properties, true);
	}
	else
		OverlayBox.instance.showOverlay(title, href, isMessage, properties, true);
}

OverlayBox.instances = [];
OverlayBox.instance = null;

var UINotification = new Class({
	Extends: UIComponent,
	classType: 'UINotification',
	options: {
		className: 'ui_notification',
		title: '',
		insert: 'before',
		highlightElement: true,
		openTime: 3000,
		scrollTo: false,
		styles: null,
		type: 'success',
		inline: true
	},

	initialize: function (element, options) {
		this.isElement = this.parent(element, options);
		this.show();
	},

	show: function () {
		this.notification = new Element('div', {
			'class': 'ui_notification ' + this.options.type + (this.options.inline ? '' : ' fullscreen'),
			'style': 'display:none',
			'html': '<span class="icon ' + this.options.type + '"></span><p>' + this.options.title + '</p>'
		}).inject(this.isElement ? this.element : document.id(document.body), this.options.insert);
		if (this.options.styles)
			this.notification.setStyles(this.options.styles);
		if (!this.options.inline) {
			this.notification.setStyles({
				'position': 'fixed',
				'top': 0,
				'margin-top': this.isElement ? 0 : window.getSize().x * 0.025,
				'width': this.isElement ? this.element.getSize().x : window.getSize().x * 0.95,
				'margin-left': this.isElement ? 0 : window.getSize().x * 0.025,
				'z-index': 999
			});

		}
		if (this.isElement)
			this.element['detachInlineNotification'] = this['detach'].bind(this);
		this.notification.reveal({
			duration: 'short',
			transition: Fx.Transitions.Expo.easeOut
		});
		if (this.options.highlightElement && this.isElement) {
			(function () {
				this.element.highlight();
			}).delay(500, this);
		}
		if (this.options.scrollTo && this.options.inline) {
			new Fx.Scroll(window).toElement(this.notification);
		}
		if (this.options.openTime)
			this.detach.delay(this.options.openTime, this);
	},

	reloadComponent: function () {
		this.show();
	},

	detach: function () {
		if (!this.notification) return;
		new Fx.Morph(this.notification, {
			duration: 100,
			transition: Fx.Transitions.Expo.easeOut
		}).start({
					'opacity': 0,
					'height': 0
				}).chain(
				function () {
					if (this.notification)
						this.notification.destroy();
					this.notification = null;
					if (this.element) {
						delete this.element[this.classType];
						delete this.element['detachInlineNotification'];
					}
				}.bind(this)
		);
	}
});

var UIOverlay = new Class({
	Extends: UIComponent,
	classType: 'UIOverlay',
	options: {
		className: 'ui_overlay',
		activeClassName: 'ui_overlay_active',
		loaderClassName: 'ui_overlay_loader',
		title: '',
		ajax_loader: false,
		ajax_loader_static: false
	},

	initialize: function (element, options) {
		if (!element || typeof element.ui_overlay != 'undefined')
			return;
		this.element = element;
		this.element.ui_overlay = this;
		this.setOptions(options);
		this.attach();
		this.element.detachOverlay = this.detach.bind(this);
	},

	attach: function () {
		this.overlay = new Element('div', {
			'class': this.options.className,
			styles: {
				width: this.element.getScrollSize().x,
				height: this.element.getScrollSize().y,
				'margin-left': this.element.getPosition().x,
				'margin-top': this.element.getPosition().y
			}
		}).inject(document.id(document.body), 'top');
		(function () {
			this.overlay.addClass(this.options.activeClassName);
			if (this.options.ajax_loader_static)
				this.overlay.addClass('loader');
		}.bind(this)).delay(20, this);

		if (this.options.ajax_loader) {
			this.overlay_loader = new Element('div', {'class': this.options.loaderClassName}).inject(document.id(document.body), 'top');
			this.overlay_loader.setStyles({
				'margin-left': this.element.getPosition().x + (this.element.getScrollSize().x - this.overlay_loader.getScrollSize().x) / 2,
				'margin-top': this.element.getPosition().y + (this.element.getScrollSize().y - this.overlay_loader.getScrollSize().y) / 2
			});
			(function () {
				this.overlay_loader.addClass('active');
			}.bind(this)).delay(20, this);
		}
		if (this.options.title != '')
			this.title = new Element('p', {
				html: this.options.title,
				'class': 'ui_overlay_text',
				styles: {
					width: this.element.getScrollSize().x,
					'margin-top': this.overlay_loader.getPosition().y + this.overlay_loader.getScrollSize().y,
					'margin-left': this.element.getPosition().x
				}
			}).inject(document.id(document.body), 'top');
	},

	detach: function () {
		this.overlay.removeClass(this.options.activeClassName);
		if (this.overlay_loader)
			this.overlay_loader.removeClass('active');
		(function () {
			this.overlay.destroy();
			if (this.options.ajax_loader) {
				this.overlay_loader.destroy();
				delete this.element.overlay_loader;
			}
			if (this.options.title != '') {
				this.title.destroy();
				delete this.title;
			}
			delete this.element.ui_overlay;
			delete this.element.detachOverlay;
		}.bind(this)).delay(200, this);
	}
});

var UITooltip = new Class({
	Extends: UIComponent,
	classType: 'UITooltip',
	options: {
		className: 'ui_tooltip',
		title: null,
		content: null,
		isSticky: false,
		y_position: 'bottom',
		x_position: 'center',
		delay: 100,
		hovered: false,
		src: null,
		request_type: 'json',
		distance: 0,
		y_distance: 0,
		x_distance: 10,
		width: null,
		hide_delay: 500,
		show_info: false
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.element.addEvent('mouseover', function () {
			this.element.store('mouseover', true);
			this.mouseenter();
		}.bind(this));
		this.element.addEvent('mouseleave', function (event) {
			if (event && typeof event.relatedTarget != 'undefined' && typeOf(event.relatedTarget) == 'element') {
				if (event.relatedTarget != this.element && event.relatedTarget.getParents().contains(this.element))
					return;
			}
			this.element.store('mouseover', false);
			this.mouseleave()
		}.bind(this));
		this.element['hideTooltip'] = this['hide'].bind(this);
		this.element['detachTooltip'] = this['detachTooltip'].bind(this);
		this.element['addText'] = this['addText'].bind(this);
		this.element['hideTooltip'] = this['hide'].bind(this);
		this.element.addClass('ui_tooltip_active')
		/*
		 ['mouseenter','mouseleave'].each(function(method){
		 this.element[method] = this[method].bind(this);
		 },this);*/
	},

	detachTooltip: function () {
		if (typeof this.tooltip_container != 'undefined' && this.tooltip_container && typeof this.tooltip_container.destroy != 'undefined')
			this.tooltip_container.destroy();
		if (typeof this.element[this.classType] != 'undefined') {
			if (Browser.ie7)
				this.element[this.classType] = null;
			else
				delete this.element[this.classType];
		}
		if (typeof this.element['hideTooltip'] != 'undefined') {
			if (Browser.ie7)
				this.element['hideTooltip'] = null;
			else
				delete this.element['hideTooltip'];
		}
		this.element.removeEvents('mouseover');
		this.element.removeEvents('mouseleave');
		delete this.options;
	},

	addText: function (html) {
		if (!(typeof this.options.content == 'object' && this.options.content && $defined(this.options.content.length)))
			this.options.content = [this.options.content];
		this.options.content.push(html);
	},

	mouseenter: function () {
		//if (this.element.retrieve('mouseover') && this.tooltip_container) return true;
		if (this.options.hovered) {
			//this.tooltip_container.destroy();
		}
		this.options.hovered = true;
		if (this.element.get('title'))
			this.options.title = this.element.get('title');
		this.element.set('title', '');
		if (this.options.delay) {
			(function () {
				if (this.options.hovered) {
					if (this.options.src)
						this.load();
					else
						this.show();
				}
			}.bind(this)).delay(this.options.delay, this);
		}
		else {
			if (this.options.src)
				this.load();
			else
				this.show();
		}
	},

	mouseleave: function () {
		//$$('.'+this.options.className).each(function(el){if (typeof el.hideTooltip != 'undefined') el.hideTooltip()})
		this.hide();
	},

	load: function () {
		if (this.options.content) {
			this.show();
			return;
		}
		if (document.id(this.options.src)) {
			this.options.content = document.id(this.options.src);
			this.show();
			return;
		}
		if (this.options.request_type == 'json') {
			new Request.JSON({
				url: this.options.src,
				onSuccess: function (responseJson) {
					if ($defined(responseJson.title))
						this.options.title = responseJson.title;
					this.options.content = responseJson.content;
					this.show();
				}.bind(this)
			}).send();
		}
		else {
			new Request.HTML({
				url: this.options.src,
				noCache: true,//ie crap
				onSuccess: function (responseTree, responseElements, responseHTML, responseJavaScript) {
					this.options.content = responseHTML;
					this.show();
				}.bind(this)
			}).send();
		}
	},

	setPosition: function () {
		var x_offset = 0;
		var y_offset = 0;
		var arrow_class = 'right';
		if (!this.options.y_distance) this.options.y_distance = this.options.distance;
		if (!this.options.x_distance) this.options.x_distance = this.options.distance;
		switch (this.options.x_position) {
			case 'left':
				x_offset = -this.tooltip_container.getSize().x - this.options.x_distance;
				arrow_class = 'right';
				break;
			case 'right':
				x_offset = this.element.getSize().x + this.options.x_distance;
				arrow_class = 'left';
				break;
			case 'left_corner':
				x_offset = -this.options.x_distance;
				break;
			case 'right_corner':
				x_offset = this.element.getSize().x - this.tooltip_container.getSize().x + this.options.x_distance;
				break;
			case 'center':
				this.tooltip_container_arrow.addClass('top');
				x_offset = Math.round((this.element.getSize().x - this.tooltip_container.getSize().x) / 2);
				this.tooltip_container_arrow.setStyles({
					'margin-left': Math.round((this.tooltip_container.getSize().x - this.tooltip_container_arrow.getSize().x) / 2) - this.tooltip_container.getStyle('padding-left').toInt()
				});
				this.tooltip_container_arrow.removeClass('top');
				break;
		}
		switch (this.options.y_position) {
			case 'top':
				arrow_class = 'bottom';
				y_offset = -this.tooltip_container.getSize().y - this.options.y_distance;
				break;
			case 'top_corner':
				arrow_class = 'bottom';
				if (['right', 'right_corner'].contains(this.options.x_position))
					arrow_class = 'left';
				if (['left', 'left_corner'].contains(this.options.x_position))
					arrow_class = 'right';
				y_offset = this.options.y_distance;
				break;
			case 'bottom':
				arrow_class = 'top';
				y_offset = this.element.getSize().y + this.options.y_distance;
				break;
			case 'center':
				this.tooltip_container_arrow.addClass(arrow_class);
				y_offset = Math.round((this.element.getSize().y - this.tooltip_container.getSize().y) / 2);
				this.tooltip_container_arrow.setStyles({
					'margin-top': Math.round((this.tooltip_container.getSize().y - this.tooltip_container_arrow.getSize().y) / 2) - this.tooltip_container.getStyle('padding-top').toInt()
				});
				break;
		}
		switch (arrow_class) {
			case 'top':
				this.tooltip_container_arrow.addClass(arrow_class);
				y_offset += this.tooltip_container_arrow.getSize().y;
				break;
			case 'bottom':
				this.tooltip_container_arrow.setStyles({
					'margin-top': this.tooltip_container.getSize().y - this.tooltip_container.getStyle('padding-top').toInt()
				});
				this.tooltip_container_arrow.addClass(arrow_class);
				y_offset -= this.tooltip_container_arrow.getSize().y;
				break;
			case 'left':
				this.tooltip_container_arrow.addClass(arrow_class);
				x_offset += this.tooltip_container_arrow.getSize().x;
				break;
			case 'right':
				this.tooltip_container_arrow.setStyles({
					'margin-left': this.tooltip_container.getSize().x - this.tooltip_container.getStyle('padding-left').toInt()
				});
				this.tooltip_container_arrow.addClass(arrow_class);
				x_offset -= this.tooltip_container_arrow.getSize().x;
				break;
		}
		this.tooltip_container.setStyles({
			'margin-left': this.element.getPosition().x + x_offset,
			'margin-top': this.element.getPosition().y + y_offset
		});
	},

	show: function () {
		if (this.tooltip_container) {
			this.tooltip_container.setStyle('display', 'block');
			this.setPosition();
			new Fx.Morph(this.tooltip_container, {
				duration: 100,
				transition: Fx.Transitions.Sine.easeOut
			}).start({'opacity': 100}).chain(function () {
				return;
			}.bind(this));
			$$('.tooltip_container').each(function (el) {
				if (this.tooltip_container != el && typeof el.UITooltip != 'undefined')
					el.UITooltip.hide(true);
			}.bind(this));
			return;
		}
		this.tooltip_container = new Element('div', {
			'class': 'tooltip_container',
			events: {
				mouseenter: function () {
					this.element.store('mouseover', true);
				}.bind(this),
				mouseleave: function () {
					this.element.store('mouseover', false);
					this.mouseleave();
				}.bind(this)
			}
		}).inject(document.id(document.body), 'top');
		this.tooltip_container['UITooltip'] = this;
		if (this.options.width)
			this.tooltip_container.setStyle('width', this.options.width);
		$$('.tooltip_container').each(function (el) {
			if (this.tooltip_container != el && typeof el.UITooltip != 'undefined')
				el.UITooltip.hide(true);
		}.bind(this));
		this.tooltip_content = new Element('div', {
			'class': 'tooltip_content'
		}).inject(this.tooltip_container);
		if (this.options.title && this.options.content)
			this.tooltip_title = new Element('h3', {
				'class': 'title',
				'html': this.options.title
			}).inject(this.tooltip_container, 'top');
		if (this.options.title && !this.options.content)
			this.options.content = this.options.title;

		if (!(this.options.content && typeof this.options.content == 'object' && $defined(this.options.content.length)))
			this.options.content = [this.options.content];
		this.options.content.each(function (el) {
			if (typeof el == 'object' && el)
				document.id(el).inject(this.tooltip_content);
			else
				this.tooltip_content.set('html', this.tooltip_content.get('html') + this.options.content);
			this.tooltip_content.evalScripts();
		}.bind(this));

		this.tooltip_container_arrow = new Element('div', {'class': 'tooltip_container_arrow'}).inject(this.tooltip_container, 'top');
		this.setPosition();
		this.tooltip_container.set('tween', {duration: 100}).fade('hide').fade('in');
	},

	hide: function (instant) {
		(function () {
			if (this.element.retrieve('mouseover') && !instant) return;
			this.options.hovered = false;
			this.element.set('title', this.options.title);
			if (this.tooltip_container)
				new Fx.Morph(this.tooltip_container, {
					duration: 100, transition: Fx.Transitions.Sine.easeOut
				}).start({opacity: 0}).chain(function () {
							this.tooltip_container.setStyle('display', 'none');
						}.bind(this));
		}.bind(this)).delay((typeof instant != 'undefined' && instant) ? 0 : this.options.hide_delay, this);
	}
});

var UIAddressInput = new Class({
	Extends: UIComponent,
	classType: 'UIAddressInput',
	lastSelectedText: null,
	perfectMatch: null, //if we have a 100% match, we save it here, in this case we would also pick this result on blur of the input
	geocoded: false,
	componentsMissing: null,

	options: {
		active: false,
		fillAddress: null,
		fillGeometry: null,
		countryRestriction: null,
		language: 'de',
		types: 'geocode',
		geocodeinput: true,
		countyMandatory: false,
		sizeToElementStreet: null,
		sizeToElementCity: null,
		renderDirectly:false
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		this.loaded = false;
		if (isElement) this.reloadComponent(); // just the first time
		Object.each(this.options.fillAddress, function (item, key) {
			item.addEvent('blur', function () {
				(function () {
					this.geocodeAddress();
				}).delay(200, this);
			}.bind(this));
		}.bind(this), this);
	},

	reloadComponent: function (options) {
		if ($defined(options) && options && $defined(this.options.fillAddress) && $defined(options.fillAddress))
			this.options.fillAddress = null;
		if ($defined(options))
			this.setOptions(options);
		if (this.options.fillAddress) { // we lock the address field until its loaded
			Object.each(this.options.fillAddress, function (item, index) {
				item.setProperty('disabled', true);
			}.bind(this));
		}
		if (typeof google != 'undefined' && $defined(google.maps) && $defined(UIAddressInput.googleMapsLastUsedLanguage) && UIAddressInput.googleMapsLastUsedLanguage == this.options.language){
			this.options.renderDirectly = true;
			this.render();
		}
		else {
			var random = new Date().getTime() + '_' + Math.round(Math.random() * 1000000);
			var randomFunction = 'function_' + random;
			var randomParams = 'params_' + random;
			UIAddressInput[randomParams] = this;
			UIAddressInput[randomFunction] = UIAddressInput[randomParams].render.bind(this);
			new Asset.javascript('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&language=' + this.options.language + '&callback=UIAddressInput.' + randomFunction);
		}
	},

	render: function () {
		UIAddressInput.googleMapsLastUsedLanguage = this.options.language;
		(function () {
			this.geocodeAddress();
			if (this.options.fillAddress) { // we lock the address field until its loaded
				Object.each(this.options.fillAddress, function (item, index) {
					item.removeProperty('disabled');
				}.bind(this));
			}
		}.bind(this)).delay(this.options.renderDirectly?100:1500);
		new UIAutocomplete(this.options.fillAddress.route, {
			addressAutocomplete: {
				active: true,
				language: this.options.language,
				countryRestriction: this.options.countryRestriction,
				fillAddress: this.options.fillAddress,
				geocodeinput: true,
				initialGeocode: false,
				checkForStreetNo: false,
				countyMandatory: this.options.countyMandatory,
				clearAddressDataBeforeFill: false
			},
			sizeToElement: this.options.sizeToElementStreet,
			events: {
				addressFilled: this.geocodeAddress.bind(this)
			}
		});
		(function () {
			if (this.options.fillAddress.locality) {
				var fillAddress = {
					locality: this.options.fillAddress.locality
				};
				//if ($defined(this.options.fillAddress.postal_code))
				//fillAddress.postal_code = this.options.fillAddress.postal_code;
				new UIAutocomplete(this.options.fillAddress.locality, {
					addressAutocomplete: {
						active: true,
						language: this.options.language,
						countryRestriction: this.options.countryRestriction,
						fillAddress: fillAddress,
						types: 'regions',
						geocodeinput: true,
						removeCountry: false,
						countyMandatory: this.options.countyMandatory,
						checkForStreetNo: false,
						clearAddressDataBeforeFill: false
					},
					sizeToElement: this.options.sizeToElementCity,
					events: {
						addressFilled: this.geocodeAddress.bind(this)
					}
				});
			}
			if (this.options.fillAddress.postal_code) {
				(function () {
					var fillAddress = {
						postal_code: this.options.fillAddress.postal_code
					};
					if ($defined(this.options.fillAddress.locality))
						fillAddress.locality = this.options.fillAddress.locality;
					new UIAutocomplete(this.options.fillAddress.postal_code, {
						addressAutocomplete: {
							active: true,
							language: this.options.language,
							countryRestriction: this.options.countryRestriction,
							fillAddress: fillAddress,
							types: 'regions',
							geocodeinput: true,
							removeCountry: false,
							countyMandatory: this.options.countyMandatory,
							checkForStreetNo: false,
							clearAddressDataBeforeFill: false
						},
						sizeToElement: this.options.sizeToElementCity,
						events: {
							addressFilled: this.geocodeAddress.bind(this)
						}
					});
				}.bind(this)).delay(this.options.renderDirectly?100:500, this);
			}
		}.bind(this)).delay(this.options.renderDirectly?100:500, this);
	},

	fillGeometry: function (place) {
		if (!($defined(this.options.fillGeometry) && this.options.fillGeometry))
			return false;
		//console.log(place);
		var data = UIAddressInput.normalizePlacesData(place);
		if ($defined(data.geo_lat))
			this.options.fillGeometry.geo_lat.set('value', data.geo_lat);
		if ($defined(data.geo_lng))
			this.options.fillGeometry.geo_lng.set('value', data.geo_lng);
		this.fireEvent('fillGeometry', this);
	},

	fillData: function (place) {
		if (!($defined(this.options.fillData) && this.options.fillData))
			return false;
		if (!$defined(place.address_components)) return;
		var data = UIAddressInput.normalizePlacesData(place);
		this.options.fillData.set('value', JSON.encode(data));
		this.fireEvent('fillData', this);
	},


	geocodeAddress: function () {
		this.geocodeComponents(this.options.fillAddress);
	},

	geocodeComponents: function (components) {
		var components = Object.clone(components);
		//console.log(components);
		// we do not want to geocode only having streetnumber
		var doGeocode = false;
		var addressText = '';
		if ($defined(components.route) && components.route.value.trim().length > 0) {
			addressText += components.route.value;
			doGeocode = true;
		}
		if ($defined(components.street_number))
			addressText += (addressText ? ' ' : '') + components.street_number.value;
		if ($defined(components.postal_code) && components.postal_code.value.trim().length > 0) {
			addressText += (addressText ? ', ' : '') + components.postal_code.value;
			doGeocode = true;
		}
		if ($defined(components.locality) && components.locality.value.trim().length > 0) {
			addressText += (addressText ? ' ' : '') + components.locality.value;
			doGeocode = true;
		}
		addressText += (addressText ? ', ' : '') + (addressText ? this.options.countryRestriction : '');
		this.geocoded = false;
		if (addressText && doGeocode) {
			//console.log(addressText);
			this.geocoder = new google.maps.Geocoder();
			this.geocoder.geocode({address: addressText, language: this.options.language}, function (results, status) {
				//console.log(status);
				if (status == google.maps.GeocoderStatus.OK) {
					this.geocoded = true;
					this.fillGeometry(results[0]);
					this.fillData(results[0]);
					if ($defined(this.options.fillAddress.postal_code) && this.options.fillAddress.postal_code && !this.options.fillAddress.postal_code.get('value')) {
						var data = UIAddressInput.normalizePlacesData(results[0]);
						if ($defined(data.postal_code))
							this.options.fillAddress.postal_code.set('value', data.postal_code.long_name);
					}
					//if (this.options.fillGeometry)

				}
				else {
					if ($defined(components.street_number)) {//try without street number
						//console.log(components);
						delete components.street_number;
						this.geocodeComponents(components);
					}
					else if ($defined(components.route)) {
						delete components.route;
						this.geocodeComponents(components);
					}
					else if ($defined(components.postal_code)) {
						delete components.postal_code;
						this.geocodeComponents(components);
					}
					else {
						//console.log('geocode failed');
					}
				}
			}.bind(this));
		}
		else {
			//console.log('geocode failed');
		}
	}
});

UIAddressInput.normalizePlacesData = function (place, input_address) {
	var data = {};
	place.address_components.each(function (component) {
		var name = component.types[0];
		if (name == 'postal_town')
			name = 'locality';
		if (name == 'postal_code_prefix' && component.types.length > 1) // fix postal_code_prefix comming first on "Spaklerweg 50, 1099 Amsterdam, Nederland"
			name = component.types[1];
		if (!$defined(data.locality) && name == 'administrative_area_level_1') // e.g. new york
			name = 'locality';

		// try to restore complex street numbers like 41-45
		if ($defined(input_address) && input_address && name == 'street_number') {
			if (input_address.indexOf(component.long_name) > 0) {
				var aux = input_address.substr(input_address.indexOf(component.long_name));
				// format: 12a-32b, 10-31, 10a-3, 10b
				var regex = new RegExp('^([0-9]{1,4}(?:[a-z]{1})?(?:\\s*-\\s*[0-9]{1,4}(?:[a-z]{1})?)?)(?=[,\\s]{1})', 'gmi');
				aux = aux.match(regex);
				if (aux != null) {
					component.short_name = aux[0];
					component.long_name = aux[0];
				}
			}
			//console.log(input_address);
		}
		data[name] = {long_name: component.long_name, short_name: component.short_name};
	}.bind(this));
	if ($defined(place.geometry) && $defined(place.geometry.location)) {
		//this part is obfuscated by google, just the order of the keys remains the same.
		var index = 0;
		Object.each(place.geometry.location, function (item, key) {
			if (index == 0)
				data.geo_lat = item;
			else
				data.geo_lng = item;
			index++;
		});
	}
	return data;
}

var UIAutocomplete = new Class({
	Extends: UIComponent,
	classType: 'UIAutocomplete',
	lastSelectedText: null,
	perfectMatch: null, //if we have a 100% match, we save it here, in this case we would also pick this result on blur of the input
	geocoded: false,
	addressFilled: false,
	componentsMissing: null,

	options: {
		className: 'ui_autocomplete',
		url: null,
		additionalParams: {},
		strict: false,
		method: 'get',
		queryParam: null,
		minInputLength: 3,
		offset: {top: -1, left: 1},
		sizeToElement: null,
		// either we have arrays if string e.g. ['köln','bonn', ...] or we have an array of objects e.g. [{name:'köln',id:'abc', geoLat:123, geoLng:142}]
		//suggestOjects is in this case {text:'name', value:'id'}
		suggestObjects: {text: 'text', value: 'value'},
		useIDs: false,
		initialID: null,

		addressAutocomplete: {
			active: false,
			fillAddress: null,
			fillGeometry: null,
			countryRestriction: null,
			language: 'de',
			types: 'geocode',
			geocodeinput: true,
			initialGeocode: true,
			removeCountry: false,
			checkForStreetNo: true,
			countyMandatory: false,
			clearAddressDataBeforeFill: true,
			renderDirectly:false
		}
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		this.loaded = false;
		if (isElement) this.reloadComponent(); // just the first time
	},

	reloadComponent: function (options) {
		if ($defined(options) && options && $defined(this.options.addressAutocomplete) && $defined(this.options.addressAutocomplete.fillAddress) && $defined(this.options.addressAutocomplete) && $defined(options.addressAutocomplete) && $defined(options.addressAutocomplete.fillAddress))
			this.options.addressAutocomplete.fillAddress = null;
		if ($defined(options))
			this.setOptions(options);
		if (!this.options.addressAutocomplete.active) {
			this.render();
			return;
		}
		if (typeof google != 'undefined' && $defined(google.maps) && $defined(UIAddressInput.googleMapsLastUsedLanguage) && UIAddressInput.googleMapsLastUsedLanguage == this.options.addressAutocomplete.language){
			this.options.renderDirectly = true;
			this.render();
		}
		else {
			var random = new Date().getTime() + '_' + Math.round(Math.random() * 1000000);
			var randomFunction = 'function_' + random;
			var randomParams = 'params_' + random;
			UIAutocomplete[randomParams] = this;
			UIAutocomplete[randomFunction] = UIAutocomplete[randomParams].render.bind(this);
			new Asset.javascript('https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&language=' + this.options.addressAutocomplete.language + '&callback=UIAutocomplete.' + randomFunction);
		}
	},

	render: function () {
		UIAddressInput.googleMapsLastUsedLanguage = this.options.addressAutocomplete.language;
		this.element.set('autocomplete', 'off');
		if (!this.loaded) {
			if (this.options.addressAutocomplete.active && this.options.addressAutocomplete.geocodeinput && this.options.addressAutocomplete.initial_geocode)
				this.geocodeInput();
			if (this.options.useIDs) {
				this.elementID = new Element('input', {
					type: 'hidden',
					name: this.element.get('name'),
					id: this.element.get('id'),
					value: this.options.initialID
				}).inject(this.element, 'after');
				this.element.set('name', this.element.get('name') + '_value');
				this.element.set('id', this.element.get('id') + '_value');
			}
			this.element.addEvents({
				keydown: function (evt) {
					if (!$defined(evt)) return;
					if (['up', 'down'].contains(evt.key)) {
						evt.preventDefault();
						this.element.selectRange(this.element.get('value').length, this.element.get('value').length);
						if ($defined(this.suggestContainer) && this.suggestContainer.getChildren().length) {
							if (!$defined(this.selectedIndex)) this.selectedIndex = 0;
							if (evt.key == 'up')
								this.selectedIndex--;
							if (evt.key == 'down')
								this.selectedIndex++;
							this.selectedIndex = this.selectedIndex >= 0 ? this.selectedIndex % this.suggestContainer.getChildren().length : this.suggestContainer.getChildren().length - this.selectedIndex - 2;
							this.selectResult(this.suggestContainer.getChildren()[this.selectedIndex]);
						}
					}
					if ((evt.key == 'enter' || evt.key == 'tab') && $defined(this.suggestContainer) && this.suggestContainer && $defined(this.suggestContainer.getChildren()[this.selectedIndex]))
						this.pickResult(this.suggestContainer.getChildren()[this.selectedIndex]);
					if (evt.key == 'esc') this.hide();
				}.bind(this),
				keyupDelayed: function (evt) {
					if (!['left', 'up', 'down', 'right', 'enter'].contains(evt.key)) {
						this.suggest.attempt(evt, this);
					}
				}.bind(this),
				blur: this.hide.bind(this),
				focus: this.suggest.bind(this)
			});
			['resultIsPicked'].each(function (method) {
				this.element[method] = this[method].bind(this);
			}, this);
			this.loaded = true;
		}
	},

	selectResult: function (result) {
		if (!$defined(this.suggestContainer) || !this.suggestContainer) return;
		this.suggestContainer.getChildren().each(function (el, index) {
			if (el != result) {
				el.removeClass('active');
				this.fireEvent('unSelectResult', el);
			}
			else {
				el.addClass('active');
				this.fireEvent('selectResult', el);
			}
		}.bind(this));
	},

	pickResult: function (result, doNotHide) {
		if (this.lastSuggestBase != this.element.get('value'))
			return;
		if (this.options.addressAutocomplete.active) {
			if (this.options.addressAutocomplete.removeCountry) {
				var text = '';
				if (result.retrieve('suggestdata')) {
					if (result.retrieve('suggestdata').terms.length > 1) {
						result.retrieve('suggestdata').terms.each(function (term, index) {
							if (index < result.retrieve('suggestdata').terms.length - 1)
								text += term.value + (index < result.retrieve('suggestdata').terms.length - 2 ? ', ' : '')
						});
					}
					else
						var text = result.retrieve('suggestdata') ? result.retrieve('suggestdata').description : result.get('text');
				}
				else
					text = result.get('text');
			}
			else
				var text = result.retrieve('suggestdata') ? result.retrieve('suggestdata').description : result.get('text');

			var value = text;
		}
		else {
			var text = this.options.useIDs ? result.retrieve('suggestdata')[this.options.suggestObjects.text] : result.get('text');
			var value = this.options.useIDs ? result.retrieve('suggestdata')[this.options.suggestObjects.value] : text;
		}
		text = text.clean().trim();
		this.element.set('value', text);
		if (this.options.addressAutocomplete.active && this.options.addressAutocomplete.geocodeinput)
			this.geocodeInput();

		if (this.options.useIDs) {
			this.elementID.set('value', value);
			this.lastSelectedID = value;
		}
		this.lastSelectedText = text;
		//console.log(text);
		if (this.element.getParent('.ui_taginput_wrapper')) {
			this.element.getParent('.ui_taginput_wrapper').retrieve('ui_taginput').addTagFromActualInputValue();
		}
		if (!$defined(doNotHide) || ($defined(doNotHide) && !doNotHide))
			this.hide();
	},

	resultIsPicked: function () {
		if (this.options.useIDs) {
			if (!$defined(this.lastSelectedID)) {
				//console.log('last id' + this.lastSelectedID);
				return false;
			}
			return this.lastSelectedID == this.elementID.get('value');
		}
		else {
			if (!$defined(this.lastSelectedText))
				return false;
			return this.lastSelectedText.clean().trim() == this.element.get('value').clean().trim();
		}
	},

	hide: function () {
		//this.geocodeInput();
		if (this.perfectMatch)
			this.pickResult(this.perfectMatch, true);
		if ($defined(this.suggestContainer) && this.suggestContainer) {
			this.suggestContainerFX.start({opacity: 0}).chain(function () {
				if ($defined(this.suggestContainer) && this.suggestContainer) { //double check (cause of delay)
					if (this.suggestContainer.getChildren().length)
						this.suggestContainer.getChildren().destroy();
					this.suggestContainer.destroy();
					this.suggestContainer = null;
				}
			}.bind(this));
		}
	},

	suggest: function (evt) {
		this.lastSuggestBase = this.element.get('value');
		this.fireEvent('beforeSuggest', this);
		this.perfectMatch = null;
		if (!$defined(this.suggestContainer) || ($defined(this.suggestContainer) && !this.suggestContainer)) {
			if (this.options.sizeToElement) {
				if (this.options.sizeToElement instanceof Array) { //wrap around multiple elements
					this.coordinates = {left: 99999, top: 0, right: 0, height: 0};
					this.options.sizeToElement.each(function (el) {
						var elementCoordinates = el.getCoordinates();
						this.coordinates.left = Math.min(elementCoordinates.left, this.coordinates.left);
						this.coordinates.top = Math.max(elementCoordinates.top, this.coordinates.top);
						this.coordinates.height = Math.max(elementCoordinates.height, this.coordinates.height);
						this.coordinates.right = Math.max(elementCoordinates.right, this.coordinates.right);
					}.bind(this));
					this.coordinates.width = this.coordinates.right - this.coordinates.left;
				}
				else
					this.coordinates = this.options.sizeToElement.getCoordinates();
			}
			else
				this.coordinates = this.element.getCoordinates();
			this.suggestContainer = new Element('ul', {
				'class': 'ui_autocomplete_container',
				styles: {
					opacity: 0,
					position: 'absolute',
					'margin-left': this.coordinates.left + this.options.offset.left,
					'margin-top': this.coordinates.top + this.coordinates.height + this.options.offset.top,
					width: this.coordinates.width
				}
			}).inject(document.id(document.body), 'top');
			this.suggestContainerFX = new Fx.Morph(this.suggestContainer, {
				transitions: Fx.Transitions.Expo.easeOut,
				duration: 200
			});
		}
		if (this.element.get('value').clean().trim().length < this.options.minInputLength) {
			this.hide();
			return;
		}
		if (this.options.addressAutocomplete.active) {
			var service = new google.maps.places.AutocompleteService();
			var options = {
				types: this.options.addressAutocomplete.types,
				componentRestrictions: this.options.addressAutocomplete.componentRestrictions
			};
			options.types = options.types == 'cities' ? '(cities)' : options.types;
			options.types = options.types == 'regions' ? '(regions)' : options.types;
			if (this.options.addressAutocomplete.countryRestriction) options.componentRestrictions = {country: this.options.addressAutocomplete.countryRestriction};
			options.input = this.element.get('value');
			options.types = [options.types];
			service.getPlacePredictions(options, this.suggestLoaded.bind(this))
		}
		else {
			var data = this.options.additionalParams;
			data[this.options.queryParam] = this.element.get('value').clean().trim();
			new Request.JSON({
				url: this.options.url, method: this.options.method, data: data,
				onSuccess: this.suggestLoaded.bind(this)
			}).send();
		}
	},

	suggestLoaded: function (result, status) {
		var snippet = new Element('div');
		var data = this.options.additionalParams;
		data[this.options.queryParam] = this.element.get('value').clean().trim();
		if (result && result.length) {
			result.each(function (element, index) {
				if (this.options.addressAutocomplete.active) {
					var text = element.description;
					var value = element.description;
					// implement highlights based on google data
					var showString = '<span class="marker"></span>';
					var termsHighlighted = Array.clone(element.terms);
					element.matched_substrings.each(function (matched_substring) {
						termsHighlighted.each(function (term, termIndex) {
							var originalTerm = element.terms[termIndex];
							if (matched_substring.offset >= originalTerm.offset && (matched_substring.offset + matched_substring.length) <= (originalTerm.offset + originalTerm.value.length)) {
								term.value = originalTerm.value.substr(Math.max(0, originalTerm.offset - matched_substring.offset), Math.abs(originalTerm.offset - matched_substring.offset))
								+ '<span class="highlight">' + originalTerm.value.substr(Math.abs(originalTerm.offset - matched_substring.offset), matched_substring.length) + '</span>' + originalTerm.value.substr(matched_substring.length + matched_substring.offset - originalTerm.offset);
							}
						});
					});
					var queryItems = 1;
					if (termsHighlighted.length >= 4)
						queryItems = 2;
					termsHighlighted.each(function (term, termIndex) {
						showString += (termIndex < queryItems ? '<span class="query">' : '') + term.value + ((termIndex < termsHighlighted.length - 1) && termIndex != queryItems - 1 ? ', ' : ' ') + (termIndex < queryItems ? '</span>' : '');
					});
					var actresult = new Element('li', {html: showString}).inject(snippet);
				}
				else {
					var text = this.options.useIDs ? element[this.options.suggestObjects.text] : element;
					var value = this.options.useIDs ? element[this.options.suggestObjects.value] : element;
					var actresult = new Element('li', {html: text.highlightMatches(this.element.get('value').clean().trim().split(" "))}).inject(snippet);
				}
				actresult.addEvents({
					click: function () {
						this.pickResult(actresult)
					}.bind(this),
					mouseenter: function () {
						this.selectedIndex = index;
						this.selectResult(actresult)
					}.bind(this)
				});
				if (this.options.useIDs || this.options.addressAutocomplete.active)
					actresult.store('suggestdata', element);

				if (text.clean().trim().toLowerCase() == data[this.options.queryParam].toLowerCase()) {
					this.perfectMatch = actresult;
				}
				if (this.element != document.activeElement && index == 0) { // if the user jumped out of the field with tab, we select the first result
					this.pickResult(actresult);
					// on fast tab click, when the next field has also an autocompleter, it has to do a new suggest after we update it's contents
					if ($defined(document.activeElement['UIAutocomplete']) && document.activeElement['UIAutocomplete'].options.addressAutocomplete) {
						(function () {
							document.activeElement['UIAutocomplete'].suggest();
						}.bind(this)).delay(200, this);
					}
				}
			}.bind(this));
		}
		if (this.suggestContainer && this.suggestContainer.getChildren())
			this.suggestContainer.getChildren().destroy();
		if (this.suggestContainer && snippet.getChildren())
			this.suggestContainer.adopt(snippet.getChildren());
		if ($defined(this.suggestContainer) && this.suggestContainer.getChildren().length) {
			if (!this.suggestContainer.getStyle('opacity'))
				this.suggestContainerFX.start({opacity: 1});
			this.selectedIndex = 0;
			this.selectResult(this.suggestContainer.getChildren()[this.selectedIndex]);
		}
	},

	geocodeInput: function () {
		this.geocoded = false;
		if (!this.element.get('value')) return;
		//if (!this.geocoder)
		this.geocoder = new google.maps.Geocoder();
		//console.log(this.element.get('value'));
		var input_address = this.element.get('value');
		this.geocoder.geocode({
			address: input_address,
			language: this.options.addressAutocomplete.language
		}, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var result = results[0];
				//determine if address is valid wihtout street number
				//console.log(result);
				var street_nr_present = false;
				result.address_components.each(function (component) {
					var name = component.types[0];
					if (name == 'street_number') {
						street_nr_present = true;
						return;
					}
				}.bind(this));
				if (!street_nr_present && this.options.addressAutocomplete.types == 'geocode' && (this.options.checkForStreetNo || (this.options.addressAutocomplete.fillAddress && $defined(this.options.addressAutocomplete.fillAddress.street_number) && this.options.addressAutocomplete.fillAddress.street_number.get('value')))) { //manually add street number
					//console.log('check no strno needed');
					var inputAddress = (this.options.checkForStreetNo ? '1' : this.options.addressAutocomplete.fillAddress.street_number.get('value')) + ' ' + this.element.get('value')
					this.geocoder.geocode({
						address: inputAddress,
						language: this.options.addressAutocomplete.language
					}, function (new_results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							var new_result = new_results[0];
							var street_nr_present = false;
							//console.log(new_result)
							new_result.address_components.each(function (component) {
								var name = component.types[0];
								if (name == 'street_number') {
									street_nr_present = true;
									return;
								}
							}.bind(this));
							var no_streetnr_needed = !street_nr_present;
							//console.log(no_streetnr_needed);
							var resultToUse = result;
							var skip_street_number = false;
							// in case of UIAddressInput in cases of US and UK street_number beeing first, e.g. 59 Dillon Road
							// we are using the street_number from the corresponding input field to enrich the result
							if (this.options.addressAutocomplete.fillAddress.street_number.get('value').trim().length > 0 && !this.options.checkForStreetNo) {
								resultToUse = new_result;
								skip_street_number = true;
							}

							if ($defined(resultToUse.formatted_address))
								this.element.set('value', resultToUse.formatted_address);

							this.fillGeometry(resultToUse, true);
							this.fillAddress(resultToUse, true, no_streetnr_needed, skip_street_number, input_address);
							this.fillData(resultToUse, true, no_streetnr_needed, input_address);
						}
					}.bind(this));
				}
				else {
					if ($defined(result.formatted_address))
						this.element.set('value', result.formatted_address);
					this.fillGeometry(result, true);
					this.fillAddress(result, true, false, false, input_address);
					this.fillData(result, true);
				}
				this.geocoded = true;
			} else {
				console.log('Geocode was not successful for the following reason: ' + status);
			}
		}.bind(this));
	},

	fillData: function (place, geocoded, no_streetnr_needed) {
		if (!($defined(this.options.addressAutocomplete.fillData) && this.options.addressAutocomplete.fillData))
			return false;
		if (!($defined(place) && place))
			place = this.autocompleter.getPlace();
		if (!$defined(place.address_components)) return;
		var data = UIAddressInput.normalizePlacesData(place);
		data.no_streetnr_needed = $defined(no_streetnr_needed) && no_streetnr_needed;
		this.options.addressAutocomplete.fillData.set('value', JSON.encode(data));
	},

	fillGeometry: function (place, geocoded) {
		if (!($defined(this.options.addressAutocomplete.fillGeometry) && this.options.addressAutocomplete.fillGeometry))
			return false;
		if (!($defined(place) && place))
			place = this.autocompleter.getPlace();
		//console.log(place);
		var data = UIAddressInput.normalizePlacesData(place);
		if ($defined(data.geo_lat))
			this.options.addressAutocomplete.fillGeometry.geo_lat.set('value', data.geo_lat);
		if ($defined(data.geo_lng))
			this.options.addressAutocomplete.fillGeometry.geo_lng.set('value', data.geo_lng);
	},

	fillAddress: function (place, geocoded, no_streetnr_needed, skip_street_number, input_address) {
		if (!($defined(this.options.addressAutocomplete.fillAddress) && this.options.addressAutocomplete.fillAddress))
			return false;
		skip_street_number = $defined(skip_street_number) && skip_street_number ? true : false;
		this.addressFilled = false;
		if (!($defined(place) && place))
			place = this.autocompleter.getPlace();
		if (!$defined(place.address_components)) return;
		this.componentsMissing = [];
		Object.each(this.options.addressAutocomplete.fillAddress, function (item, index) {
			if (this.options.addressAutocomplete.clearAddressDataBeforeFill)
				item.set('value', '');
			this.componentsMissing.push(index);
		}.bind(this));
		var data = UIAddressInput.normalizePlacesData(place, input_address);
		Object.each(data, function (component, name) {
			if ($defined(this.options.addressAutocomplete.fillAddress[name])) {
				this.componentsMissing.erase(name);
				if (skip_street_number && name == 'street_number') return;
				var value = component.long_name;
				if (name == 'locality' && this.options.addressAutocomplete.countyMandatory && $defined(data.administrative_area_level_1)) {
					value = component.long_name + ', ' + data.administrative_area_level_1.short_name;
				}
				this.options.addressAutocomplete.fillAddress[name].set('value', value);
				this.options.addressAutocomplete.fillAddress[name].fireEvent('change');
			}
		}.bind(this), this);

		if ($defined(no_streetnr_needed) && no_streetnr_needed)
			this.componentsMissing.erase('street_number');
		this.addressFilled = true;

		this.fireEvent('addressFilled', [this.componentsMissing]);
	}
});

var UITagInput = new Class({
	Extends: UIComponent,
	classType: 'UITagInput',

	options: {
		className: 'ui_taginput',
		tagClass: '',
		allowDomains: false,
		maxCount: null,
		sortable: false,
		minInputLength: 3,
		showEditIcons: false,
		autocomplete: {
			active: false,
			url: null,
			strict: false,
			method: 'get',
			queryParam: null,
			minInputLength: 3,
			offset: {top: -4, left: 0},
			validator: false,
			editable: false,
			addressAutocomplete: {
				active: false,
				fillAddress: null,
				fillGeometry: null,
				countryRestriction: null,
				language: 'de',
				types: 'regions',
				geocodeinput: false,
				removeCountry: true
			}
		}
	},
	editMode: false,

	tags: [],

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.wrapper = new Element('div', {
			class: this.element.getProperty('class') + ' ui_taginput_wrapper',
			events: {
				click: function () {
					(function () {
						if (!this.editMode)
							this.tagInput.focus()
					}.bind(this)).delay(500, this)
				}.bind(this),
				mouseenter: function () {
					if (this.options.showEditIcons) {
						this.editPane.addClass('active');
						//this.editPane.setStyles({'margin-left':this.wrapper.getDimensions().x-this.wrapper.getStyle('padding-left').toInt()-3})
					}
				}.bind(this),
				mouseleave: function () {
					if (this.options.showEditIcons) this.editPane.removeClass('active');
				}.bind(this)
			},
			id: this.element.get('id') + '_wrapper'
		});
		this.wrapper.store('ui_taginput', this);
		if (this.options.showEditIcons) {
			this.editPane = new Element('div', {'class': 'edit'}).inject(this.wrapper, 'top');
			this.btnDeleteTags = new Element('a', {
				title: 'Löschen', html: '<span class="icon"></span>', 'class': 'delete', events: {
					click: this.clearTags.bind(this)
				}
			}).inject(this.editPane);
			this.btnTogglePlain = new Element('a', {
				title: 'Tags als Text kopieren', html: '<span class="icon"></span>', 'class': 'copy_plain', events: {
					click: this.togglePlan.bind(this)
				}
			}).inject(this.editPane);
		}
		this.wrapper.removeClass(this.options.className);
		this.ul = new Element('ul', {'class': 'ui_taginput_ul'}).inject(this.wrapper);
		this.form = new Element('form', {}).inject(this.wrapper);
		this.tagInput = new Element('textarea', {
			class: 'taginput',
			placeholder: this.element.title,
			events: {
				paste: function (event) {
					if (Browser.opera)
						return;
					var value = this.tagInput.get('value');
					if (this.options.autocomplete.addressAutocomplete.active) {
						value = value.replace(/\t/g, ';').replace(/;/g, '\n');
						value = value.replace(/; /g, ';').replace(/;/g, '\n');
					}
					else {
						value = value.replace(/\t/g, ',').replace(/,/g, '\n');
						value = value.replace(/, /g, ',').replace(/,/g, '\n');
					}

					var values = value.split(/\n/g);
					values.each(function (el, index) {
						this.validateAndAddTag(el);
					}.bind(this), this);
				}.bind(this),
				keydown: function (event) {
					if (event && event.key == 'backspace') {
						if (this.tagInput.get('value') == '')
							this.removeTag('last');
					}
					(function () {
						if (event && event.key == 'enter') {
							this.validateAndAddTag(this.tagInput.get('value'));
						}
						if (event && (event.key == ',' || event.key == '¼' || event.code == 188)) {//mootools bug
							if (!this.options.autocomplete.addressAutocomplete.active)
								this.validateAndAddTag();
						}
						this.setInputWidth();
					}.bind(this)).delay(10, this);
				}.bind(this),
				keyup: function (event) {
					if (event && (event.key == ',' || event.key == '¼' || event.code == 188)) {//mootools bug
						if (!this.options.autocomplete.addressAutocomplete.active)
							this.validateAndAddTag(this.tagInput.get('value'));

					}
					//line breaks are inserted on keydown after enter ...
					if (event && event.key == 'enter') {
						this.tagInput.set('value', this.tagInput.get('value').replace(/\n/g, ''));
						function moveCaretToEnd(el) {
							if (typeof el.selectionStart == "number") {
								el.selectionStart = el.selectionEnd = el.value.length;
							} else if (typeof el.createTextRange != "undefined") {
								el.focus();
								var range = el.createTextRange();
								range.collapse(false);
								range.select();
							}
						}

						moveCaretToEnd(this.tagInput);
						new Fx.Scroll(this.tagInput, {}).toTop();
					}
				}.bind(this)
			}
		}).inject(this.form);
		(function () {
			if (this.options.autocomplete.active) {
				this.options.autocomplete.sizeToElement = this.wrapper;
				new UIAutocomplete(this.tagInput, this.options.autocomplete);
			}
			this.setInputWidth();
		}).delay(500, this);
		if (this.options.validator) {
			this.tagInput.addClass(this.options.validator);
			this.validator = new Form.Validator.Inline(this.form, {
				stopOnFailure: false, useTitles: false, errorPrefix: "", scrollToErrorsOnSubmit: false,
				onFormValidate: function (passed, form, event) {
					if (passed) {
						this.addTag(this.tagInput.get('value'));
					}
					else {
						this.tagInput.highlight();
					}
				}.bind(this)
			});
		}

		new Element('div', {styles: {clear: 'left'}}).inject(this.wrapper);
		//this.wrapper.removeClass(this.options.className);
		this.wrapper.inject(this.element, 'before');
		this.wrapper.setProperty('style', this.element.getProperty('style'));
		this.element.setStyles({'position': 'absolute', 'visibility': 'hidden'});
		this.wrapper.adopt(this.element);
		var actTags = this.element.get('value');
		try {
			var jsonTags = JSON.decode(actTags);
			if (jsonTags && jsonTags.length)
				actTags = jsonTags;
			else
				actTags = actTags.indexOf(',') >= 0 ? actTags.split(',') : [actTags];
		}
		catch (e) {
			actTags = actTags.indexOf(',') >= 0 ? actTags.split(',') : [actTags];
		}

		actTags.each(function (actTag) {
			this.addTag(actTag);
		}.bind(this));
		this.tagInput.set('value', '');
		this.element.set('value', JSON.encode(this.tags).replace(/"/g, "'"));
		['addTag', 'removeTag', 'clearTags', 'getTagsImploded', 'addTagFromActualInputValue', 'addTags'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
	},

	togglePlan: function () {
		if (this.form.hasClass('hidden')) {
			this.form.removeClass('hidden');
			this.ul.removeClass('hidden');
			this.btnTogglePlain.removeClass('active');
			if (this.tagCopy) this.tagCopy.destroy();
		}
		else {
			this.btnTogglePlain.addClass('active');
			this.form.addClass('hidden');
			this.ul.addClass('hidden');
			this.tagCopy = new Element('textarea', {
				'class': 'copy_tags',
				html: this.tags.join("\n")
			}).inject(this.editPane, 'after');
			new UITextArea(this.tagCopy);
			this.tagCopy.focus();
			this.tagCopy.select();
		}
	},

	clearTags: function () {
		this.tagInput.set('value', '');
		this.tags = [];
		this.ul.getElements('li').destroy();
	},

	addTags: function (tags) {
		if (tags && tags.length)
			tags.each(function (actTag) {
				this.addTag(actTag);
			}.bind(this));
	},

	validateAndAddTag: function (value) {
		if (this.options.validator)
			this.validator.validate();
		else
			this.addTag(value);
	},

	doSortables: function () {
		this.sortable = new Sortables(this.ul, {
			clone: true,
			revert: {duration: 250, transition: 'elastic:out'},
			onStart: function (element, clone) {
				clone.addClass('dragging');
				element.setStyle('opacity', 0.5);
			},
			onComplete: function (element, clone) {
				element.setStyle('opacity', 'auto');
				(function () {
					var tags = [];
					this.ul.getElements('li').each(function (el, li) {
						tags.push(el.get('rel'));
					});
					this.tags = tags;
					this.element.set('value', JSON.encode(this.tags).replace(/"/g, "'"));
				}).delay(500, this);
			}.bind(this)
		});
	},

	addTagFromActualInputValue: function () {
		if (this.tagInput.get('value'))
			this.validateAndAddTag(this.tagInput.get('value'))
	},

	cleanTag: function (text) {
		if (typeof text != 'string') return text;
		var returnText = text.toLowerCase().clean().tidy().stripScripts().stripTags();
		if (this.options.allowAll || this.options.autocomplete.active && this.options.autocomplete.addressAutocomplete.active) {
			returnText = returnText.replace(/[^\w\s\-âäáèéêîíäóôöüúßñ¿§ĄąĘęĆćŁłŃńŚśŹźŻżΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσΣσςΤτΥυΦφΧχΨψΩωόίΊ.\(\),#@]/g, '');
		}
		else if (this.options.allowDomains) {
			returnText = returnText.replace(/[^\w\s\-âäáèéêîíäóôöüúßñ¿§ĄąĘęĆćŁłŃńŚśŹźŻżΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσΣσςΤτΥυΦφΧχΨψΩωόίΊ.]/g, '');
		}
		else
			returnText = returnText.replace(/[^\w\s\-âäáèéêîíäóôöüúßñ¿§ĄąĘęĆćŁłŃńŚśŹźŻżΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσΣσςΤτΥυΦφΧχΨψΩωόίΊ.]/g, '');
		return returnText;
	},

	addTag: function (value, force) {
		//.replace(/, /g,',').replace(/,/g,'\n')
		if (this.options.maxCount && this.tags.length >= this.options.maxCount) {
			this.ul.getElements('li').highlight();
			return;
		}
		if (this.options.autocomplete.active && this.options.autocomplete.strict && !($defined(force) && force)) {
			if ($defined(this.tagInput.resultIsPicked) && !this.tagInput.resultIsPicked()) {
				this.wrapper.highlight();
				return false;
			}
		}
		if (this.options.allowDomains && !Form.Validator.adders.validators['validate-url-canonical'].options.test(new Element('input', {value: value}))) return false;
		value = this.cleanTag(value);
		if (!this.tags.contains(value) && value && value.length >= this.options.minInputLength) {
			this.tags.push(value);
			var tag = new Element(new Element('li', {
				'rel': value,
				'class': this.options.tagClass + (this.options.sortable ? ' sortable' : '')
			})).inject(this.ul);
			var tagText = new Element('span', {'html': value}).inject(tag);
			if (this.options.editable) {
				tag.addEvents({
					dblclick: function () {
						if (!this.editMode) {
							tagText.store('old_val', tagText.get('text'));
							//console.log('store ' + tagText.get('text'));
						}
						this.editMode = true;
						new UIHTMLEdit(tagText, {singleLine: true, noControls: true});
						if (this.options.sortable)
							this.sortable.detach();
					}.bind(this),
					outerClick: function () {
						//if (!this.editMode) return;
						this.editMode = false;
						if ($defined(tagText.UIHTMLEdit)) {
							if (tagText.UIHTMLEdit.active) {
								var text = this.cleanTag(tagText.get('text'));
								var domainValid = true;
								if (this.options.allowDomains)
									domainValid = Form.Validator.adders.validators['validate-url-canonical'].options.test(new Element('input', {value: text}));
								if (!(!this.tags.contains(text) && text && text.length >= this.options.minInputLength && domainValid)) {
									tagText.set('text', tagText.retrieve('old_val'));
								}
							}
							tagText.UIHTMLEdit.detach();
						}
						if (this.options.sortable)
							this.sortable.attach();
					}.bind(this)
				});
			}
			new Element('a', {
				'class': 'delete',
				events: {
					'click': function () {
						this.removeTag(tag)
					}.bind(this)
				}
			}).inject(tag, 'top');
			var width = tag.getSize().x - parseInt(tag.getStyle('padding-left')) - parseInt(tag.getStyle('padding-right')) - parseInt(tag.getStyle('border-left-width')) - parseInt(tag.getStyle('border-right-width'));
			tag.setStyles({'white-space': 'nowrap'});
			if (tag.getPrevious('li') && (tag.getPrevious('li').getPosition().y != tag.getPosition().y))
				tag.setStyle('clear', 'left');

			tag.setStyles({width: 0, opacity: 0});

			new Fx.Morph(tag, {duration: 250, transition: Fx.Transitions.Sine.easeOut}).start({
				width: width,
				opacity: 1
			}).chain(function () {
				tag.setStyles({clear: 'none', width: 'auto'})
			});
			this.tagInput.set('value', '');
			this.element.set('value', JSON.encode(this.tags).replace(/"/g, "'"));
			this.tagInput.set('value', '');
			this.setInputWidth();
		}
		else {
			if (this.tags.contains(value) && this.ul.getElement('li[rel=' + value + ']')) {
				//remove line break
				this.ul.getElement('li[rel=' + value + ']').highlight();
			}
		}
		if (this.options.sortable)
			this.doSortables();
	},

	setInputWidth: function () {
		var width = (Math.max(this.tagInput.get('value').length + 1, this.element.title.length + 1)) * 8.5;
		this.tagInput.setStyle('width', width);
		if (this.tagInput.getParent() != this.wrapper)
			this.tagInput.getParent().setStyle('width');
	},

	removeTag: function (tag) {
		if (typeof tag == 'string') {
			var tagElement = null;
			if (this.tags.contains(this.cleanTag(tag))) {
				this.ul.getElements('li').each(function (el, index) {
					if (el.get('rel') == this.cleanTag(tag))
						tag = el;
					return;
				}.bind(this));
			}
		}
		if (tag == 'last' && this.tags.length) {
			tag = this.ul.getLast('li');
		}
		if (typeof tag == 'object' && tag && tag != 'last' && tag.get('rel')) {
			tag.setStyles({width: tag.getStyle('width'), 'white-space': 'nowrap'});
			if (tag.getPrevious('li') && (tag.getPrevious('li').getPosition().y != tag.getPosition().y))
				tag.setStyle('clear', 'left');
			new Fx.Morph(tag, {
				duration: 250,
				transition: Fx.Transitions.Sine.easeOut
			}).start({width: 0, opacity: 0, 'padding-left': 0, 'padding-right': 0}).chain(function () {
						this.tags.erase(tag.get('rel'));
						tag.destroy();
						this.element.set('value', JSON.encode(this.tags).replace(/"/g, "'"));
					}.bind(this));
		}
	},

	getTagsImploded: function () {
		return this.tags.join(',');
	}
});

var UIShortText = new Class({
	Extends: UIComponent,
	classType: 'UIShortText',
	title: null,
	content: null,
	options: {
		className: 'ui_shorttext',
		length: 150,
		moreText: 'mehr',
		lessText: 'weniger',
		group: '',
		closeAllOhtersInGroup: true,
		onShorten: null,
		onExpand: null,
		showExpander: true
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		//this.element.store('fulltext',this.element.get('html'));
		this.more_text = new Element('a', {
			'class': 'more_text',
			'html': this.options.moreText,
			href: '#',
			events: {
				click: function () {
					this.expand();
					return false;
				}.bind(this)
			}
		}).inject(this.element, 'after');
		this.less_text = new Element('a', {
			'class': 'more_text',
			'html': this.options.lessText,
			href: '#',
			events: {
				click: function () {
					this.shorten();
					return false;
				}.bind(this)
			}
		}).inject(this.element, 'after');
		this.more_text.hide();
		this.less_text.hide();
		['shorten', 'expand'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		this.instant = true;
		this.shorten();
	},

	shorten: function () {
		if (!this.element)
			return;
		var res = this.element.shortenHTML(this.options.length, this.element, this.instant);
		if (!this.instant && this.options.onShorten)
			eval(this.options.onShorten);
		this.instant = false;
		if (res) {
			this.less_text.hide();
			if (this.options.showExpander)
				this.more_text.show();
		}
	},

	expand: function () {
		this.more_text.hide();
		this.element.restoreHTML();
		this.more_text.hide();
		if (this.options.showExpander)
			this.less_text.show();
		if (this.options.onExpand)
			eval(this.options.onExpand);
	}
});

UIFeedback = new Class({
	Implements: [Events, Options],
	classType: 'UIFeedback',
	opened: false,
	disabled: false,

	options: {
		parent: null,
		className: 'ui_feedback',
		rightMargin: 15,
		openWidth: 940,
		closedWidth: null,
		openHeight: 500,
		screenshot: {
			url: null,
			offset: {left: 0, right: 0, top: 0, bottom: 0},
			sound: "/media/sounds/camera1.wav",
			delay: 0
		},
		action: null
	},
	initialize: function (options) {
		this.setOptions(options);
		if (!this.options.parent)
			this.options.parent = document.id(document.body);
		if (!this.options.screenshotParent)
			this.options.screenshotParent = document.id(document.body);
		this.feedbackbutton = new Element('div', {class: this.options.className + ' ignore_canvas'}).inject(document.id(document.body), 'top');
		this.feedbacktext = new Element('span', {
			class: 'ui_feedbacktext',
			html: Translation.get('Support')
		}).inject(this.feedbackbutton);
		this.feedback_container = new Element('div', {class: 'container'}).inject(this.feedbackbutton);
		this.screenshot_container = new Element('div', {class: 'screenshot_container'}).inject(this.feedbackbutton);

		window.feedbackInstance = this;
		this.feedback_container.hide();
		this.closebutton = new Element('a', {class: 'overlay_close', styles: {width: 0}}).inject(this.feedbacktext);
		this.reposition();
		window.addEvent('resize', this.reposition.bind(this));
		this.feedbacktext.addEvent('click', this.open.bind(this));
		//this.submit.addEvent('click',this.makeScreen.bind(this));
	},

	makeScreen: function () {
		this.closeBGLayer();
		this.bglayer.removeEvents();
		this.disabled = true;
		this.close(true, false);
		this.bglayer.addClass('loading');
		var tSelectionContainer = new Element('div', {
			class: 'selections',
			styles: {
				position: 'absolute',
				'margin-left': -this.options.screenshotParent.getPosition().x - parseInt(this.options.screenshotParent.getStyle('padding-left')),
				'margin-top': -this.options.screenshotParent.getPosition().y - parseInt(this.options.screenshotParent.getStyle('padding-top')),
				width: document.id(document.body).getSize().x,
				height: document.id(document.body).getSize.y
			}
		}).inject(this.options.screenshotParent, 'top');
		tSelectionContainer.adopt(this.bglayer.getElements('.ui_resizerect'));
		this.bglayer_loader_text.set('text', Translation.get('Creating a screenshot of this page'));

		var snd = new Audio(this.options.screenshot.sound);
		(function () {
			var baseURL = new URI(document.location.href);
			baseURL = baseURL.get('scheme') + '://' + baseURL.get('host') + '/';
			var html = document.documentElement.outerHTML;
			html = html.replace(/<head(.*)>/i, '<head$1><style type="text/css">.ignore_canvas{display:none}</style>');
			new Fx.Morph(tSelectionContainer, {transition: Fx.Transitions.Sine.easeOut, duration: 200}).start({opacity: 0.3});
			new Request.JSON({
				url: this.options.screenshot.url,
				method: 'post',
				data: {html: html, height: window.getSize().y, width: window.getSize().x, baseurl: baseURL},
				onSuccess: function (responseJSON) {
					tSelectionContainer.destroy();
					this.screenshot = new Element('img', {src: responseJSON.image, class: 'screenshot'});
					this.screenshot.inject(document.id(document.body), 'top');
					this.screenshot.setStyles({
						position: 'fixed',
						'z-index': 999,
						left: '50%',
						top: 0,
						width: document.id(window).getSize().x,
						'margin-left': -document.id(window).getSize().x / 2,
						'margin-top': 0/*-document.id(document.body).getSize().y / 2*/
					});
					this.feedback_container.dissolve();
					new Fx.Morph(this.screenshot, {
						duration: 'long', transition: Fx.Transitions.Sine.easeOut, onComplete: function () {
						}.bind(this)
					}).start({'margin-left': -150, width: 300, 'margin-top': 250, top: 0});

					this.feedback_container.dissolve();
					this.sendData();
					snd.play();
					this.bglayer_loader_text.set('text', Translation.get('Sending your feedback...'));
				}.bind(this)
			}).send();
		}.bind(this)).delay(this.options.screenshot.delay, this);
	},

	reposition: function () {
		this.feedbackbutton.setStyle('margin-top', document.id(document.body).getSize().y - this.feedbackbutton.getSize().y);
		this.feedbackbutton.setStyle('margin-left', this.options.parent.getSize().x + this.options.parent.getPosition().x - this.feedbackbutton.getSize().x - this.options.rightMargin);
		if (this.bglayer) {
			this.bglayer.setStyles({
				'width': document.id(document.body).getScrollSize().x,
				'height': document.id(document.body).getScrollSize().y
			});
		}
	},

	sendData: function () {
		this.closeBGLayer();
		new Request({
			url: this.options.action,
			method: 'post',
			data: document.id('feedbackform'),
			onSuccess: function (responseText, responseXML) {
				if (this.bglayer_loader) {
					this.bglayer_loader.addClass('success');
					this.bglayer_loader_text.set('text', Translation.get('Thank you for your feedback!'));
				}
				this.close.delay(3000, this, [false, true]);
			}.bind(this),
			onComplete: function () {
				this.close.delay(3000, this, [false, true]);
				this.feedbackbutton.show();
			}.bind(this),
			onFailure: function () {
				this.close.delay(3000, this, [false, true]);
			}.bind(this),
			onCancel: function () {
				this.close.delay(3000, this, [false, true]);
			}.bind(this)
		}).send();
	},

	open: function (text) {
		if (typeof text == 'undefined' || !text) var text = '';
		if (this.disabled) return;
		if (this.opened) return this.close(true, true);
		this.opened = true;
		this.options.closedWidth = parseInt(this.feedbackbutton.getSize().x);
		this.options.closedHeight = parseInt(this.feedbackbutton.getSize().y);
		new Request.HTML({
			method: 'get',
			url: this.options.action,
			update: this.feedback_container,
			noCache: true,//ie crap
			onSuccess: function (responseText, responseXML) {
				(function () {
					if (document.id('feedback_subject') && text && typeof text == 'string') {
						document.id('feedback_subject').set('value', text);
						document.id('feedback_subject').fireEvent('keyup');
						document.id('feedback_subject').focus();
					}
				}).delay(200);
			}
		}).send();
		new Fx.Morph(this.feedbackbutton, {
			duration: 150,
			transition: Fx.Transitions.Sine.easeIn,
			onComplete: function (passes_tween_element) {
				new Fx.Morph(this.closebutton).start({
					width: 32
				});
				this.feedbackbutton.addClass('open');
			}.bind(this)
		}).start({
					width: this.options.openWidth,
					'margin-left': this.options.parent.getSize().x + this.options.parent.getPosition().x - this.options.openWidth - this.options.rightMargin
				}).chain(
				function () {
					new Fx.Morph(this.feedbackbutton, {
						duration: 300,
						transition: Fx.Transitions.Sine.easeOut,
						onComplete: function (passes_tween_element) {
							this.feedback_container.reveal();
						}.bind(this)
					}).start({
								height: this.options.openHeight,
								'margin-top': document.id(document.body).getSize().y - this.options.openHeight
							});
				}.bind(this));
	},

	processFeedback: function (makeScreen) {
		if (makeScreen)
			this.prepareScreenShot();
		else {
			this.feedbackbutton.hide();
			if (!this.bglayer)
				this.makeBGLayer();
			this.closeBGLayer();
			this.bglayer.removeEvents();
			this.disabled = true;
			this.close(true, false);
			this.bglayer.addClass('loading');
			this.bglayer_loader_text.set('text', Translation.get('Sending your feedback...'));
			this.sendData.delay(500, this);
		}
	},

	prepareScreenShot: function () {
		this.feedbackbutton.hide();
		this.makeBGLayer();
	},

	closeBGLayer: function () {
		if (!this.bg_info) return;
		new Fx.Morph(this.bg_info, {
			duration: 300,
			transition: Fx.Transitions.Sine.easeOut,
			onComplete: function (passes_tween_element) {
				this.bg_info.destroy();
			}.bind(this)
		}).start({
					opacity: 0
				});
	},

	makeBGLayer: function () {
		this.bglayer = new Element('div', {class: 'ui_feedback_bg ignore_canvas'}).inject(document.id(document.body), 'top');
		this.bg_info = new Element('div', {
			class: 'ui_feedback_bg_info ignore_canvas',
			styles: {width: document.id(document.body).getSize().x - 120}
		}).inject(document.id(document.body), 'top');
		this.ui_feedback_bg_info_textwrapper = new Element('div', {class: 'ui_feedback_bg_info_textwrapper ignore_canvas'}).inject(this.bg_info, 'top');
		this.bg_info_text = new Element('span', {
			class: 'ui_feedback_bg_info_text',
			text: Translation.get('Highlight things using your mouse')
		}).inject(this.ui_feedback_bg_info_textwrapper);
		this.bg_info_ok = new Element('a', {
			class: 'ui_feedback_bg_info_ok',
			text: Translation.get('Finished'),
			onclick: 'window.feedbackInstance.makeScreen()'
		}).inject(this.ui_feedback_bg_info_textwrapper);
		this.bg_info_cancel = new Element('a', {
			class: 'ui_feedback_bg_info_cancel',
			text: Translation.get('Close'),
			onclick: 'window.feedbackInstance.closeBGLayer();window.feedbackInstance.processFeedback(false)'
		}).inject(this.ui_feedback_bg_info_textwrapper);
		this.bglayer_loader = new Element('div', {class: 'loader'}).inject(this.bglayer);
		this.bglayer_loader_text = new Element('div', {class: 'loader_text'}).inject(this.bglayer);
		var tRect = null;
		var dragActive = true;
		this.drag = new Drag(this.bglayer, {
			onDrag: function (el, event) {
				if (!tRect) return;
				tRect.setStyles({
					width: event.page.x - parseInt(tRect.getStyle('margin-left')),
					height: event.page.y - parseInt(tRect.getStyle('margin-top'))
				});
			}.bind(this),
			onComplete: function () {
				if (!tRect) return;
				new UIResizeRect({
					parent: this.bglayer,
					dimensions: {
						'margin-left': parseInt(tRect.getStyle('margin-left')),
						'margin-top': parseInt(tRect.getStyle('margin-top')),
						width: parseInt(tRect.getStyle('width')),
						height: parseInt(tRect.getStyle('height'))
					},
					dragStartCallBack: function () {
						dragActive = false;
					}.bind(this),
					dragCompleteCallBack: function () {
						dragActive = true;
					}.bind(this)
				});
				tRect.destroy();
				tRect = null;
			}.bind(this),
			onStart: function (el, event) {
				if (!dragActive) return;
				tRect = new Element('div', {
					class: 'rect',
					styles: {'margin-top': event.page.y, 'margin-left': event.page.x}
				}).inject(this.bglayer);
			}.bind(this),
			modifiers: null
		});
		this.reposition();
	},

	close: function (closeFeedbackWindow, closeBG) {
		if (closeFeedbackWindow) this.opened = false;
		if (closeBG && this.bglayer) {
			new Fx.Morph(this.bglayer, {
				duration: 250,
				transition: Fx.Transitions.Sine.easeIn
			}).start({opacity: 0}).chain(function () {
				if (this.bglayer)
					this.bglayer.destroy();
				//console.log('this.bglayer destroyed');
				this.bglayer = null;
				if (this.screenshot)
					this.screenshot.destroy();
				this.screenshot = null;
			}.bind(this));
			this.disabled = false;
		}
		if (!closeFeedbackWindow) return;
		this.feedback_container.dissolve();
		new Fx.Morph(this.closebutton).start({width: 0});
		this.feedbackbutton.removeClass('open');
		new Fx.Morph(this.feedbackbutton, {duration: 300, transition: Fx.Transitions.Sine.easeIn}).start({
			height: this.options.closedHeight,
			'margin-top': document.id(document.body).getSize().y - this.options.closedHeight,
			onComplete: function () {
			}.bind(this)
		}).chain(
				function () {
					new Fx.Morph(this.feedbackbutton, {duration: 300, transition: Fx.Transitions.Sine.easeOut}).start({
						width: this.options.closedWidth,
						'margin-left': this.options.parent.getSize().x + this.options.parent.getPosition().x - this.options.closedWidth - this.options.rightMargin
					});
				}.bind(this));
	}
});

var UIResizeRect = new Class({
	Implements: [Events, Options],
	classType: 'UIResizeRect',

	selected: false,
	resizeMode: {h: null, v: null, move: true},

	options: {
		className: 'ui_resizerect',
		parent: null,
		dimensions: {'margin-left': 200, 'margin-top': 200, width: 200, height: 200},
		lastDimensions: {'margin-left': 200, 'margin-top': 200, width: 200, height: 200},
		dragStartCallBack: null,
		dragCompleteCallBack: null,
		minSize: 100
	},

	initialize: function (options) {
		this.setOptions(options);
		if (!this.options.parent)
			this.options.parent = document.id(document.body);
		this.rect = new Element('div', {
			'class': this.options.className,
			'tabindex': 0
		}).inject(this.options.parent, 'top');
		this.close = new Element('div', {
			'class': 'close'
		}).inject(this.rect);
		this.close.addEvent('click', this.detach.bind(this));
		this.setOptions(options);
		Object.each(this.options.dimensions, function (value, key) {
			this.rect.setStyle(key, value);
		}.bind(this));
		this.options.lastDimensions = Object.clone(this.options.dimensions);
		this.rect.addEvents({
			mousedown: function (event) {
				this.select(true);
				this.setScrollMode(event.page.x - this.options.dimensions['margin-left'], event.page.y - this.options.dimensions['margin-top'], event, true);
			}.bind(this),
			outerClick: function () {
				this.select(false)
			}.bind(this),
			mousemove: function (event) {
				this.setScrollMode(event.page.x - this.options.dimensions['margin-left'], event.page.y - this.options.dimensions['margin-top'], event, false);
			}.bind(this)
		});
		this.documentFunction = function (e) {
			if (e.key == 'delete' && this.selected)
				this.detach();
		}.bind(this);
		document.id(document).addEvent('keyup', this.documentFunction);
		if (this.options.mouseOutCallBack)
			this.rect.addEvent('mouseleave', this.options.mouseOutCallBack);


		this.drag = new Drag(this.rect, {
			onDrag: function (el, event) {
				Object.each(this.options.dimensions, function (value, key) {
					this.rect.setStyle(key, value);
				}.bind(this));
				if (this.resizeMode.move == true && this.resizeMode.v === null && this.resizeMode.h === null) {
					this.options.dimensions['margin-left'] = Math.max(0, this.options.lastDimensions['margin-left'] + this.drag.mouse.now.x - this.drag.mouse.start.x);
					if (this.options.dimensions['margin-left'] + this.options.dimensions['width'] > document.id(document.body).getScrollSize().x - parseInt(this.rect.getStyle('border-left-width')) * 2)
						this.options.dimensions['margin-left'] = document.id(document.body).getScrollSize().x - this.options.dimensions['width'] - parseInt(this.rect.getStyle('border-left-width')) * 2;
					this.options.dimensions['margin-top'] = Math.max(0, this.options.lastDimensions['margin-top'] + this.drag.mouse.now.y - this.drag.mouse.start.y);
					if (this.options.dimensions['margin-top'] + this.options.dimensions['height'] > document.id(document.body).getScrollSize().y - parseInt(this.rect.getStyle('border-top-width')) * 2)
						this.options.dimensions['margin-top'] = document.id(document.body).getScrollSize().y - this.options.dimensions['height'] - parseInt(this.rect.getStyle('border-top-width')) * 2;
				}
				if (this.resizeMode.v !== null && this.resizeMode.v == true) {
					this.options.dimensions['height'] = Math.max(this.options.minSize, this.options.lastDimensions['height'] + this.drag.mouse.now.y - this.drag.mouse.start.y);
					if (this.options.dimensions['margin-top'] + this.options.dimensions['height'] > document.id(document.body).getScrollSize().y - parseInt(this.rect.getStyle('border-top-width')) * 2)
						this.options.dimensions['height'] = document.id(document.body).getScrollSize().y - this.options.dimensions['margin-top'] - parseInt(this.rect.getStyle('border-top-width')) * 2;
				}
				if (this.resizeMode.v !== null && this.resizeMode.v == false) {
					if (this.drag.mouse.now.y < parseInt(this.rect.getStyle('border-top-width')) / 2) this.drag.mouse.now.y = Math.floor(parseInt(this.rect.getStyle('border-top-width')) / 2);
					this.options.dimensions['margin-top'] = Math.max(0, this.options.lastDimensions['margin-top'] + (this.drag.mouse.now.y - this.drag.mouse.start.y));
					this.options.dimensions['height'] = Math.max(this.options.minSize, this.options.lastDimensions['height'] - (this.drag.mouse.now.y - this.drag.mouse.start.y));
				}
				if (this.resizeMode.h !== null && this.resizeMode.h == true) {
					this.options.dimensions['width'] = Math.max(this.options.minSize, this.options.lastDimensions['width'] + this.drag.mouse.now.x - this.drag.mouse.start.x);
					if (this.options.dimensions['margin-left'] + this.options.dimensions['width'] > document.id(document.body).getScrollSize().x - parseInt(this.rect.getStyle('border-left-width')) * 2)
						this.options.dimensions['width'] = document.id(document.body).getScrollSize().x - this.options.dimensions['margin-left'] - parseInt(this.rect.getStyle('border-left-width')) * 2;
				}
				if (this.resizeMode.h !== null && this.resizeMode.h == false) {
					if (this.drag.mouse.now.x < parseInt(this.rect.getStyle('border-left-width')) / 2) this.drag.mouse.now.x = Math.floor(parseInt(this.rect.getStyle('border-left-width')) / 2);
					this.options.dimensions['margin-left'] = Math.max(0, this.options.lastDimensions['margin-left'] + (this.drag.mouse.now.x - this.drag.mouse.start.x));
					this.options.dimensions['width'] = Math.max(this.options.minSize, this.options.lastDimensions['width'] - (this.drag.mouse.now.x - this.drag.mouse.start.x));
				}
				this.setRectStyle();
			}.bind(this),
			onStart: function (el, event) {
				if (this.options.dragStartCallBack)
					this.options.dragStartCallBack.call();
			}.bind(this),
			onComplete: function () {
				this.options.lastDimensions = Object.clone(this.options.dimensions);
				if (this.options.dragCompleteCallBack)
					this.options.dragCompleteCallBack.call();
			}.bind(this),
			modifiers: null
		});
	},

	detach: function () {
		document.id(document).removeEvent('keyup', this.documentFunction);
		this.rect.destroy();
	},

	setRectStyle: function () {
		Object.each(this.options.dimensions, function (value, key) {
			this.rect.setStyle(key, value);
		}.bind(this));
	},

	select: function (select) {
		this.selected = select;
		if (select)
			this.rect.addClass('selected');
		else
			this.rect.removeClass('selected');
	},

	setScrollMode: function (x, y, event, setResizeMode) {
		var resizeOffset = 20;
		var tResizeMode = Object.clone(this.resizeMode);

		this.rect.setStyle('cursor', 'move');
		tResizeMode.move = true;
		tResizeMode.h = null;
		tResizeMode.v = null;

		if (x < resizeOffset)
			tResizeMode.h = false;
		if (x > this.options.dimensions.width - resizeOffset)
			tResizeMode.h = true;
		if (y < resizeOffset)
			tResizeMode.v = false;
		if (y > this.options.dimensions.height - resizeOffset)
			tResizeMode.v = true;

		if (!(tResizeMode.v !== false || tResizeMode.h !== false || !tResizeMode.move))
			this.rect.setStyle('cursor', 'move');

		var tCursor = '';
		if (tResizeMode.v !== null)
			tCursor += tResizeMode.v ? 's' : 'n';
		if (tResizeMode.h !== null)
			tCursor += tResizeMode.h ? 'e' : 'w';
		this.rect.setStyle('cursor', tCursor + '-resize');
		if (setResizeMode)
			this.resizeMode = Object.clone(tResizeMode);
	}
});


var UITicker = new Class({
	Extends: UIComponent,
	classType: 'UITicker',
	content: null,
	actTicker: 0,
	options: {
		className: 'ui_ticker',
		duration: 8000,
		type_duration: 4000,
		fade_duration: 200,
		delay: 0,
		autoslide: true,
		setupDelay: 500,
		showControlPanel: false,
		controlPanelManual: false,
		controlOnMouseOver: false
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		['next', 'previous', 'change'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		this.ticker_elements = this.element.getElements('.ticker');
		this.ticker_elements.setStyle('display', 'none');
		this.ticker_canvas = new Element('p', {'class': 'ticker_canvas'}).inject(this.element);
		this.ticker_fx = new Fx.Morph(this.ticker_canvas, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: this.options.fade_duration
		});
		//this.slides_wrapper_fx = new Fx.Morph(this
		(function () {
			if (this.options.autoslide)
				this.timer = this.next.periodical(this.options.duration, this);
		}.bind(this)).delay(this.options.delay + this.options.setupDelay, this);
		this.next.delay(this.options.setupDelay, this);
	},
	change: function (number) {
		//setTextNatural:function (text, minTime, maxTime)
		var ticker = this.getNextTickerNumber(number);
		this.actTicker = ticker;
		this.ticker_fx.start({opacity: 0}).chain(function () {
			this.ticker_canvas.set('text', '').setStyles({opacity: 1});
		}.bind(this));
		(function () {
			this.ticker_canvas.setTextNatural(this.ticker_elements[ticker].get('text'), this.options.type_duration, this.options.type_duration);
		}.bind(this)).delay(this.options.fade_duration, this);
	},

	getNextTickerNumber: function (number) {
		if (this.ticker_elements.length <= 1) return false;
		if (number >= this.ticker_elements.length)
			number = 0;
		if (number < 0)
			number = this.ticker_elements.length - 1;
		return number;
	},

	next: function () {
		this.change(this.actTicker + 1);
	},

	previous: function () {
		this.change(this.actTicker - 1);
	}
});

var UISlideShow = new Class({
	Extends: UIComponent,
	classType: 'UISlideShow',
	title: null,
	content: null,
	actSlide: 0,
	size_x: 0,
	size_y: 0,
	control_panel: null,
	options: {
		className: 'ui_slideshow',
		duration: 8000,
		transition_duration: 1000,
		delay: 0,
		fade: false,
		adjust_heights: true,
		autoslide: true,
		image_preload_intervall: 3000,
		setupDelay: 1000,
		showControlPanel: false,
		controlPanelManual: false,
		controlOnMouseOver: false
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		['next', 'previous', 'change'].each(function (method) {
			this.element[method] = this[method].bind(this);
		}, this);
		this.slides_wrapper = this.element.getElement('.slides');
		this.slides = this.slides_wrapper.getChildren('li');
		this.slides_fx = new Fx.Morph(this.element, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: this.options.transition_duration
		});
		if (!this.options.fade && this.slides.length > 1)
			this.element.setStyle('opacity', 0);
		if (!this.options.fade)
			this.slides_wrapper.setStyle('width', 10000);
		this.slides_wrapper_fx = new Fx.Morph(this.slides_wrapper, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: this.options.transition_duration
		});

		if (this.element.getElement('.control_panel')) { // the control panel is already present, we dont have to create the controls, we just need to activate them.
			this.options.controlPanelManual = true;
			this.control_panel = this.element.getElement('.control_panel');
			this.slides.each(function (el, index) {
				if (typeof (this.control_panel.getChildren()[index] != 'undefined') && this.control_panel.getChildren()[index]) {
					if (index == 0)
						this.control_panel.getChildren()[index].addClass('active');
					this.control_panel.getChildren()[index].addEvent(this.options.controlOnMouseOver ? 'mouseenter' : 'click', function () {
						this.change(index, true);
					}.bind(this));
				}
			}.bind(this));
		}
		else if (this.options.showControlPanel) {
			this.control_panel = new Element('div', {'class': 'control_panel'}).inject(this.element);
		}

		(function () {
			this.preloadNextImages(1);
			if (this.options.autoslide)
				this.timer = this.next.periodical(this.options.duration, this);
		}.bind(this)).delay(this.options.delay, this);
		if (this.options.autoslide) {
			this.element.addEvent('mouseenter', function () {
				clearInterval(this.timer)
			}.bind(this));
			this.element.addEvent('mouseout', function (event) {
				if (event && typeof event.relatedTarget != 'undefined' && typeOf(event.relatedTarget) == 'element') {
					if (event.relatedTarget != this.element && event.relatedTarget.getParents().contains(this.element))
						return;
					this.timer = this.next.periodical(this.options.duration, this);
				}
			}.bind(this));
		}

		this.maxHeight = 0;
		(function () {
			this.size_x = this.element.getSize().x;
			this.slides.each(function (el, index) {
				if (el.getElement('.slideshow_content').getSize().y > this.maxHeight) this.maxHeight = el.getElement('.slideshow_content').getSize().y;
				if (this.options.fade) {
					el.store('fade_effect', new Fx.Morph(el, {
						transition: Fx.Transitions.Sine.easeOut,
						duration: this.options.transition_duration
					}));
					if (index != this.actSlide)
						el.setStyles({'opacity': 0, 'z-index': 0});
					else
						el.setStyles({'z-index': 1});
					el.setStyle('position', 'absolute');
				}
			}.bind(this));
			if (typeof this.options.height != 'undefined')
				this.maxHeight = this.options.height;

			this.slides.each(function (el, index) {
				el.setStyles({width: this.size_x});
				if (this.options.adjust_heights && !el.hasClass('preload')) {
					var contentSize = el.getElement('.slideshow_content').getSize().y;
					el.getElement('.slideshow_content').setStyles({
						'margin-top': (this.maxHeight - contentSize) / 2,
						'margin-bottom': (this.maxHeight - contentSize) / 2
					});
				}
			}.bind(this));

			this.size_y = this.element.getSize().y;

			if (this.element.getElement('.shadow')) {
				this.element.getElement('.shadow').setStyles({width: this.size_x});
				if (!parseInt(this.element.getElement('.shadow').getStyle('height')) > 0)
					this.element.getElement('.shadow').setStyles({height: this.size_y});
			}
			if (!this.options.fade && this.slides.length > 1)
				this.slides_fx.start({opacity: 1});
		}).delay(this.options.setupDelay, this);
	},

	change: function (number, instant) {
		//element not visible, dont use CPU...
		if ((document.id(window).getScroll().y + document.id(window).getSize().y < this.element.getPosition().y) || (document.id(window).getScroll().y > this.element.getPosition().y + this.element.getSize().y))
			return;
		//else
		// console.log('visible');
		//console.log(window.focused);
		//return;
		//if this.options.duration
		var nextSlide = this.getNextSlideNumber(number);
		if (this.actSlide == nextSlide) return;
		if (nextSlide === false) return;
		//this.slides[nextSlide].getElements(
		if (this.options.adjust_heights && this.slides[nextSlide].hasClass('preload')) {
			this.slides[nextSlide].removeClass('preload');
			var contentSize = this.slides[nextSlide].getElement('.slideshow_content').getSize().y;
			this.slides[nextSlide].getElement('.slideshow_content').setStyles({
				'margin-top': (this.maxHeight - contentSize) / 2,
				'margin-bottom': (this.maxHeight - contentSize) / 2
			});
		}
		this.slides[nextSlide].removeClass('preload');
		if (!this.options.fade) {
			this.slides_wrapper_fx.start({
				'margin-left': -this.size_x * nextSlide
			});
		}
		else {
			this.slides[nextSlide].setStyle('z-index', 1);
			this.slides[this.actSlide].setStyle('z-index', 0);
			this.slides[this.actSlide].retrieve('fade_effect').start({'opacity': 0});
			this.slides[nextSlide].retrieve('fade_effect').start({'opacity': 1});
		}
		this.actSlide = nextSlide;
		if (typeof instant != 'undefined' && instant)//loading was effected by click on controls > we have to instantly load the images
			this.preloadNextImages(number, true);
		if (this.control_panel) {
			this.control_panel.getChildren().removeClass('active');
			if (typeof (this.control_panel.getChildren()[this.actSlide] != 'undefined') && this.control_panel.getChildren()[this.actSlide])
				this.control_panel.getChildren()[this.actSlide].addClass('active');
		}

		this.preloadNextImages(number + 1);
	},

	getNextSlideNumber: function (number) {
		if (this.slides.length <= 1) return false;
		if (number >= this.slides.length)
			number = 0;
		if (number < 0)
			number = this.slides.length - 1;
		return number;
	},

	preloadNextImages: function (number, instant) {
		var nextSlide = this.getNextSlideNumber(number);
		if (nextSlide === false) return;
		var preload_delay = Math.max(this.options.duration - this.options.image_preload_intervall, 0);
		if (typeof instant != 'undefined' && instant)//loading was effected by click on controls > we have to instantly load the images
			preload_delay = 0;
		var elementsToPreload = this.slides[nextSlide].getElement('.slideshow_content').getElements('.preload');
		(function () {
			elementsToPreload.each(function (el, index) {
				if (el.get('ajax_src'))
					el.set('src', el.get('ajax_src'));
				if (el.hasClass('ui_retina'))
					new UIRetinaimage(el);
			}.bind(this))
		}.bind(this)).delay(preload_delay);
	},

	next: function () {
		this.change(this.actSlide + 1);
	},

	previous: function () {
		this.change(this.actSlide - 1);
	}
});


var UIHighlighter = this.UIHighlighter = new Class({
	Extends: UIComponent,
	classType: 'UIHighlighter',
	rects: null,
	markers: [],
	bglayer: null,
	shadow_rect: null,
	fx_shadow: null,
	text: null,
	resizeProcesses: 0,
	options: {
		duration: 0,
		shadow_duration: 500,
		opacity: 0.7,
		scrollOffsetY: 250,
		markPadding: 10
	},
	lastElement: null,
	visible: false,


	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.rects = {
			top: null,
			bottom: null,
			left: null,
			right: null
		};
		this.rects_array = [];
		this.bglayer = new Element('div', {
			'class': 'ui_mask_bg',
			styles: {
				position: 'absolute',
				height: this.element.getScrollSize().y,
				width: this.element.getScrollSize().x,
				opacity: 0
			}
		}).inject(this.element, 'top');
		Object.each(this.rects, function (rect, key) {
			this.rects[key] = new Element('div', {
				'class': 'ui_mask_rect',
				rel: key,
				styles: {
					opacity: this.options.opacity
				}
			}).inject(this.bglayer, 'top');
			this.rects_array.push(this.rects[key]);
		}.bind(this));
		this.shadow_rect = new Element('div', {
			'class': 'ui_mask_shadow'
		}).inject(this.bglayer, 'top');
		this.shadow_rect.setStyle('opacity', 0);
		this.fx_shadow = new Fx.Morph(this.shadow_rect, {
			duration: this.options.shadow_duration,
			transition: Fx.Transitions.Sine.easeOut
		});
		this.onresize();
		document.id(window).addEvent('resize', this.onresize.bind(this));
		//disable ui_autoscroll since it disturbs visuals
		window.ui_autoscroll_disabled = true;
	},

	unhighlight: function () {
		var t = new Element('div', {styles: {width: 0}}).inject(document.id(document.body));
		this.highlight(t, false, '');
		t.destroy();
	},

	highlight: function (element, scrollto, text, position, instant) {
		var el = element;
		instant = typeof instant != 'undefined' && instant ? true : false;
		var coordinates = element.getCoordinates(this.element);
		var scrollSize = this.element.getScrollSize();
		if (this.lastElement) {
			this.shadow_rect.setStyle('opacity', 0);
			this.shadow_rect.removeClass('shadow');
			this.unsetText(instant);
		}
		;
		this.fx_shadow[instant ? 'set' : 'start']({
			opacity: this.options.opacity
		}).chain(function () {
			this.rects.top.setStyles({
				height: coordinates.top
			});
			this.rects.bottom.setStyles({
				height: scrollSize.y - coordinates.top - coordinates.height,
				'margin-top': coordinates.top + coordinates.height
			});
			this.rects.left.setStyles({
				width: coordinates.left,
				'margin-top': coordinates.top,
				height: coordinates.height
			});
			this.rects.right.setStyles({
				width: scrollSize.x - coordinates.width - coordinates.left,
				'margin-left': coordinates.left + coordinates.width,
				'margin-top': coordinates.top,
				height: coordinates.height
			});
			this.shadow_rect.setStyles({
				left: coordinates.left,
				top: coordinates.top,
				height: coordinates.height,
				width: coordinates.width,
				opacity: this.options.opacity
			});

			this.fx_shadow[instant ? 'set' : 'start']({
				opacity: 0
			}).chain(function () {
				if (this.shadow_rect)
					this.shadow_rect.addClass('shadow');
				this.fx_shadow[instant ? 'set' : 'start']({
					opacity: 1
				});
				this.lastElement = {
					element: element,
					text: text,
					position: position
				};
				if (typeof text != 'undefined' && text)
					this.setText(element, text, position, instant);

				if (typeof scrollto != 'undefined' && scrollto && !instant)
					new Fx.Scroll(window).start(0, element.getPosition().y - this.options.scrollOffsetY);

			}.bind(this));
		}.bind(this));

		if (!this.visible)
			this.show();
	},

//mark with red rectangle
	mark: function (element, scrollto, text, position, instant) {
		var coordinates = element.getCoordinates(this.element);
		coordinates.left = coordinates.left - this.options.markPadding;
		coordinates.top = coordinates.top - this.options.markPadding;
		coordinates.width = coordinates.width + 2 * this.options.markPadding;
		coordinates.height = coordinates.height + 2 * this.options.markPadding;
		instant = typeof instant != 'undefined' && instant ? true : false;
		if (typeof scrollto != 'undefined' && scrollto)
			new Fx.Scroll(window).toElement(element);
		var rect = new Element('div', {
			'class': 'ui_resizerect selected',
			styles: {
				'position': 'absolute',
				'margin-left': coordinates.left,
				width: coordinates.width,
				height: coordinates.height,
				'margin-top': coordinates.top,
				opacity: 0,
				'z-index': 1300
			}
		}).inject(this.bglayer);
		new Fx.Morph(rect, {
			duration: this.options.shadow_duration,
			transition: Fx.Transitions.Sine.easeOut
		})[instant ? 'set' : 'start']({
			opacity: 1
		});
		this.markers.push({
			marker: rect,
			element: element,
			text: text,
			position: position
		});
		if (typeof text != 'undefined' && text)
			this.setText(element, text, position, instant);
	},

	unmark: function () {
		this.markers.each(function (el, index) {
			el = el.marker;
			new Fx.Morph(el, {
				duration: this.options.shadow_duration,
				transition: Fx.Transitions.Sine.easeOut
			}).start({
						opacity: 0
					}).chain(function () {
						el.destroy();
					}.bind(this));
		}.bind(this));
		this.markers = [];
	},

	setText: function (element, text, position, instant) {
		instant = typeof instant != 'undefined' && instant ? true : false;
		if (this.text) {
			this.unsetText();
			if (this.lastElement)
				this.lastElement.text = text;
			(function () {
				this.setText(element, text, position, instant)
			}.bind(this)).delay(this.options.shadow_duration + 50, this);
			return;
		}
		var coordinates = element.getCoordinates(this.element);
		this.text = new Element('div', {
			'class': 'ui_mask_text ' + position,
			styles: {
				opacity: 0,
				'z-index': 1301
			}
		}).inject(this.bglayer);
		var text_arrow = new Element('div', {
			'class': 'ui_mask_text_text segoe',
			html: text
		}).inject(this.text);
		var text_text = new Element('div', {
			'class': 'ui_mask_text_icon'
		}).inject(this.text);
		var styles = {};
		if (typeof position == 'undefined' || !position)
			position = 'top';

		switch (position) {
			case 'top':
			{
				styles['margin-top'] = coordinates.top - this.text.getSize().y - 10;
				styles['margin-left'] = coordinates.left;
				break;
			}
			case 'left':
			{
				styles['margin-top'] = coordinates.top - 30;
				styles['margin-left'] = coordinates.left - this.text.getSize().x - 10;
				break;
			}
			case 'right':
			{
				styles['margin-top'] = coordinates.top - 30;
				styles['margin-left'] = coordinates.left + coordinates.width + 10;
				break;
			}
			case 'bottom':
			{
				styles['margin-top'] = coordinates.top + coordinates.height + 10;
				styles['margin-left'] = coordinates.left;
				break;
			}
		}
		this.text.setStyles(styles);
		new Fx.Morph(this.text, {
			duration: this.options.shadow_duration,
			transition: Fx.Transitions.Sine.easeOut
		})[instant ? 'set' : 'start']({
			opacity: 1
		});
	},

	unsetText: function (instant) {
		instant = typeof instant != 'undefined' && instant ? true : false;
		if (!this.text) return;
		new Fx.Morph(this.text, {
			duration: this.options.shadow_duration,
			transition: Fx.Transitions.Sine.easeOut
		})[instant ? 'set' : 'start']({
			opacity: 0
		}).chain(function () {
			if (this.text) this.text.destroy();
			this.text = null;
		}.bind(this));
	},

	show: function () {
		new Fx.Morph(this.bglayer, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: 'short'
		}).start({
					opacity: 1
				});
		this.visible = true;
	},

	hide: function () {
		new Fx.Morph(this.bglayer, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: 'short'
		}).start({
					opacity: 0
				});
		this.visible = false;
	},

	onresize: function () {
		this.startresize = true;
		this.resizeProcesses++;
		this.lastSize = document.id(window.getScrollSize().y);
		(function () {
			this.startresize = false
		}.bind(this)).delay(200, this);
		(function () {
			this.resizeProcesses--;
			if (this.resizeProcesses == 0 && this.startresize == false && this.bglayer) {
				this.bglayer.setStyle('display', 'none');
				var scrollSize = this.element.getScrollSize();
				this.rects.top.setStyle('width', scrollSize.x);
				this.rects.bottom.setStyle('width', scrollSize.x);
				if (this.lastElement) {
					this.highlight(this.lastElement.element, false, this.lastElement.text, this.lastElement.position, false);
				}
				var tmarkers = this.markers;
				this.unmark();
				tmarkers.each(function (el, index) {
					this.mark(el.element, false, el.text, el.position, true);
				}.bind(this));
				this.bglayer.setStyle('display', 'block');
			}
		}.bind(this)).delay(250, this);
	},

	detach: function () {
		new Fx.Morph(this.bglayer, {
			transition: Fx.Transitions.Sine.easeOut,
			duration: 'short'
		}).start({
					opacity: 0
				}).chain(function () {
					this.bglayer.destroy();
					this.bglayer = null;
					this.unsetText();
					this.unmark();
					this.lastElement = null;
					document.id(window).removeEvent('resize', this.onresize.bind(this));
					this.element.UIHighlighter = null;

					Object.each(this.rects, function (rect, key) {
						if (typeof rect.destroy != 'undefined')
							rect.destroy();
					});
					this.rects = null;
					this.shadow_rect = null;
					this.fx_shadow = null;
					delete this.element.UIHighlighter;
				}.bind(this));
		window.ui_autoscroll_disabled = false;
	}
});

var UIAnimatedTutorial = new Class({
	Extends: UIComponent,
	Implements: Chain,
	classType: 'UIAnimatedTutorial',
	highlighter: null,
	textlayer: null,
	textFx: null,
	options: {},
	functions: [],
	timers: [],
	resizeProcesses: 0,
	progressFX: null,
	options: {
		duration: 500,
		closefunction: null
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		this.highlighter = new UIHighlighter(this.element);
		this.textlayer = new Element('div', {
			'class': 'ui_animated_tutorial_text',
			styles: {
				opacity: 0
			}
		}).inject(this.element, 'top');
		//just a 0x0 div for starting the highlighter background on beginning
		this.dummy_div = new Element('div', {
			postition: 'absolute',
			id: 'ui_animated_tutorial_dummy'
		}).inject(this.textlayer);
		this.textFx = new Fx.Morph(this.textlayer, {
			duration: this.options.duration,
			transition: Fx.Transitions.Expo.easeOut
		});
		this.progress_wrapper = new Element('div', {
			'class': 'animation_progress',
			styles: {
				opacity: 0,
				width: 350,
				'margin-top': 35
			}
		}).inject(this.element, 'top');
		this.progress_span = new Element('span', {
			styles: {
				width: '0%'
			}
		}).inject(this.progress_wrapper, 'top');

		this.cancelButton = new Element('a', {
					'class': 'ui_feedback_bg_info_cancel',
					text: Translation.get('Close'),
					styles: {
						position: 'fixed',
						'margin-top': 20,
						'z-index': 2000,
						'opacity': 0
					},
					events: {
						'click': function () {
							this.detach();
						}.bind(this)
					}
				}
		).inject(this.element, 'top');
		this.highlight(document.id('ui_animated_tutorial_dummy'), false);
//disable ui_autoscroll, since it disturbs visuals
		document.id(window).addEvent('resize', this.onresize.bind(this));
		this.onresize();
	},

	setFunctions: function (functions) {
		this.functions = functions;
	},

	start: function (step) {
		window.ui_autoscroll_disabled = false;
		new Fx.Scroll(window).start({
			x: 0,
			y: this.element.getPosition().y
		}).chain(
				function () {
					window.fireEvent('scroll', window);
					window.ui_autoscroll_disabled = false;

					var time = 0;
					if (typeof step == 'undefined' || !step || step < 0)
						step = 0;
					this.functions.each(function (func, index) {
						if (index < step) return;
						var timer = func['function'].bind(this).delay(time + func.time);
						time += func.time;
						this.timers.push(timer);
					}.bind(this));
					new Fx.Morph(this.progress_wrapper, {
						duration: 2000,
						transition: Fx.Transitions.Sine.easeOut
					}).start({
								opacity: 1
							}).chain();
					this.progressFX = new Fx.Morph(this.progress_span, {
						duration: time,
						transition: Fx.Transitions.linear
					}).start({
								width: 346
							});
					this.cancelButton.setStyle('opacity', 1);
				}.bind(this))
	},

	stop: function () {
		this.timers.each(function (timer, index) {
			$clear(timer);
		});
		this.timers = [];
	},

	setTitleText: function (text) {
		this.textFx.start({
			opacity: 0
		}).chain(function () {
			this.textlayer.set('html', text);
			this.textFx.start({
				opacity: 1
			});
		}.bind(this));
	},

	highlight: function (element, scrollto, text, position) {
		this.highlighter.highlight(element, scrollto, text, position);
	},

	unhighlight: function () {
		this.highlighter.unhighlight();
	},

	mark: function (element, scrollto, text, position) {
		this.highlighter.mark(element, scrollto, text, position);
	},

	setText: function (element, text, position) {
		this.highlighter.setText(element, text, position);
	},

	unmark: function (element, scrollto) {
		this.highlighter.unmark();
	},

	onresize: function () {
		if (typeof this == 'undefined') return;
		this.startresize = true;
		if (typeof this.textlayer != 'undefined' && typeof this.textlayer.setStyles != 'undefined')
			this.textlayer.setStyles({
				display: 'none'
			});
		else
			return;
		this.cancelButton.setStyles({
			opacity: 0,
			'margin-left': 0
		});
		this.resizeProcesses++;
		(function () {
			this.startresize = false
		}.bind(this)).delay(200, this);
		(function () {
			this.resizeProcesses--;
			if (this.resizeProcesses == 0 && this.startresize == false && this.textFx) {
				this.progress_wrapper.setStyle('margin-left', (this.element.getSize().x - this.progress_wrapper.getSize().x) / 2);
				this.textlayer.setStyles({
					'width': this.element.getSize().x,
					display: 'block'
				});
				this.cancelButton.setStyles({
					'margin-left': this.element.getSize().x - this.cancelButton.getSize().x - 20,
					opacity: 1
				});
			}
		}.bind(this)).delay(250, this);
	},

	detach: function () {
		if (this.options.closefunction) {
			this.options.closefunction.apply();
		}
		window.ui_autoscroll_disabled = false;
		this.stop();
		this.textFx.start({
			opacity: 0
		}).chain(function () {
			this.textlayer.destroy();
			this.cancelButton.destroy();
			this.highlighter.detach();
			this.textFx = null;
			this.highlighter = null;
			document.id(window).removeEvent('resize', this.onresize.bind(this));
			if (this.progressFX) {
				delete this.element.UIAnimatedTutorial;
				this.progressFX.cancel();
				this.progress_wrapper.destroy();
				this.progress_wrapper = null;
			}
		}.bind(this));
	}
});

var UIChart = new Class({
	Extends: UIComponent,
	chartobj: null,
	options: {
		className: 'ui_chart',
		seriesCount: 0,
		pendingAjaxCalls: 0,
		pendingAjaxCallsData: 0,
		formatDate: false,
		chartOptions: {
			yAxis: {
				labels: {
					formatter: function () {
						return Highcharts.numberFormat(this.value, 2)
					}
				}
			},
			colors: ['#6BA80F', '#2674C9', '#FF0000', '#80699B', '#D16C3C', '#B5DC63', '#3FA7ED', '#DF9876', '#A47D7C'],
			credits: {enabled: false},
			plotOptions: {
				series: {marker: {lineWidth: 2, lineColor: null, radius: 1.5}},
				column: {shadow: true},
				spline: {shadow: true},
				area: {shadow: true, fillOpacity: 0.6},
				areaspline: {shadow: true, fillOpacity: 0.6}
			},
			chart: {
				backgroundColor: null
			},
			legend: {backgroundColor: '#ffffff'}
		},
		highchart_src: '/scripts/highcharts/js/highcharts.js',
		dataURL: null
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		if (!(typeof this.options.chartOptions.chart != 'undefined' && typeof this.options.chartOptions.chart.renderTo != 'undefined' && this.options.chartOptions.chart.renderTo))
			this.options.chartOptions.chart.renderTo = this.element;

		if (!UIChart.show_animations) {
			this.options.chartOptions.chart.animation = false;
			var tPlotOptions = {};
			['area', 'arearange', 'areaspline', 'areasplinerange', 'bar', 'column', 'columnrange', 'gauge', 'line', 'pie', 'scatter', 'spline'].each(function (el) {
				tPlotOptions[el] = {animation: false}
			});
			this.options.chartOptions.plotOptions = Object.merge(this.options.chartOptions.plotOptions, tPlotOptions);
		}
		/*	Asset.javascript(this.options.highchart_src, {
		 onLoad: function(){*/
		if (typeof this.options.chartOptions != 'undefined' && typeof this.options.chartOptions.series != 'undefined') {
			this.options.seriesCount = this.options.chartOptions.series.length;
			this.options.chartOptions.series.each(function (actSeries, index) {
				if (typeof actSeries.dataURL != 'undefined' && actSeries.dataURL) {
					this.options.pendingAjaxCalls++;
					this.options.pendingAjaxCallsData++;
					new Request.JSON({
						url: actSeries.dataURL,
						onSuccess: function (responseJSON) {
							this.options.pendingAjaxCalls--;
							if (responseJSON)
								this.options.pendingAjaxCallsData--;
							actSeries.data = responseJSON;
							if (this.options.pendingAjaxCalls <= 0)
								this.chart();
						}.bind(this),
						onError: function () {
							this.options.pendingAjaxCalls--;
							if (this.options.pendingAjaxCalls <= 0)
								this.chart();
						}.bind(this),
						onFailure: function () {
							this.options.pendingAjaxCalls--;
							if (this.options.pendingAjaxCalls <= 0)
								this.chart();
						}.bind(this)
					}).send();
				}

			}, this);
			if (this.options.pendingAjaxCalls <= 0)
				this.chart();
		}
		else {
			if (this.options.dataURL) {
				new Request.JSON({
					url: this.options.dataURL,
					onSuccess: function (responseJSON) {
						if (responseJSON.length) {
							this.options.chartOptions.series = responseJSON;
							this.chart();
						}
						else {
							this.fireEvent('noData');
						}
					}.bind(this),
					onError: function () {
						this.fireEvent('noData');
					}.bind(this),
					onFailure: function () {
						this.fireEvent('noData');
					}.bind(this)
				}).send();
			}
		}
	},

	chart: function () {
		if (this.options.pendingAjaxCallsData) {
			this.fireEvent('noData');
		}
		else {
			if (this.options.formatDate) {
				if (this.options.chartOptions.series && this.options.chartOptions.series.length) {
					this.options.chartOptions.series.each(function (actSeries, index) {
						actSeries.data = UIChart.formatSeriesUTC(actSeries.data);
					});
				}
			}
			if (!this.options.chartOptions.series.length) {
				this.fireEvent('noData');
			}
			else
				this.chartobj = new Highcharts.Chart(this.options.chartOptions);
		}
	},

	destroy: function () {
		if (this.chartobj)
			this.chartobj.destroy();
		delete this.element[this.classType];
		delete this;
	}
});

UIChart.formatSeriesUTC = function (data) {
	var formattedData = [];
	Object.each(data, function (value, index) {
		var adate = new Date(index);
		adate = Date.UTC(adate.getFullYear(), adate.getMonth(), adate.getDate(), adate.getHours(), adate.getMinutes(), 0, 0)
		formattedData.push([adate, value != null ? parseFloat(value) : null]);
	});
	return formattedData;
}

UIChart.show_animations = true;

var UIHTMLEdit = new Class({
			Extends: UIComponent,
			classType: 'UIHTMLEdit',

			options: {
				className: 'ui_html_edit',
				singleLine: false,
				noControls: false,
				singleLineButtons: ['bold', 'italic', 'underline'],
				multiLineButtons: ['bold', 'italic', 'underline', 'strikethrough', 'ul', 'ol', 'indent', 'outdent', 'justifyleft', 'italic', 'justifyright', 'justifycenter', 'p', 'h1', 'h2', 'h3', 'source'],
				autosave: false,
				paragraphize: true
			},
			lastHTMLContent: null,
			sourceMode: false,
			active: true,

			initialize: function (elements, options) {
				var isElement = this.parent(elements, options);
				if (!isElement) return;
				if (typeof UIHTMLEdit.activeInstances == 'undefined' || !UIHTMLEdit.activeInstances)
					UIHTMLEdit.activeInstances = [];

				this.element.addEvents({
					click: function () {
						if (this.active)
							this.showToolbar(true);
					}.bind(this),
					outerClick: function () {
						if (this.active)
							this.showToolbar(false);
					}.bind(this)
				});

				this.buttonset = this.options.singleLine ? this.options.singleLineButtons : this.options.multiLineButtons;
				this.lastHTMLContent = this.element.get('html');
				this.input = new Element('input', {
					name: this.element.get('name'),
					type: 'hidden',
					value: this.element.get('html')
				}).inject(this.element, 'after');
			},

			reloadComponent: function () {
				this.attach();
			},

			attach: function () {
				this.active = true;
			},
			detach: function () {
				this.showToolbar(false);
				this.active = false;
			},

			showToolbar: function (show) {
				if (show) {
					if (this.sourceMode) return;
					UIHTMLEdit.activeInstances.each(function (el, index) {
						el.elementHovered = false;
						el.showToolbar(false)
					});
					if (!UIHTMLEdit.activeInstances.contains(this))
						UIHTMLEdit.activeInstances.push(this);
					this.element.set('contenteditable', true);
					this.element.addClass('active');
					this.tidyCode();
					this.input.set('value', this.element.get('html'));
					var htmlContent = this.element.get('html');
					if (!this.options.singleLine && this.options.paragraphize && htmlContent.getTags('p').length <= 0) {
						this.element.set('html', '<p>' + this.element.get('html') + (htmlContent.length <= 0 ? '<br />' : '') + '</p>');
						this.selectElementContents(this.element.getElement('p'), true);
					}
					if (typeof this.toolbar != 'undefined' && this.toolbar && !this.options.noControls)
						this.toolbar.setStyle('display', 'block');
					if (typeof UIHTMLEdit.assetsLoaded == 'undefined' && !this.options.singleLine) {
						new Asset.javascript(UIBase + 'syntax/ace/ace-uncompressed.js', {
							onLoad: function () {
								new Asset.javascript(UIBase + 'syntax/ace/mode-html.js');
								new Asset.javascript(UIBase + 'syntax/ace/mode-css.js');
								new Asset.javascript(UIBase + 'syntax/ace/mode-javascript.js');
								new Asset.javascript(UIBase + 'syntax/ace/theme-eclipse.js');
							}
						});
						new Asset.javascript(UIBase + 'syntax/beautify/beautify-html.js');
						UIHTMLEdit.assetsLoaded = true;
					}
					this.fireEvent('startEdit');
					this.element.fireEvent('startEdit');
				}
				else {
					if (this.sourceMode) return;
					if (!this.element.hasClass('active')) return;
					this.tidyCode();
					this.input.set('value', this.element.get('html'));
					UIHTMLEdit.activeInstances.erase(this);
					this.element.set('contenteditable', false);
					this.element.removeClass('active');
					if (typeof this.toolbar != 'undefined' && this.toolbar)
						this.toolbar.setStyle('display', 'none');
					if (this.options.autosave && this.element.getParent('form'))
						this.element.getParent('form').send();
					this.fireEvent('endEdit');
					this.element.fireEvent('endEdit');
					return;
				}
				if (typeof this.toolbar != 'undefined' && this.toolbar)
					return;//toolbar already present

				this.toolbar = new Element('div', {
					'class': 'ui_html_edit_toolbar',
					styles: {'margin-left': this.element.getPosition(this.element.getParent()).x}
				}).inject(this.element, 'before');
				if (this.options.noControls)
					this.toolbar.setStyle('display', 'none');

				this.toolbarItems = [
					{
						name: 'bold',
						title: 'Bold',
						execCommand: 'bold',
						execCommandParams: false,
						queryCommandState: 'bold',
						cssclass: 'bold'
					},
					{
						name: 'italic',
						title: 'Italic',
						execCommand: 'italic',
						execCommandParams: false,
						queryCommandState: 'italic',
						cssclass: 'italic'
					},
					{
						name: 'underline',
						title: 'Underline',
						execCommand: 'underline',
						execCommandParams: false,
						queryCommandState: 'underline',
						cssclass: 'underline'
					},
					{
						name: 'strikethrough',
						title: 'Strikethrough',
						execCommand: 'strikethrough',
						execCommandParams: false,
						queryCommandState: 'strikethrough',
						cssclass: 'strikethrough'
					},
					{
						name: 'ul',
						title: 'Unordered List',
						execCommand: 'insertUnorderedList',
						execCommandParams: false,
						queryCommandState: 'insertUnorderedList',
						cssclass: 'ul'
					},
					{
						name: 'ol',
						title: 'Ordered List',
						execCommand: 'insertOrderedList',
						execCommandParams: false,
						queryCommandState: 'insertOrderedList',
						cssclass: 'ol'
					},
					{name: 'indent', title: 'Indent', execCommand: 'Indent', execCommandParams: false, cssclass: 'indent'},
					{name: 'outdent', title: 'Outdent', execCommand: 'Outdent', execCommandParams: false, cssclass: 'outdent'},
					{
						name: 'justifyleft',
						title: 'justifyleft',
						execCommand: 'justifyleft',
						execCommandParams: false,
						queryCommandFunction: this.queryCoommandFunctions.textAlign.bind(this, 'left'),
						executeOnSelect: true,
						cssclass: 'justifyleft'
					},
					{
						name: 'justifyright',
						title: 'justifyright',
						execCommand: 'justifyright',
						execCommandParams: false,
						queryCommandFunction: this.queryCoommandFunctions.textAlign.bind(this, 'right'),
						executeOnSelect: true,
						cssclass: 'justifyright'
					},
					{
						name: 'justifyright',
						title: 'justifycenter',
						execCommand: 'justifycenter',
						execCommandParams: false,
						queryCommandFunction: this.queryCoommandFunctions.textAlign.bind(this, 'center'),
						executeOnSelect: true,
						cssclass: 'justifycenter'
					},
					{
						name: 'justifycenter',
						title: 'justifyfull',
						execCommand: 'justifyfull',
						execCommandParams: false,
						queryCommandFunction: this.queryCoommandFunctions.textAlign.bind(this, 'justify'),
						executeOnSelect: true,
						cssclass: 'justifyfull'
					},
					{
						name: 'p',
						title: 'P',
						execCommand: 'formatblock',
						execCommandParams: 'p',
						queryCommandFunction: this.queryCoommandFunctions.formatBlock.bind(this, 'p'),
						executeOnSelect: true
					},
					{
						name: 'h1',
						title: 'h1',
						execCommand: 'formatblock',
						execCommandParams: 'h1',
						queryCommandFunction: this.queryCoommandFunctions.formatBlock.bind(this, 'h1'),
						executeOnSelect: true
					},
					{
						name: 'h2',
						title: 'h2',
						execCommand: 'formatblock',
						execCommandParams: 'h2',
						queryCommandFunction: this.queryCoommandFunctions.formatBlock.bind(this, 'h2'),
						executeOnSelect: true
					},
					{
						name: 'h3',
						title: 'h3',
						execCommand: 'formatblock',
						execCommandParams: 'h3',
						queryCommandFunction: this.queryCoommandFunctions.formatBlock.bind(this, 'h3'),
						executeOnSelect: true
					},
					{
						name: 'source',
						title: 'Toggle Source',
						onClick: this.toggleSource.bind(this),
						cssclass: 'source',
						queryCommandFunction: function () {
							return this.sourceMode
						}.bind(this)
					},
					{
						name: 'save', title: 'Save', onClick: function () {
						if (this.element.getParent('form')) this.element.getParent('form').send();
					}.bind(this)
					}

					/*
					 {title:'Unordered List',letter:'_sub',onClick:function(){document.execCommand('subscript', false);}.bind(this)},
					 {title:'Unordered List',letter:'_up',onClick:function(){document.execCommand('superscript', false);}.bind(this)},
					 {title:'Unordered List',letter:'p',onClick:function(){document.execCommand('formatblock', false, 'p');}.bind(this)},
					 {title:'Unordered List',letter:'Break',onClick:function(){document.execCommand('insertLineBreak', false, false);}.bind(this)},*/
				];

				this.toolbarItems.each(function (el, index) {
					if (this.options.noControls) return;
					if (!this.buttonset.contains(el.name)) return;
					var actItem = new Element('button', {
						html: el.cssclass ? '<span class="icon"></span>' : '<span class="text">' + el.title + '</span>',
						title: el.title,
						'class': el.cssclass
					}).inject(this.toolbar);
					el.button = actItem;
					actItem.store('toolbar_button', el);
					if (el.execCommand || el.onClick)
						actItem.addEvent('click', function (evt) {
							evt.preventDefault()
							if (el.execCommand)
								document.execCommand(el.execCommand, false, el.execCommandParams);
							if (el.onClick)
								el.onClick.attempt();
							if (el.queryCommandState) {
								if (document.queryCommandState(el.queryCommandState))
									el.button.addClass('active');
								else
									el.button.removeClass('active');
							}

							if (el.queryCommandFunction) {
								if (el.queryCommandFunction.attempt())
									el.button.addClass('active');
								else
									el.button.removeClass('active');
							}
							if (el.executeOnSelect) {
								this.onSelect();
							}
							return false;
						}.bind(this));
				}.bind(this));

				this.element.addEvent('keyup', this.onSelect.bind(this));
				this.element.addEvent('keyup', function (event) {
					this.handleKeyup(event)
				}.bind(this));
				this.element.addEvent('paste', this.onSelect.bind(this));
				this.element.addEvent('paste', function (event) {
					this.handlePaste(event);
				}.bind(this));
				this.element.addEvent('mouseup', this.onSelect.bind(this));
			},

			selectElementContents: function (el, collapse) {
				var range = document.createRange();
				range.selectNodeContents(el);
				var sel = window.getSelection();
				sel.removeAllRanges();
				if (typeof collapse != 'undefined' && collapse)
					range.collapse(true);
				sel.addRange(range);


				/*

				 var fc = el.firstChild, ec = el.lastChild,
				 range = document.createRange(), sel;
				 el.focus();
				 range.setStart(fc,1);
				 range.setEnd(ec,3);
				 var sel = window.getSelection();
				 sel.removeAllRanges();
				 sel.addRange(range);*/
			},

			handleKeyup: function (event) {
				if (['up', 'down', 'left', 'right'].contains(event.key))
					return true;
				if (this.options.singleLine)
					this.cleanForSingleLine(event);
				this.tidyCode();
				this.input.set('value', this.element.get('html'));
			},

			handlePaste: function (evt) {
				//console.log('acthtml');
				//console.log(this.lastHTMLContent);
				//console.log(this.element.get('html'));
				this.tidyCode();
				if (this.options.singleLine)
					this.cleanForSingleLine()
				this.input.set('value', this.element.get('html'));
			},

			tidyCode: function () {
				if (this.element.getElements('*').length) {
					this.element.getElements('*').each(function (el, index) {
						if (el.tagName.toLowerCase() != 'br' && el.get('html').clean() == '') {
							el.destroy();
						}
					});
				}
				//var html = this.element.get('html');
				//this.element.set('html',html.clean().tidy());
			},

			cleanForSingleLine: function () {
				var html = this.element.get('html');
				var cleanhtml = html.stripTags('div').stripTags('br').stripTags('a').stripTags('table').stripTags('tr').stripTags('td').stripTags('html').stripTags('body').stripTags('head').stripTags('ul').stripTags('ol').stripTags('li').stripTags('img').stripTags('h1').stripTags('h2').stripTags('h3').stripTags('h4').stripTags('h5').stripTags('center').stripTags('small').stripTags('big').stripTags('title').stripTags('meta').stripTags('link').stripTags('h5').stripTags('pre').stripTags('iframe');
				if (html != cleanhtml) {
					this.element.set('html', cleanhtml);
				}
			},

			onSelect: function () {
				this.toolbarItems.each(function (el, index) {
					if (this.options.noControls) return;
					if (!this.buttonset.contains(el.name)) return;
					if (el.queryCommandState) {
						if (document.queryCommandState(el.queryCommandState))
							el.button.addClass('active');
						else
							el.button.removeClass('active');
					}
					if (el.queryCommandFunction) {
						if (el.queryCommandFunction.attempt())
							el.button.addClass('active');
						else
							el.button.removeClass('active');
					}
				}.bind(this));
			},

			queryCoommandFunctions: {
				formatBlock: function (format) {
					var selection = window.getSelection();
					if (selection.isCollapsed) {
						var actNotTextNode = selection.anchorNode.nodeName.indexOf('text') >= 0 ? selection.anchorNode.parentNode : selection.anchorNode;
						return actNotTextNode.nodeName.toLowerCase() == format
					}
					if (selection.rangeCount > 0 && selection.getRangeAt(0)) {
						var range = selection.getRangeAt(0);

						var commonAncestor = range.commonAncestorContainer.nodeName.indexOf('text') >= 0 ? range.commonAncestorContainer.parentNode : range.commonAncestorContainer;
						if (commonAncestor.nodeName.toLowerCase() == format || commonAncestor.getParent(format))
							return true;
						return false;
					}
				},
				textAlign: function (textAlign) {
					var selection = window.getSelection();
					if (selection.isCollapsed) {
						var actNotTextNode = selection.anchorNode.nodeName.indexOf('text') >= 0 ? selection.anchorNode.parentNode : selection.anchorNode;
						return actNotTextNode.getStyle('text-align') == textAlign;
					}
					//console.log(selection.rangeCount);
					//We traverse all nodes in the selection
					var actNode = selection.anchorNode;
					while (true) {
						//we select Node parent if node is text
						var actNotTextNode = actNode.nodeName.indexOf('text') >= 0 ? actNode.parentNode : actNode;
						if (actNotTextNode.getStyle('text-align') != textAlign) return false;
						if (actNode == selection.focusNode) break;
						actNode = actNode.nextSibling;
						if (!actNode) break;
					}
					if (selection.rangeCount > 0 && selection.getRangeAt(0)) {
						var range = selection.getRangeAt(0);
						if (range.commonAncestorContainer.nodeName.indexOf('text') >= 0)
							return range.commonAncestorContainer.parentNode.getStyle('text-align') == textAlign;

						var start = false;
						var end = false;
						var returnVar = true;
						var startNode = selection.anchorNode.nodeName.indexOf('text') >= 0 ? selection.anchorNode.parentNode : selection.anchorNode;
						var endNode = selection.focusNode.nodeName.indexOf('text') >= 0 ? selection.focusNode.parentNode : selection.focusNode;
						range.commonAncestorContainer.getChildren().each(function (el, index) {
							//determine if start
							if (el == startNode || startNode.getParents().contains(el)) start = true;
							if (!start || end) return;
							if (el.getStyle('text-align') != textAlign)
								returnVar = false;
							if (el == endNode || endNode.getParents().contains(el)) end = true;
						});
						if (!returnVar)
							return false;
					}
					return true;
				}
			},


			toggleSource: function () {
				if (this.sourceMode) {
					this.element.set('html', this.edit_session.getValue().stripScripts().clean().tidy());
					this.element.setStyle('display', 'block');
					this.sourceMode = false;
					this.source_wrapper.destroy();
					this.editor = null;
					this.element.set('contenteditable', true);
					this.toolbarItems.each(function (el, index) {
						if (this.options.noControls) return;
						if (!this.buttonset.contains(el.name)) return;
						el.button.enable();
					}.bind(this));
					this.tidyCode();
					this.input.set('value', this.element.get('html'));
					return false;
				}
				this.toolbarItems.each(function (el, index) {
					if (this.options.noControls) return;
					if (!this.buttonset.contains(el.name)) return;
					if (el.cssclass != 'source')
						el.button.disable();
				}.bind(this));
				this.element.set('contenteditable', false);
				this.source_wrapper = new Element('div', {
					styles: {
						width: this.element.getSize().x,
						'margin-left': this.element.getPosition(this.element.getParent()).x
					}, 'class': 'ui_html_edit_source'
				}).inject(this.element, 'after');
				this.source_wrapper.addEvent('outerClick', this.toggleSource.bind(this));
				this.source_wrapper_inner = new Element('div', {
					styles: {
						width: this.element.getSize().x,
						height: this.source_wrapper.getSize().y,
						'class': 'ui_html_edit_source_inner'
					}
				}).inject(this.source_wrapper);
				this.editor = ace.edit(this.source_wrapper_inner);

				this.edit_session = this.editor.getSession();
				//this.editor.setTheme('ace/theme/eclipse');
				//var HtmlMode = require("ace/mode/html").Mode; //This is set Mode in Ace 2.0, we use Ace 1.6 since Ace 2.0 has problems with line wrap
				//this.edit_session.setMode(new HtmlMode());
				var htmlMode = require("ace/mode/html").Mode;
				this.editor.getSession().setMode(new htmlMode());
				this.edit_session.setUseWrapMode(true);
				this.edit_session.setWrapLimitRange(0, 100);
				this.edit_session.setValue(style_html(this.element.get('html')));
				this.element.setStyle('display', 'none');
				this.sourceMode = true;
				return false;
			}
		}
);

var UIRetinaimage = new Class({
	Extends: UIComponent,
	classType: 'UIRetinaimage',

	options: {
		className: 'ui_retina',
		suffix: '@2x'
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		this.reloadComponent();
	},
	reloadComponent: function () {
		if (this.element && this.element.tagName.toLowerCase() == 'img' && window.devicePixelRatio >= 2) {
			if (this.element.retrieve('retina')) return; //retina image already present
			if (!(this.element.get('src'))) return;
			var imageName = this.element.get('src').substr(0, this.element.get('src').lastIndexOf('.'));
			var fileType = this.element.get('src').substr(this.element.get('src').lastIndexOf('.') + 1);
			if (fileType.length > 4) { // no filetype
				imageName = this.element.get('src');
				fileType = '';
			}
			new Asset.image(imageName + this.options.suffix + (fileType ? '.' : '') + fileType, {
				onLoad: function () {
					this.element.setStyle('width', this.element.getDimensions().width);
					this.element.set('src', imageName + this.options.suffix + (fileType ? '.' : '') + fileType);
					this.element.store('retina', true);
				}.bind(this)
			})
		}
	}
});

var UITreetable = new Class({
	Extends: UIComponent,
	classType: 'UITree',
	nodeDropElements: [],
	options: {
		className: 'ui_tree',
		data: null,
		data_src: null,
		initialLoad: true
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		/*['activatePane', 'closePane', 'enablePane', 'disablePane', 'addPane', 'getContent', 'unfoldPanes','changePaneAjaxSrc'].each(function (method) {
		 this.element[method] = this[method].bind(this);
		 }, this);*/
		if (!this.options.initialLoad) return;
		this.load(true);
	},

	load: function (buildOnLoad) {
		if (!this.options.data_src) return;
		new Request.JSON({
			url: this.options.data_src,
			onSuccess: function (responseJson) {
				this.options.data = responseJson;
				this.fireEvent('load');
				if (buildOnLoad)
					this.build();
			}.bind(this)
		}).send();
	},

	destroyTree: function () {
		this.element.set('html', '');
	},

	build: function () {
		if (this.options.data) {
			this.root = new Element('ul', {});
			this.buildRecoursive(this.root, null, this.options.data);
			//this.destroyTree();
			this.root.inject(this.element);
		}
	},

	buildRecoursive: function (element, parentnode, nodes) {
		//console.log(nodes);
		nodes.each(function (node, index) {
			node.parent = parentnode;
			var liContainer = new Element('li', {}).inject(element);
			node.domNode = liContainer;
			liContainer.store('node', node);
			var textcontainer = new Element('div', {'html': node.text, 'class': 'node'}).inject(liContainer);
			this.nodeDropElements.push(textcontainer);
			new UITreeNode(textcontainer, {}, this);
			if ($defined(node.children) && node.children.length) {
				var subRoot = new Element('ul', {}).inject(liContainer);
				this.buildRecoursive(subRoot, node, node.children);
			}
		}.bind(this), this);
	}
});

var UITreeNode = new Class({
	Implements: [Events, Options],
	classType: 'UITreeNode',
	uitree: null,

	options: {
		/*
		 onEnter: function(thisElement, overed){},
		 onLeave: function(thisElement, overed){},
		 onDrop: function(thisElement, overed, event){},*/
		opacity: 1,
		clone: true,
		revert: false,
		handle: false,
		dragOptions: {}
	},

	initialize: function (element, options, uitree) {
		this.element = element;
		this.setOptions(options);
		this.uitree = uitree;
		this.idle = true;
		(this.options.handle ? element.getElement(this.options.handle) || element : element).addEvent('mousedown', function (event) {
					this.start.call(this, event, element);
				}.bind(this)
		);
	},

	getClone: function (event, element) {
		if (!this.options.clone) return new Element(element.tagName).inject(document.body);
		if (typeOf(this.options.clone) == 'function') return this.options.clone.call(this, event, element, this.list);
		var clone = element.clone(true).setStyles({
			margin: 0, position: 'absolute', visibility: 'hidden', width: element.getStyle('width')
		}).addEvent('mousedown', function (event) {
			element.fireEvent('mousedown', event);
		});
		return clone.inject(this.element, 'before').setPosition(element.getPosition(element.getOffsetParent()));
	},

	attach: function () {
		this.drag.attach();
		return this;
	},

	detach: function () {
		this.drag.detach();
		return this;
	},

	getDroppables: function () {
		return this.uitree.nodeDropElements.clone().erase(this.element);
	},

	getDroppablePosition: function (dragElement, droppable) {
		var droppableHeight = droppable.getSize().y;//console.log(droppableHeight);//console.log(dragPosition);
		var dragPosition = dragElement.getPosition(droppable)
		if (dragPosition.y < -droppableHeight / 10) return 'top';
		else if (dragPosition.y > droppableHeight / 10) return 'bottom';
		else return 'center';
	},

	start: function (event, element) {
		if (!this.idle || event.rightClick || ['button', 'input', 'a', 'textarea'].contains(event.target.get('tag'))) return;
		this.idle = false;
		this.element = element;
		this.clone = this.getClone(event, element);
		this.drag = new Drag.Move(this.clone, Object.merge({droppables: this.getDroppables()}, this.options.dragOptions)).addEvents({
			onSnap: this.snap.bind(this),
			onDrop: this.drop.bind(this),
			onEnter: this.enter.bind(this),
			onLeave: this.leave.bind(this),
			onCancel: this.end.bind(this),
			onDrag: this.performDrag.bind(this)
		}),

				this.clone.inject(this.element, 'before');
		this.drag.start(event);
	},

	snap: function () {
		event.stop();
		this.clone.setStyle('visibility', 'visible');
		this.element.setStyle('opacity', this.options.opacity || 0);
		this.fireEvent('start', [this.element, this.clone]);
	},

	drop: function (element, droppable, event) {
		if (!droppable)
			this.end();
		else this.drop();
	},

	enter: function (element, droppable) {
		this.droppable = droppable;
	},

	leave: function (element, droppable) {
		this.droppable.removeClass('glyphicons');
		delete this.droppable;
	},

	performDrag: function (element, event) {
		if (this.droppable) {
			var position = this.getDroppablePosition(element, this.droppable);
			this.droppable.addClass('glyphicons').addClass('chevron-right').removeClass('drop-bottom').removeClass('drop-top').removeClass('drop-center').addClass('drop-' + position);
		}
	},

	end: function () {
		if (this.droppable)
			this.droppable.removeClass('glyphicons');
		//console.log('end');
		this.drag.detach();
		this.element.setStyle('opacity', this.opacity);
		if (this.effect) {
			var dim = this.element.getStyles('width', 'height'),
					clone = this.clone,
					pos = clone.computePosition(this.element.getPosition(this.clone.getOffsetParent()));

			var destroy = function () {
				this.removeEvent('cancel', destroy);
				clone.destroy();
			};

			this.effect.element = clone;
			this.effect.start({
				top: pos.top,
				left: pos.left,
				width: dim.width,
				height: dim.height,
				opacity: 0.25
			}).addEvent('cancel', destroy).chain(destroy);
		} else {
			this.clone.destroy();
		}
		this.reset();
	},

	reset: function () {
		this.idle = true;
		this.fireEvent('complete', this.element);
	}
})

var UITermhighlighter = new Class({
	Extends: UIComponent,
	classType: 'UITermhighlighter',

	options: {
		data_url: null,
		highlight_url: null,
		className: 'ui_termhighlighter',
		delay: 2000,
		language: 'de',
		exclude_elements: null,
		exclude_urls: null
	},

	initialize: function (elements, options) {
		var isElement = this.parent(elements, options);
		if (!isElement) return;
		if (this.options.exclude_urls) {
			var is_exlcuded = false;
			this.options.exclude_urls.each(function (url) {
				if (window.location.href.indexOf(url) >= 0) {
					is_exlcuded = true;
					return;
				}
			});
			if (is_exlcuded) return;
		}
		if (!this.options.data_url) {
			if (typeof window.uiTermhighlighter != 'undefined') {
				this.options.data_url = window.uiTermhighlighter.data_url;
				this.options.highlight_url = window.uiTermhighlighter.highlight_url;
			}
		}
		if (!this.options.exclude_elements && typeof window.uiTermhighlighter != 'undefined')
			this.options.exclude_elements = window.uiTermhighlighter.exclude_elements;
		if (!this.options.exclude_urls && typeof window.uiTermhighlighter != 'undefined')
			this.options.exclude_urls = window.uiTermhighlighter.exclude_urls;
		if (!this.options.data_url) return;
		this.highlight.delay(this.options.delay, this);
	},

	highlight: function () {
		var data = null;
		if (typeof window.uiTermhighlighter != 'undefined' && window.uiTermhighlighter.terms) {
			data = window.uiTermhighlighter.terms;
		}
		else {
			data = UILocalStorage.getItem('documentHighlights_' + this.options.language);
			window.uiTermhighlighter = {
				data_url: this.options.data_url,
				highlight_url: this.options.highlight_url,
				terms: data,
				exclude_elements: this.options.exclude_elements,
				exclude_urls: this.options.exclude_urls
			}
		}
		var highlightGlossaryItemsFromData = function (data) {
			UITermhighlighter.findAndReplace(data.wordsConcatenaded, function (text) {
				if (typeof data.words[text.toLocaleLowerCase().trim()] != 'undefined')
					return '<dfn class="ui_tooltip documenthighlight" rel="{src:\'' + this.options.highlight_url.replace('%id%', data.words[text.toLocaleLowerCase().trim()]) + '\',y_position:\'bottom\',x_position:\'center\', width:280,y_distance:7}">' + text + '</dfn>';
				else
					return text;
			}.bind(this), this.element, this.options.exclude_elements);
			(function () {
				new UITooltip();
			}).delay(100);
		}.bind(this);

		if (data) {
			highlightGlossaryItemsFromData(data);
			return;
		}
		new Request.JSON({
			url: this.options.data_url,
			onSuccess: function (words) {
				var wordsConcatenaded = '';
				Object.each(words, function (index, value) {
					if (value && value.length > 2)
						wordsConcatenaded += (wordsConcatenaded ? '|' : '') + value;
				});
				var data = {words: words, wordsConcatenaded: wordsConcatenaded};
				UILocalStorage.setItem('documentHighlights_' + this.options.language, data, 1800);
				window.uiTermhighlighter = {
					terms: data,
					exclude_elements: this.options.exclude_elements,
					exclude_urls: this.options.exclude_urls
				};
				highlightGlossaryItemsFromData(data);
			}.bind(this)
		}).send();
	}
})

UITermhighlighter.findAndReplace = function (searchText, replacement, searchNode, excludeNodes) {
	if (!searchText || typeof replacement === 'undefined') {
		// Throw error here if you want...
		return;
	}
	if (searchNode && excludeNodes) {
		var excluded = false;
		excludeNodes.each(function (exclude) {
			if (document.id(searchNode).match(exclude)) {
				excluded = true;
				return false;
			}
		});
		if (excluded) return;
	}
	var regex = typeof searchText === 'string' ?
					new RegExp(searchText, 'gi') : searchText,
			childNodes = (searchNode || document.body).childNodes,
			cnLength = childNodes.length,
			excludes = {
				'html': 1,
				'head': 1,
				'style': 1,
				'title': 1,
				'link': 1,
				'meta': 1,
				'script': 1,
				'object': 1,
				'iframe': 1,
				'svg': 1,
				'textarea': 1
			};
	while (cnLength--) {
		var currentNode = childNodes[cnLength];
		if (currentNode.nodeType === 1 && typeof excludes[currentNode.nodeName.toLowerCase()] == 'undefined' && !document.id(currentNode).hasClass('documenthighlight')) {
			arguments.callee(searchText, replacement, currentNode, excludeNodes);
		}
		if (currentNode.nodeType !== 3 || !regex.test(currentNode.data)) {
			continue;
		}
		var parent = currentNode.parentNode,
				frag = (function () {
					var html = currentNode.data.replace(regex, replacement),
							wrap = document.createElement('div'),
							frag = document.createDocumentFragment();
					wrap.innerHTML = html;
					while (wrap.firstChild) {
						frag.appendChild(wrap.firstChild);
					}
					return frag;
				})();
		parent.insertBefore(frag, currentNode);
		parent.removeChild(currentNode);
	}
}

var Translation = {};

Translation.get = function (key, replacements, defaultValue) {
	var value = key;
	if (typeof TranslationsData != "undefined" && $defined(TranslationsData[key]))
		value = TranslationsData[key];
	if ($defined(replacements) && $type(replacements) == 'object') {
		Object.each(replacements, function (replacement_value, replacement_key) {
			value = value.replace('%' + replacement_key + '%', replacement_value).replace('{' + replacement_key + '}', replacement_value);
		});
	}
	return value;
}