import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatlistContainer: {
        flex: 1,
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5, 
        paddingBottom: 5
    },
    leftContent: {
        width: '30%',
    },
    rightContent: {
        width: '65%',
    },
    imgContent: {
        marginLeft: 5,
        width: '100%',
        height: 120,
        alignSelf: 'center'
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14
    },
    valueText: {
        fontSize: 14
    },
    approveDate: {
        paddingTop: 2,
        marginTop: 2,
        color: "#9ea2a8"
    },
    title: {
        color: "#165fcc",
        fontWeight: "bold"
    }
})

export default styles;