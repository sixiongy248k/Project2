var GAME_LEVELS = [
  ["                              ",
   "  @                           ",
   "  xxxx   p  x   x  xxxx  x    ",
   "  x   x      x x   x     x    ",
   "  xxxx   x    x    xxxx  x    ",
   "  x      x   x x   x     x    ",
   "  x      x  x   x  xxxx  xxx  ",
   "                              ",
   "   xx         xxxx  xx    x   ",
   "  x  x  x  x  x    x      x   ",
   "  x  x  x  x  xxxx  xx   xxx  ",
   "  x  x  x  x  x       x   x   ",
   "   xx x  xx   xxxx  xx     !  ",
   "                              ",
   "                              ",
   "                              ",
   "                              ",
   "                              ",
   "                              ",
   "                              ",
   "            ooo               ",
   "            xxx               ",
   "                              "],
  ["                                                                                ",
   "            v  v   pooooooooooooooooooooooooooooooooooooooooooooooooooooo       ",
   "                   xx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       ",
   "                                                                                ",
   "                      ooo                                                       ",
   "                   xxxxxxx                                                      ",
   "              x    *  *    xx                               x     xxx           ",
   "                      *      x       p                x   xxx    xx|xx          ",
   "           x       *           x    ooo      xx!!x   xx     !    x!=!x          ",
   "                    *                                       !    xx!xx          ",
   "                  x *x             xxxxx                    |     x!x           ",
   "                       x                                           |      o     ",
   "      xx x          *                 xx                                  o  p  ",
   "   ooxp                 x                                                 o  x  ",
   "   oo                    x    x   xxx       x  x                          x  x  ",
   "           x xx x                               xx            oo     x    x! x  ",
   " x@       x      x   *                                               x    x!!x  ",
   " xxxxxxxxxx!!!!!!xx   *   xxxxx   xxxxxxxxxxxx     xxx  x  x|xxxxxxxxx !!!x!!x  ",
   " x!!!!!!!!!!!!!!!!!!=     !!xxx |  xxx          x   x      x!                   ",
   "                              x!!!xx         !x      x!!!!!x!                   ",
   "                              x=|=x          x       x!!!!!x!                   ",
   "                              xxxxx    xxxx          xxxxxxx!                   ",
   "                                                                                ",
   "                                                                                "],
  ["                     *          ooo                                                      *     ",
   "   ooo                         *xxxx                                                           ",
   "   xxxx oo                       * oo                   ooo   p                                ",
   "        xxx                         xxxx                  *xxxx                                ",
   "            x          xxxx                x         o                               p         ",
   "                oooo                                 x                                         ",
   "                o xx                       xxx                       xxx      oooooooo         ",
   "                xxxxx                   xxxxxxxx                              xxxxxxxx         ",
   "     oooo                          xxx      xxx                                                ",
   "     oooo                     p                    xxxxx                   x                x  ",
   "     xxxx                          xoooooooooooooo    xx          ooooo                        ",
   "  @xxxxxxxx    xx   xx    xxxxx    xxxxoooooooooooox           xxxxxxxxxxx           xx        ",
   "xxxxxxx=  !!!!!!!!!!!!!!!!!     = xxxxxxxxxoooooxxxxxxx     x   ==                             ",
   "                       xxxx    *      xxxxooooxxxxxxxxxxxx   |        *                        ",
   "                                     *  xxxxxxxxx              *                       oooo    ",
   "                                                   *                                    xxxx   ",
   "                                                                                               ",
   "                                                                                               ",
   "                                                                                 x             ",
   "                        =       ooo                      p                    x                ",
   "                          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                   ",
   "                          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                   ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
   ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
    " xx== ====x x xx x x x x x x x x  xxxx   ==   x  xxxx x x x ======    x x x x  xx x xx         ======= x x* ",
    " x xx x*xx*x*xx*x x x xx x x xx x x x x*x x x x x xx  x xxx x x x x x x x x *xx  x x x x x x*x xx*x  x x x x",
    "                             xxxxx        x         xxxx*            xxxx        xxx                    xx  ",
    "                              ** xx               x                                      xx        xxxx **  ",
    "                                              x   x                                                         ",
    "                                             xxxxxxx         ooo                                            ",
    "                                           xxxxxxxxx         xxx                                oooo        ",
    "                                        xxxxxx*          x     *                              xxxxxx        ",
    "                                        *                p                        ooooooo                   ",
    "                                                  @                               xxxxxxxx                  ",
    "                                                  xx                                                        ",
    "                                       xxxxxxxxx  xxxxx             ooo                                     ",
    "                                xxxxxxxxxxxxxxx    xxxxxxxxx         ooo                                    ",
    "                              xxxxxxxxxxxxxxx     xxxxxxx          xxxx                     p  ooo          ",
    "                        xxxxxxxxxxxxxxxxxxxxxxxx    xxxxx    p               x      x   x    xxxxx          ",
    "                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxooxxxxxxxxxxxx                                              ",
    "   ooo  p                            *         xoox                 *                    *         *        ",
    " ooooo  xx                                      oo                         oo                               ",
    " ooooo  **      ooo             x     ooooo                             x xxxx        xx                    ",
    " !xxx!                                xxxxx   xxxxxx                                                        ",
    " xxxxx          xxx=      x          xxxxxx xxx!!!!!!x!!!!!! xx               x    x            xxxxx       "],
    ["                                                                                                            ",
     "o        @                                                                                o                o",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "x        =           =                      =           =                        xxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "x  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx            *        **   o   ",
     "x                                ooo                            p                                         xx",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                               x    x          ooo          ",
     "x x  xxxxxxxxxxx       ***     ***   x  ***x  x   v  x  x    x    xxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxoox",
     "x x                                                          xoox               xxx                     xxxx",
     "x x  ooooooooooooooo                             xxxxxxx    xxxx xxxxxxxxxx                   p         x  x",
     "x                                                   * v    x x   x    x x x         ooooooooooooooooooooo  x",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx             x x   x x  x x x         ooooooooooooooooooooo  x",
     "x  xxxxx     x                          v                  x x       x   x          ooooooooooooooooooooo   ",
     "x          x      oooo       !!!                           x xxxxxxxx xxx x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "x xxxx   x         xxxxxx                       !!!       xx oooooo     xox           ==                    ",
     "x                                   p                     vx oooooo  x        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "x   xxxx                    xxxxxxxxxxx                    xxoooooo xxxxx                             x     ",
     "x            !!!!!                                          xxxxxx x  x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "x     oooo                                xxxxxx                      x     x    xxx  o  o  o       x       ",
     "x xxxxxxxxxx             ooooooo                                                                    x       ",
     "x                      xxxxxxxxxxxxx                                                               ====     ",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "============================================================================================================"],
    ["                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                     xxxx   ",
     "                    x     x         xxxxx          x     x      x         x     xxxxx      xxxxxx    xxxx   ",
     "                     x   x         x     x         x     x       x       x     x     x     x    x     xx    ",
     "                      x x          x     x         x     x       x   x   x     x     x     x    x     xx    ",
     "                       x           x     x         x     x        x x x x      x     x     x    x           ",
     "                       x            xxxxx           xxxxx          x   x        xxxxx      x    x     xx    ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "                                                                                                            ",
     "x@ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooox",
     "xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxxpxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpxxxxxxxxxxxpxxxxxxxxxxxxxxxxxxxxxpxxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
