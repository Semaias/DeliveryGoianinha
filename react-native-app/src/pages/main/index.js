import React, { Component } from 'react';
import api from '../../services/api';

import styles from './styles';

import NavBar from '../../components/navBar';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Image } from 'react-native-elements';

import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class Main extends Component {
  state = {
    productInfo: {},
    docs: [],
    page: 1,
  };


  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`); 
    
    const { docs, ...productInfo } = response.data;
    this.setState({ docs: [...this.state.docs, ...docs], productInfo, page});
  }

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.containerDisp}>
        <Text style={styles.textDisp}>
          Online
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageDelivery}
          source={{uri: 'https://dmmzi9kl6wusl.cloudfront.net/obbaacaiuberlandia38/uploads/7344441010e0fe659a1eff8d4a459100.png'}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}
      </Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>CARDÁPIO</Text>
      </TouchableOpacity>
    </View>
  );

  loadMore = () => {
    const { page, productInfo } = this.state;
    if(page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
        <View>
          <NavBar />
        </View>
      </View>
    );
  }
}

