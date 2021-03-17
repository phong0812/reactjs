import React from "react";
import Tab from './tabs';


class TabGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
          
        // this.onClick = this.onClick.bind(this);
        // this.onClickTabItem = this.onClickTabItem.bind(this);        
    }
    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };


    // onClick() {
    //     console.log(this.state.class_name);
    //     if (this.state.class_name.includes('active')) {
    //         this.setState({
    //             class_name: 'tab'
    //           });          
    //     } else {
    //         this.setState({
    //             class_name: 'tab active'
    //           });
    //     }
    //     // this.props.class += ' active';
    // }
    render() {
            const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

        return(

                <ul className="tab-group">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                        );
                    })}
                </ul>          
        );
    }
}

export default TabGroup