import React from 'react';

class DisableRightClick extends React.Component {
    componentDidMount() {
        document.addEventListener('contextmenu', this.handleContextMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this.handleContextMenu);
    }

    handleContextMenu = (event) => {
        event.preventDefault();
    };

    render() {
        return this.props.children;
    }
}

export default DisableRightClick;
