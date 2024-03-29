let img_background;
let img_player;
let img_background_3;
//let img_background_2;
//let img_background_1;

//let img_background_8_2;
let img_background_7_2;
let img_background_6_2;
let img_background_5_2;
let img_background_4_2;
let img_background_3_2;
let img_background_2_2;
let img_background_1_2;

//let ts_background_8_2;
let ts_background_7_2;
let ts_background_6_2;
let ts_background_5_2;
let ts_background_4_2;
let ts_background_3_2;
let ts_background_2_2;
let ts_background_1_2;
let ts_background_3;
//let ts_background_2;
//let ts_background_1;
let mercante;
let muroinvisibileinizio;
let muroinvisibilefine;

let ringhiere;
let img_ringhiere;

let giadaCount = 0;
let player;
let floor;
let floor_1;
let floor_2;
let floor_3;
let floor_4;
let floor_5;
let floor_6;
let floor_7;

let txt_score;

let is_menu_open = false;

let menu_open;

let img_book_icon;
let img_book_open;
let img_timer_icon;

let ponte_iniziale;
let img_ponte_iniziale_1;

function preload(s) {
    console.log("Executing preload() - SCENE");
    document.getElementById('loading-screen').style.display = 'block';

    // Carichiamo gli asset grafici
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 99, 150);
    img_ponte_iniziale_1  = PP.assets.image.load(s, "assets/images/ponte_iniziale_1.png");
    img_ringhiere  = PP.assets.image.load(s, "assets/images/ringhiere_livello_1.png");

    //Per lo sfondo:
    //img_background_1 = PP.assets.image.load(s, "assets/images/parallax/background_1.png");
    //img_background_2 = PP.assets.image.load(s, "assets/images/parallax/background_2.png");
   
    
    img_background_1_2 = PP.assets.image.load(s, "assets/images/parallax/background_1_2.png");
    img_background_2_2  = PP.assets.image.load(s, "assets/images/parallax/background_2_2.png");
    img_background_3_2 = PP.assets.image.load(s, "assets/images/parallax/background_3_2.png");
    img_background_4_2  = PP.assets.image.load(s, "assets/images/parallax/background_4_2.png");
    img_background_5_2 = PP.assets.image.load(s, "assets/images/parallax/background_5_2.png");
    img_background_6_2  = PP.assets.image.load(s, "assets/images/parallax/background_6_2.png");
    img_background_7_2 = PP.assets.image.load(s, "assets/images/parallax/background_7_2.png");
    img_background_3 = PP.assets.image.load(s, "assets/images/parallax/background_3.png");

    //Per l'interfaccia:
    img_book_icon = PP.assets.image.load(s, "assets/images/menu_book_icon.png");
    img_book_open = PP.assets.image.load(s, "assets/images/menu_book_open.png");
    img_timer_icon   = PP.assets.image.load(s, "assets/images/timer_icon.png");

    

    //Altri elementi di gioco:
    preload_nuvola(s);
    preload_giada(s);
    preload_barca(s);
    preload_cassa(s);
    

    preload_lanterna(s);
    
    preload_dialogo1(s);
    preload_dialogo2(s);
    preload_dialogo_zia1(s);

}

function collider_test(s, a, b) {
    console.log("Player colliding with the box!");
}

function collision_floor(s, player, floor) {
    player.is_climbing = false;
    player.is_on_platform = true;
}

function collision_muroinvisibile(s, player, muroinvisibile) {
    player.is_on_muroinvisibile = true;
}

function collision_barca(s, player, barca) {
            player.is_on_barca = true;
    }

function create(s) {
    console.log("Executing create() - SCENE");

    document.getElementById('loading-screen').style.display = 'none';

    // Inseriamo background e giocatore
    ts_background_1_2 = PP.assets.tilesprite.add(s, img_background_1_2, 0, - 800,12000, 1590, 0, 0);
    ts_background_2_2 = PP.assets.tilesprite.add(s, img_background_2_2, 0, -400, 12000, 1590, 0, 0);
    ts_background_3_2 = PP.assets.tilesprite.add(s, img_background_3_2, 0, -400, 12000, 1590, 0, 0);
    ts_background_4_2 = PP.assets.tilesprite.add(s, img_background_4_2, 0, -400, 12000, 1590, 0, 0);
    ts_background_5_2 = PP.assets.tilesprite.add(s, img_background_5_2, 0, -400, 12000, 1590, 0, 0);
    ts_background_6_2 = PP.assets.tilesprite.add(s, img_background_6_2, 0,-400, 12000, 1590, 0, 0);
    ts_background_7_2 = PP.assets.tilesprite.add(s, img_background_7_2, 0,-510, 12000, 2000, 0, 0);
   // ts_background_1 = PP.assets.tilesprite.add(s, img_background_1, 0, 0, 10800, 1296 , 0, 0);
   // ts_background_2 = PP.assets.tilesprite.add(s, img_background_2, 0, 93,  10800, 1203  , 0, 0);
    ts_background_3 = PP.assets.tilesprite.add(s, img_background_3, 0, -252, 10800, 1800, 0, 0);

    // Disabilitiamo il tilesprite scroll factor per tutti i background (lo gestiremo manualmente)
    ts_background_2_2.tile_geometry.scroll_factor_x = 0;
    ts_background_1_2.tile_geometry.scroll_factor_x = 0;
    ts_background_3_2.tile_geometry.scroll_factor_x = 0;
    ts_background_4_2.tile_geometry.scroll_factor_x = 0;
    ts_background_5_2.tile_geometry.scroll_factor_x = 0;
    ts_background_6_2.tile_geometry.scroll_factor_x = 0;
    ts_background_7_2.tile_geometry.scroll_factor_x = 0;
    ts_background_3.tile_geometry.scroll_factor_x = 0;
    //ts_background_2.tile_geometry.scroll_factor_x = 0;
    //ts_background_1.tile_geometry.scroll_factor_x = 0;


    ponte_iniziale = PP.assets.image.add(s, img_ponte_iniziale_1, 0, 0, 0, 0);
   


    player = PP.assets.sprite.add(s, img_player, 936, 1518, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
     ringhiere = PP.assets.image.add(s, img_ringhiere, 0, 0, 0, 0);

    //creo un livello specifico per il player, e setto z-index1, così che rimanga in primo piano rispetto agli altri personaggi
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.add_to_layer(layer_player,ringhiere);
    PP.layers.set_z_index(layer_player, 1);

    //Creiamo i pavimenti:
    floor = PP.shapes.rectangle_add(s, 825, 964, 1650, 1, "0x000000", 0); //prima parte pavimento iniziale
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor_1 = PP.shapes.rectangle_add(s, 2190, 964, 780, 1, "0x008000", 0); //seconda parte pavimento iniziale
    PP.physics.add(s, floor_1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_1, collision_floor);


    floor_2 = PP.shapes.rectangle_add(s, 3694, 862, 1875, 0, "0x008000", 0); //pavimento dopo ponte pt 1
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_3 = PP.shapes.rectangle_add(s, 9496, 828, 879, 1, "0x008000", 0); //pavimento piattaforma finale
    PP.physics.add(s, floor_3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_3, collision_floor);

    floor_4 = PP.shapes.rectangle_add(s, 2005, 1143, 1191, 1, "0x008000", 0); //pavimento sotto 1
    PP.physics.add(s, floor_4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_4, collision_floor);


    floor_5 = PP.shapes.rectangle_add(s, 5536, 1122, 2553, 1, "0x008000", 0); //pavimento basso dopo ponte 1
    PP.physics.add(s, floor_5, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_5, collision_floor);

    floor_6 = PP.shapes.rectangle_add(s, 7915, 861, 219, 1, "0x008000", 0); //pavimento dopo ponte rotto
    PP.physics.add(s, floor_6, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_6, collision_floor);

    floor_7 = PP.shapes.rectangle_add(s, 6051, 862, 2574, 0, "0x008000", 0); //pavimento dopo ponte pt2
    PP.physics.add(s, floor_7, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_7, collision_floor);

    

    //Creiamo i confini inizili e finali del primo livello:

    muroinvisibileinizio = PP.shapes.rectangle_add(s, 640, 648, 1, 1296, "0x000000", 0);
    PP.physics.add(s, muroinvisibileinizio, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muroinvisibileinizio, collision_muroinvisibile);

    muroinvisibilefine = PP.shapes.rectangle_add(s, 9960, 648, 1, 1296, "0x000000", 0);
    PP.physics.add(s, muroinvisibilefine, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muroinvisibilefine, collision_muroinvisibile);






    create_nuvola (s, player);

    configure_player_animations(s, player); // Impostazione animazioni giocatore

    create_giada(s, player);            // Creazione funghetti

    create_platform(s, player);

    create_barca(s, player);

    create_scala(s, player);

    create_scala_pioli(s, player);

    create_punti_mortali(s, player);

    collision_punti_mortali(s, player, fondo);
    
    create_cassa(s, player, cassa);
 
    

    create_dialogo1(s, player);

    create_dialogo2(s, player);

    create_lanterna(s, player, lanterna);
    
    create_dialogo_zia1(s,player);



    // Creo una variabile per lo "score" della scena
    PP.gameState.set_variable("score", 0);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "Score: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    // Impostiamo il testo in alto a sx in modo che non si muova
    // con la camera (essendo HUD deve rimanere fisso)
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;
    txt_score.ph_obj.setVisible(false);

    // Impostiamo la camera che segua il giocatore
    PP.camera.start_follow(s, player, 0, 220);


    //Creo elementi dell'interfaccia (menu cliccabile e timer)
    let menu_cliccabile = PP.assets.image.add(s, img_book_icon,1220, 8, 0, 0);
    menu_cliccabile.tile_geometry.scroll_factor_x = 0;
    menu_cliccabile.tile_geometry.scroll_factor_y = 0;

    PP.interactive.mouse.add(menu_cliccabile, "pointerdown", clicco_menu);
    menu_open = PP.assets.image.add(s, img_book_open,90, 60, 0, 0);
    menu_open.visibility.alpha = 0;
    menu_open.tile_geometry.scroll_factor_x = 0;
    menu_open.tile_geometry.scroll_factor_y = 0;
    let layer_2 = PP.layers.create(s);
    PP.layers.add_to_layer(layer_2, menu_open);
    PP.layers.add_to_layer(layer_2, ponte_iniziale);
    PP.layers.set_z_index(layer_2, 4);

    let timer_icon=PP.assets.image.add(s, img_timer_icon, 100, -1, 0, 0);
    timer_icon.tile_geometry.scroll_factor_x = 0;
    timer_icon.tile_geometry.scroll_factor_y = 0;

    //creo meccanismo del timer
    create_timer(s, player);


}

function clicco_menu(s) {
    if (!is_menu_open) {
        menu_open.visibility.alpha = 1;
        is_menu_open = true;
        player_speed=0;
        jump_init_speed=0;
        console.log("ismenuOpen: ", is_menu_open);
    }else {
        menu_open.visibility.alpha = 0;
        is_menu_open = false;
        player_speed=250;
        jump_init_speed=200;
        console.log("ismenuOpen: ", is_menu_open);
    }
}

function update(s) {
    // Azioni che vengono eseguite a ogni frame del gioco

    manage_player_update(s, player);    // Posizione del giocatore e animazioni

    update_giada(s);                // Giade

    update_barca(s);

    update_dialogo1(s, player, genitori);

    update_dialogo2(s, player, mercante);

    update_cassa(s, player);

    update_vaso(s, player);

    update_dialogo_zia1(s,player);
    
    update_nuvola(s, player);

    update_lanterna (s, player);


    // Aggiorno il punteggio delle giade visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));


    ts_background_3.tile_geometry.x = PP.camera.get_scroll_x(s) * 1;
   // ts_background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.5; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
   // ts_background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.3; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_7_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.9;
    ts_background_6_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.8; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_5_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.7; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_4_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.6; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_3_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.5;
    ts_background_2_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.4; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_1_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.3;

}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);

//funzioni per il calcolo delle giade:
function endLevel() {
    // This function will be called when the timer ends
    checkGiadasAndTransition(this);  // 'this' refers to the scene
}

function collectGiada(player, giada) {
    giadaCount++;
    // ...existing collection code...
}

function checkGiadasAndTransition(scene) {
    // Check if all Giadas have been collected
    if (giadaCount >= 0 && giadaCount <= 3) {
        // If Giadas are between 0 and 3
        scene.scene.start('LevelX1');  // Replace 'LevelX1' with the actual scene name for this range
    } else if (giadaCount > 3 && giadaCount <= 8) {
        // If Giadas are between 4 and 8
        scene.scene.start('LevelX2');  // Replace 'LevelX2' with the actual scene name for this range
    } else if (giadaCount > 8 && giadaCount <= 10) {
        // If Giadas are between 9 and 10
        scene.scene.start('LevelX3');  // Replace 'LevelX3' with the actual scene name for this range
    } else {
        // In case the count doesn't fit any range, consider adding a default transition or handling
        console.log("Giada count doesn't fit any expected range.");
    }
}
