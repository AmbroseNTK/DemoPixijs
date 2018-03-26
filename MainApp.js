PIXI.utils.sayHello("Hello World");

var app= new PIXI.Application(800,600,{backgroundColor:0x10099bb});
document.body.appendChild(app.view);

var container = new PIXI.Container();
app.stage.addChild(container);

var settingTexture = PIXI.Texture.fromImage("assets\\textures\\Settings_48px.png");

for(let i=0;i<25;i++) {
    var sprite = new PIXI.Sprite(settingTexture);
    sprite.anchor.set(0.5);
    sprite.width+=100;
    sprite.height+=100;

    sprite.x = (i%5)*120;
    sprite.y = Math.floor(i/5)*120;

    container.addChild(sprite);
}
app.ticker.add(function(delta){
    for(let i=0;i<25;i++){
        container.getChildAt(i).rotation+=0.1*delta;
    }
});

container.x = (app.screen.width - container.width+100)/2;
container.y = (app.screen.height - container.height+100)/2;
