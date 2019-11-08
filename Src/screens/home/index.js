import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

import {Header, Spinner, Icon, Container} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GLOBAL_STYLES from 'MelcomA/src/constants/mainStyle';
import styles from './styles';
import TextIranSans from 'MelcomA/src/constants/IranSans';
import SelectModal from 'MelcomA/src/components/selectModal';
import HeaderBtn from '../../commons/headerBtn';
import {ESTATES} from '../../../data/dummyData';
import EstateItem from '../../commons/EstateItem';
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
    searchGroup: false,

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
        <HeaderBtn
          name={params.searchGroup ? 'left' : 'menufold'}
          left
          size={16}
          onPress={openDrawer}
        />
      ),
    };
  };

  componentDidMount() {
    let searchGroup = this.props.navigation.getParam('searchGroup');
    if (searchGroup) this.setState({searchGroup: true});

    this.props.navigation.setParams({
      toggleCitiesModal: this._toggleCitiesModal,
      onPressSearch: this._onPressSearch,
      city: '',
      searchGroup: this.state.searchGroup,
    });

    fetch('https://facebook.github.io/react-native/movies.json')
      // return fetch('https://melcom.ir/api/demand')
      .then(response => response.json())
      .then(response => {
        this.setState({isLoading: false, estates: response.movies});
      })
      .catch(err => console.log(err));

    // this.setState({isLoading: false});
  }

  _renderEstate = ({item}) => {
    return (
      <View>
        <EstateItem
          item={item}
          onPress={() =>
            this.props.navigation.navigate('Estate', {
              id: item.id,
            })
          }></EstateItem>
      </View>
    );
  };

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
          <FlatList
            data={ESTATES}
            renderItem={this._renderEstate}
            keyExtractor={item => item.id}
          />

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
