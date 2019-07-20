import React, { Component } from 'react';

const TITLES = [
    'a coder',
    'a papercraft maker',
    'a music lover',
    'a guitar player'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted');

        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex2 = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex: titleIndex2 });
        }, 4000);
    }

    render() {
        console.log('Title render()', this.state.titleIndex);

        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;