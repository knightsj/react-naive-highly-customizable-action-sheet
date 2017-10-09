/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    StatusBar,
} from 'react-native';


import ActionSheet from './ActionSheet'


export default class Example extends Component {

  constructor(props) {
    super(props);

  }

  showActionSheet(type){
      switch (type){

          case 0:{
              this.actionsheet0.show();
          }
          break;

          case 1:{
              this.actionsheet1.show();
          }
              break;

          case 2:{
              this.actionsheet2.show();
          }
              break;

          case 3:{
              this.actionsheet3.show();
          }
              break;
          case 4:{
              this.actionsheet4.show();
          }
              break;
          case 5:{
              this.actionsheet5.show();
          }
              break;
          case 6:{
              this.actionsheet6.show();
          }
              break;
          case 7:{
              this.actionsheet7.show();
          }
          break;

          case 8:{
              this.actionsheet8.show();
          }
              break;

          case 9:{
              this.actionsheet9.show();
          }
              break;

          case 10:{
              this.actionsheet10.show();
          }
              break;

          case 11:{
              this.actionsheet11.show();
          }
              break;

          case 12:{
              this.actionsheet12.show();
          }
              break;

          case 13:{
              this.actionsheet13.show();
          }
              break;

          case 14:{
              this.actionsheet14.show();
          }
              break;

          case 15:{
              this.actionsheet15.show();
          }
              break;

          case 16:{
              this.actionsheet16.show();
          }
              break;

          case 17:{
              this.actionsheet17.show();
          }
              break;

          case 18:{
              this.actionsheet18.show();
          }
              break;

          case 19:{
              this.actionsheet19.show();
          }
              break;

          case 20:{
              this.actionsheet20.show();
          }
              break;

          case 21:{
              this.actionsheet21.show();
          }
              break;

          case 22:{
              this.actionsheet22.show();
          }
              break;

          case 23:{
              this.actionsheet23.show();
          }
              break;

          case 24:{
              this.actionsheet24.show();
          }
              break;

          case 25:{
              this.actionsheet25.show();
          }
              break;

          case 26:{
              this.actionsheet26.show();
          }
              break;

          case 27:{
              this.actionsheet27.show();
          }
              break;

          case 28:{
              this.actionsheet28.show();
          }
              break;

      }

  }

  clickedByPhone(){

    alert('By Phone');

  }

  clickedByMessage(){
    alert('By Message');
  }

    clickedByEmail(){
        alert('By Email');
    }

    render() {

        var hideStatusBar = Platform.OS === 'ios' ? false : true;

    return (
      <View style={styles.container}>
          <StatusBar hidden={hideStatusBar} />
          <View style={styles.section}>
              <Text style={styles.title}>
                  default styles:
              </Text>
              <TouchableOpacity onPress={()=>this.showActionSheet(0)}>
                  <Text style={styles.welcome}>
                      1. 3 selection without title
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(1)}>
                  <Text style={styles.welcome}>
                      2. 3 selection with title(one row)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(2)}>
                  <Text style={styles.welcome}>
                      3. 3 selection with title(two rows, testAlign is left)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(3)}>
                  <Text style={styles.welcome}>
                      4. 3 selection with title(two rows, testAlign is center)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(4)}>
                  <Text style={styles.welcome}>
                      5. 3 selection with title and without cancel
                  </Text>
              </TouchableOpacity>
          </View>


          <View style={styles.section}>
              <Text style={styles.title}>
                  iOS styles:
              </Text>
              <TouchableOpacity onPress={()=>this.showActionSheet(5)}>
                  <Text style={styles.welcome}>
                      1. 3 selection without title
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(6)}>
                  <Text style={styles.welcome}>
                      2. 3 selection with title(one row)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(7)}>
                  <Text style={styles.welcome}>
                      3. 3 selection with title(two rows, testAlign is left)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(8)}>
                  <Text style={styles.welcome}>
                      4. 3 selection with title(two rows, testAlign is center)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(9)}>
                  <Text style={styles.welcome}>
                      5. 3 selection with title and without cancel
                  </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.section}>
              <Text style={styles.title}>
                  Custom styles:
              </Text>
              <TouchableOpacity onPress={()=>this.showActionSheet(10)}>
                  <Text style={styles.welcome}>
                      1. custom title (fontSize,color,height)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(11)}>
                  <Text style={styles.welcome}>
                      2. custom items (fontSize,color,height)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(12)}>
                  <Text style={styles.welcome}>
                      3. custom cancel (fontSize,color,height)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(13)}>
                  <Text style={styles.welcome}>
                      4. custom all fontWeight(bold)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(14)}>
                  <Text style={styles.welcome}>
                      5. custom title fontWeight(bold)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(15)}>
                  <Text style={styles.welcome}>
                      6. custom item fontWeight(bold)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(16)}>
                  <Text style={styles.welcome}>
                      7. custom cancel fontWeight(normal)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(17)}>
                  <Text style={styles.welcome}>
                      8. custom all background color(sky blue)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(18)}>
                  <Text style={styles.welcome}>
                      9. custom title background color(sky blue)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(19)}>
                  <Text style={styles.welcome}>
                      10. custom item background color(sky blue)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(20)}>
                  <Text style={styles.welcome}>
                      11. custom cancel background color(sky blue)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(21)}>
                  <Text style={styles.welcome}>
                      12. custom item vertical space(10)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(22)}>
                  <Text style={styles.welcome}>
                      13. custom cancel vertical space(10)
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.showActionSheet(23)}>
                  <Text style={styles.welcome}>
                      14. custom bottom vertical space(10)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(24)}>
                  <Text style={styles.welcome}>
                      15. custom side space(10)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(25)}>
                  <Text style={styles.welcome}>
                      16. custom item space color(orange)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(26)}>
                  <Text style={styles.welcome}>
                      17. custom cancel space color(orange)
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.showActionSheet(27)}>
                  <Text style={styles.welcome}>
                      18. custom border radius(8)
                  </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={()=>this.showActionSheet(28)}>
                  <Text style={styles.welcome}>
                      19. custom mask opacity(0.9)
                  </Text>
              </TouchableOpacity>



          </View>

          <ActionSheet
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage]}
              ref={(actionsheet0)=>{this.actionsheet0 = actionsheet0}}
          />
          <ActionSheet
            mainTitle="There are three ways to contact."
            itemTitles = {["By phone","By message","By email"]}
            selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
            ref={(actionsheet1)=>{this.actionsheet1 = actionsheet1}}
          />
          <ActionSheet
              mainTitle="There are three ways to contact. Please choose one to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              ref={(actionsheet2)=>{this.actionsheet2 = actionsheet2}}
          />
          <ActionSheet
              mainTitle="There are three ways to contact. Please choose one to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              mainTitleTextAlign = 'center'
              ref={(actionsheet3)=>{this.actionsheet3 = actionsheet3}}
          />
          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              hideCancel = {true}
              ref={(actionsheet4)=>{this.actionsheet4 = actionsheet4}}
          />

          {/*iOS style*/}
          <ActionSheet
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              ref={(actionsheet5)=>{this.actionsheet5 = actionsheet5}}
              contentBackgroundColor = '#EFF0F1'
              cancelVerticalSpace = {10}
              bottomSpace = {10}
              borderRadius = {5}
              sideSpace = {6}
              itemTitleColor = '#006FFF'
              cancelTitleColor = '#006FFF'
          />
          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              ref={(actionsheet6)=>{this.actionsheet6 = actionsheet6}}
              contentBackgroundColor = '#EFF0F1'
              cancelVerticalSpace = {10}
              bottomSpace = {10}
              borderRadius = {5}
              sideSpace = {6}
              itemTitleColor = '#006FFF'
              cancelTitleColor = '#006FFF'
          />
          <ActionSheet
              mainTitle="There are three ways to contact. Please choose one to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              ref={(actionsheet7)=>{this.actionsheet7 = actionsheet7}}
              contentBackgroundColor = '#EFF0F1'
              cancelVerticalSpace = {10}
              bottomSpace = {10}
              borderRadius = {5}
              sideSpace = {6}
              itemTitleColor = '#006FFF'
              cancelTitleColor = '#006FFF'
          />
          <ActionSheet
              mainTitle="There are three ways to contact. Please choose one to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              mainTitleTextAlign = 'center'
              ref={(actionsheet8)=>{this.actionsheet8 = actionsheet8}}
              contentBackgroundColor = '#EFF0F1'
              bottomSpace = {10}
              cancelVerticalSpace = {10}
              borderRadius = {5}
              sideSpace = {6}
              itemTitleColor = '#006FFF'
              cancelTitleColor = '#006FFF'
          />
          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              hideCancel = {true}
              ref={(actionsheet9)=>{this.actionsheet9 = actionsheet9}}
              contentBackgroundColor = '#EFF0F1'
              borderRadius = {5}
              sideSpace = {6}
              itemTitleColor = '#006FFF'
              cancelTitleColor = '#006FFF'
          />

          {/*Custom Style*/}
          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              mainTitleHeight = {60}
              mainTitleFont = {18}
              mainTitleColor = 'blue'
              ref={(actionsheet10)=>{this.actionsheet10 = actionsheet10}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              itemHeight = {60}
              itemTitleFont = {18}
              itemTitleColor = 'blue'
              ref={(actionsheet11)=>{this.actionsheet11 = actionsheet11}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              cancelHeight = {80}
              cancelTitleFont = {18}
              cancelTitleColor = 'blue'
              ref={(actionsheet12)=>{this.actionsheet12 = actionsheet12}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              fontWeight = 'bold'
              ref={(actionsheet13)=>{this.actionsheet13 = actionsheet13}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              titleFontWeight = 'bold'
              ref={(actionsheet14)=>{this.actionsheet14 = actionsheet14}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              itemFontWeight = 'bold'
              ref={(actionsheet15)=>{this.actionsheet15 = actionsheet15}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              cancelFontWeight = 'normal'
              ref={(actionsheet16)=>{this.actionsheet16 = actionsheet16}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              contentBackgroundColor = '#00C5FF'
              ref={(actionsheet17)=>{this.actionsheet17 = actionsheet17}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              titleBackgroundColor = '#00C5FF'
              ref={(actionsheet18)=>{this.actionsheet18 = actionsheet18}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              itemBackgroundColor = '#00C5FF'
              ref={(actionsheet19)=>{this.actionsheet19 = actionsheet19}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              cancelBackgroundColor = '#00C5FF'
              ref={(actionsheet20)=>{this.actionsheet20 = actionsheet20}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              itemVerticalSpace = {10}
              ref={(actionsheet21)=>{this.actionsheet21 = actionsheet21}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              cancelVerticalSpace = {10}
              ref={(actionsheet22)=>{this.actionsheet22 = actionsheet22}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              bottomSpace = {10}
              ref={(actionsheet23)=>{this.actionsheet23 = actionsheet23}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              sideSpace = {10}
              ref={(actionsheet24)=>{this.actionsheet24 = actionsheet24}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              itemSpaceColor = 'orange'
              ref={(actionsheet25)=>{this.actionsheet25 = actionsheet25}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              cancelSpaceColor = 'orange'
              ref={(actionsheet26)=>{this.actionsheet26 = actionsheet26}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              borderRadius = {8}
              ref={(actionsheet27)=>{this.actionsheet27 = actionsheet27}}
          />

          <ActionSheet
              mainTitle="There are three ways to contact."
              itemTitles = {["By phone","By message","By email"]}
              selectionCallbacks = {[this.clickedByPhone,this.clickedByMessage,this.clickedByEmail]}
              maskOpacity = {0.9}
              ref={(actionsheet28)=>{this.actionsheet28 = actionsheet28}}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },

    section:{
        marginTop:Platform.OS === 'ios' ? 24 : 20,
        marginLeft:20,
    },

  title: {
      marginBottom:Platform.OS === 'ios' ? 5 : 2,
      fontWeight:'bold',
      fontSize:Platform.OS === 'ios' ? 15 : 14,

  },

    welcome:{
        fontSize:12
    }
});
