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
import TextIranSans from 'MelcomA/src/constants/IranSans';

import SelectModal from 'MelcomA/src/components/selectModal';
import HeaderBtn from '../../commons/headerBtn';
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
        backgroundColor: '#FEFEFE',
        height: 30,
      },
      headerTitle: (
        <View style={styles.topMenuCity}>
          <FontAwesome5 name="angle-down" size={18} />

          <TextIranSans
            style={{fontSize: 13}}
            onPress={params.toggleCitiesModal}>
            {params.city || 'انتخاب شهر'}
          </TextIranSans>
        </View>
      ),
      headerRight: (
        <HeaderBtn
          name="filter"
          right
          size={16}
          onPress={params.onPressSearch}
        />
      ),
      headerLeft: (
        <HeaderBtn name="menufold" left size={16} onPress={openDrawer} />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      toggleCitiesModal: this._toggleCitiesModal,
      onPressSearch: this._onPressSearch,
      city: '',
    });

    let searchGroup = this.props.navigation.getParam('searchGroup');
    if (searchGroup) alert('you come from search group');
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
            style={styles.estateImage}
            source={require('MelcomA/assets/pictures/Thumb.jpeg')}
          />
        </View>
        <View style={{flex: 1}}>
          <TextIranSans style={styles.estateRegTime}>2 ساعت قبل</TextIranSans>

          <TextIranSans style={styles.estateTitle}>
            شهرک گلستان {item.title}
          </TextIranSans>
          <TextIranSans style={styles.estateItem2}>
            قیمت :{' '}
            <TextIranSans style={styles.estateItem2Value}>112 م</TextIranSans>
          </TextIranSans>
          <TextIranSans>
            هر متر :{' '}
            <TextIranSans style={styles.estateItem2Value}>1.4 م</TextIranSans>
          </TextIranSans>
          <View style={{flexDirection: 'row'}}>
            <TextIranSans style={[styles.estateItem3]}>آپارتمان</TextIranSans>
            <TextIranSans style={[styles.estateItem3]}>دو خواب</TextIranSans>
            <TextIranSans style={[styles.estateItem3]}>120متر</TextIranSans>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  _renderCity = item => (
    <TextIranSans onPress={() => this._onCityPress(item)} style={styles.city}>
      {item}
    </TextIranSans>
  );
  _onCityPress = city => {
    this.setState({city, isCitiesModalVisible: false});
    this.props.navigation.setParams({city});
  };
  _toggleCitiesModal = () =>
    this.setState({isCitiesModalVisible: !this.state.isCitiesModalVisible});

  _onChange = (k, v) => this.setState({[k]: v});

  _onPressSearch = () => {
    this.props.navigation.navigate('Search');
  };
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
