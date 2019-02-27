function getSelectedItem(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].value;
    
    return strUser;
}

var canvas = d3.select("body")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 1000);

var canvas2 = d3.select("body")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 1000);

function createCircle(cx, cy, radius, color){
    // create circle with the given parameters
   var circle =  canvas.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", radius)
        .attr("fill", color)
        .text("Hello");
    return circle;
    }

function createLine(x1, y1, x2, y2, color){
   var line = canvas.append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke", color)
        .attr("stroke-width", 1);
    return line;
}


function startCanvas(){
    createLine(70, 350, 500, 80, "black");
    createLine(70, 350, 650, 230, "black");
    createLine(70, 350, 700, 430, "black");
    createLine(70, 350, 650, 600, "black");
    createLine(70, 350, 500, 700, "black");
    createCircle(70, 350, 45,  "orange");
    createCircle(500, 80, 40, "#007bff");
    createCircle(650, 230, 40, "#007bff");
    createCircle(700, 430, 40, "#007bff");
    createCircle(650, 600, 40, "#007bff");
    createCircle(500, 700, 40, "#007bff");
}

function clearCirclesOnCanvas(){
    d3.selectAll("circle").remove();
}
// clear canvas
function clearCanvas(){
    d3.selectAll("line").remove();
    clearCirclesOnCanvas();
    startCanvas();
}
function main(){

    var selected = getSelectedItem();

    console.log(selected);
    if (selected == "1"){

        clearCanvas();
        // create a dot and move
        var dot = createCircle(70, 350, 10, "black");
        createLine(70, 350, 500, 80, "red");
        startCanvas();
        dot.transition()
            .duration(3000)
            .attr("cx", 500)
            .attr("cy", 80).on("start", function repeat() {
                d3.active(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition()
                    .attr("cx", 500)
                    .attr("cy", 80) 
                  .transition()
                    .on("start", repeat);
              });
        ;
        
        // add text
        d3.select("p").text("Unicast")
    }
    

    else if(selected == "2"){
        clearCanvas();
       
            // respective circle transition
                    // create a dot and move
        var dot = createCircle(70, 350, 10, 3, "orange");
        startCanvas();
        dot.transition()
            .duration(3000)
            .attr("cx", 700)
            .attr("cy", 430).on("start", function repeat() {
                d3.active(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition()
                    .attr("cx", 700)
                    .attr("cy", 430) 
                  .transition()
                    .on("start", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 80).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 500)
                        .attr("cy", 80) 
                      .transition()
                        .on("start", repeat)});

        
            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 700).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 500)
                        .attr("cy", 700) 
                      .transition()
                        .on("start", repeat)});
    }
    else if(selected == "3"){
        clearCanvas();

        var dot = createCircle(70, 350, 10, 3, "orange");
        startCanvas();
        dot.transition()
            .duration(3000)
            .attr("cx", 700)
            .attr("cy", 430).on("start", function repeat() {
                d3.active(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition()
                    .attr("cx", 700)
                    .attr("cy", 430) 
                  .transition()
                    .on("start", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 80).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 500)
                        .attr("cy", 80) 
                      .transition()
                        .on("start", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 700).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 500)
                        .attr("cy", 700) 
                      .transition()
                        .on("start", repeat)});

            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 650)
                .attr("cy", 600).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 650)
                        .attr("cy", 600) 
                      .transition()
                        .on("start", repeat)});

            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 650)
                .attr("cy", 230).on("start", function repeat() {
                    d3.active(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                        .attr("cx", 650)
                        .attr("cy", 230) 
                      .transition()
                        .on("start", repeat)});
    }
}

startCanvas();
