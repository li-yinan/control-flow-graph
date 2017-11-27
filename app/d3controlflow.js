import {
    cluster,
    tree,
    stratify,
    select,
    json
} from 'd3';

import './style/index.less';

import controlflow from '../src/controlflow';
import {layout} from '../src/controlflowlayout';

import {
    dataBuilder,
    hierarchy,
    depthFix
} from '../src/dataBuilder';

import _ from 'lodash';

const controlFlowLayout = layout();

const svg = select('#app').append('svg')
    .attr('width', 960)
    .attr('height', 800);

const controlFlowBuilder = controlflow().size([960,800]);

const clusterLayout = cluster().size([960, 800]);


const g = svg.append('g');

json('data.json', (err, data) => {
    let entry = data.data.entry;
    data = data.data.dataList;
    controlFlowLayout(data.filter(d => d.id === entry).shift(), dataBuilder(data));
    // console.log(data.data.dataList);
    // const root = data.data.entry.shift();
    // const controlFlowData = controlFlowBuilder(data);
    const root = hierarchy(data.filter(d => d.id === entry).shift(), dataBuilder(data));
    depthFix(root);
    const layoutData = controlFlowBuilder(root);
    console.log(layoutData);
    let link = g.selectAll(".link")
        .data(layoutData.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", function(d) {
            return "M" + d.y + "," + d.x
                + "C" + (d.y + d.parent.y) / 2 + "," + d.x
                + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
                + " " + d.parent.y + "," + d.parent.x;
        });

    var node = g.selectAll(".node")
    .data(layoutData.descendants())
    .enter().append("g")
    .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })


    node.append("circle")
    .attr("r", 5);

    node.append("text")
        .attr("dy", 3)
        .attr("x", function(d) { return d.children ? -8 : 8; })
        .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
        .text(function(d) {
            return d.data.title;
        });

});
