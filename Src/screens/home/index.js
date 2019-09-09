import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';

import {
  Header,
  Spinner,
  Icon,
  Container,
  Left,
  Right,
  Content,
  Button,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GLOBAL_STYLES from 'MelcomA/src/constants/mainStyle';
import styles from './styles';
import Text_IranSans from 'MelcomA/src/constants/IranSans';
import ModalSelect from 'MelcomA/src/components/modals/select';
import SelectModal from 'MelcomA/src/components/selectModal';

const CITIES = [
  'بجنورد',
  'مشهد',
  'تهران',
  'شیراز',
  'اصفهان',
  'نیشابور',
  'بجنشسیبشورد',
  'مششسیبهد',
  'تهرشسیبان',
  'شیشیسبشراز',
  'اصفبشسیبهان',
  'شسیبشبجنورد',
  'مشهشسیبشسد',
  'شسیبشتهران',
  'شیراشسیبشز',
  'اصفهاشسیبشسیبن',
  'شسیبشسنیشابور',
  'بجنشبشسیسیبشورد',
  'مشبشسیبشسیشسیبهد',
  'تهسشیبشسبرشسیبان',
  'شیشیشسیبشسسبشراز',
  'اصفبشسیشسیبشسبهاشسیبشسن',
];

class Home extends Component {
  state = {
    city: '',
    text: 'Press Me',
    isLoading: true,
    isCitiesModalVisible: false,
    estates: null,
    current: {
      city: 'بجنورد',
    },
    searchText: '',
  };

  static navigationOptions = ({
    navigation: {
      openDrawer,
      state: {params = {}},
    },
  }) => {
    return {
      headerStyle: {
        height: 45,
        backgroundColor: '#eee',
      },
      // title: 'آخرین املاک',
      headerTitle: (
        <View style={styles.topMenuCity}>
          <FontAwesome5 name="angle-down" size={18} />

          <Text_IranSans
            style={{fontSize: 13}}
            onPress={params.toggleCitiesModal}>
            {params.city || 'انتخاب شهر'}
          </Text_IranSans>
        </View>
      ),
      headerRight: (
        <Icon
          onPress={params.toggleCitiesModal}
          style={styles.headerIcon}
          name="search"
        />
      ),
      headerLeft: (
        <Icon
          onPress={openDrawer}
          style={styles.headerIcon}
          name="ios-menu"
          size={20}
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      toggleCitiesModal: this._toggleCitiesModal,
      city: '',
    });
    fetch('https://facebook.github.io/react-native/movies.json')
      // return fetch('https://melcom.ir/api/demand')
      .then(response => response.json())
      .then(response => {
        this.setState({isLoading: false, estates: response.movies});
      })
      .catch(err => console.log(err));
  }
  _renderEstate = ({item}) => (
    <TouchableHighlight
      onPress={() =>
        this.props.navigation.navigate('Estate', {
          id: item.id,
          title: item.title,
        })
      }>
      <View style={GLOBAL_STYLES.Card.Container}>
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
            source={require('MelcomA/assets/pictures/Thumb.jpeg')}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={[{fontSize: 10}, GLOBAL_STYLES.Colors.gray]}>
            2 ساعت قبل
          </Text>

          <Text style={[{fontSize: 16}, GLOBAL_STYLES.Colors.seagreen]}>
            شهرک گلستان {item.title}
          </Text>
          <Text>
            قیمت : <Text style={GLOBAL_STYLES.Colors.darkorange}>112 م</Text>
          </Text>
          <Text>
            هر متر : <Text style={GLOBAL_STYLES.Colors.darkorange}>1.4 م</Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[{flex: 1}, GLOBAL_STYLES.Colors.steelblue]}>
              آپارتمان
            </Text>
            <Text style={[{flex: 1}, GLOBAL_STYLES.Colors.steelblue]}>
              دو خواب
            </Text>
            <Text style={[{flex: 1}, GLOBAL_STYLES.Colors.steelblue]}>
              120متر
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  _renderCity = item => (
    <Text_IranSans onPress={() => this._onCityPress(item)} style={styles.city}>
      {item}
    </Text_IranSans>
  );
  _onCityPress = city => {
    this.setState({city, isCitiesModalVisible: false});
    this.props.navigation.setParams({city});
  };
  _toggleCitiesModal = () =>
    this.setState({isCitiesModalVisible: !this.state.isCitiesModalVisible});

  _onChange = (k, v) => this.setState({[k]: v});

  render() {
    const {
      city,
      isLoading,
      isCitiesModalVisible,
      estates,
      searchText,
    } = this.state;

    if (isLoading) {
      return (
        <Container style={GLOBAL_STYLES.Main.Container}>
          <Text style={{fontFamily: 'Iranian Sans'}}>... در حال بار گزاری</Text>
          <Spinner color="blue" />
        </Container>
      );
    } else {
      return (
        <Container style={GLOBAL_STYLES.Main.Container}>
          <FlatList data={estates} renderItem={this._renderEstate} />
          {/* <ModalSelect
            dataSource={CITIES}
            onRequestClose={() => this.setState({isCitiesModalVisible: false})}
            isCitiesModalVisible={isCitiesModalVisible}
            //  onCityPress={this._onCityPress()}
          /> */}

          <SelectModal
            title="انتخاب شهر"
            items={CITIES.filter(c => c.includes(searchText))}
            keyExtractor={item => item}
            renderItem={this._renderCity}
            isVisible={isCitiesModalVisible}
            close
            search
            onHide={() => {
              this.setState({searchText: ''});
              this.setState({isCitiesModalVisible: false});
            }}
            onSearchTextChange={this._onChange}
          />
        </Container>
      );
    }
  }
}

export default Home;
