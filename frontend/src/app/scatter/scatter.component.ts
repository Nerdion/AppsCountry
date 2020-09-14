import { Component, OnInit,Input } from '@angular/core';
import * as d3 from "d3";
import { AppServiceService } from '../app-service.service';
@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {
  @Input() formgroups = [];
  d3data:any;
  private data :any;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor(private service:AppServiceService){}
  ngOnInit(): void {
    this.getd3data()
    this.data = this.service.getHighRApp()
    this.createSvg();
    this.drawPlot();
  }

  getd3data(){
    var param = {
      'data':true
    }
    this.service.getD3Data(param).subscribe((response) => {
      if(response){
        this.d3data = response
      }
    }) 
    
  }
  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private drawPlot(): void {
  // Add X axis
  const x = d3.scaleLinear()
  .domain([2009,2017])
  .range([ 0, this.width ]);
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 40000])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  const dots = this.svg.append('g');
  dots.selectAll("dot")
  .data(this.data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.Released))
  .attr("cy", d => y(d.Stars))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#69b3a2");

  // Add labels
  dots.selectAll("text")
  .data(this.data)
  .enter()
  .append("text")
  .text(d => d.CountryCode)
  .attr("x", d => x(d.Released))
  .attr("y", d => y(d.Stars))
}


}
