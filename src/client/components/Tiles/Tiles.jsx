import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TileItem from './TileItem';
import './Tiles.scss';

class Tiles extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date),
      className: PropTypes.string,
    })).isRequired,
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => {},
  };

  state = {
    activeItemId: this.props.items.length > 0 && this.props.items[0]._id,
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.activeItemId === false && nextProps.items.length > 0) {
      this.setState({ activeItemId: nextProps.items[0]._id });
    }
  }

  onClassroomClick = id => this.setState({ activeItemId: id });
  isActive = id => this.state.activeItemId === id;

  render() {
    const { items, children } = this.props;
    const mappedTiles = items.reduce((obj, item) => {
      obj.items.push(<TileItem
        _id={item._id}
        label={item.name}
        active={this.isActive(item._id)}
        onClick={this.onClassroomClick}
        key={item.name}
      />);
      obj.itemsPane.push(children({
        label: item.name,
        active: this.isActive(item._id),
        _id: item._id,
        reservation: {
          startTime: item.startTime,
          endTime: item.endTime,
          className: item.classroom && item.classroom.name,
        },
      }));
      return obj;
    }, { items: [], itemsPane: [] });
    return (
      <div className="row tiles">
        <div className="title-container col-4">
          <div className="list-group list-group-flush tiles__item" id="list-tab" role="tablist">
            {mappedTiles.items}
          </div>
        </div>

        <div className="col-8 tab-content">
          {mappedTiles.itemsPane}
        </div>
      </div>
    );
  }
}

export default Tiles;
