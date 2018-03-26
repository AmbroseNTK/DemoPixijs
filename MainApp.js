PIXI.utils.sayHello("Hello World");

var app= new PIXI.Application(800,600,{backgroundColor:0x10099bb});
document.body.appendChild(app.view);


var settingObject = PIXI.Sprite.fromImage("assets\\textures\\Settings_48px.png");
settingObject.anchor.set(0.5);
settingObject.width+=100;
settingObject.height+=100;
settingObject.x=app.screen.width/2;
settingObject.y=app.screen.height/2;
app.stage.addChild(settingObject);
app.ticker.add(function(delta){
    settingObject.rotation+=0.1*delta;
});
