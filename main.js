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
    d3.select("p").text("");
    d3.select("h3").text("");
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
            .attr("cy", 80).on("end", function repeat() {
                d3.select(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition()
                  .duration(3000)
                    .attr("cx", 500)
                    .attr("cy", 80) 
                  
                    .on("end", repeat);
              });
        ;
        
        // add text
        d3.select("h3").text("Unicast");
        var string = "Unicast is the term used to describe communication where a piece of information is sent from one point to another point. In this case there is just one sender, and one receiver. Unicast transmission, in which a packet is sent from a single source to a specified destination, is still the predominant form of transmission on LANs and within the Internet. All LANs (e.g. Ethernet) and IP networks support the unicast transfer mode, and most users are familiar with the standard unicast applications (e.g. http, smtp, ftp and telnet) which employ the TCP transport protocol."
        d3.select("p").text(string);
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
            .attr("cy", 430).on("end", function repeat() {
                d3.select(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition().duration(3000)
                    .attr("cx", 700)
                    .attr("cy", 430) 
                    .on("end", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 80).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition().duration(3000)
                        .attr("cx", 500)
                        .attr("cy", 80) 
                        .on("end", repeat)});

        
            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 700).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                      .duration(3000)
                        .attr("cx", 500)
                        .attr("cy", 700) 
                        .on("end", repeat)});

                        var string = "Multicast is the term used to describe communication where a piece of information is sent from one or more points to a set of other points. In this case there is may be one or more senders, and the information is distributed to a set of receivers (theer may be no receivers, or any other number of receivers)."
                        d3.select("h3").text("Multicast");
                        d3.select("p").text(string);
    }
    else if(selected == "3"){
        clearCanvas();

        var dot = createCircle(70, 350, 10, 3, "orange");
        startCanvas();
        dot.transition()
            .duration(3000)
            .attr("cx", 700)
            .attr("cy", 430).on("end", function repeat() {
                d3.select(this)
                    .attr("cx", 70)
                    .attr("cy", 350)
                  .transition()
                  .duration(3000)
                    .attr("cx", 700)
                    .attr("cy", 430) 
                    .on("end", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 80).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition()
                      .duration(3000)
                        .attr("cx", 500)
                        .attr("cy", 80) 
                        .on("end", repeat)});


            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 500)
                .attr("cy", 700).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition().duration(3000)
                        .attr("cx", 500)
                        .attr("cy", 700) 
                        .on("end", repeat)});

            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 650)
                .attr("cy", 600).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition().duration(3000)
                        .attr("cx", 650)
                        .attr("cy", 600) 
                        .on("end", repeat)});

            var dot = createCircle(70, 350, 10, 3, "orange");
            startCanvas();
            dot.transition()
                .duration(3000)
                .attr("cx", 650)
                .attr("cy", 230).on("end", function repeat() {
                    d3.select(this)
                        .attr("cx", 70)
                        .attr("cy", 350)
                      .transition().duration(3000)
                        .attr("cx", 650)
                        .attr("cy", 230) 
                        .on("end", repeat)});

                        var string = "Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points. In this case there is just one sender, but the information is sent to all connected receivers.";
                        d3.select("h3").text("Broadcast");
                        d3.select("p").text(string);
    }
}

startCanvas();
