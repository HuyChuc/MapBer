import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        paddingLeft: 10,
        paddingRight: 20,
        flex: 1,
        backgroundColor: "#c5c9c9"
    },
    sectionContainer: {
        width: '100%',
        margin: 5,
        padding: 5,
        backgroundColor: "#f0f5f5",
        shadowColor: "#e8eaed",
        shadowOpacity: 50,
    },
    dataValueContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14,
    },
    labelValue: {
        flex: 1,
        justifyContent: "space-between"
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18,
        marginTop: 10,
        color:"#632421"
    },
    title: {
        color: "#165fcc",
        fontWeight: "bold",
        fontSize: 18,
        width: '100%',
        margin: 5,
        padding: 5,
        backgroundColor: "#aedfeb",
        shadowColor: "#e8eaed",
        shadowOpacity: 50,
        textAlign: 'center',
    }
})

export default styles;