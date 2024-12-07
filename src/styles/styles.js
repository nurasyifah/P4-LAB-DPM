import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc0cb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center", 
    paddingHorizontal: 10,
    fontFamily: "High Tower Text",
    textDecorationLine: "underline",
  },
  timsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between", 
    width: "90%", 
    marginVertical: 15,
  },
  timContainer: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",    
    backgroundColor: "#ffe4b5", 
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 10, 
  },
  timName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#333',
    textAlign: "center", 
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
    color: '#cd5c5c',
    textAlign: "center", 
  },
  buttonContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "90%", 
    marginVertical: 10, 
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5, 
  },
  addButton: {
    backgroundColor: "#d2691e",
  },
  subtractButton: {
    backgroundColor: "#00ced1", 
  },
  resetButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#778899", 
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;