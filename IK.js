var c = document.getElementById("mainCanvas")
var ctx = c.getContext("2d");
ctx.translate(c.width/2, c.height/2);
ctx.scale(1, -1);


addEventListener("mousemove", (event)=> {
    var rect = c.getBoundingClientRect();
    var xg = (event.clientX - rect.left - 640) /8
    var yg = (360 - (event.clientY - rect.top))/8;


    a1 = 30
    a2 = 30

    

    if (Math.sqrt(xg**2 + yg**2) <= (a1 + a2)) {
        
        var q2a = Math.acos((xg**2 + yg**2 - a1**2 - a2**2)/(2 * a1 * a2))
        var q2b = -1 * Math.acos((xg**2 + yg**2 - a1**2 - a2**2)/(2 * a1 * a2))

        var q1a = Math.atan2(yg,xg) - Math.atan2(a2*Math.sin(q2a), a1 + (a2*Math.cos(q2a)))
        var q1b = Math.atan2(yg,xg) - Math.atan2(a2*Math.sin(q2b), a1 + (a2*Math.cos(q2b)))

        var x1a = a1 * Math.cos(q1a)
        var y1a = a1 * Math.sin(q1a)

        var x1b = a1 * Math.cos(q1b)
        var y1b = a1 * Math.sin(q1b)

        ctx.clearRect(-c.width/2,-c.height/2, c.width, c.height)

        //solution a
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(x1a * 8, y1a * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x1a * 8,y1a * 8);
        ctx.lineTo(xg * 8, yg * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        //solution b
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(x1b * 8, y1b * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(x1b * 8,y1b * 8);
        ctx.lineTo(xg * 8, yg * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        //dots

        ctx.beginPath();
        ctx.arc(x1a * 8, y1a * 8, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x1b * 8, y1b * 8, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(xg * 8, yg * 8, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();

    } else {

        xp = xg * ((a1+a2)/(Math.sqrt(xg**2 + yg**2)))
        yp = yg * ((a1+a2)/(Math.sqrt(xg**2 + yg**2)))

        ctx.clearRect(-c.width/2,-c.height/2, c.width, c.height)

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(xp/2 * 8, yp/2 * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(xp/2 * 8,yp/2 * 8);
        ctx.lineTo(xp * 8, yp * 8);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();

        //dots

        ctx.beginPath();
        ctx.arc(xp/2 * 8, yp/2 * 8, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc(xp * 8, yp * 8, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();



    }


    
})