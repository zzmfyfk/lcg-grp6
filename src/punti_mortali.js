
function create_punti_mortali(s, player) {

    
    
    fondo= PP.shapes.rectangle_add(s, 0, 1300, 20000, 0, "0x000000", 0);
    PP.physics.add(s, fondo, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, fondo, collision_punti_mortali)
    
    acqua = PP.shapes.rectangle_add(s,9000, 955, 4000, 0, "0x008000", 0);
    PP.physics.add(s, acqua, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, acqua, collision_punti_mortali);
}

function collision_punti_mortali(s,player,fondo) {
    console.log("collisione mortale")
    //qui è da inserire un animazione o qualcosa che fa capire che sei "morta" !!
    
    //ora riporto il giocatore al punto iniziale
    player.geometry.x=936;
    player.geometry.y=950;
}