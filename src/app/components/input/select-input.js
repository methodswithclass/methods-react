import React, { Component } from 'react';
import Select from 'react-select';

var self;

class SelectInput extends Component {
  constructor(props) {
    super(props);

    self = this;

    self.state = { selectedOption: 'multi-parent' };

    // <select id={self.props.selectId} className="relative width80 vcenter padding-20 transparent-back white nooutline" model={self.getModel()} onChange={self.onChange} multiple={true} value={self.getItems()}/>
  }

  componentDidMount() {
    self.setState((state, props) => {
      return { selectModel: props.selectModel };
    });
  }

  onChange(selectedOption) {
    // var model = $("#" + this.props.selectId).children("option:selected").val();

    // model = this.state.selectModel;

    self.setState((state, props) => {
      return { selectedOption: selectedOption };
    });
  }

  getValue(item, key) {
    return item.hasOwnProperty(key) ? item[key] : item;
  }

  getItems() {
    var items = [];

    // console.log("items", self.props.items);

    for (var i in self.props.items) {
      var value = self.getValue(self.props.items[i], self.props.selectKey);

      items.push({ value: value, label: value });
    }

    console.log('items', self.props.items, items);

    return items;
  }

  getModel() {
    return this.state.selectModel;
  }

  render() {
    return (
      <div className={self.props.selectClass}>
        <Select
          className="black"
          value={self.state.selectedOption}
          onChange={self.onChange}
          options={self.getItems()}
        />
      </div>
    );
  }
}

export default SelectInput;
