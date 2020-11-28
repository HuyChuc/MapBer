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
        height: 150,
        alignSelf: 'center'
    },
    infoContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14
    },
    valueText: {
        fontSize: 14
    },
    dest: {
        paddingLeft: 10
    }
})

export default styles;