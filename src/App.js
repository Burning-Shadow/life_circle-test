import React from "react";

class SubComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(this.props.order + " ChildComponent WillRecieveProps");
  }
  UNSAFE_componentWillMount(){
    console.log(this.props.order + " ChildComponent WillMounted");
  }
  componentDidMount() {
    console.log(this.props.order + " ChildComponent Mounted");
  }
  UNSAFE_componentWillUpdate() {
    console.log(this.props.order + " ChildComponent WillUpdate");
  }
  componentDidUpdate() {
    console.log(this.props.order + " ChildComponent DidUpdate");
  }

  render() {
    console.log(this.props.order + " ChildComponent Render");
    /*接受一个从父元素传来的props.order*/
    return (
      <button
        onClick={() => {
          this.setState({ isUpdate: true });
        }}
      >
        {this.props.order + " button updated? : " + this.state.isUpdate}
        <br />
      </button>
    );
  }
}

//父组件
class SuperComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanged: "false"
    };
  }

  UNSAFE_componentWillUpdate() {
    console.log("SuperComponent WillUpdate");
  }
  componentDidUpdate() {
    console.log("SuperComponent DidUpdate");
  }
  UNSAFE_componentWillMount(){
    console.log("SuperComponent WillMounted");
  }
  componentDidMount() {
    console.log("SuperComponent Mounted");
  }

  render() {
    //渲染三个子组建，并提供一个按钮，当按钮被点击时强行update
    console.log("SuperComponent Render");
    return (
      <div>
        <SubComp order="1st" />
        <br />
        <SubComp order="2nd" />
        <br />
        <SubComp order="3rd" />
        <br />
        <button
          onClick={() => {
            this.setState({
              isChanged: "true"
            });
          }}
        >
          Change Sup Data
        </button>
        <div>{this.state.isChanged}</div>
      </div>
    );
  }
}

export default SuperComp;
