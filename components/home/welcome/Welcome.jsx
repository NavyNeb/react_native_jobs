import React, { useState } from 'react'
import { 
  View, 
  Text,
  FlatList,
  TextInput, 
  TouchableOpacity,
  Image
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = [
  "Full-Time", "Part-Time", "Contractors"
]

const Welcome = () => {

  const [ActiveJobType, setActiveJobType] = useState("Full-Time")
  const router = useRouter()
 
  return (
    <View>
      <View style = { styles.container } >
        <Text style = { styles.userName } >Hello Navy Dev </Text>
        <Text style = { styles.welcomeMessage } > Find your dream job </Text>
      </View>

      <View style = { styles.searchContainer } >
        <View style = { styles.searchWrapper } >
            <TextInput 
              style = {styles.searchInput}
              value=''
              onChange={()=> {}}
              placeholder='What are you looking for ?'
            />
        </View>

        <TouchableOpacity style = { styles.searchBtn } onPress = { ()=> {} } >
          <Image 
            style = { styles.searchBtnImage }
            resizeMode = 'contain' 
            source={icons.search} />
        </TouchableOpacity>
      </View>

      <View style = { styles.tabsContainer } >
        <FlatList
          data = {jobTypes}
          keyExtractor={ item => item }
          contentContainerStyle = {{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item })=> (
            <TouchableOpacity 
              onPress={ ()=> {
                setActiveJobType(item)
                // router.push(`/search/${item}`)
                router.push(`/job-details/${1}`)
              } }
              style = { styles.tab(ActiveJobType, item) }
            >
              <Text style = { styles.tabText(ActiveJobType, item) } >{item}</Text>
            </TouchableOpacity>
          )}
        /> 
      </View>
    </View>
  )
}

export default Welcome