import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatlistContainer: {
        flex: 1,
    },
    container: {
        width: '100%',
        padding: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        width: '100%',
    },
    imgContent: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
        margin: 10,

    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14
    },
    valueText: {
        fontSize: 14
    },
    title: {
        fontWeight: "bold"
    },
    publish_date: {
        fontStyle: "italic",    
        textDecorationStyle: "solid",
        color: "#9ea2a8"
    }
})

export default styles;