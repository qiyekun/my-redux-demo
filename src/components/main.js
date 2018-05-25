import React from 'react';
//  PropTypes from 'prop-types';

export default class MainView extends React.Component {

  render() {
    const { itemList, addItem, minusItem } = this.props;
    // console.log(itemList, addItem, minusItem)

    const itemHtml = itemList && itemList.map(function (listItem, i) {
      return <li key={i}>{listItem}</li>;
    });
    return (<div>
      <ul>{itemHtml}</ul>
      <button onClick={() => addItem('add')}>add</button>
      <button onClick={() => minusItem('minus')}>minus</button>
    </div>
    )
  }
}