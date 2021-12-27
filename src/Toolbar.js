import PropTypes from "prop-types";

export default function Toolbar (props) {
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

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
}

Toolbar.defaultProps = {
    filters: null,
    selected: null,
    onSelectFilter: null
};