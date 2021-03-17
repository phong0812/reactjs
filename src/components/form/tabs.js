import React from "react";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          class_name: this.props.class,
        //   last_name: '',
        //   email: '',
        //   password: '',
        };
    
        this.onClick = this.onClick.bind(this);
        // this.submit = this.submit.bind(this);
    }

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };
    
    render() {
        const {
            onClick,
            props: { activeTab, label },
          } = this;
          
        let className = "tab";

        if (activeTab === label) {
        className += " active";
        }
      
        return(
            <li className={className} onClick={onClick}><a href={this.props.link}>{label}</a></li>
        );
    }
    
}
// const Tab = props => 
// <li className={props.class}><a href={props.link}>{props.buttonName}</a></li>

export default Tab;

