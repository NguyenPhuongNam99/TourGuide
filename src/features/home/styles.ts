import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
    },
    headerLeft: { width: '90%', height: '100%' },
    headerRight: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
    },
    bold: {
        fontWeight: 'bold',
    },
    containerSpecial: { width: '100%', marginTop: 15, paddingLeft: 10 },
    blockSpecial: {
        width: 200,
        height: 130,
        backgroundColor: 'green',
        borderRadius: 9,
        marginRight: 10,
    },
    listContainer: { width: '100%', height: '100%', marginTop: 10, paddingHorizontal: 9 },
    blockList: { width: '100%', height: 100, flexDirection: 'row', backgroundColor: 'white', borderRadius: 9, paddingHorizontal: 6 , marginTop: 10},
    listLeft: { width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    listRight: { width: '70%', height: '100%', flexDirection: 'column', justifyContent:'space-evenly', paddingLeft: 15 },
    imagelistleft: { width: '100%', height: '90%', borderRadius: 9 },
    fontSize: {
        fontSize: 12
    },
    title: {
        fontWeight: 'bold',
    }
});