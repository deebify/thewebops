import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image } from "react-native";
import {
  Content,
  Body,
  List,
  ListItem,
  Text,
  Spinner,
  Button
} from "native-base";
import * as actions from "../actions";

class ImageListItems extends Component {

  renderListItems() {
    const data = this.props.data;
    if (data) {
      return this.props.data.map(img => {
        return (
          <Body style={{ paddingBottom: 20 }}>
            <Image
              style
              source={{ uri: img.image }}
              style={{ width: 600, height: 300 }}
            />
          </Body>
        );
      });
    } else return <Text> Loading .. </Text>;
  }
  render() {
    const { loading, data } = this.props;
    if (loading) {
      return <Spinner hidesWhenStopped={loading} color="green" />;
    } else {
      return <Content padder>{this.renderListItems()}</Content>;
    }
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actions)(ImageListItems);