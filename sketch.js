let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine:engine
});

let ground = Matter.Bodies.rectangle(400, 600, 800, 100, { isStatic: true});
let boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
let boxB = Matter.Bodies.rectangle(450, 50, 80, 80);


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }

});

render.mouse = mouse;

Matter.World.add(engine.world, [boxA, boxB, ground, mouseConstraint])
Matter.Engine.run(engine);
Matter.Render.run(render);



let platform = Matter.Bodies.rectangle(1200, 500, 300, 20, { isStatic:true});
let stack = Matter.Composites.stack(1100, 270, 4, 4, 0, 0, function(x, y) {
    return Matter.Bodies.polygon(x, y, 8, 30)
});

