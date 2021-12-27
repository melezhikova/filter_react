import {useState} from 'react';
import PropTypes from "prop-types";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default function Portfolio (props) {
    
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selected, setFilter] = useState ("All");
    const [projects, setProjects] = useState (props.items);
    
    const onSelectFilter = (event) => {
        setFilter(() => event.target.textContent);
        if (!props.items.length) return null;
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

Portfolio.propTypes = {
    items: PropTypes.array
}

Portfolio.defaultProps = {
    items: null
};

  