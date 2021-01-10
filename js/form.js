class Form{
    constructor(){}
    display(){
        var title = createElement('h1');
        title.html("Subway Surfer Game");
        title.position(450,0);

        var input = createInput("");
        input.position(420,150);

        var button = createButton("PLAY");
        button.position(420,200);

        var greeting = createElement('h2')

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playercount = playercount+1;
            player.update(name);
            player.updatecount(playercount)

            greeting.html("Welcome!!! "+name)
            greeting.position(450,250);
        })
    }
}