import {useState} from 'react';
import PropTypes from "prop-types";
import Project from './Project';

export default function Portfolio (props) {
    
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selected, setFilter] = useState ("All");
    const [projects, setProjects] = useState (props.items);
    
    const onSelectFilter = (event) => {
        setFilter(() => event.target.textContent);
        if (event.target.textContent !== "All") {
            setProjects (() => props.items.filter((o) => o.category === event.target.textContent));
        } else {
            setProjects (() => props.items);
        }
    }

    return (
        <div>
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter}/>
            <ProjectList projects={projects}/>
        </div>
    )

}

function Toolbar (props) {
    const { filters, selected, onSelectFilter } = props;
    return (
        <div>
            {filters.map(
                o => 
                <button key={o} className={o === selected ? 'btn active' : 'btn'}
                onClick={onSelectFilter}>{o}</button>
            )}
        </div>
    )
}

function ProjectItem (props) {
    const { item } = props;
    return (
        <img className='project' src={item.img} alt="" />
    )
}

ProjectItem.propTypes = {
    item: PropTypes.instanceOf(Project).isRequired
}
  
function ProjectList (props) {
    return (
        <div className='projectsBox'>
            {props.projects.map(o => 
                <ProjectItem key={o.id} item={o}/>
            )}
        </div>
    )
}


  