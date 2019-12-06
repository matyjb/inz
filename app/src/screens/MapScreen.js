import React, {createRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {BusTramApiContext} from '../contexts/BusTramApiContext';
import Vehicle from '../components/Vehicle';
import {Fab, Icon, Button, Drawer, Text, Content, Body} from 'native-base';
import Modal from 'react-native-modalbox';
import {applyTheme} from 'react-native-theme-provider';

@applyTheme()
class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const initRegion = {
      latitude: 52.122801,
      longitude: 21.018324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    var fab = <Fab
    active={true}
    containerStyle={{}}
    position="bottomRight"
    onPress={() => toggleRadar()}>
    <Icon
      name="radar"
      type="MaterialCommunityIcons"
    />
    <Button
      style={{
        marginBottom: 14,
      }}>
      <Icon
        name="gps-fixed"
        type="MaterialIcons"
      />
    </Button>
    <Button
      onPress={() => this.props.navigation.navigate('Settings')}>
      <Icon
        name="md-settings"
      />
    </Button>
    <Button
      onPress={() => this._modal.open()}>
      <Icon
        name="md-menu"
      />
    </Button>
  </Fab>
    return (
      <BusTramApiContext.Consumer>
        {({vehicles, setMapRegion, radar, toggleRadar}) => {
          return (
            <>
              <View style={styles.container}>
                <MapView
                  initialRegion={initRegion}
                  showsCompass={true}
                  rotateEnabled={false}
                  style={{...StyleSheet.absoluteFillObject}}
                  onRegionChangeComplete={setMapRegion}>
                  {vehicles.map(v => (
                    <Vehicle
                      key={v.Lines + '-' + v.Brigade}
                      coordinates={{latitude: v.Lat, longitude: v.Lon}}
                      line={v.Lines}
                      brigade={v.Brigade}
                    />
                  ))}
                  {radar.isOn && (
                    <Circle
                      style={{zIndex: 999}}
                      center={radar.coordinates}
                      radius={radar.radiusKMs * 1000}
                      strokeWidth={1}
                      strokeColor={'blue'}
                      fillColor={'blue'}
                    />
                  )}
                </MapView>
              </View>
              <View style={{flex: 1, marginBottom: 10, zIndex: 0}}>
                {fab}
              </View>
              <Modal
                style={{height: 300, zIndex: 1}}
                position={'bottom'}
                backButtonClose
                ref={ref => {
                  this._modal = ref;
                }}>
                <Text>Modal on bottom with backdrop</Text>
              </Modal>
            </>
          );
        }}
      </BusTramApiContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MapScreen;
