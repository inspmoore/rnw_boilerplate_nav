import { StackActions } from '@react-navigation/native'

const pop = ({ navigation, n }) => {
  navigation.dispatch(StackActions.pop({ n }))
}

export default pop
