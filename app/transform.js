import {flow} from './config';
console.log(flow);
flow.nodes.map(node => {
    node.title = node.name;
});
flow.links.map(link => {
    link.from = link.fromId;
    link.to = link.toId;
})

export default flow;
