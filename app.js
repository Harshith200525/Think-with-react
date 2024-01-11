const container = document.getElementById('react-container');

ReactDOM.render("Hello! Welcome to react", container);

const Container = () => {
    return React.createElement(`div`, null, `Hey Kalvians! Welcome to React learning`,
    React.createElement(`div`, null, `Let's rock and roll!`)
    );
}

ReactDOM.render(React.createElement(Container), container);

class ReactContainer extends React.Component {
    render(){
        return React.createElement(`div`, null, `Hey Kalvians`,
        React.createElement(`div`, null, `Let's rock and roll with classes`),
        )
    }
}

ReactDOM.render(React.createElement(ReactContainer), container);

//To get the babel output please comment this file