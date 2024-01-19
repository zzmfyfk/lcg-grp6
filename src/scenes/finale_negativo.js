let tavola_finale_negativo
let tasto_rigioca;
let img_home;
let tasto_home;
let img_rigioca;
let base_testo_1;
let img_base_testo1;
let testo_tav1;
let img_testo_tav1;
function preload(s) {
    tavola_finale_negativo = PP.assets.image.load(s, "assets/images/finale_negativo.png");
    img_home = PP.assets.image.load(s, "assets/images/tasto_home.png");
    img_rigioca = PP.assets.image.load(s, "assets/images/tasto_rigioca.png");
    img_testo_tav1=PP.assets.image.load(s, "assets/images/testo_finale_negativo.png");
    img_base_testo1=PP.assets.image.load(s, "assets/images/base_testo_finale_negativo.png");
}

function create(s) {

    // una volta scaduto il tempo, esce la tavola
    //per ora è solo uno schizzo
    PP.assets.tilesprite.add(s, tavola_finale_negativo, 0, 0, 0, 0, 0, 0);
    base_testo_1=PP.assets.image.add(s, img_base_testo1, 0,0, 0, 0);
    testo_tav1=PP.assets.image.add(s, img_testo_tav1, 50,130, 0, 0);
    

        //creazione di tasti "home" e "rigioca". 

        tasto_rigioca = PP.assets.image.add(s, img_rigioca,52, 280, 0, 0);
        tasto_home= PP.assets.image.add(s, img_home,20, 20, 0, 0);
        
    
        PP.interactive.mouse.add(tasto_rigioca, "pointerdown", rigioca);
        PP.interactive.mouse.add(tasto_rigioca, "pointerover", over_rigioca);
        PP.interactive.mouse.add(tasto_rigioca, "pointerout", out_rigioca);
        
        PP.interactive.mouse.add(tasto_home, "pointerdown", home);
        PP.interactive.mouse.add(tasto_home, "pointerover", over_home);
        PP.interactive.mouse.add(tasto_home, "pointerout", out_home);

        

}

function rigioca(s) {
    PP.scenes.start("base");
}

function over_rigioca(s) {
    
    tasto_rigioca.geometry.scale_x=1.3;
    tasto_rigioca.geometry.scale_y=1.3;   
    }
    
 function out_rigioca(s) {
    
        tasto_rigioca.geometry.scale_x=1;
        tasto_rigioca.geometry.scale_y=1;   
        }

function home(s) {
    PP.scenes.start("copertina");
}
function over_home(s) {
    
    tasto_home.geometry.scale_x=1.3;
    tasto_home.geometry.scale_y=1.3;   
    }
    
 function out_home(s) {
    
        tasto_home.geometry.scale_x=1;
        tasto_home.geometry.scale_y=1;   
        }

function update(s) {
    //premendo space, si torna alla copertina
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        PP.scenes.start("copertina");
        
    }
    
}

function destroy(s) {

}

PP.scenes.add("finale_negativo", preload, create, update, destroy);