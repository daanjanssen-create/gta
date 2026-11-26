
player.onChat("stad", function () {
    // Wegen
    blocks.fill(
        BLOCKS.GRAY_CONCRETE,
        pos(-40, 0, -40),
        pos(40, 0, 40),
        FillOperation.Replace
    )

    // Eerste wolkenkrabber
    blocks.fill(
        BLOCKS.WHITE_CONCRETE,
        pos(-15, 1, -15),
        pos(-5, 20, -5),
        FillOperation.Replace
    )

    // Tweede gebouw
    blocks.fill(
        BLOCKS.GRAY_CONCRETE,
        pos(10, 1, -15),
        pos(22, 12, -3),
        FillOperation.Replace
    )

    // Politiebureau
    blocks.fill(
        BLOCKS.BLUE_CONCRETE,
        pos(-25, 1, 15),
        pos(-10, 7, 25),
        FillOperation.Replace
    )

    // Ziekenhuis
    blocks.fill(
        BLOCKS.WHITE_CONCRETE,
        pos(10, 1, 15),
        pos(25, 10, 30),
        FillOperation.Replace
    )

    player.say("Welkom in GTA City!")
})
