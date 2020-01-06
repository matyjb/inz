import React, {Component} from 'react';
import {Icon, Button, Fab} from 'native-base';
import {ThemeContext} from '../contexts/ThemeContext';
import {GlobalContext} from '../contexts/GlobalContext';
import {withNavigation} from 'react-navigation';

class FabMapScreen extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({t}) => (
          <GlobalContext.Consumer>
            {({toggleRadar, navigateToUser}) => (
              <Fab
                active={true}
                style={{...this.props.style, backgroundColor: t.accentColor}}
                position="bottomRight"
                onPress={() => toggleRadar()}
              >
                <Icon
                  name="radar"
                  type="MaterialCommunityIcons"
                  style={{color: t.primaryColor}}
                />
                <Button
                  style={{
                    ...this.props.style,
                    backgroundColor: t.accentColor,
                    marginBottom: 14,
                  }}
                  onPress={() => navigateToUser()}
                >
                  <Icon
                    name="gps-fixed"
                    type="MaterialIcons"
                    style={{color: t.primaryColor}}
                  />
                </Button>
                <Button
                  style={{...this.props.style, backgroundColor: t.accentColor}}
                  onPress={() => this.props.modalref.open()}
                >
                  <Icon name="md-menu" style={{color: t.primaryColor}} />
                </Button>
              </Fab>
            )}
          </GlobalContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default withNavigation(FabMapScreen);
