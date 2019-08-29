import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {Header, Icon, Container, Left, Right} from 'native-base';

import S from '../Constants/mainStyle';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Press Me',
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return (
      fetch('https://facebook.github.io/react-native/movies.json')
        // return fetch('https://melcom.ir/api/demand')
        .then(response => response.json())
        .then(response => {
          this.setState({isLoading: false, dataSource: response.movies});
        })
        .catch(err => console.log(err))
    );
  }

  render() {
    const {isLoading, dataSource} = this.state;

    if (isLoading) {
      return (
        <View style={S.Main.Container}>
          <Text style={{fontFamily: 'Iranian Sans'}}>... در حال بار گزاری</Text>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <Container style={S.Main.Container}>
          <Header
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Left style={{flex: 1}}>
              <Icon
                name="ios-menu"
                size={20}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Left>
            <Text
              style={[
                {fontSize: 17, alignItems: 'center', justifyContent: 'center'},
                S.Fonts.IranSans,
                S.Colors.white,
              ]}>
              ملکام | Melcom
            </Text>

            <Right style={{flex: 1}}>
              <Icon name="search" />
            </Right>
          </Header>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <TouchableHighlight>
                <View style={S.Card.Container}>
                  <View style={{flex: 1, backgroundColor: 'gray'}}>
                    <Image
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'stretch', //contain
                        margin: 1,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                      }}
                      source={require('../../assets/pictures/Thumb.jpeg')}
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={[{fontSize: 10}, S.Colors.gray]}>
                      2 ساعت قبل
                    </Text>

                    <Text style={[{fontSize: 16}, S.Colors.seagreen]}>
                      شهرک گلستان {item.title}
                    </Text>
                    <Text>
                      قیمت : <Text style={S.Colors.darkorange}>112 م</Text>
                    </Text>
                    <Text>
                      هر متر : <Text style={S.Colors.darkorange}>1.4 م</Text>
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[{flex: 1}, S.Colors.steelblue]}>
                        آپارتمان
                      </Text>
                      <Text style={[{flex: 1}, S.Colors.steelblue]}>
                        دو خواب
                      </Text>
                      <Text style={[{flex: 1}, S.Colors.steelblue]}>
                        120متر
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </Container>
      );
    }
  }
}

export default Home;
