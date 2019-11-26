var screen = {width: 1200, height: 720};
var margins = {top: 30, right: 50, bottom: 50, left: 50};

var Promise = d3.csv("soccer.csv")
    Promise.then(
        function(data)
    {
        setup(data)
        console.log("success", data);
    },
        function(err)
    {
        console.log("fail", err)  
    })


var setup = function(array)
{
    var svg = d3.select("svg")
    .attr("width", screen.width)
    .attr("height", screen.height)
    
    d3.select("svg")
        .attr("width", screen.width)
        .attr("height", screen.height)
        .append("g")
        .attr("id", "graph")
        .attr("transform","translate("+margins.left+
                            ","+margins.top+")");
              
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;
    
    var xScale = d3.scaleLinear()
                    .domain([2009,2018])
                    .range([0,width])
    
    var yScale = d3.scaleLinear()
                    .domain([18,150])
                    .range([height,0])
    
    var cScale = d3.scaleOrdinal(d3.schemeTableau10)
    
    var xAxis = d3.axisBottom(xScale)
    var yAxis = d3.axisLeft(yScale)
    
    d3.select("svg")
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
        .attr("transform","translate(25,"+margins.top+")")
        .call(yAxis)
        .call(yAxis)
    
    drawPoints(array,xScale,yScale,cScale,index)   
}

var drawPoints = function(array,xScale,yScale,cScale,index)
{
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
