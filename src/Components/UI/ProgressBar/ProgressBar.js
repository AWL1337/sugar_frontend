const ProgressBar = (props) => {
    const {completed, val} = props;

    const takeColor = () => {
        switch (true) {
            case completed > 70:
                return "#00ff00"
            case completed < 30:
                return "#ff0000"
            default:
                return "#ffcf00"
        }
    }

    const containerStyles = {
        height: "3vh",
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: takeColor(),
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
        justifyContent: 'flex-end',
        display: 'flex'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${val}хе`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;