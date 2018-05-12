(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 145]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|.)+\//, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 488]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 513]], /^(?:\.\.\.)?/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[30], -1,
     3, "keyword", /^do(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[43], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[36], -1,
     3, "atom", e[27], -1,
     3, "variable", e[17], -1,
     3, "operator", e[38], -1,
     3, "operator", e[42], -1,
     3, "operator", e[41], -1,
     2, 147, -1, {"name":"string","token":"string"},
     3, "number", e[29], -1,
     2, 152, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[39], -1,
     1, 158, -1,
     /^[^]/, -1],
    [e[24], 6,
     2, 152, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 162]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 163]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 164]], 26,
     [5, 165], 36,
     3, "keyword", e[19], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 168]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     2, 169, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], 56,
     3, "keyword", e[4], 61,
     3, "keyword", e[5], 67,
     3, "keyword", e[6], 69,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 69,
     3, "keyword", e[7], 70,
     3, "keyword", e[8], 73,
     3, "keyword", e[9], 77,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 105,
     3, "keyword", e[14], 109,
     3, "keyword", e[15], 121,
     3, "keyword", e[16], 137,
     "@", 139,
     1, 173, 143],
    [1, 6, 9],
    [3, "def type", e[17], 10],
    [1, 6, 11],
    [2, 179, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 184, 16],
    [1, 6, 17],
    [e[20], -1],
    [1, 6, 19],
    [[5, 215], 20,
     3, "def", e[17], 21],
    [3, "variable", e[17], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 169, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[17], 28],
    [1, 6, 29],
    [2, 179, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[18], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 218, 33],
    [2, 224, -1, {"name":"ObjType"}],
    [3, "keyword", e[26], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[17], 41],
    [3, "keyword", e[19], 37],
    [1, 6, 42],
    [2, 232, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 237, 47],
    [1, 6, 48],
    [",", 49,
     e[20], -1],
    [1, 6, 50],
    [1, 237, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 246, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 246, 58, {"name":"CondExpr"}],
    [1, 6, 59],
    [2, 7, 60, {"name":"Statement"}],
    [2, 251, -1, {"name":"Alternative"}],
    [1, 6, 62],
    [3, "keyword", "*", 63,
     0, 63],
    [1, 6, 64],
    [3, "def", e[17], 65],
    [1, 6, 66],
    [2, 255, -1, {"name":"FunctionDef"}],
    [1, 6, 68],
    [2, 262, -1, {"name":"ForStatement"}],
    [1, 6, 71],
    [1, 6, 72],
    [":", -1],
    [1, 173, 69],
    [1, 6, 74],
    [e[20], -1,
     1, 173, 75],
    [1, 6, 76],
    [e[20], -1],
    [1, 6, 78],
    [1, 173, 79],
    [1, 6, 80],
    [e[20], -1],
    [1, 6, 82],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 83],
    [1, 6, 84],
    [e[20], -1],
    [1, 6, 86],
    [2, 246, 87, {"name":"CondExpr"}],
    [1, 6, 88],
    [2, 169, -1, {"name":"Block"}],
    [1, 6, 90],
    [2, 169, 91, {"name":"Block"}],
    [1, 6, 92],
    [3, "keyword", e[21], 93,
     0, 94],
    [1, 6, 95],
    [1, 6, 96],
    ["(", 97],
    [3, "keyword", e[22], 98,
     0, -1],
    [1, 6, 99],
    [1, 6, 100],
    [3, "def", e[17], 101],
    [2, 169, -1, {"name":"Block"}],
    [1, 6, 102],
    [")", 103],
    [1, 6, 104],
    [2, 169, 94, {"name":"Block"}],
    [1, 6, 106],
    [3, "def type", e[17], 107],
    [1, 6, 108],
    [1, 265, -1],
    [1, 6, 110],
    ["*", 111,
     3, "keyword", e[6], 111,
     "{", 112,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 113],
    [1, 6, 114],
    [3, "keyword", e[23], 115,
     0, 116],
    [1, 276, 117],
    [1, 6, 118],
    [1, 6, 119],
    [1, 6, 120],
    [2, 147, 116, {"name":"string","token":"string"}],
    [e[20], -1],
    ["}", 111],
    [1, 6, 122],
    [2, 147, 123, {"name":"string","token":"string"},
     3, "keyword", "*", 124,
     1, 282, 125,
     "{", 126],
    [1, 6, 127],
    [1, 6, 128],
    [1, 6, 129],
    [1, 6, 130],
    [e[20], -1],
    [3, "keyword", e[31], 131,
     0, 125],
    [3, "keyword", e[23], 132,
     0, 123],
    [1, 276, 133],
    [1, 6, 134],
    [1, 6, 135],
    [1, 6, 136],
    [3, "def", e[17], 125],
    [2, 147, 123, {"name":"string","token":"string"}],
    ["}", 125],
    [1, 6, 138],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 140],
    [1, 173, 141],
    [1, 6, 142],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 144],
    [e[20], -1],
    [1, 6, 146],
    [3, "keyword", e[4], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 148,
     "\"", 150],
    ["\\", 149,
     /^(?!\')./, 148,
     "'", -1],
    [/^[^]/, 148],
    ["\\", 151,
     /^(?!\")./, 150,
     "\"", -1],
    [/^[^]/, 150],
    [/^\/\*\*(?!\/)/, 153,
     "/*", 157,
     /^\/\/.*/, -1],
    [0, 154,
     2, 287, 153, {"name":"doccomment.braced"},
     0, 155],
    [e[35], 156],
    [2, 295, 155, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 154,
     0, 153],
    [[0, /^(?!\*\/)/, /^[^]/], 157,
     "*/", -1],
    [3, "string-2", "`", 159],
    [3, "string-2", "${", 160,
     2, 303, 159, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 159,
     3, "string-2", "`", -1],
    [1, 173, 161],
    [3, "string-2", "}", 159],
    [e[24], 162,
     e[25], -1],
    [e[24], 163,
     e[25], -1],
    [e[24], 164,
     e[25], -1],
    [3, "keyword", e[26], 166],
    [1, 6, 167],
    [3, "keyword", e[19], -1],
    [e[24], 168,
     e[25], -1],
    ["{", 170],
    [1, 6, 171],
    [2, 7, 172, {"name":"Statement"},
     "}", -1],
    [1, 6, 171],
    [1, 305, 174],
    [1, 6, 175],
    [",", 176,
     1, 327, 177,
     0, -1],
    [1, 6, 178],
    [1, 6, 175],
    [1, 173, 177],
    ["<", 180],
    [1, 6, 181],
    [1, 346, 182],
    [1, 6, 183],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 208,
     3, "atom", e[27], 208,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 185,
     3, "keyword", /^keyof(?![a-zA-Z¡-￿_0-9_\$])/, 186,
     [0, [5, 360], "("], 187,
     3, "keyword", e[28], 188,
     0, 188,
     0, 189,
     2, 363, 208, {"name":"TupleType"},
     2, 224, 208, {"name":"ObjType"},
     2, 147, 208, {"name":"string","token":"string"},
     3, "number", e[29], 208],
    [1, 6, 190],
    [1, 6, 191],
    [1, 6, 192],
    [1, 6, 193],
    [[5, 368], 194,
     3, "type", e[17], 195],
    [1, 371, 208],
    [1, 184, 208],
    [1, 184, 196],
    [2, 179, 197, {"name":"TypeParams"},
     0, 197],
    [3, "variable", e[17], 198],
    [1, 6, 199],
    [1, 6, 200],
    [1, 6, 201],
    [1, 6, 202],
    [2, 375, 208, {"name":"TypeArgs"},
     0, 208],
    [")", 208],
    [2, 380, 203, {"name":"ParamListSpec"}],
    [".", 204],
    [1, 6, 205],
    [1, 6, 189],
    [3, "operator", "=>", 206],
    [1, 6, 207],
    [1, 184, 208],
    [1, 6, 209],
    [3, "operator", "&", 210,
     3, "operator", "|", 210,
     "[", 211,
     0, -1],
    [1, 6, 212],
    [1, 6, 213],
    [1, 184, 214],
    ["]", 214],
    [1, 6, 209],
    [e[17], 216],
    [1, 6, 217],
    [".", -1],
    [1, 184, 219,
     0, -1],
    [1, 6, 220],
    [",", 221,
     0, -1],
    [1, 6, 222],
    [1, 184, 223,
     0, 223],
    [1, 6, 220],
    ["{", 225],
    [1, 6, 226],
    [1, 381, 227,
     0, 227],
    [1, 6, 228],
    [/^[\,\;]/, 229,
     "}", -1],
    [1, 6, 230],
    [1, 381, 231,
     0, 231],
    [1, 6, 228],
    ["{", 233],
    [1, 6, 234],
    [1, 410, 235],
    [1, 6, 236],
    ["}", -1],
    [1, 424, 238],
    [1, 6, 239],
    [":", 240,
     0, 242],
    [1, 6, 241],
    [1, 184, 242],
    [1, 6, 243],
    [3, "operator", "=", 244,
     0, -1],
    [1, 6, 245],
    [1, 371, -1],
    ["(", 247],
    [1, 6, 248],
    [1, 173, 249],
    [1, 6, 250],
    [")", -1],
    [1, 6, 252],
    [3, "keyword", e[30], 253,
     0, -1],
    [1, 6, 254],
    [2, 7, -1, {"name":"Statement"}],
    [2, 179, 256, {"name":"TypeParams"},
     0, 256],
    [1, 6, 257],
    [2, 427, 258, {"name":"ParamList"}],
    [1, 6, 259],
    [1, 432, 260,
     0, 260],
    [1, 6, 261],
    [2, 169, -1, {"name":"Block"},
     e[20], -1],
    [2, 440, 263, {"name":"ForSpec"}],
    [1, 6, 264],
    [2, 7, -1, {"name":"Statement"}],
    [3, "keyword", e[18], 266,
     0, 268],
    [1, 6, 267],
    [1, 184, 268],
    [1, 6, 269],
    [2, 179, 270, {"name":"TypeParams"},
     0, 270],
    [1, 6, 271],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 272,
     0, 274],
    [1, 6, 273],
    [1, 218, 274],
    [1, 6, 275],
    [2, 453, -1, {"name":"ClassBody"}],
    [1, 282, 277,
     0, -1],
    [1, 6, 278],
    [",", 279,
     0, -1],
    [1, 6, 280],
    [1, 282, 281,
     0, 281],
    [1, 6, 278],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 283,
     3, "def", e[17], -1],
    [1, 6, 284],
    [3, "keyword", e[31], 285],
    [1, 6, 286],
    [3, "def", e[17], -1],
    ["{", 288],
    [3, "tag", e[32], 289,
     3, "tag", e[33], 290,
     2, 481, 294, {"name":"doccomment.type","token":"type"}],
    [e[24], 289,
     "{", 291,
     0, 290],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 290,
     0, 294],
    [2, 481, 292, {"name":"doccomment.type","token":"type"}],
    ["}", 293],
    [e[24], 293,
     3, "def", e[34], 290,
     0, 290],
    ["}", -1],
    [3, "tag", e[32], 296,
     3, "tag", e[33], 300],
    [e[24], 296,
     "{", 297,
     0, 300],
    [2, 481, 298, {"name":"doccomment.type","token":"type"}],
    ["}", 299],
    [e[24], 299,
     3, "def", e[34], 300,
     0, 300],
    [0, 301,
     2, 287, 300, {"name":"doccomment.braced"},
     0, -1],
    [e[35], 302],
    [0, 301,
     0, 300],
    ["\\", 304,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[27], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[37], 306,
     3, "operator", e[38], 306,
     3, "keyword", e[16], 306,
     3, "keyword", e[28], 308,
     3, "keyword", e[4], 314,
     3, "keyword", e[13], 320,
     2, 482, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[40], 325,
     3, "variable", e[17], -1,
     3, "number", e[29], -1,
     2, 147, -1, {"name":"string","token":"string"},
     3, "string-2", e[39], -1,
     1, 158, -1,
     2, 492, -1, {"name":"ArrayLiteral"},
     2, 497, -1, {"name":"ObjectLiteral"},
     2, 502, -1, {"name":"ParenExpr"}],
    [1, 6, 307],
    [1, 305, -1],
    [1, 6, 309],
    [".", 310,
     3, "variable callee", e[40], 311,
     1, 305, -1],
    [1, 6, 312],
    [1, 6, 313],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 375, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 315],
    [3, "keyword", "*", 316,
     0, 316],
    [1, 6, 317],
    [3, "def", e[17], 318,
     0, 318],
    [1, 6, 319],
    [2, 255, -1, {"name":"FunctionDef"}],
    [1, 6, 321],
    [[6, 507], 322,
     0, 323],
    [3, "def type", e[17], 323],
    [1, 6, 324],
    [1, 265, -1],
    [1, 6, 326],
    [2, 375, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[31], 328,
     3, "operator", "!", -1,
     3, "operator", e[41], -1,
     3, "operator", e[42], 330,
     3, "keyword", e[43], 330,
     2, 508, -1, {"name":"ArgList"},
     1, 158, -1,
     ".", 332,
     "[", 336,
     3, "operator", "?", 340],
    [1, 6, 329],
    [1, 184, -1],
    [1, 6, 331],
    [1, 173, -1],
    [1, 6, 333],
    [3, "property callee", e[45], 334,
     3, "property", e[17], -1],
    [1, 6, 335],
    [2, 375, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 337],
    [1, 173, 338],
    [1, 6, 339],
    ["]", -1],
    [1, 6, 341],
    [1, 173, 342],
    [1, 6, 343],
    [3, "operator", ":", 344],
    [1, 6, 345],
    [1, 173, -1],
    [3, "def type", e[17], 347,
     0, -1],
    [1, 6, 348],
    [3, "keyword", e[18], 349,
     0, 350],
    [1, 6, 351],
    [1, 6, 352],
    [1, 184, 350],
    [",", 353,
     0, -1],
    [1, 6, 354],
    [3, "def type", e[17], 355,
     0, 356],
    [1, 6, 357],
    [1, 6, 352],
    [3, "keyword", e[18], 358,
     0, 356],
    [1, 6, 359],
    [1, 184, 356],
    ["(", 361],
    [1, 6, 362],
    [[6, 517], -1],
    ["[", 364],
    [1, 6, 365],
    [1, 218, 366],
    [1, 6, 367],
    ["]", -1],
    [e[17], 369],
    [1, 6, 370],
    [".", -1],
    [1, 305, 372],
    [1, 6, 373],
    [1, 520, 374,
     0, -1],
    [1, 6, 373],
    ["<", 376],
    [1, 6, 377],
    [1, 218, 378],
    [1, 6, 379],
    [">", -1],
    [2, 427, -1, {"name":"ParamList"}],
    [3, "keyword", e[28], 382,
     0, 382,
     0, 388],
    [1, 6, 383],
    [2, 179, 384, {"name":"TypeParams"},
     0, 384],
    [1, 6, 385],
    [2, 427, 386, {"name":"ParamList"}],
    [1, 6, 387],
    [1, 432, -1,
     0, -1],
    [3, "keyword", e[44], 389,
     "[", 390,
     3, "def property", e[17], 391,
     2, 147, 391, {"name":"string","token":"string"},
     3, "number", e[29], 391],
    [1, 6, 388],
    [1, 6, 392],
    [1, 6, 393],
    [e[17], 394],
    [/^\??/, 395],
    [1, 6, 396],
    [1, 6, 397],
    [":", 398],
    [2, 179, 399, {"name":"TypeParams"},
     0, 399,
     0, 400],
    [1, 6, 401],
    [1, 6, 402],
    [1, 6, 403],
    [1, 184, 404],
    [2, 427, 400, {"name":"ParamList"}],
    [1, 432, -1,
     0, -1],
    [1, 6, 405],
    ["]", 406],
    [1, 6, 407],
    [":", 408],
    [1, 6, 409],
    [1, 184, -1],
    [3, "def property", e[17], 411,
     0, -1],
    [1, 6, 412],
    [3, "operator", "=", 413,
     0, 414],
    [1, 6, 415],
    [1, 6, 416],
    [1, 371, 414],
    [",", 417,
     0, -1],
    [1, 6, 418],
    [3, "def property", e[17], 419,
     0, 420],
    [1, 6, 421],
    [1, 6, 416],
    [3, "operator", "=", 422,
     0, 420],
    [1, 6, 423],
    [1, 371, 420],
    [3, "operator", "...", 425,
     0, 425],
    [1, 6, 426],
    [3, "def", e[17], -1,
     2, 539, -1, {"name":"ArrayPattern"},
     2, 544, -1, {"name":"ObjectPattern"}],
    ["(", 428],
    [1, 6, 429],
    [1, 549, 430],
    [1, 6, 431],
    [")", -1],
    [":", 433],
    [1, 6, 434],
    [[5, 581], 435,
     0, 438],
    [3, "variable", e[17], 436],
    [1, 6, 437],
    [3, "keyword", e[47], 438],
    [1, 6, 439],
    [1, 184, -1],
    ["(", 441],
    [1, 6, 442],
    [2, 7, 443, {"name":"Statement"}],
    [1, 6, 444],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 445,
     1, 173, 446,
     0, 446,
     0, 451],
    [1, 6, 447],
    [1, 6, 448],
    [1, 173, 451],
    [";", 449],
    [1, 6, 450],
    [1, 173, 451,
     0, 451],
    [1, 6, 452],
    [")", -1],
    ["{", 454],
    [1, 6, 455],
    [0, 456,
     "@", 457,
     "}", -1],
    [3, "keyword", e[44], 458,
     3, "keyword", e[48], 459,
     0, 459],
    [1, 6, 460],
    [1, 6, 456],
    [1, 6, 461],
    [1, 173, 462],
    [3, "def property", e[17], 463,
     "[", 464,
     3, "number", e[29], 463,
     2, 147, 463, {"name":"string","token":"string"}],
    [1, 6, 455],
    [1, 6, 465],
    [1, 6, 466],
    [3, "keyword", "*", 467,
     0, 467,
     /^\??/, 468],
    [1, 173, 469],
    [1, 6, 470],
    [1, 6, 471],
    [1, 6, 472],
    [2, 255, 462, {"name":"FunctionDef"}],
    [":", 473,
     0, 474],
    ["]", 463],
    [1, 6, 475],
    [1, 6, 476],
    [1, 184, 474],
    [3, "operator", "=", 477,
     0, 478],
    [1, 6, 479],
    [1, 6, 480],
    [1, 173, 478],
    [e[20], 462],
    [1, 584, -1],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 588]], 486,
     [5, 594], 483],
    [2, 427, 484, {"name":"ParamList"}],
    [1, 6, 485],
    [1, 432, 486,
     0, 486],
    [1, 6, 487],
    [2, 599, -1, {"name":"ArrowRest"}],
    [/^ */, 489],
    [1, 602, 490,
     0, 491],
    [/^ */, 491],
    ["(", -1],
    ["[", 493],
    [1, 6, 494],
    [1, 604, 495],
    [1, 6, 496],
    ["]", -1],
    ["{", 498],
    [1, 6, 499],
    [1, 610, 500],
    [1, 6, 501],
    ["}", -1],
    ["(", 503],
    [1, 6, 504],
    [1, 173, 505],
    [1, 6, 506],
    [")", -1],
    [3, "keyword", e[18], -1],
    ["(", 509],
    [1, 6, 510],
    [1, 604, 511],
    [1, 6, 512],
    [")", -1],
    [/^ */, 514],
    [1, 602, 515,
     0, 516],
    [/^ */, 516],
    ["(", -1],
    [")", -1,
     e[17], 518],
    [1, 6, 519],
    [/^[\?\:]/, -1],
    [3, "keyword", e[31], 521,
     3, "operator", "!", -1,
     3, "operator", e[41], -1,
     3, "operator", e[42], 523,
     3, "keyword", e[43], 523,
     2, 508, -1, {"name":"ArgList"},
     1, 158, -1,
     ".", 525,
     "[", 529,
     3, "operator", "?", 533],
    [1, 6, 522],
    [1, 184, -1],
    [1, 6, 524],
    [1, 371, -1],
    [1, 6, 526],
    [3, "property callee", e[45], 527,
     3, "property", e[17], -1],
    [1, 6, 528],
    [2, 375, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 530],
    [1, 173, 531],
    [1, 6, 532],
    ["]", -1],
    [1, 6, 534],
    [1, 173, 535],
    [1, 6, 536],
    [3, "operator", ":", 537],
    [1, 6, 538],
    [1, 371, -1],
    ["[", 540],
    [1, 6, 541],
    [1, 616, 542],
    [1, 6, 543],
    ["]", -1],
    ["{", 545],
    [1, 6, 546],
    [1, 622, 547],
    [1, 6, 548],
    ["}", -1],
    [3, "keyword", e[44], 550,
     e[46], 551,
     0, -1],
    [1, 6, 549],
    [1, 6, 552],
    [1, 424, 553],
    [1, 6, 554],
    [/^\??/, 555],
    [1, 6, 556],
    [":", 557,
     0, 558],
    [1, 6, 559],
    [1, 6, 560],
    [1, 184, 558],
    [3, "operator", "=", 561,
     0, 562],
    [1, 6, 563],
    [1, 6, 564],
    [1, 371, 562],
    [",", 565,
     0, -1],
    [1, 6, 566],
    [3, "keyword", e[44], 567,
     e[46], 568,
     0, 569],
    [1, 6, 566],
    [1, 6, 570],
    [1, 6, 564],
    [1, 424, 571],
    [1, 6, 572],
    [/^\??/, 573],
    [1, 6, 574],
    [":", 575,
     0, 576],
    [1, 6, 577],
    [1, 6, 578],
    [1, 184, 576],
    [3, "operator", "=", 579,
     0, 569],
    [1, 6, 580],
    [1, 371, 569],
    [e[17], 582],
    [1, 6, 583],
    [3, "keyword", e[47], -1],
    [/^(?!\}|\*\/)/, 585,
     0, -1],
    ["{", 586,
     /^[^]/, 584],
    [1, 584, 587],
    [/^\}?/, 584],
    [1, 6, 589],
    [":", 590,
     0, 593],
    [1, 6, 591],
    [1, 184, 592],
    [1, 6, 593],
    ["=>", -1],
    [2, 427, 595, {"name":"ParamList"}],
    [1, 6, 596],
    [1, 432, 597,
     0, 597],
    [1, 6, 598],
    ["=>", -1],
    [3, "operator", "=>", 600],
    [1, 6, 601],
    [2, 169, -1, {"name":"Block"},
     1, 371, -1],
    ["<", 603],
    [1, 602, 603,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 603,
     ">", -1],
    [1, 371, 605,
     0, -1],
    [1, 6, 606],
    [",", 607,
     0, -1],
    [1, 6, 608],
    [1, 371, 609,
     0, 609],
    [1, 6, 606],
    [2, 628, 611, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 612],
    [",", 613,
     0, -1],
    [1, 6, 614],
    [2, 628, 615, {"name":"ObjectMember"},
     0, 615],
    [1, 6, 612],
    [1, 643, 617,
     0, -1],
    [1, 6, 618],
    [",", 619,
     0, -1],
    [1, 6, 620],
    [1, 643, 621,
     0, 621],
    [1, 6, 618],
    [1, 648, 623,
     0, -1],
    [1, 6, 624],
    [",", 625,
     0, -1],
    [1, 6, 626],
    [1, 648, 627,
     0, 627],
    [1, 6, 624],
    [3, "keyword", e[48], 629,
     0, 629],
    [1, 6, 630],
    [3, "def property", e[17], 631,
     "[", 632,
     3, "number", e[29], 631,
     2, 147, 631, {"name":"string","token":"string"},
     3, "operator", "...", 633],
    [1, 6, 634],
    [1, 6, 635],
    [1, 6, 636],
    [3, "keyword", "*", 637,
     0, 637,
     ":", 638,
     0, -1],
    [1, 173, 639],
    [1, 371, -1],
    [1, 6, 640],
    [1, 6, 641],
    [1, 6, 642],
    [2, 255, -1, {"name":"FunctionDef"}],
    [1, 371, -1],
    ["]", 631],
    [1, 424, 644],
    [1, 6, 645],
    [3, "operator", "=", 646,
     0, -1],
    [1, 6, 647],
    [1, 371, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 649,
     3, "property", e[17], 653,
     3, "operator", "...", 657],
    [1, 6, 650],
    [3, "operator", "=", 651,
     0, -1],
    [1, 6, 652],
    [1, 371, -1],
    [1, 6, 654],
    [":", 655],
    [1, 6, 656],
    [1, 643, -1],
    [1, 6, 658],
    [1, 643, -1]
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

  function markLocals(type, scopes, stream, state, once) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (once && scope.locals.indexOf(name) > -1)
          { return "variable-2" }
        scope.locals.push(name);
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                  cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
               cx.name == "AnnotationTypeItem" | cx.name == "ArgExpr") {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
          cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
          cx.parent && bracketed[cx.parent.name])
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }
    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = (function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return TSMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

})));
