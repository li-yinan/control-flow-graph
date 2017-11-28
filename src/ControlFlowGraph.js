import React from 'react'
import './controlflow.less'
import {drag} from 'd3-drag';
import {select, event} from 'd3-selection';
import sankey from './sankey/sankey';
import sankeyLinkHorizontal from './sankey/sankeyLinkHorizontal';

import data from './data';

// let event = select.event;

let noop = function () {};
export default class ControlFlowGraph extends React.Component {

    componentDidMount() {
        let rootDom = this.refs.root;

        let svg = select(rootDom);
        let width = +svg.attr("width");
        let height = +svg.attr("height");
        let layout = sankey().extent([[1, 1], [width - 1, height - 6]]);;
        let graph = layout(data);
        console.log(data.nodes);
        let node = svg.append('g').selectAll('g');
        node = node.data(data.nodes).enter().append('rect');
        node
            .attr("x", function(d) { return d.x0; })
            .attr("y", function(d) { return d.y0; })
            .attr("height", function(d) { return d.y1 - d.y0; })
            .attr("width", function(d) { return d.x1 - d.x0; })
            .attr("stroke", "#000");
        let link = svg.append("g")
            .attr("class", "links")
            .attr("fill", "none")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.5)
            .selectAll("path");
        link = link
            .data(data.links)
            .enter().append("path")
            .attr("d", sankeyLinkHorizontal())
            // .attr("stroke-width", function(d) { return Math.max(1, d.width); });
        function dragmove(e) {
            let el = select(this);
            let width = el.attr('width') - 0;
            let height = el.attr('height') - 0;
            e.y0 = event.y;
            e.x0 = event.x;
            e.y1 = event.y;
            e.x1 = event.x;
            
            select(this)
                // .attr('x', Math.max(0, Math.min(width - event.dx, event.x)) + event.x)
                // .attr('y', Math.max(0, Math.min(height - event.dy, event.y)) + event.y);
                .attr('x', e.x0)
                .attr('y', e.y0);
            layout.update(data);
            link.attr("d", sankeyLinkHorizontal());
        }
        node.call(
            drag()
                .subject(function() {
                    var t = select(this);
                    return {
                        x: t.attr("x") - 0,
                        y: t.attr("y") - 0
                    };
                })
                .on('drag', dragmove)
        );

    }

    render() {
        return (
            <div><svg ref="root" width="960" height="500"></svg></div>
        );
    }
}

