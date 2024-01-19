WebFont.load({
    google: {
        families: ['Pixelify+Sans']
    },
    active: function() {
        // Inizializza il gioco Phaser qui
        var config = {
            canvas_width: 1280,
            canvas_height: 720,
            canvas_id: "game_area", // Specifica il div contenitore
            background_color: 0x000000,
            debug_mode: false,
            gravity_value: 300,
        };

        PP.game.create(config);
        // Altre inizializzazioni se necessario
    }
});