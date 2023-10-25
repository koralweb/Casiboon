import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';

function CasiScreen({navigation}) {
  const [indic, setIndic] = useState(true);
  const [accept, setAccept] = useState(true)

  useEffect(() => {
    fetch('https://casiboonsport.site/request.php')
    .then(res => res.json())
    .then(data => setAccept(data.accept))
    .catch(err => setAccept(false))
  },[])

  const str =
    '<style>.coupon-widget--sticky{bottom:0} .download-application {display:none !important}</style>';

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://casiboonsport.site/terms.php',
        }}
        onMessage={event => {}}
        javaScriptEnabled={true}
        injectedJavaScript={`document.body.insertAdjacentHTML('afterbegin', '${str}')`}
        style={styles.web}
        onLoadEnd={syntheticEvent => {
          setIndic(false);
        }}
        allowsInlineMediaPlayback={true}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          if (nativeEvent.statusCode === 404) {
            navigation.push('Home', {err: 404});
          }
        }}
      />
      {indic && (
        <View style={styles.loader}>
          <ActivityIndicator color="grey" size="large" />
        </View>
      )}
      {
        accept && 
        <TouchableOpacity style={styles.btn} onPress={() => navigation.push('Home')}>
          <Text style={{fontSize:18}}>Akzeptieren</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: 52,
    height: 52,
    top: Dimensions.get('window').height / 2 - 26,
    left: Dimensions.get('window').width / 2 - 26,
  },
  web: {
    marginTop: 38
  },
  btn: {
    position:'absolute',
    zIndex:100,
    backgroundColor:'#fdab10',
    bottom:30,
    width:200,
    height:50,
    left: Dimensions.get('window').width/2 - 100,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default CasiScreen;