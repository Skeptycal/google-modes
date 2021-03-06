(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^print(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [7, "stillIndented"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=)/, [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], /^(?:\*|\*\*)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 9, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[22], -1,
     3, "atom", e[24], -1,
     3, "atom", e[25], -1,
     3, "keyword", e[30], -1,
     3, "builtin", e[28], -1,
     3, "builtin", e[7], -1,
     3, "operator", e[29], -1,
     3, "operator", e[21], -1,
     3, "number", e[23], -1,
     2, 53, -1, {"name":"string","token":"string"},
     3, "variable", e[10], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     "\\", 7,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 8,
     0, -1],
    ["\n", 6],
    ["\n", 6],
    [3, "keyword", e[0], 10,
     3, "keyword", e[1], 10,
     3, "keyword", e[2], 16,
     3, "keyword", e[3], 16,
     3, "keyword", e[4], 20,
     3, "keyword", e[5], 30,
     3, "keyword", e[6], 40,
     1, 55, -1,
     2, 68, 42, {"name":"Annotation","token":"meta"},
     3, "builtin", e[7], 46,
     1, 76, 48],
    [1, 6, 11],
    [1, 107, 12],
    [1, 6, 13],
    [":", 14],
    [1, 6, 15],
    [1, 114, -1],
    [1, 6, 17],
    [":", 18],
    [1, 6, 19],
    [1, 114, -1],
    [1, 6, 21],
    [1, 120, 22],
    [1, 6, 23],
    [3, "keyword", e[8], 24],
    [1, 6, 25],
    [1, 107, 26],
    [1, 6, 27],
    [":", 28],
    [1, 6, 29],
    [1, 114, -1],
    [1, 6, 31],
    [1, 107, 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [3, "keyword", e[9], 36,
     0, 33],
    [":", 37],
    [1, 6, 38],
    [1, 6, 39],
    [3, "def", e[10], 33],
    [1, 114, -1],
    [1, 6, 41],
    [1, 55, -1],
    [1, 6, 43],
    [2, 128, 44, {"name":"ArgList"},
     0, 44],
    [1, 6, 45],
    ["\n", -1],
    [1, 6, 47],
    [2, 128, -1, {"name":"ArgList"},
     1, 107, -1],
    [1, 6, 49],
    [";", 50,
     "\n", -1],
    [1, 6, 51],
    [1, 76, 52,
     0, 52],
    [1, 6, 49],
    [/^[uUrRfFbB]+(?=[\'\"])/, 54,
     1, 133, -1],
    [1, 133, -1],
    [3, "keyword", e[11], 56,
     3, "keyword", e[12], 62,
     3, "keyword", e[13], 66],
    [1, 6, 57],
    [1, 142, 58],
    [1, 6, 59],
    [":", 60],
    [1, 6, 61],
    [1, 114, -1],
    [1, 6, 63],
    [3, "def", e[10], 64],
    [1, 6, 65],
    [2, 156, -1, {"name":"FuncDef"}],
    [1, 6, 67],
    [2, 165, -1, {"name":"ClassDef"}],
    ["@", 69],
    [1, 6, 70],
    [e[10], 71],
    [1, 6, 72],
    [".", 73,
     0, -1],
    [1, 6, 74],
    [e[10], 75],
    [1, 6, 72],
    [3, "keyword", e[14], -1,
     3, "keyword", e[15], 77,
     3, "keyword", e[16], 79,
     3, "keyword", e[17], 81,
     3, "keyword", e[18], 87,
     3, "keyword", e[19], 89,
     3, "keyword", e[20], 100,
     [5, 172], 102,
     1, 107, -1],
    [1, 6, 78],
    [1, 107, -1],
    [1, 6, 80],
    [1, 107, -1,
     0, -1],
    [1, 6, 82],
    [1, 107, 83,
     0, 83],
    [1, 6, 84],
    [3, "keyword", e[19], 85,
     0, -1],
    [1, 6, 86],
    [1, 107, -1],
    [1, 6, 88],
    [1, 142, -1],
    [1, 6, 90],
    [".", 91,
     1, 107, 92,
     0, 92],
    [1, 6, 90],
    [1, 6, 93],
    [3, "keyword", e[18], 94],
    [1, 6, 95],
    ["*", -1,
     "(", 96,
     1, 175, -1],
    [1, 6, 97],
    [1, 189, 98,
     0, 98],
    [1, 6, 99],
    [")", -1],
    [1, 6, 101],
    [1, 203, -1],
    [1, 209, 103],
    [1, 6, 104],
    [3, "operator", "=", 105],
    [1, 6, 106],
    [1, 107, -1],
    [3, "operator", e[21], 108,
     3, "keyword", e[22], 108,
     1, 222, 109],
    [1, 6, 107],
    [1, 6, 110],
    [1, 232, 111,
     3, "keyword", e[8], 112,
     ",", 112,
     0, -1],
    [1, 6, 110],
    [1, 6, 113],
    [1, 107, 111],
    [1, 76, 115,
     2, 243, -1, {"name":"indentedBody"}],
    [1, 6, 116],
    [";", 117,
     "\n", -1],
    [1, 6, 118],
    [1, 76, 119,
     0, 119],
    [1, 6, 116],
    [[5, 249], 121,
     1, 252, 122],
    [1, 209, 122],
    [1, 6, 123],
    [",", 124,
     0, -1],
    [1, 6, 125],
    [[5, 249], 126,
     1, 252, 127,
     0, 127],
    [1, 209, 127],
    [1, 6, 123],
    ["(", 129],
    [1, 6, 130],
    [1, 257, 131,
     0, 131],
    [1, 6, 132],
    [")", -1],
    ["'''", 134,
     "\"\"\"", 136,
     "'", 138,
     "\"", 140],
    ["\\", 135,
     [0, /^(?!\'\'\')/, /^[^]/], 134,
     "'''", -1],
    [/^[^]/, 134],
    ["\\", 137,
     [0, /^(?!\"\"\")/, /^[^]/], 136,
     "\"\"\"", -1],
    [/^[^]/, 136],
    ["\\", 139,
     /^(?!\')./, 138,
     "'", -1],
    [/^[^]/, 138],
    ["\\", 141,
     /^(?!\")./, 140,
     "\"", -1],
    [/^[^]/, 140],
    [1, 268, 143],
    [1, 6, 144],
    [3, "keyword", e[9], 145,
     0, 147],
    [1, 6, 146],
    [3, "def", e[10], 147],
    [1, 6, 148],
    [",", 149,
     0, -1],
    [1, 6, 150],
    [1, 268, 151,
     0, 152],
    [1, 6, 153],
    [1, 6, 148],
    [3, "keyword", e[9], 154,
     0, 152],
    [1, 6, 155],
    [3, "def", e[10], 152],
    [2, 275, 157, {"name":"ParamList"}],
    [1, 6, 158],
    ["->", 159,
     0, 161],
    [1, 6, 160],
    [1, 107, 161],
    [1, 6, 162],
    [":", 163],
    [1, 6, 164],
    [1, 114, -1],
    [3, "type def", e[10], 166],
    [1, 6, 167],
    [2, 128, 168, {"name":"ArgList"},
     0, 168],
    [1, 6, 169],
    [":", 170],
    [1, 6, 171],
    [1, 114, -1],
    [1, 209, 173],
    [1, 6, 174],
    ["=", -1],
    [e[10], 176],
    [1, 6, 177],
    [3, "keyword", e[9], 178,
     0, 180],
    [1, 6, 179],
    [3, "def", e[10], 180],
    [1, 6, 181],
    [",", 182,
     0, -1],
    [1, 6, 183],
    [e[10], 184,
     0, 185],
    [1, 6, 186],
    [1, 6, 181],
    [3, "keyword", e[9], 187,
     0, 185],
    [1, 6, 188],
    [3, "def", e[10], 185],
    [e[10], 190],
    [1, 6, 191],
    [3, "keyword", e[9], 192],
    [1, 6, 193],
    [3, "def", e[10], 194,
     0, 194],
    [1, 6, 195],
    [",", 196,
     0, -1],
    [1, 6, 197],
    [e[10], 198,
     0, 199],
    [1, 6, 200],
    [1, 6, 195],
    [3, "keyword", e[9], 201],
    [1, 6, 202],
    [3, "def", e[10], 199,
     0, 199],
    [3, "variable", e[10], 204],
    [1, 6, 205],
    [",", 206,
     0, -1],
    [1, 6, 207],
    [3, "variable", e[10], 208,
     0, 208],
    [1, 6, 205],
    ["(", 210,
     "[", 211,
     3, "def", e[10], 218],
    [1, 6, 212],
    [1, 6, 213],
    [1, 209, 214],
    [1, 209, 215],
    [1, 6, 216],
    [1, 6, 217],
    [")", 218],
    ["]", 218],
    [1, 6, 219],
    [",", 220,
     0, -1],
    [1, 6, 221],
    [1, 209, -1],
    [2, 280, -1, {"name":"ParenExpr"},
     2, 285, -1, {"name":"ArrayLiteral"},
     2, 290, -1, {"name":"ObjectLiteral"},
     3, "number", e[23], -1,
     0, 223,
     3, "operator", "...", -1,
     3, "atom", e[24], -1,
     3, "atom", e[25], -1,
     3, "keyword", e[26], 226,
     3, "keyword", e[27], 230,
     3, "builtin", e[28], -1,
     3, "variable callee", e[31], -1,
     3, "variable", e[10], -1],
    [2, 53, 224, {"name":"string","token":"string"}],
    [1, 6, 225],
    [0, 223,
     0, -1],
    [1, 6, 227],
    [3, "keyword", e[19], 228,
     1, 107, -1,
     0, -1],
    [1, 6, 229],
    [1, 107, -1],
    [1, 6, 231],
    [2, 297, -1, {"name":"LambdaDef"}],
    [3, "operator", e[29], 233,
     3, "keyword", e[30], 233,
     2, 128, -1, {"name":"ArgList"},
     2, 302, -1, {"name":"Subscript"},
     ".", 235,
     3, "keyword", e[0], 237],
    [1, 6, 234],
    [1, 107, -1],
    [1, 6, 236],
    [3, "property callee", e[31], -1,
     3, "property", e[10], -1],
    [1, 6, 238],
    [1, 107, 239],
    [1, 6, 240],
    [3, "keyword", e[2], 241,
     0, -1],
    [1, 6, 242],
    [1, 107, -1],
    ["\n", 244],
    [/^[ \t]/, 244,
     3, "comment", /^\#.*/, 244,
     "\n", 244,
     e[32], 245],
    [2, 9, 246, {"name":"Statement"}],
    [/^[ \t]/, 246,
     3, "comment", /^\#.*/, 246,
     "\n", 246,
     0, 247],
    [0, 248,
     0, -1],
    [e[32], 245],
    [1, 209, 250],
    [1, 6, 251],
    [3, "keyword", e[8], -1],
    [3, "operator", e[21], 253,
     3, "keyword", e[22], 253,
     1, 222, 254],
    [1, 6, 252],
    [1, 6, 255],
    [1, 307, 256,
     0, -1],
    [1, 6, 255],
    [3, "variable-2", e[34], 258,
     3, "operator", "**", 259,
     3, "meta", e[33], 260,
     0, 259],
    [1, 6, 261],
    [1, 6, 262],
    [1, 6, 263],
    [1, 318, 264,
     0, 264],
    [1, 268, 264],
    ["=", 259],
    [1, 6, 265],
    [",", 266,
     1, 329, -1,
     0, -1],
    [1, 6, 267],
    [1, 341, -1,
     0, -1],
    [3, "operator", e[21], 269,
     3, "keyword", e[22], 269,
     1, 222, 270],
    [1, 6, 268],
    [1, 6, 271],
    [1, 318, 272,
     3, "keyword", e[8], 273,
     0, -1],
    [1, 6, 271],
    [1, 6, 274],
    [1, 107, 272],
    ["(", 276],
    [1, 6, 277],
    [1, 355, 278,
     0, 278],
    [1, 6, 279],
    [")", -1],
    ["(", 281],
    [1, 6, 282],
    [1, 381, 283,
     0, 283],
    [1, 6, 284],
    [")", -1],
    ["[", 286],
    [1, 6, 287],
    [1, 381, 288,
     0, 288],
    [1, 6, 289],
    ["]", -1],
    ["{", 291],
    [1, 6, 292],
    [1, 388, 293,
     0, 295],
    [1, 6, 294],
    [1, 329, 295,
     0, 295],
    [1, 6, 296],
    ["}", -1],
    [1, 394, 298,
     0, 298],
    [1, 6, 299],
    [":", 300],
    [1, 6, 301],
    [1, 268, -1],
    ["[", 303],
    [1, 6, 304],
    [1, 412, 305],
    [1, 6, 306],
    ["]", -1],
    [3, "operator", e[29], 308,
     3, "keyword", e[30], 308,
     2, 128, -1, {"name":"ArgList"},
     2, 302, -1, {"name":"Subscript"},
     ".", 310,
     3, "keyword", e[0], 312],
    [1, 6, 309],
    [1, 252, -1],
    [1, 6, 311],
    [3, "property callee", e[31], -1,
     3, "property", e[10], -1],
    [1, 6, 313],
    [1, 252, 314],
    [1, 6, 315],
    [3, "keyword", e[2], 316,
     0, -1],
    [1, 6, 317],
    [1, 252, -1],
    [3, "operator", e[29], 319,
     3, "keyword", e[30], 319,
     2, 128, -1, {"name":"ArgList"},
     2, 302, -1, {"name":"Subscript"},
     ".", 321,
     3, "keyword", e[0], 323],
    [1, 6, 320],
    [1, 268, -1],
    [1, 6, 322],
    [3, "property callee", e[31], -1,
     3, "property", e[10], -1],
    [1, 6, 324],
    [1, 268, 325],
    [1, 6, 326],
    [3, "keyword", e[2], 327,
     0, -1],
    [1, 6, 328],
    [1, 268, -1],
    [3, "keyword", e[6], 330,
     0, 330],
    [1, 6, 331],
    [3, "keyword", e[4], 332],
    [1, 6, 333],
    [[5, 249], 334,
     1, 252, 335],
    [1, 209, 335],
    [1, 6, 336],
    [3, "keyword", e[8], 337],
    [1, 6, 338],
    [1, 107, 339],
    [1, 6, 340],
    [1, 329, -1,
     1, 438, -1,
     0, -1],
    [3, "operator", "**", 342,
     3, "meta", e[33], 343,
     0, 342],
    [1, 6, 344],
    [1, 6, 345],
    [1, 268, 346],
    ["=", 342],
    [1, 6, 347],
    [",", 348,
     0, -1],
    [1, 6, 349],
    [3, "operator", "**", 350,
     3, "meta", e[33], 351,
     0, 350,
     0, 352],
    [1, 6, 353],
    [1, 6, 354],
    [1, 6, 347],
    [1, 268, 352],
    ["=", 350],
    [2, 443, 356, {"name":"op","token":"operator"},
     0, 356],
    [1, 6, 357],
    [3, "atom", e[25], 358,
     3, "def", e[10], 358],
    [1, 6, 359],
    [":", 360,
     0, 361],
    [1, 6, 362],
    [1, 6, 363],
    [1, 268, 361],
    [3, "operator", "=", 364,
     0, 366],
    [1, 6, 365],
    [1, 268, 366],
    [1, 6, 367],
    [",", 368,
     0, -1],
    [1, 6, 369],
    [2, 443, 370, {"name":"op","token":"operator"},
     0, 370,
     0, 371],
    [1, 6, 372],
    [1, 6, 367],
    [3, "atom", e[25], 373,
     3, "def", e[10], 373],
    [1, 6, 374],
    [":", 375,
     0, 376],
    [1, 6, 377],
    [1, 6, 378],
    [1, 268, 376],
    [3, "operator", "=", 379,
     0, 371],
    [1, 6, 380],
    [1, 268, 371],
    [3, "variable-2", e[34], 382,
     1, 268, 384],
    [1, 6, 383],
    [1, 318, 384,
     0, 384],
    [1, 6, 385],
    [",", 386,
     1, 329, -1,
     0, -1],
    [1, 6, 387],
    [1, 446, -1,
     0, -1],
    [2, 452, 389, {"name":"DictProp"}],
    [1, 6, 390],
    [",", 391,
     0, -1],
    [1, 6, 392],
    [2, 452, 393, {"name":"DictProp"},
     0, 393],
    [1, 6, 390],
    [3, "operator", e[35], 395,
     0, 395],
    [1, 6, 396],
    [3, "def", e[10], 397],
    [1, 6, 398],
    [3, "operator", "=", 399,
     0, 401],
    [1, 6, 400],
    [1, 268, 401],
    [1, 6, 402],
    [",", 403,
     0, -1],
    [1, 6, 404],
    [3, "operator", e[35], 405,
     0, 405,
     0, 406],
    [1, 6, 407],
    [1, 6, 402],
    [3, "def", e[10], 408],
    [1, 6, 409],
    [3, "operator", "=", 410,
     0, 406],
    [1, 6, 411],
    [1, 268, 406],
    [1, 268, 413,
     ":", 414],
    [1, 6, 415],
    [1, 6, 416],
    [":", 417,
     0, 423],
    [1, 268, 418,
     0, 418],
    [1, 6, 419],
    [1, 6, 420],
    [1, 268, 423,
     0, 423],
    [":", 421,
     0, 423],
    [1, 6, 422],
    [1, 268, 423,
     0, 423],
    [1, 6, 424],
    [",", 425,
     0, -1],
    [1, 6, 426],
    [1, 268, 427,
     ":", 428,
     0, 429],
    [1, 6, 430],
    [1, 6, 431],
    [1, 6, 424],
    [":", 432,
     0, 429],
    [1, 268, 433,
     0, 433],
    [1, 6, 434],
    [1, 6, 435],
    [1, 268, 429,
     0, 429],
    [":", 436,
     0, 429],
    [1, 6, 437],
    [1, 268, 429,
     0, 429],
    [3, "keyword", e[0], 439],
    [1, 6, 440],
    [1, 107, 441],
    [1, 6, 442],
    [1, 329, -1,
     1, 438, -1,
     0, -1],
    ["*", 444],
    [1, 6, 445],
    [/^\*?/, -1],
    [1, 268, 447],
    [1, 6, 448],
    [",", 449,
     0, -1],
    [1, 6, 450],
    [1, 268, 451,
     0, 451],
    [1, 6, 448],
    [3, "operator", "**", 453,
     1, 268, 455],
    [1, 6, 454],
    [1, 268, -1],
    [1, 6, 456],
    [":", 457,
     0, -1],
    [1, 6, 458],
    [1, 268, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "Subscript", "DictProp"];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s*for\s*(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack != ")" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function pythonMarkLocals(token$$1, stream, state) {
    var marked = markLocals(token$$1, scopes, stream, state);
    if (token$$1 == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
      else if (marked == "def local") { marked = "variable-2"; }
    }
    return marked
  }  

  var PythonMode = (function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token$$1 (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  // ` also gets autoclosed since it's often used in comments/docstrings.
  PythonMode.prototype.closeBrackets = {triples: "'\"", pairs: "()[]{}''\"\"``",};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror.defineMode("google-python", function (conf) { return new PythonMode(conf); });

})));
