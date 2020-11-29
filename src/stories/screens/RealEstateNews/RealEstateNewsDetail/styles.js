import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        padding: 10,
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
        alignItems: 'flex-end',
        marginTop: 5,
    },
    labelText: {
        fontWeight: '600',
        fontSize: 14,
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18,
        marginTop: 10,
        color:"#632421"
    },
    publishDate: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "#9ea2a8"
    },
    author: {
        paddingTop: 10,
        fontWeight: "bold"
    },
    dest: {
        justifyContent: "space-between"
    },
    title: {
        color: "#165fcc",
        fontWeight: "bold",
        fontSize: 18,
        width: '100%',
        margin: 5,
        padding: 5,
        backgroundColor: "#fff",
        shadowColor: "#e8eaed",
        shadowOpacity: 50,
        textAlign: 'center',
    }
})

export default styles;