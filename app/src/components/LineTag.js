import React, {PureComponent} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {withThemeContext} from '../contexts/ThemeContext';
import PropTypes from 'prop-types';

class LineTag extends PureComponent {
  render() {
    let leavingTimeFormatted = Math.floor(this.props.leavesIn);
    if (leavingTimeFormatted >= 60)
      leavingTimeFormatted = Math.floor(leavingTimeFormatted / 60) + ' godz';
    else leavingTimeFormatted += ' min';

    const {t} = this.props.themeContext;
    return (
      <View
        style={
          this.props.isFav
            ? {
                ...styles.container,
                ...styles.containerFav,
                backgroundColor: t.secondaryColor,
              }
            : {...styles.container, backgroundColor: t.secondaryColor}
        }
      >
        <Text style={{...styles.text, color: t.textColor}}>
          {this.props.line}
        </Text>
        {this.props.leavesIn && (
          <Text style={{...styles.text, color: t.textColor}}>
            {leavingTimeFormatted}
          </Text>
        )}
      </View>
    );
  }
}

export default withThemeContext(LineTag);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    margin: 3,
  },
  containerFav: {
    borderWidth: 0.7,
    borderStyle: 'solid',
    borderColor: '#DBA656',
  },
  text: {
    fontSize: 10,
  },
});

LineTag.propTypes = {
  leavesIn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isFav: PropTypes.bool,
  line: PropTypes.string.isRequired,
};
