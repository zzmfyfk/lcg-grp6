let img_background;
let img_player;

let img_background_8_2;
let img_background_7_2;
let img_background_6_2;
let img_background_5_2;
let img_background_4_2;
let img_background_3_2;
let img_background_2_2;
let img_background_1_2;

let ts_background_8_2;
let ts_background_7_2;
let ts_background_6_2;
let ts_background_5_2;
let ts_background_4_2;
let ts_background_3_2;
let ts_background_2_2;
let ts_background_1_2;
let pavimentazione_e_ponte_2;
let mercante;

let muroinvisibileinizio;
let muroinvisibilefine;

let player;
let floor;
let floor_1;
let floor_2;
let floor_3;
let txt_score;
let img_pavimentazione_e_ponte_2;
let is_menu_open = false;


let frammento;
let frammenti;
//let frammento_1;
let frammento_2;
//let frammento_3;
let frammento_4;
let frammento_5;
let frammento_6;
let frammento_7;

let menu_open;

let img_book_icon;
let img_book_open;
let img_timer_icon;
let panni_stesi;
let img_panni_stesi;

let img_liang;
let liang;

function preload(s) {
    console.log("Executing preload() - SCENE");

    document.getElementById('loading-screen').style.display = 'block';

    img_liang = PP.assets.image.load(s, "assets/images/Liang_complete.png");


    // Carichiamo gli asset grafici
    // img_background = PP.assets.image.load(s, "assets/images/background.png");
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 99, 150);



    img_background_1_2 = PP.assets.image.load(s, "assets/images/parallax/background_1_2.png");
    img_background_2_2 = PP.assets.image.load(s, "assets/images/parallax/background_2_2.png");
    img_background_3_2 = PP.assets.image.load(s, "assets/images/parallax/background_3_2.png");
    img_background_4_2 = PP.assets.image.load(s, "assets/images/parallax/background_4_2.png");
    img_background_5_2 = PP.assets.image.load(s, "assets/images/parallax/background_5_2.png");
    img_background_6_2 = PP.assets.image.load(s, "assets/images/parallax/background_6_2.png");
    img_background_7_2 = PP.assets.image.load(s, "assets/images/parallax/background_7_2.png");
    img_background_8_2  = PP.assets.image.load(s, "assets/images/parallax/background_8_2.png");




    img_pavimentazione_e_ponte_2 = PP.assets.image.load(s, "assets/images/pavimentazione_e_ponte_2.png");
    img_panni_stesi = PP.assets.image.load(s, "assets/images/panni_stesi.png");




    img_book_icon = PP.assets.image.load(s, "assets/images/menu_book_icon.png");
    img_book_open = PP.assets.image.load(s, "assets/images/menu_book_open_3.png");
    img_timer_icon = PP.assets.image.load(s, "assets/images/timer_icon.png");

    preload_player(s);


    preload_nuvola(s);
    preload_frammenti(s);
    preload_dialogo_indovinello(s);
    preload_dialogo_liang(s);
    preload_dialogo_zia_zhou_2(s);

}

function collider_test(s, a, b) {
    console.log("Player colliding with the box!");
}

function collision_floor(s, player, floor) {
    player.is_on_platform = true;
    player.is_climbing = false;

    //PROVA PER FAR PASSARE DA SOTTO I PAVIMENTI
    if (player.geometry_x < floor_1.geometry_x) {

        player.is_on_platform = false
    }
}

function create(s) {
    console.log("Executing create() - SCENE");

    document.getElementById('loading-screen').style.display = 'none';

    player = PP.assets.sprite.add(s, img_player, 1450, 1393, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);

    ts_background_1_2 = PP.assets.tilesprite.add(s, img_background_1_2, 0, -400,12000, 1590, 0, 0);
    ts_background_2_2 = PP.assets.tilesprite.add(s, img_background_2_2, 0, 0, 12000, 1590, 0, 0);
    ts_background_3_2 = PP.assets.tilesprite.add(s, img_background_3_2, 0, 0, 12000, 1590, 0, 0);
    ts_background_4_2 = PP.assets.tilesprite.add(s, img_background_4_2, 0, 0, 12000, 1590, 0, 0);
    ts_background_5_2 = PP.assets.tilesprite.add(s, img_background_5_2, 0, 0, 12000, 1590, 0, 0);
    ts_background_6_2 = PP.assets.tilesprite.add(s, img_background_6_2, 0,0, 12000, 1590, 0, 0);
    ts_background_7_2 = PP.assets.tilesprite.add(s, img_background_7_2, 0,-110, 12000, 1590, 0, 0);
    ts_background_8_2 = PP.assets.tilesprite.add(s, img_background_8_2, 0,0, 12000, 1590, 0, 0);
    
    


    // Disabilitiamo il tilesprite scroll factor per tutti i background (lo gestiremo manualmente)

    ts_background_2_2.tile_geometry.scroll_factor_x = 0;
    ts_background_1_2.tile_geometry.scroll_factor_x = 0;
    ts_background_3_2.tile_geometry.scroll_factor_x = 0;
    ts_background_4_2.tile_geometry.scroll_factor_x = 0;
    ts_background_5_2.tile_geometry.scroll_factor_x = 0;
    ts_background_6_2.tile_geometry.scroll_factor_x = 0;
    ts_background_7_2.tile_geometry.scroll_factor_x = 0;
    ts_background_8_2.tile_geometry.scroll_factor_x = 0;

    //creo separatamente elementi che dovranno stare in primo piano:
    pavimentazione_e_ponte_2 = PP.assets.image.add(s, img_pavimentazione_e_ponte_2, 0, 0, 0, 0);
    panni_stesi = PP.assets.image.add(s, img_panni_stesi, 0, 0, 0, 0);

    //creo un livello specifico per il player, e setto z-index1, così che rimanga in primo piano rispetto agli altri personaggi 
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, panni_stesi);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 1);

    //creo un altro livello per ciò che deve stare in primo piano rispetto al player
    let layer_1 = PP.layers.create(s);
    PP.layers.add_to_layer(layer_1, pavimentazione_e_ponte_2);
    PP.layers.set_z_index(layer_1, 2);







    // Creiamo la pavimentazione:

    floor = PP.shapes.rectangle_add(s, 570, 1413.5, 30, 1, "0x000000", 0); // prima piattaformina
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 597, 1401.5, 30, 1, "0x000000", 0); // seconda piattaformina
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 1219.5, 1392.5, 1209, 1, "0x000000", 0); // prima piattaforma
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 1840.5, 1401.5, 33, 1, "0x000000", 0); // terza piattaformina
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 1872.5, 1413.5, 33, 1, "0x000000", 0); // quarta piattaformina
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor_1 = PP.shapes.rectangle_add(s, 3675, 1401.5, 1668, 1, "0x008000", 0); // rocce prima del ponte
    PP.physics.add(s, floor_1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_1, collision_floor);

    floor_1 = PP.shapes.rectangle_add(s, 8398.5, 1413.5, 4251, 1, "0x008000", 0); // rocce dopo il ponte
    PP.physics.add(s, floor_1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_1, collision_floor);

    floor_2 = PP.shapes.rectangle_add(s, 7471, 945, 141, 1, "0x008000", 0); //ed piano 1 sx
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_2 = PP.shapes.rectangle_add(s, 8001, 945, 648, 1, "0x008000", 0); //ed piano 1 dx
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_2 = PP.shapes.rectangle_add(s, 7864, 510, 921, 1, "0x008000", 0); //ed piano 2
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_2 = PP.shapes.rectangle_add(s, 7864, 79, 921, 1, "0x008000", 0); //ed piano 2
    PP.physics.add(s, floor_2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    //creo i confini del livello
    muroinvisibileinizio = PP.shapes.rectangle_add(s, 1210, 648, 1, 1296, "0x000000", 0);
    PP.physics.add(s, muroinvisibileinizio, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muroinvisibileinizio, collision_muroinvisibile);

    muroinvisibilefine = PP.shapes.rectangle_add(s, 9835, 648, 1, 1296, "0x000000", 0);
    PP.physics.add(s, muroinvisibilefine, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muroinvisibilefine, collision_muroinvisibile);


    configure_player_animations(s, player); // Impostazione animazioni giocatore

    create_platform(s, player);

    create_personaggi(s, player);

    //overlap_frammenti(s, player, frammento_1);



    create_nuvola(s, player);
    create_frammenti(s, player);
    //mercante overlap   


    //collision_frammenti (s, player, frammento);
    //collision_frammento1(s, player, frammento_1);

    //creo le scale dell'edificio
    create_scala_pioli_2(s, player);




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

    create_dialogo_indovinello(s, player);
    create_dialogo_liang(s, player);

    //console.log(frammento_2)
    create__dialogo_zia_zhou_2(s, player);



    //creiamo l'interfaccia di menu:
    let menu_cliccabile = PP.assets.image.add(s, img_book_icon, 1220, 8, 0, 0);
    menu_cliccabile.tile_geometry.scroll_factor_x = 0;
    menu_cliccabile.tile_geometry.scroll_factor_y = 0;

    PP.interactive.mouse.add(menu_cliccabile, "pointerdown", clicco_menu);
    menu_open = PP.assets.image.add(s, img_book_open, 90, 60, 0, 0);
    menu_open.visibility.alpha = 0;
    menu_open.tile_geometry.scroll_factor_x = 0;
    menu_open.tile_geometry.scroll_factor_y = 0;
    let layer_menu_open = PP.layers.create(s);
    PP.layers.add_to_layer(layer_menu_open, menu_open);
    PP.layers.set_z_index(layer_menu_open, 2);



}

function clicco_menu(s) {
    if (!is_menu_open) {
        menu_open.visibility.alpha = 1;
        is_menu_open = true;
        player_speed = 0;
        jump_init_speed = 0;
        console.log("ismenuOpen: ", is_menu_open);
    } else {
        menu_open.visibility.alpha = 0;
        is_menu_open = false;
        player_speed = 250;
        jump_init_speed = 200;
        console.log("ismenuOpen: ", is_menu_open);
    }
}


function collision_muroinvisibile(s, player, muroinvisibile) {
    player.is_on_muroinvisibile = true;
}

function update(s) {
    // Azioni che vengono eseguite a ogni frame del gioco

    manage_player_update(s, player);    // Posizione del giocatore e animazioni

    //update_frammenti (s, frammenti);               // Azioni funghetti
    //update_frammento1(s, player);
    update_frammento2(s, player);
    //update_frammento3(s, player);
    update_frammento4(s, player);
    update_frammento5(s, player);
    update_frammento6(s, player);
    update_frammento7(s, player);
    update_nuvola(s);


    // Aggiorno il punteggio visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));

    ts_background_8_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1;
    ts_background_7_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.9;
    ts_background_6_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.8; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_5_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.7; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_4_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.6; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_3_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.5;
    ts_background_2_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.4; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_1_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 0.3;




    update_dialogo_indovinello(s, player, mercante_indovinello);
    update_dialogo_liang(s, player, liang);
    update_dialogo_zia_zhou_2(s, player, zia2);

    let currentScore = PP.gameState.get_variable("score");
    if (currentScore >= 70 && !dialogoLiangStarted) {
        dialogoLiangStarted = true;
        preload_dialogo_liang(s);
        create_dialogo_liang(s, player); // 假设 'player' 是当前场景中玩家对象的引用
        console.log("Dialogo Liang started.");
    }

    if (dialogoLiangStarted) {
        update_dialogo_liang(s, player);
    }


}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);
