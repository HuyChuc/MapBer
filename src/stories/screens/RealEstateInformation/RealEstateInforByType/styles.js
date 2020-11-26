import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    flatlistContainer: {
        flex: 1,
    },
    itemContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContent: {
        width: '30%',
    },
    rightContent: {
        width: '65%',
    },
    imgContent: {
        width: '100%',
        height: 50,
        alignSelf: 'center'
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
    }
})

export default styles;