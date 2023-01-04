const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');

class Symbol {
constructor(x, y, fontSize, canvasHeight){  
this.characters = 'メル この暗号化されたメッセージは、いつかこれを読んでくれたあなたへのメッセージです。私は自分のキャリアに集中しているので、あなたに時間を割くことはできませんが、もし運命が将来私たちを一緒にさせたくないのなら、私たちはサヨナラを知っているでしょう。赤ちゃん: v';
this.x = x;
this.y = y;
this.fontSize = fontSize;
this.text = 'A';
this.canvasHeight = canvasHeight;
}
draw(context){
this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
  context.fillStyle = 'white';
context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
this.y = 0;
} 
else { 
this.y += 0.9;
}
}
}

class Effect {
constructor(canvasWidth, canvasHeight){
this.fontSize = 16;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.columns = this.canvasWidth/this.fontSize;
this.symbols = [];
this.#initialize();
}
#initialize(){   
for (let i = 0; i < this.columns; i++){
this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
}
}
resize(width, height){
this.canvasWidth = width;
this.canvasHeight = height;
this.columns = this.canvasWidth/this.fontSize;
this.symbols = [];
this.#initialize();
}
}
 
const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 26;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp){
const deltaTime = timeStamp - lastTime;
lastTime = timeStamp;
if(timer > nextFrame){
ctx.textAlign = 'center';
ctx.fillStyle = 'rgba(27, 28, 35, 0.1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = effect.fontSize + 'px monospace';
ctx.fillStyle = gradient;
effect.symbols.forEach(symbol => symbol.draw(ctx));
} else {
timer += deltaTime;
}
requestAnimationFrame(animate);
}

animate(0);

window.addEventListener('resize', function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
effect.resize(canvas.width, canvas.height);
gradient = createLinearGradient(0,0, canvas.width, canvas.height);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');
})