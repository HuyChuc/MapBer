import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#fff'
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
	map: {
	  flex: 1,
	},
	marker: {
		width: 30,
		height: 30,
	},
	markerWrap: {
		alignItems: "center",
		justifyContent: "center",
		width:50,
		height:50,
	},
	chipsScrollView: {
		position:'absolute', 
		top:Platform.OS === 'ios' ? 50 : 40, 
		paddingHorizontal:10
	},
	mapType:{
		position:'absolute', 
		top:Platform.OS === 'ios' ? 80 : 70, 
		right : 10, 
	},
	chipsItem: {
		flexDirection:"row",
		backgroundColor:'#fff', 
		borderRadius:20,
		padding:8,
		paddingHorizontal:20, 
		marginHorizontal:10,
		height:35,
		shadowColor: '#ccc',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 10,
	},
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },
      markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
      },
      marker: {
        width: 30,
        height: 30,
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3
      },
      textSign: {
          fontSize: 14,
          fontWeight: 'bold'
      }
});
export default styles;
