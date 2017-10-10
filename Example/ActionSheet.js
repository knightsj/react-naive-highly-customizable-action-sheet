
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Animated,
    Easing,
    Dimensions,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    BackHandler
} from 'react-native';


const {width, height} = Dimensions.get('window');
const [left, top] = [0, 0];

const itemHeight = 44;
const titleHeight = 46;

const itemSeperateLineHeight = 1;
const cancelSeperateLineHeight = 3;



export default class ActionSheet extends Component {

    static propTypes = {

        //selection items title
        itemTitles:PropTypes.array,

        //selection items callback
        selectionCallbacks:PropTypes.array,

        //title
        mainTitle:PropTypes.string,
        mainTitleFont:PropTypes.number,
        mainTitleColor:PropTypes.string,
        mainTitleHeight:PropTypes.number,
        mainTitleTextAlign:PropTypes.oneOf(['center', 'left']),
        mainTitlePadding:PropTypes.number,

        //items
        itemTitleFont:PropTypes.number,
        itemTitleColor:PropTypes.string,
        itemHeight:PropTypes.number,

        //cancel
        cancelTitle:PropTypes.string,
        cancelTitleFont:PropTypes.number,
        cancelTitleColor:PropTypes.string,
        cancelHeight:PropTypes.number,
        hideCancel:PropTypes.bool,

        //font weight
        fontWeight:PropTypes.string,
        titleFontWeight:PropTypes.string,
        itemFontWeight:PropTypes.string,
        cancelFontWeight:PropTypes.string,

        //background color
        contentBackgroundColor:PropTypes.string,
        titleBackgroundColor:PropTypes.string,
        itemBackgroundColor:PropTypes.string,
        cancelBackgroundColor:PropTypes.string,

        //space color
        itemSpaceColor:PropTypes.string,
        cancelSpaceColor:PropTypes.string,

        //space distance
        itemVerticalSpace:PropTypes.number,
        cancelVerticalSpace:PropTypes.number,
        bottomSpace:PropTypes.number,
        sideSpace:PropTypes.number,

        //radius
        borderRadius:PropTypes.number,

        //opacity
        maskOpacity:PropTypes.number,


    }

    constructor(props) {

        super(props);
        this.state = {

            mainTitleFont:this.props.mainTitleFont?this.props.mainTitleFont:13,
            mainTitleColor:this.props.mainTitleColor?this.props.mainTitleColor:'gray',
            mainTitleHeight:this.props.mainTitleHeight?this.props.mainTitleHeight:titleHeight,
            mainTitleTextAlign:this.props.mainTitleTextAlign?this.props.mainTitleTextAlign:'left',
            mainTitlePadding:this.props.mainTitlePadding?this.props.mainTitlePadding:10,

            itemTitles:this.props.itemTitles?this.props.itemTitles:[],
            itemTitleFont:this.props.itemTitleFont?this.props.itemTitleFont:14,
            itemTitleColor:this.props.itemTitleColor?this.props.itemTitleColor:'black',
            itemHeight:this.props.itemHeight?this.props.itemHeight:itemHeight,

            cancelTitle:this.props.cancelTitle?this.props.cancelTitle:'Cancel',
            cancelTitleColor:this.props.cancelTitleColor?this.props.cancelTitleColor:'red',
            cancelTitleFont:this.props.cancelTitleFont?this.props.cancelTitleFont:15,
            cancelHeight:this.props.cancelHeight?this.props.cancelHeight:itemHeight,

            sideSpace:this.props.sideSpace?this.props.sideSpace:0,
            itemVerticalSpace:this.props.itemVerticalSpace?this.props.itemVerticalSpace:itemSeperateLineHeight,
            cancelVerticalSpace:this.props.cancelVerticalSpace?this.props.cancelVerticalSpace:cancelSeperateLineHeight,
            bottomSpace:this.props.bottomSpace?this.props.bottomSpace:0,

            borderRadius:this.props.borderRadius?this.props.borderRadius:0,
            maskOpacity:this.props.maskOpacity?this.props.maskOpacity:0.5,

            selectionCallbacks:this.props.selectionCallbacks?this.props.selectionCallbacks:[],

            hide: true,
            offset: new Animated.Value(0),
            opacity: new Animated.Value(0),

        };

    }

    componentWillMount() {

        //Cancel for Android
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', ()=>{

                if(this.state.hide){
                    return false;
                }else {
                    this._dismiss();
                    return true;
                }

            });
        }

        //Calculate Items height
        if (!this.props.itemTitles){
            this.real_itemsPartHeight = 0;
        }else {
            this.real_itemsPartHeight = (this.state.itemHeight + this.state.itemVerticalSpace) * this.props.itemTitles.length;
        }

        //Calculate Title Height
        if (!this.props.mainTitle){
            this.real_titleHeight = 0
        }else {
            this.real_titleHeight = this.state.mainTitleHeight;
        }

        //Calculate Cancel part height
        if (this.props.hideCancel){
            this.real_cancelPartHeight = 0;
        }else {
            this.real_cancelPartHeight = this.state.cancelVerticalSpace + this.state.cancelHeight;
        }

        // total content height
        this.totalHeight = this.real_titleHeight +  this.real_itemsPartHeight + this.real_cancelPartHeight + this.state.bottomSpace;


        //verticalSpaceColor
        if(this.props.itemSpaceColor) {
            this.itemSpaceColor = this.props.itemSpaceColor;
        }else {
            this.itemSpaceColor = '#e3e3e3';
        }

        // cancel space color
        if(this.props.cancelSpaceColor){
            this.cancelSpaceColor =  this.props.cancelSpaceColor;
        }else if(this.props.borderRadius){
            this.cancelSpaceColor = 'transparent';
        }else {
            this.cancelSpaceColor = '#e3e3e3';
        }

        if(this.state.sideSpace > 0){
            this.contentWidth = width - 2*this.state.sideSpace;
        }else {
            this.contentWidth = width;
        }

        //background color
        if (this.props.contentBackgroundColor){
            this.titleBackgroundColor = this.props.contentBackgroundColor;
            this.itemBackgroundColor = this.props.contentBackgroundColor;
            this.cancelBackgroundColor = this.props.contentBackgroundColor;
        }else {
            if (this.props.titleBackgroundColor){
                this.titleBackgroundColor = this.props.titleBackgroundColor;
            }else {
                this.titleBackgroundColor = 'white';
            }

            if (this.props.itemBackgroundColor){
                this.itemBackgroundColor = this.props.itemBackgroundColor;
            }else {
                this.itemBackgroundColor = 'white';
            }

            if (this.props.cancelBackgroundColor){
                this.cancelBackgroundColor = this.props.cancelBackgroundColor;
            }else {
                this.cancelBackgroundColor = 'white';
            }
        }

        //font weight
        if (this.props.fontWeight){
            this.titleFontWeight = this.props.fontWeight;
            this.itemFontWeight = this.props.fontWeight;
            this.cancelFontWeight = this.props.fontWeight;
        }else {
            if(this.props.titleFontWeight){
                this.titleFontWeight = this.props.titleFontWeight;
            }else {
                this.titleFontWeight = 'normal';
            }

            if(this.props.itemFontWeight){
                this.itemFontWeight = this.props.itemFontWeight;
            }else {
                this.itemFontWeight = 'normal';
            }

            if(this.props.cancelFontWeight){
                this.cancelFontWeight = this.props.cancelFontWeight;
            }else {
                this.cancelFontWeight = 'bold';
            }
        }

    }

 


    componentWillUnmount() {
        this.chooseTimer && clearTimeout(this.chooseTimer);
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', ()=>{});
        }
    }



    render() {

        if (this.state.hide) {

            return (<View/>)

        } else {
            return (
                <TouchableWithoutFeedback
                    onPress={()=>this._fade()}
                >
                <View style={[styles.container]}>
                    <Animated.View style={[styles.maskViewStyle,{opacity: this.state.maskOpacity}]}></Animated.View>
                    <Animated.View style={[{
                        width: width,
                        height: this.totalHeight,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }, {
                        transform: [{
                            translateY: this.state.offset.interpolate({
                                inputRange: [0, 1],
                                outputRange: [height, (height - this.totalHeight)]
                            }),
                        }]
                    }]}>
                        <View>
                            {this._renderTitleItem()}
                            {this._renderItemsPart()}
                            {this._renderCancelItem()}
                        </View>


                    </Animated.View>
                </View>
                </TouchableWithoutFeedback>
            );
        }
    }

    //render title part
    _renderTitleItem(){
        if(!this.props.mainTitle){
            return null;
        }else {
            return (
                <TouchableWithoutFeedback>
                    <View style={[styles.contentViewStyle,{backgroundColor:this.titleBackgroundColor,width:this.contentWidth,height:this.real_titleHeight,borderTopLeftRadius:this.state.borderRadius,borderTopRightRadius:this.state.borderRadius,padding:this.state.mainTitlePadding}]}>
                        <Text style={ {color: this.state.mainTitleColor, fontSize: this.state.mainTitleFont, fontWeight:this.titleFontWeight, textAlign: this.state.mainTitleTextAlign,}}>{this.props.mainTitle}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }

    //render selection items part
    _renderItemsPart(){

        var itemsArr = new Array();

        var topRadius = 0;
        var bottomRadius = 0;
        var showItemSeperateLine = true;

        for (var i = 0; i< this.state.itemTitles.length;i++) {

            if (!this.props.mainTitle && i === 0){
                topRadius = this.state.borderRadius;
                showItemSeperateLine = false;
            }else {
                topRadius = 0;
                showItemSeperateLine = true;
            }

            if ( i === this.state.itemTitles.length - 1){
                bottomRadius = this.state.borderRadius;
            }else {
                bottomRadius = 0;
            }


            let title = this.state.itemTitles[i];
            let itemView =
                <View key={i}>
                    {/* Seperate Line */}
                    {this._renderItemSeperateLine(showItemSeperateLine)}
                    {/* item for selection*/}
                    <TouchableOpacity onPress={this._didSelect.bind(this, i)}  activeOpacity = {0.9}>
                        <View style={[styles.contentViewStyle,{backgroundColor:this.itemBackgroundColor,width:this.contentWidth,height:this.state.itemHeight,borderTopLeftRadius:topRadius,borderTopRightRadius:topRadius,borderBottomLeftRadius:bottomRadius,borderBottomRightRadius:bottomRadius}]} key={i}>
                            <Text style={[styles.textStyle, {color: this.state.itemTitleColor, fontSize: this.state.itemTitleFont,fontWeight:this.itemFontWeight}]}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            itemsArr.push(itemView);
        }
        return itemsArr;
    }

    //render selection seperate line
    _renderItemSeperateLine(show){
        if (show){
            return ( <View style={{width:this.contentWidth,height: this.state.itemVerticalSpace, backgroundColor: this.itemSpaceColor}}/>);
        }else {
            return null;
        }
    }


    //render cancel part
    _renderCancelItem(){

        var showCancelSeperateLine = true;

        if( (!this.props.mainTitle) && (this.state.itemTitles.length === 0)){
            showCancelSeperateLine = false;
        }

        return (
          <View style={{width:this.contentWidth,height: this.real_cancelPartHeight}}>
              {/* Seperate Line */}
              {this._renderCancelSeperateLine(showCancelSeperateLine)}
              {/* Cancel Item */}
                <TouchableOpacity onPress={this._dismiss.bind(this)} activeOpacity = {0.9}>
                    <View style={[styles.contentViewStyle,{backgroundColor:this.cancelBackgroundColor,borderRadius:this.state.borderRadius,width:this.contentWidth,height:this.state.cancelHeight}]}>
                        <Text style={[styles.textStyle,{color:this.state.cancelTitleColor,fontSize:this.state.cancelTitleFont,fontWeight:this.cancelFontWeight}]}>{this.state.cancelTitle}</Text>
                    </View>
                </TouchableOpacity>
          </View>
        );
    }

    _renderCancelSeperateLine(show){
        if (show){
            return ( <View style={{width:this.contentWidth,height: this.state.cancelVerticalSpace, backgroundColor: this.cancelSpaceColor}}/>);
        }else {
            return null;
        }
    }


    //animation of showing
    _appear() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 200,
                    toValue: 0.7,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 200,
                    toValue: 1,
                }
            )
        ]).start();
    }

    //animation of fading
    _fade() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 200,
                    toValue: 0,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 200,
                    toValue: 0,
                }
            )
        ]).start((finished) => this.setState({hide: true}));
    }

    //dismiss ActionSheet
    _dismiss() {
        if (!this.state.hide) {
            this._fade();
        }
    }

    //select item
    _didSelect(i) {
        if (!this.state.hide) {
            this._fade();
            let callback = this.state.selectionCallbacks[i];
            this.chooseTimer = setTimeout(()=>{
                if(callback){
                    {callback()}
                }
            }, 200);
        }
    }

    /*
     show ActionSheet
     */
    show() {
        if (this.state.hide) {
            this.setState({hide: false}, this._appear);
        }
    }
}

const styles = StyleSheet.create({

    //style of whole container
    container: {
        position: "absolute",
        width: width,
        height: height,
        top: top,
    },


    //style of mask
    maskViewStyle: {
        justifyContent: "center",
        backgroundColor: "#000000",
        position: "absolute",
        width: width,
        height: height,
        left: left,
        top: top,
    },

    //style of text
    textStyle:{
        textAlign: "center",
        justifyContent: 'center',
    },

    //style of content (title & item & cancel)
    contentViewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    },


});