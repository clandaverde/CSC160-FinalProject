var screen = {width: 1300, height: 800};
var margins = {top: 40, right: 60, bottom: 60, left: 51};

var Promise = d3.csv("soccer.csv")
    Promise.then(
        function(data)
    {
         d3.select("#click")
        .on("click", function(d){
    
    
    setup2(data)
})
        svg2(data)
        setup(data)
        console.log("success", data);
    },
        function(err)
    {
        console.log("fail", err)  
    })


var setup = function(array)
{
    var svg = d3.select("#graph1")
        .attr("width", screen.width)
        .attr("height", screen.height)
    
    //d3.select("#graph1")
        //.attr("width", screen.width)
       // .attr("height", screen.height)
        .append("g")
        .attr("id", "graph")
        .attr("transform","translate("+margins.left+
                            ","+margins.top+")");
              
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
                    .domain([2009,2017])
                    .range([0,width])
    
    var yScale = d3.scaleLinear()
                    .domain([18,150])
                    .range([height,0])
    
    var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("#graph1")
        .append("g")
        .classed("axis",true);
    
    d3.select(".axis")
        .append("g")
        .attr("id","xAxis")
        .attr("transform","translate("+margins.left+","+(margins.top+height) +")")
        .call(xAxis)
    
    d3.select(".axis")
        .append("g")
        .attr("id","yAxis")
        .attr("transform","translate(50,"+margins.top+")")
        .call(yAxis)
        .call(yAxis)
    
    Rgoals(array,xScale,yScale,cScale) 
    Rassists(array,xScale,yScale,cScale) 
    Mgoals(array,xScale,yScale,cScale)
    Massists(array,xScale,yScale,cScale)
}

var Rgoals = function(array,xScale,yScale,cScale)
{
    d3.select("#graph")
    .append("path")
    .datum(array)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 4)
    .attr("d", d3.line()
    .x(function(d)
   {
    var seasons = parseInt(d.Seasons)
        return xScale(seasons)
   })
    .y(function(d)
    {
    var rgoal = parseInt(d.RgoalsP)
        return yScale(rgoal)
    }))
    .on("mouseover", function(d) {
        
    d3.select("#tooltip")
    .style("left", (d3.event.pageX + 20) + "px")
    .style("top", (d3.event.pageY - 25) + "px")
    .select("#value")
    .text("Cristiano Ronaldo's goals percentage")
    
    d3.select("#tooltip")
    .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
    .classed("hidden", true);
        
    })      
}
    
var Rassists = function(array,xScale,yScale,cScale)
{
    d3.select("#graph")
    .append("path")
    .datum(array)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 4)
    .attr("d", d3.line()
    
    .x(function(d)
   {
    var seasons = parseInt(d.Seasons)
        return xScale(seasons)
   })
    .y(function(d)
    {
    var rassist = parseInt(d.RassistsP)
        return yScale(rassist)
    }))
    .on("mouseover", function(d) {
        
    d3.select("#tooltip")
    .style("left", (d3.event.pageX + 20) + "px")
    .style("top", (d3.event.pageY - 25) + "px")
    .select("#value")
    .text("Cristiano Ronaldo's assists percentage");
    
    d3.select("#tooltip")
    .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
    .classed("hidden", true);
        
    }) 

}

var Mgoals = function(array,xScale,yScale,cScale)
{
    d3.select("#graph")
    .append("path")
    .datum(array)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 4)
    .attr("d", d3.line()
    .x(function(d)
   {
    var seasons = parseInt(d.Seasons)
        return xScale(seasons)
   })
    .y(function(d)
    {
    var mgoal = parseInt(d.MgoalsP)
        return yScale(mgoal)
    }))
    .on("mouseover", function(d) {
        
    d3.select("#tooltip")
    .style("left", (d3.event.pageX + 20) + "px")
    .style("top", (d3.event.pageY - 25) + "px")
    .select("#value")
    .text("Lionel Messi's goals percentage");
    
    d3.select("#tooltip")
    .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
    .classed("hidden", true);
        
    }) 
}
var Massists = function(array,xScale,yScale,cScale)
{
    d3.select("#graph")
    .append("path")
    .datum(array)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 4)
    .attr("d", d3.line()
    .x(function(d)
   {
    var seasons = parseInt(d.Seasons)
        return xScale(seasons)
   })
    .y(function(d)
    {
    var massist = parseInt(d.MassistsP)
        return yScale(massist)
    }))
    .on("mouseover", function(d) {
        
    d3.select("#tooltip")
    .style("left", (d3.event.pageX + 20) + "px")
    .style("top", (d3.event.pageY - 25) + "px")
    .select("#value")
    .text("Lionel Messi's assists percentage");
    
    d3.select("#tooltip")
    .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
    .classed("hidden", true);
        
    }) 
    
}
var svg2 = function(legend)
{
    //creates ronaldo's red circle
    d3.select("svg")
        .append("g")
        .append("circle")
        .attr("cx",150)
        .attr("cy",50)
        .attr("r", 7)
        .style("fill", "red")
    //creates ronaldo's name
     d3.select("svg")
        .append("text")
        .attr("x", 170)
        .attr("y", 50)
        .text("Cristiano Ronaldo")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
    //creates messi's blue circle
    d3.select("svg")
        .append("g")
        .append("circle")
        .attr("cx",150)
        .attr("cy",80)
        .attr("r", 7)
        .style("fill", "blue")
    //creates messi's name
    d3.select("svg")
        .append("text")
        .attr("x", 170)
        .attr("y", 82)
        .text("Lionel Messi")
        .style("font-size", "20px")
        .attr("alignment-baseline","middle")
}


// begins new bar graph for ballon d'or victories


 var setup2 = function(array2)
{
    var svg3 = d3.select("#graph2")
        .attr("width", screen.width)
        .attr("height", screen.height)
        .append("g")
        .attr("id", "Bargraph")
        .attr("transform","translate("+margins.left+
                            ","+margins.top+")");
              
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
                    .domain([2009,2017])
                    .range([0,width])
    
    var yScale = d3.scaleLinear()
                    .domain([0,6])
                    .range([height,0])
    
    var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("#graph2")
        .append("g")
        .classed("axis",true);
    
    d3.select("#graph2")
        .append("g")
        .attr("id","xAxis2")
        .attr("transform","translate("+margins.left+","+(margins.top+height) +")")
        .call(xAxis)
    
    d3.select("#graph2")
        .append("g")
        .attr("id","yAxis2")
        .attr("transform","translate(50,"+margins.top+")")
        .call(yAxis)
        .call(yAxis)
    
    d3.select("#title")
        .text("Messi VS Ronaldo's assists")
    
    d3.select("#sub")
        .text("Represents a cumulative amount of trophies")
    
    Rballon(array2,xScale,yScale,cScale)
    Mballon(array2,xScale,yScale,cScale)
    
}
        

 //Messi's ballon d'ors
var Rballon = function(array2,xScale,yScale,cScale)
{
    
    d3.select("#graph2")
        .append("g")
        .selectAll("rect")
        .data(array2)
        .enter()
        .append("rect")
        .attr("fill", "red")
        .attr("x", function(d, i) {
            return i * 160 + 105
        })
        .attr("y", function(d){
        
        var Rball = parseInt(d.RcumulativeW)
            return yScale(Rball) + 40 
    })
        .attr("width", 40)
        .attr("height", function (d) {
        
            return yScale(6 - d.RcumulativeW);
        
    }) 
    .on("mouseover", function(d) {
        
    d3.select("#tooltip")
        .style("left", (d3.event.pageX + 20) + "px")
        .style("top", (d3.event.pageY - 25) + "px")
        .select("#value")
        .text("Cristiano Ronaldo's ballon d'or victories");
    
    d3.select("#tooltip")
        .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
        .classed("hidden", true);
        
    }) 
}
//Ronaldos ballon d'ors
var Mballon = function(array2,xScale,yScale,cScale)
{
    d3.select("#graph2")
        .append("g")
        .selectAll("rect")
        .data(array2)
        .enter()
        .append("rect")
        .attr("fill", "blue")
        .attr("x", function(d, i) {
            return i * (screen.width / array2.length) + 50 
    })
        .attr("y", function(d){
        
       var Mball = parseInt(d.McumulativeW)
            return yScale(Mball) + 40  
    })
        .attr("width", "29px")
        .attr("height", function (d) {
        
            return yScale(6 - d.McumulativeW);
        
    }) 
 .on("mouseover", function(d) {
        
    d3.select("#tooltip")
        .style("left", (d3.event.pageX + 20) + "px")
        .style("top", (d3.event.pageY - 25) + "px")
        .select("#value")
        .text("Lionel Messi's ballon d'or victories");
    
    d3.select("#tooltip")
        .classed("hidden", false)
    })
    
    .on("mouseout", function() {
        
        
    d3.select("#tooltip")
        .classed("hidden", true);
        
    }) 
}


