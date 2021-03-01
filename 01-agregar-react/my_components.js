const e = React.createElement;
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false }
    }
    render() {
        if(this.state.liked) {
            return "Le has dado me gusta!"
        }
        return e(
            'button',
            { onClick: () => this.setState({liked: true}) },
            'Like'
            );
    }
}
const rootContainer = document.querySelector("#root");
ReactDOM.render(e(MyComponent), rootContainer);
