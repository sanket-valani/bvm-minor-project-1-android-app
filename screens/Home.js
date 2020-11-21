import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function home({navigation}) {
  // const [ webviewModal, changeWebviewModal ] = React.useState(false);

  const GardeningTips = [
    { id: 1, tip: "1. Fertile, well prepared soil is necessary for a successful garden. The soil should be free from stones and weeds. The soil should be supplemented with good organic matter and soil should have well-drainage for successful home gardening." },
    { id: 2, tip: "2. Sufficient sunlight (at least 7 to 8 hours) & good aeration (air movement) around a garden is crucial during the plant growth period."},
    { id: 3, tip: "3. Garden layout should be in such a way that you can move all the sides of garden with ease and comfort."},
    { id: 4, tip: "4. You are now ready to sow your seeds, Water your garden thoroughly the day before you intend to plant or seed."},
    { id: 5, tip: "5. When you sow the seeds, planting depth play major role in germination and survival of the pant so, don’t put seeds more than 2 to 5 cm depth."},
    { id: 6, tip: "6. Make sure to firm the soil over the seeds to ensure good moisture contact for better germination. Water thoroughly using a gentle spray without disturbing (uncovering) the seed."},
    { id: 7, tip: "7. After sowing in seed bed, seeds require good moisture to germinate, so it is important to keep the soil evenly moist until the seeds germinate and growing."},
    { id: 8, tip: "8. Avoid Over watering as it may cause root rot. Generally watering should be done depending on soil moisture condition. An inch of water/ week is usually sufficient. Water when the top inch of soil is dry. In case of heavy rains, make sure soil drains out as soon as possible and most of the plants are sensitive to water logging."},
    { id: 9, tip: "9. As we already said that weeds compete with your vegetables and any other plants for water, manures, fertilizers and nutrients, so make sure to keep to keep them to a minimum. Mulching between the rows will help to control weeds. Keep removing weeds whenever they emerge and make your garden weed free."},
    { id: 10, tip: "10. Finally, keep your garden clean and neat from all kinds of unnecessary items to make control of pests and diseases."},
  ]

  const card = ({item})=> (
    <View style={{paddingBottom:20}}>
      <TouchableOpacity 
        style={styles.card} 
        onPress={()=>{ console.log(" test ");} }> 
        <Text style={{fontSize:20}}> { item.tip } </Text>
      </TouchableOpacity>
    </View>
  )

  return(
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#d2dae2' }}
    >
      <View style={{ flex: 1, marginBottom:10, marginTop:10, alignItems: 'center', justifyContent: 'center' }}>
      
        {/* <WebViewScreen link={"https://github.com/Sanket-Valani"} webviewModalState={webviewModal} changeWebviewModalState={changeWebviewModal} />
        <Button
          onPress={()=> changeWebviewModal(true)}
          title="press"
        /> */}

        <FlatList 
          data={GardeningTips}
          renderItem={card}
          keyExtractor={item => item.id}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding:20,
    borderWidth:1,
    borderRadius:20,
    width:350,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#3dc1d3'
  }
});