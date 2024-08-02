import PropTypes from 'prop-types'
function Header({text,bgColor,textcolor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color:textcolor
    }
    return (
        <header style={headerStyle}>
        <div className='container' >
            <h2>{text}</h2>
        </div>
        </header>
    )
}

export default Header
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textcolor: '#ff6a95'
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textcolor: PropTypes.string
}