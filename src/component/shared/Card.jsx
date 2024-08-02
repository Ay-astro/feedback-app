import PropTypes from 'prop-types'
function Card({children, reverse}) {
    return <div className={`card ${reverse && 'reverse'}`}>
        {children}
        </div>
    
}

Card.defaultProps={
    reverse: false,
}
Card.propTypes={
    children : PropTypes.node.isRequired,
    reversed : PropTypes.bool
}
export default Card
