import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        padding: 10,
    },
    sectionContainer: {
        width: '100%',
        justifyContent: "center"
    },
    dataValueContainer: {
        alignItems: 'flex-end',
        marginTop: 5,
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14,
    },
    titleText: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold",
        paddingTop: 10
    },
    publishDate: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "#9ea2a8"
    },
    author: {
        paddingTop: 10,
        fontWeight: "bold"
    }
})

export default styles;