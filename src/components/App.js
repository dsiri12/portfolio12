import React from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Header from './Header';
import profile from '../assets/profile.jpg'

class App extends React.Component {
    // class properties and initializers

    state = { displayBio: false }; 

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };

    render() {

        return (
            <div>
                <Header />
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Damien.</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in NJ, and code everyday</p>
                            <p>My favorite language is Javascript, and I think React.js</p>
                            <p>Besides coding, I also love music and water sports!</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                     ) : (
                         <div>
                             <button onClick={this.toggleDisplayBio}>Show More</button>
                         </div>
                     )
                }

                <hr />
                <Projects />

                <hr />
                <SocialProfiles />
                

            </div>
        );
    }
}

export default App;