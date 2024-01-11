class ReactContainer extends React.Component {
    render() {
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>This is babel</div>
            </div>
        )
    }
}

const container2 = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container2);

//To get this file's output please comment the app.js file