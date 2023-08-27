// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a001e00010606060606060606040700000000000000000807060606060606060008070000000000000000080700060606060606060807000000000000000008090606060606060600080900000000000000000809060606060006060608090000000000000000080900060606060606000809000000000000000008090606060600000000080900000000000000000809060600000000000608090000000000000000080900000606060606000809000000000000000008090606000606060606080900000000000000000809000000000000000008090000000000000000080900000000000000000809000000000000000008090000000000000000080906060606060606000809000000000000000008090006060606060606080900000000000000000803050505050505050502`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 2 2 2 2 . 2 2 2 2 
2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 2 2 2 2 . . . . 2 
2 . . . . . . . . 2 
2 2 2 . . . . . 2 2 
2 . . . . . . . . 2 
2 . . 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 2 2 . 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0020000202020202020202020201000000000000000001010000000000000000010109050700000905070101000000000000000001010000000907000000010100000000000000000101000000000000000001010000000000090507010109050700000000000101000000000006000001010000000006000000010100000000000000000101000905050505070001020000000000000000020300000000090507000303000905000000000003030000000000000000030300000000090507000303000000000000000003030905050700000000030300000000000905070303000000000000000003030009050700000000030300000000000000000303000000000009070003030000000000000000030300000905070000000303000000000000000003030000000000000000030300000000000000000308040404040404040408`, img`
2222222222
2........2
2........2
2222..2222
2........2
2...22...2
2........2
2........2
2.....2222
2222.....2
2.....2..2
2....2...2
2........2
2.222222.2
2........2
2....222.2
2.22.....2
2........2
2....222.2
2........2
22222....2
2.....2222
2........2
2.222....2
2........2
2.....22.2
2........2
2..222...2
2........2
2........2
2........2
2222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.shrub,sprites.castle.saplingOak,sprites.builtin.forestTiles22,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4,sprites.builtin.forestTiles3,sprites.castle.saplingPine,sprites.builtin.forestTiles1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
