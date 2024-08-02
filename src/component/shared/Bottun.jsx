import PropTypes from 'prop-types'
function Bottun({children,version,type,isDisabled}) {
    return (
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
        </button>
    )
}
Bottun.defaultProps={
    version: 'primary',
    isDisabled: true,
    type: 'button',
}
Bottun.propTypes={
    children: PropTypes.node.isRequired,
    verson: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Bottun
